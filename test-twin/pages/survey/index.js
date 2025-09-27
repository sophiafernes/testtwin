import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Mock Stepper components (since we can't import the actual files)
const Stepper = ({ 
  children, 
  initialStep = 1, 
  onStepChange = () => {}, 
  onFinalStepCompleted = () => {},
  backButtonText = 'Previous',
  nextButtonText = 'Next'
}) => {
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [direction, setDirection] = useState(0);
  const steps = React.Children.toArray(children);
  const totalSteps = steps.length;
  const isLastStep = currentStep === totalSteps;
  const isCompleted = currentStep > totalSteps;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
      onStepChange(currentStep + 1);
    } else {
      onFinalStepCompleted();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      onStepChange(currentStep - 1);
    }
  };

  if (isCompleted) {
    return (
      <div className="text-center p-8">
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-4" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'}}>
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-white mb-2">Survey Completed!</h2>
          <p className="text-gray-300">Thank you for completing the survey. We'll match you with a study partner within a week!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((_, index) => {
          const stepNum = index + 1;
          const isActive = stepNum === currentStep;
          const isComplete = stepNum < currentStep;
          
          return (
            <React.Fragment key={stepNum}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300 ${
                isComplete 
                  ? 'text-white' 
                  : isActive 
                    ? 'text-white' 
                    : 'bg-gray-700 text-gray-400'
              }`} style={isComplete || isActive ? {background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'} : {}}>
                {isComplete ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : stepNum}
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 transition-all duration-300 ${
                  isComplete ? 'opacity-100' : 'bg-gray-700 opacity-30'
                }`} style={isComplete ? {background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)'} : {}} />
              )}
            </React.Fragment>
          );
        })}
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {steps[currentStep - 1]}
      </div>

      {/* Navigation */}
      <div className={`flex ${currentStep === 1 ? 'justify-end' : 'justify-between'}`}>
        {currentStep > 1 && (
          <button
            onClick={handleBack}
            className="px-6 py-3 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
          >
            {backButtonText}
          </button>
        )}
        <button
          onClick={handleNext}
          className="px-6 py-3 rounded-full text-white font-medium transition-all duration-200 hover:shadow-lg transform hover:scale-105"
          style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', color: '#000000'}}
        >
          {isLastStep ? 'Complete' : nextButtonText}
        </button>
      </div>
    </div>
  );
};

const Step = ({ children }) => {
  return <div>{children}</div>;
};

