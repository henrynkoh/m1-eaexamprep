import Link from 'next/link';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-primary">EA Exam Resources</h1>
          <p className="text-gray-600 mt-2">Comprehensive study materials for the Enrolled Agent exam</p>
        </header>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">Part 1: Individuals</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering individual taxation topics, including income, deductions, credits, and more.
            </p>
            <Link href="/resources/part1-guide" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 1 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">Part 2: Businesses</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering business taxation topics, including partnerships, corporations, and more.
            </p>
            <Link href="/resources/part2-guide" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 2 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">Part 3: Representation</h2>
            <p className="text-gray-600 mb-4">
              Study materials covering IRS practices, procedures, and ethical standards for tax professionals.
            </p>
            <Link href="/resources/part3-guide" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Part 3 Guide
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">Exam Strategy</h2>
            <p className="text-gray-600 mb-4">
              Effective approaches to studying, test-taking strategies, and preparation advice for the EA exam.
            </p>
            <Link href="/resources/exam-strategy" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Strategies
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">2025 Tax Updates</h2>
            <p className="text-gray-600 mb-4">
              Key changes to tax laws and regulations for the 2025 tax year that will be tested on the exam.
            </p>
            <Link href="/resources/2025-updates" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Updates
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary mb-3">Downloads</h2>
            <p className="text-gray-600 mb-4">
              Access all downloadable materials including study guides, cheat sheets, flashcards, and more.
            </p>
            <Link href="/resources/downloads" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block">
              View Downloads
            </Link>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-primary mb-4">How to Use These Resources</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Start with an assessment</h3>
                <p className="text-gray-600">Take a diagnostic test to identify your strengths and weaknesses before diving into the study materials.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Review study guides</h3>
                <p className="text-gray-600">Use the comprehensive study guides for each part of the exam to build a strong foundation of knowledge.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Practice regularly</h3>
                <p className="text-gray-600">Use practice questions and daily challenges to reinforce your learning and identify areas that need more review.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Simulate exam conditions</h3>
                <p className="text-gray-600">Take full-length practice exams under timed conditions to build test-taking stamina and confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 