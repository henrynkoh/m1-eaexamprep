import Link from 'next/link';

export default function SimulatedExamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary">Simulated EA Exam</h1>
          <p className="text-gray-600 mt-2">Take a full-length practice exam under test-like conditions</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold text-primary mb-6">Choose an Exam Part</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Part 1: Individuals</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part1-new" className="block w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium">
                Begin Exam
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Part 2: Businesses</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part2" className="block w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium">
                Begin Exam
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1">
              <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-primary mb-2">Part 3: Representation</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part3" className="block w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors text-center font-medium">
                Begin Exam
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-xl font-semibold text-primary mb-6">About Simulated Exams</h2>
          <p className="text-gray-700 mb-4 text-lg">
            Our simulated exams are designed to closely mimic the actual EA exam experience:
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="list-none ml-1 text-gray-700 space-y-4">
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Questions are weighted according to the actual exam specifications</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Time limits match the official exam duration</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Question formats include multiple-choice and true/false</span>
              </li>
            </ul>
            
            <ul className="list-none ml-1 text-gray-700 space-y-4">
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>A realistic exam interface simulates the testing environment</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Detailed score reports help identify knowledge gaps</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="shrink-0 p-1 bg-green-100 rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <span>Explanations for all answers, both correct and incorrect</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-primary mb-6">Exam Tips</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Time Management</h3>
                <p className="text-gray-600">Allocate about 2 minutes per question and flag difficult questions to revisit later.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Create Test Conditions</h3>
                <p className="text-gray-600">Find a quiet space without distractions and use the full time limit to build stamina.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Review Results Thoroughly</h3>
                <p className="text-gray-600">Study your score report to identify weak areas and focus your final review.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-4 border-t border-gray-200">
            <Link href="/resources/exam-strategy" className="text-primary hover:underline inline-flex items-center font-medium">
              View more exam strategies
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 