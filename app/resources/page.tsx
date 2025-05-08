import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 relative">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary">EA Exam Resources</h1>
          <p className="text-gray-600 mt-2">Comprehensive study materials for the Enrolled Agent exam</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">Part 1: Individuals</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering individual taxation topics, including income, deductions, credits, and more.
            </p>
            <Link href="/resources/part1-guide" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 1 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">Part 2: Businesses</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering business taxation topics, including partnerships, corporations, and more.
            </p>
            <Link href="/resources/part2-guide" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 2 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">Part 3: Representation</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering IRS practices, procedures, and ethical standards for tax professionals.
            </p>
            <Link href="/resources/part3-guide" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 3 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">Exam Strategy</h2>
            <p className="text-gray-600 mb-4">
              Effective approaches to studying, test-taking strategies, and preparation advice for the EA exam.
            </p>
            <Link href="/resources/exam-strategy" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Strategies
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">2025 Tax Updates</h2>
            <p className="text-gray-600 mb-4">
              Key changes to tax laws and regulations for the 2025 tax year that will be tested on the exam.
            </p>
            <Link href="/resources/2025-updates" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Updates
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="p-2 bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-primary">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-primary mb-3">Downloads</h2>
            <p className="text-gray-600 mb-4">
              Access all downloadable materials including study guides, cheat sheets, flashcards, and more.
            </p>
            <Link href="/resources/downloads" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Downloads
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-xl font-semibold text-primary mb-6">How to Use These Resources</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Start with an assessment</h3>
                <p className="text-gray-600">Take a diagnostic test to identify your strengths and weaknesses before diving into the study materials.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Review study guides</h3>
                <p className="text-gray-600">Use the comprehensive study guides for each part of the exam to build a strong foundation of knowledge.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Practice regularly</h3>
                <p className="text-gray-600">Use practice questions and daily challenges to reinforce your learning and identify areas that need more review.</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="text-white shrink-0 mt-1 bg-primary rounded-full p-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 text-lg">Simulate exam conditions</h3>
                <p className="text-gray-600">Take full-length practice exams under timed conditions to build test-taking stamina and confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Useful Resources button in bottom right corner */}
      <div className="fixed bottom-8 right-8">
        <Link href="/resources/useful-resources" className="flex items-center justify-center gap-2 bg-primary hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-full shadow-lg transition-all hover:shadow-xl">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
          </svg>
          Useful Resources
        </Link>
      </div>
    </div>
  );
} 