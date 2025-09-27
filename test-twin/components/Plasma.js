import { useEffect, useRef, useCallback } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';

const hexToRgb = hex => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) return [1, 0.5, 0.2];
  return [parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255];
};

const vertex = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

// KEY CHANGE: Reduced shader complexity significantly
const fragment = `#version 300 es
precision mediump float;
uniform vec2 iResolution;
uniform float iTime;
uniform vec3 uCustomColor;
uniform float uUseCustomColor;
uniform float uSpeed;
uniform float uDirection;
uniform float uScale;
uniform float uOpacity;
uniform vec2 uMouse;
uniform float uMouseInteractive;
out vec4 fragColor;

void mainImage(out vec4 o, vec2 C) {
  vec2 center = iResolution.xy * 0.5;
  C = (C - center) / uScale + center;
  
  // Simplified mouse interaction
  vec2 mouseOffset = (uMouse - center) * 0.0001;
  C += mouseOffset * uMouseInteractive;
  
  float i, d, z, T = iTime * uSpeed * uDirection;
  vec3 O, p, S;

  // CRITICAL: Reduced iterations from 60 to 35
  for (vec2 r = iResolution.xy, Q; ++i < 35.; O += o.w/d*o.xyz) {
    p = z*normalize(vec3(C-.5*r,r.y)); 
    p.z -= 4.; 
    S = p;
    d = p.y-T;
    
    p.x += .4*(1.+p.y)*sin(d + p.x*0.1)*cos(.34*d + p.x*0.05); 
    Q = p.xz *= mat2(cos(p.y+vec4(0,11,33,0)-T)); 
    z+= d = abs(sqrt(dot(Q,Q)) - .25*(5.+S.y))/3.+8e-4; 
    o = 1.+sin(S.y+p.z*.5+S.z-length(S-p)+vec4(2,1,0,8));
  }
  
  o.xyz = tanh(O/1e4);
}

void main() {
  vec4 o = vec4(0.0);
  mainImage(o, gl_FragCoord.xy);
  
  // Simplified sanitization
  vec3 rgb = clamp(o.rgb, 0.0, 1.0);
  
  float intensity = dot(rgb, vec3(0.299, 0.587, 0.114));
  vec3 customColor = intensity * uCustomColor;
  vec3 finalColor = mix(rgb, customColor, step(0.5, uUseCustomColor));
  
  float alpha = length(rgb) * uOpacity;
  fragColor = vec4(finalColor, alpha);
}`;