const TestTwinSurvey = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    ageGroup: '',
    testType: '',
    testTiming: '',
    resources: [],
    idealScore: '',
    firstAttempt: '',
    contactMethod: [],
    checkinFrequency: '',
    studyStyle: [],
    partnerQualities: [],
    studyGoals: [],
    difficultAreas: [],
    studyFocus: [],
    additionalInfo: ''
  });

  const [testType, setTestType] = useState('');

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleMultiSelect = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].includes(value) 
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const CheckboxGroup = ({ options, field, title }) => (
    <div>
      <label className="block text-white font-medium mb-3">{title}</label>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData[field].includes(option)}
              onChange={() => handleMultiSelect(field, option)}
              className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <span className="text-gray-300">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const RadioGroup = ({ options, field, title, value }) => (
    <div>
      <label className="block text-white font-medium mb-3">{title}</label>
      <div className="space-y-2">
        {options.map(option => (
          <label key={option} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              name={field}
              value={option}
              checked={value === option}
              onChange={(e) => handleInputChange(field, e.target.value)}
              className="w-4 h-4 border-gray-600 bg-gray-700 text-purple-500 focus:ring-purple-500"
            />
            <span className="text-gray-300">{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  const mcatResources = [
    'AAMC materials',
    'KAPLAN prep',
    'Princeton prep',
    'ExamKrackers',
    'UWorld',
    'ANKI',
    'Khan Academy',
    'Private tutor',
    'Other',
    'Have not began studying'
  ];

  const lsatResources = [
    'KAPLAN prep',
    'Princeton prep',
    'LSAT Demon',
    '7Sage',
    'Books (ex. LSAT trainer, the Loophole, etc)',
    'Practice tests',
    'Private tutor',
    'Other',
    'Have not began studying'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-indigo-950 to-blue-950 geist-font">

      {/* Navbar */}
      <nav className="w-full backdrop-blur-md border-b border-white/10 sticky top-0 z-50" style={{
        background: 'rgba(255, 255, 255, 0.05)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: '1px solid rgba(255, 255, 255, 0.18)'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden relative">
                <Image 
                  src="/logo.png" 
                  alt="TestTwin Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-medium text-transparent" style={{fontWeight: '500', backgroundImage: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
                TestTwin
              </span>
            </Link>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl text-white mb-6">
            Find A Study Partner in{' '}
            <span className="text-transparent" style={{backgroundImage: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100%)', backgroundClip: 'text', WebkitBackgroundClip: 'text'}}>
              2 Minutes
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Answer a few questions to get paired with your ideal study partner. This takes about 2 minutes.
          </p>
        </div>

        <div className="bg-gray-800/60 backdrop-blur-sm rounded-2xl p-8" style={{border: '2px solid #c8a8e9'}}>
          <Stepper
            initialStep={1}
            onStepChange={(step) => console.log('Step:', step)}
            onFinalStepCompleted={() => console.log('Survey completed!')}
            backButtonText="Previous"
            nextButtonText="Continue"
          >
            {/* Step 1: Personal Info */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Personal Information</h2>
                
                <div>
                  <label className="block text-white font-medium mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Your full name"
                  />
                </div>

                <RadioGroup
                  title="Age Group (Optional)"
                  field="ageGroup"
                  value={formData.ageGroup}
                  options={['16-19', '20-24', '25-29', '30-34', '35-40', '40+']}
                />
              </div>
            </Step>

            {/* Step 2: Test Selection */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Test Information</h2>
                
                <RadioGroup
                  title="Which test are you taking? *"
                  field="testType"
                  value={formData.testType}
                  options={['MCAT', 'LSAT']}
                />

                <RadioGroup
                  title="How soon do you plan to take your test? *"
                  field="testTiming"
                  value={formData.testTiming}
                  options={[
                    'Within 1 month',
                    'Within 2 months', 
                    'Within 3 months',
                    'Within 4 months',
                    'Within 5 months',
                    'Within 6 months',
                    'Within 7 months',
                    '8 months or more',
                    'Undecided'
                  ]}
                />

                <RadioGroup
                  title="Is this your first attempt? *"
                  field="firstAttempt"
                  value={formData.firstAttempt}
                  options={['Yes', 'No']}
                />
              </div>
            </Step>

            {/* Step 3: Study Resources & Goals */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Study Resources & Goals</h2>
                
                <CheckboxGroup
                  title="What resources are you using to study? (Check all that apply)"
                  field="resources"
                  options={formData.testType === 'MCAT' ? mcatResources : lsatResources}
                />

                {formData.testType === 'MCAT' && (
                  <RadioGroup
                    title="What is your ideal score? (472-528)"
                    field="idealScore"
                    value={formData.idealScore}
                    options={[
                      '493 (25th percentile)',
                      '501 (50th percentile)',
                      '509 (75th percentile)',
                      '515 (90th percentile)',
                      '517 (94th percentile)',
                      '518 (95th percentile)',
                      '519 (96th percentile)',
                      '520 (97th percentile)',
                      '521 (98th percentile)',
                      '522+ (99-100th percentile)'
                    ]}
                  />
                )}

                {formData.testType === 'LSAT' && (
                  <RadioGroup
                    title="What is your ideal score? (120-180)"
                    field="idealScore"
                    value={formData.idealScore}
                    options={[
                      '120-130',
                      '130-140',
                      '140-150',
                      '150-155',
                      '156-160',
                      '161-165',
                      '166-170',
                      '171-175',
                      '176-180'
                    ]}
                  />
                )}
              </div>
            </Step>

            {/* Step 4: Communication Preferences */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Communication Preferences</h2>
                
                <CheckboxGroup
                  title="What is your preferred method of contact? (Check all that apply)"
                  field="contactMethod"
                  options={[
                    'Texting via phone number',
                    'Email',
                    'Voice calls',
                    'Video calls',
                    'Texting via Social media'
                  ]}
                />

                <RadioGroup
                  title="How often do you want to check in with your partner(s)?"
                  field="checkinFrequency"
                  value={formData.checkinFrequency}
                  options={[
                    'Daily',
                    'Every other day',
                    'Twice a week',
                    'Weekly',
                    'Biweekly',
                    'Monthly'
                  ]}
                />
              </div>
            </Step>

            {/* Step 5: Study Style */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Study Style & Partnership Goals</h2>
                
                <CheckboxGroup
                  title="How would you describe your study style? (Check all that apply)"
                  field="studyStyle"
                  options={[
                    'Methodical - I plan my study schedule in advance and stick to it consistently.',
                    'Spontaneous - I study whenever I feel like it, without a strict schedule.',
                    'Detail-oriented - I focus on mastering every small aspect of the material.',
                    'Big-picture thinker - I prefer to grasp the overarching concepts and themes rather than diving into every detail.'
                  ]}
                />

                <CheckboxGroup
                  title="What qualities are you looking for in a study partner? (Check all that apply)"
                  field="partnerQualities"
                  options={[
                    'Reliability - I need someone who shows up consistently for study sessions.',
                    'Compatibility - I want someone whose study habits and preferences align with mine.',
                    'Collaboration - I value working together and bouncing ideas off each other.',
                    'Accountability - I need someone who helps keep me on track and motivated.',
                    'Expertise - I seek a study partner who is knowledgeable in areas where I need support.'
                  ]}
                />

                <CheckboxGroup
                  title="What are your goals for this collaboration? (Check all that apply)"
                  field="studyGoals"
                  options={[
                    'Regular check-ins',
                    'Online study sessions',
                    'Quizzing one another',
                    'Facilitating discussions about concepts'
                  ]}
                />
              </div>
            </Step>

            {/* Step 6: Test-Specific Areas & Final Info */}
            <Step>
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Study Focus & Additional Information</h2>
                
                {formData.testType === 'MCAT' && (
                  <>
                    <CheckboxGroup
                      title="What areas of the test do you find most difficult? (Select all that apply)"
                      field="difficultAreas"
                      options={[
                        'Biological and Biochemical Foundations of Living Systems',
                        'Chemical and Physical Foundations of Biological Systems',
                        'Psychological, Social, and Biological Foundations of Behavior',
                        'Critical Analysis and Reasoning Skills'
                      ]}
                    />

                    <CheckboxGroup
                      title="What is your main focus at this point of your studying journey? (Check all that apply)"
                      field="studyFocus"
                      options={[
                        'Content review',
                        'Practice questions',
                        'Timed practice'
                      ]}
                    />
                  </>
                )}

                {formData.testType === 'LSAT' && (
                  <CheckboxGroup
                    title="What aspect of the test do you want to focus your studying on? (Check all that apply)"
                    field="studyFocus"
                    options={[
                      'Logical Reasoning',
                      'Reading comprehension',
                      'Strategies and skills for understanding questions',
                      'Full-length timed practice tests',
                      'Drilling questions'
                    ]}
                  />
                )}

                <div>
                  <label className="block text-white font-medium mb-2">
                    Is there any other information about yourself or your study preferences that would be important for potential study partners? 
                    <span className="text-sm text-gray-400 block mt-1">(This will be shared with your test twin)</span>
                  </label>
                  <textarea
                    value={formData.additionalInfo}
                    onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                    rows={4}
                    className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Tell us anything else that would help us find your perfect study match..."
                  />
                </div>
              </div>
            </Step>
          </Stepper>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{background: 'linear-gradient(135deg, #c8a8e9 0%, #8b95e5 100())'}}>
                  <span className="text-white font-medium text-xs">TT</span>
                </div>
                <span className="text-xl font-medium">TestTwin</span>
              </div>
              <p className="text-gray-400 text-sm">
                Connecting study partners for academic success.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-medium">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>support@testtwin.com</p>
                <p>partnership@testtwin.com</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-medium">Follow Us</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>Reddit: testtwin</p>
                <p>Instagram: testtwin</p>
                <p>TikTok: testtwin</p>
              </div>
            </div>

            <div>
              <h4 className="mb-4 font-medium">Legal</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <br />
                <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 TestTwin. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TestTwinSurvey;