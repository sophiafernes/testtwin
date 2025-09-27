import '../styles/globals.css'
import '../components/Plasma.css'
import '../components/Stacker.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        @import url('https://cdn.jsdelivr.net/npm/geist@1.2.1/dist/fonts/geist-sans/style.css');
        
        .geist-font, .geist-font * {
          font-family: 'Geist Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )
}