export const Plasma = ({
  color = '#ffffff',
  speed = 1,
  direction = 'forward',
  scale = 1,
  opacity = 1,
  mouseInteractive = true
}) => {
  const containerRef = useRef(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const rendererRef = useRef(null);
  const rafRef = useRef(null);
  const resizeObserverRef = useRef(null);

  const cleanup = useCallback(() => {
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    if (resizeObserverRef.current) {
      resizeObserverRef.current.disconnect();
      resizeObserverRef.current = null;
    }

    if (rendererRef.current && rendererRef.current.gl) {
      const gl = rendererRef.current.gl;
      const canvas = gl.canvas;
      
      const loseContext = gl.getExtension('WEBGL_lose_context');
      if (loseContext) {
        loseContext.loseContext();
      }
      
      if (canvas && canvas.parentNode && containerRef.current) {
        try {
          containerRef.current.removeChild(canvas);
        } catch (e) {
          console.warn('Canvas already removed from container');
        }
      }
      
      rendererRef.current = null;
    }

    if (mouseInteractive && containerRef.current) {
      containerRef.current.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mouseInteractive]);

  const handleMouseMove = useCallback((e) => {
    if (!mouseInteractive || !containerRef.current || !rendererRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    mousePos.current.x = e.clientX - rect.left;
    mousePos.current.y = e.clientY - rect.top;
    
    if (rendererRef.current && rendererRef.current.program) {
      const mouseUniform = rendererRef.current.program.uniforms.uMouse.value;
      mouseUniform[0] = mousePos.current.x;
      mouseUniform[1] = mousePos.current.y;
    }
  }, [mouseInteractive]);

  useEffect(() => {
    if (!containerRef.current) return;

    cleanup();

    const useCustomColor = color ? 1.0 : 0.0;
    const customColorRgb = color ? hexToRgb(color) : [1, 1, 1];
    const directionMultiplier = direction === 'reverse' ? -1.0 : 1.0;

    try {
      // CRITICAL: Aurora's renderer settings
      const renderer = new Renderer({
        webgl: 2,
        alpha: true,
        premultipliedAlpha: true,
        antialias: false, // Aurora uses true, but false is faster
        dpr: 1 // Fixed DPR like Aurora, no auto-scaling
      });

      const gl = renderer.gl;
      if (!gl) {
        console.error('Failed to get WebGL context');
        return;
      }

      // Aurora's blend setup
      gl.clearColor(0, 0, 0, 0);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

      const canvas = gl.canvas;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.backgroundColor = 'transparent';
      
      while (containerRef.current.firstChild) {
        containerRef.current.removeChild(containerRef.current.firstChild);
      }
      
      containerRef.current.appendChild(canvas);

      const geometry = new Triangle(gl);
      // Aurora removes UV like this
      if (geometry.attributes.uv) {
        delete geometry.attributes.uv;
      }

      const program = new Program(gl, {
        vertex: vertex,
        fragment: fragment,
        uniforms: {
          iTime: { value: 0 },
          iResolution: { value: [1, 1] }, // Will be set in resize
          uCustomColor: { value: customColorRgb },
          uUseCustomColor: { value: useCustomColor },
          uSpeed: { value: speed * 0.4 },
          uDirection: { value: directionMultiplier },
          uScale: { value: scale },
          uOpacity: { value: opacity },
          uMouse: { value: [0, 0] },
          uMouseInteractive: { value: mouseInteractive ? 1.0 : 0.0 }
        }
      });

      const mesh = new Mesh(gl, { geometry, program });

      rendererRef.current = { renderer, gl, program, mesh };

      if (mouseInteractive && containerRef.current) {
        containerRef.current.addEventListener('mousemove', handleMouseMove);
      }

      // Aurora's resize pattern
      const resize = () => {
        if (!containerRef.current || !rendererRef.current) return;
        const width = containerRef.current.offsetWidth;
        const height = containerRef.current.offsetHeight;
        renderer.setSize(width, height);
        program.uniforms.iResolution.value = [width, height];
      };

      window.addEventListener('resize', resize);
      resize();

      // Aurora's animation loop pattern
      const t0 = performance.now();
      let animateId = 0;
      const update = (t) => {
        animateId = requestAnimationFrame(update);
        
        let timeValue = (t - t0) * 0.001;

        if (direction === 'pingpong') {
          const cycle = Math.sin(timeValue * 0.5) * directionMultiplier;
          program.uniforms.uDirection.value = cycle;
        }

        program.uniforms.iTime.value = timeValue;
        renderer.render({ scene: mesh });
      };
      
      animateId = requestAnimationFrame(update);
      rafRef.current = animateId;

      // Cleanup function like Aurora
      return () => {
        cancelAnimationFrame(animateId);
        window.removeEventListener('resize', resize);
        if (mouseInteractive && containerRef.current) {
          containerRef.current.removeEventListener('mousemove', handleMouseMove);
        }
        if (containerRef.current && gl.canvas.parentNode === containerRef.current) {
          containerRef.current.removeChild(gl.canvas);
        }
        gl.getExtension('WEBGL_lose_context')?.loseContext();
      };

    } catch (error) {
      console.error('Error initializing Plasma:', error);
    }

  }, [color, speed, direction, scale, opacity, mouseInteractive, cleanup, handleMouseMove]);

  return <div ref={containerRef} className="plasma-container" />;
};

export default Plasma;