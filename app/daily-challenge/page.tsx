import Link from 'next/link';

export default function DailyChallengePages() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Daily Challenge</h1>
          <p className="text-gray-600 mt-2">Test your knowledge with a new set of questions every day</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800">Today's Challenge (April 30, 2023)</h2>
          </div>
          
          <p className="text-gray-600 mb-8 text-lg">
            Today's challenge focuses on Business Entities. Complete 5 questions to earn your daily streak badge.
          </p>
          
          <div className="p-6 bg-blue-50 rounded-lg mb-8">
            <h3 className="font-medium text-lg text-gray-800 mb-3">Daily Streak: 5 days</h3>
            <div className="flex gap-2">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                  ✓
                </div>
              ))}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-400">
                  {i + 6}
                </div>
              ))}
            </div>
          </div>
          
          <Link href="/daily-challenge/start" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors inline-block font-medium">
            Start Today's Challenge
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-6">Challenge History</h2>
            
            <div className="space-y-5">
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-800 font-medium">April 29, 2023</p>
                <p className="text-gray-600 text-sm mb-2">Individual Taxation</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-600 mr-3">Score:</div>
                    <div className="flex gap-1">
                      {[...Array(4)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-green-500 rounded-full"></div>
                      ))}
                      {[...Array(1)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <Link href="/daily-challenge/history/2023-04-29" className="text-blue-600 hover:underline text-sm font-medium">
                    Review
                  </Link>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-800 font-medium">April 28, 2023</p>
                <p className="text-gray-600 text-sm mb-2">IRS Procedures</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-600 mr-3">Score:</div>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-green-500 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <Link href="/daily-challenge/history/2023-04-28" className="text-blue-600 hover:underline text-sm font-medium">
                    Review
                  </Link>
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <p className="text-gray-800 font-medium">April 27, 2023</p>
                <p className="text-gray-600 text-sm mb-2">Business Taxation</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="text-sm text-gray-600 mr-3">Score:</div>
                    <div className="flex gap-1">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-green-500 rounded-full"></div>
                      ))}
                      {[...Array(2)].map((_, i) => (
                        <div key={i} className="w-4 h-4 bg-gray-200 rounded-full"></div>
                      ))}
                    </div>
                  </div>
                  <Link href="/daily-challenge/history/2023-04-27" className="text-blue-600 hover:underline text-sm font-medium">
                    Review
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <Link href="/daily-challenge/history" className="text-blue-600 hover:underline text-sm font-medium">
                View all challenge history
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-6">Achievements</h2>
            
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-blue-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 font-medium">5-Day Streak</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-green-600">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 font-medium">Perfect Score</p>
                <p className="text-xs text-gray-500">Completed</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-gray-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-700 font-medium">30-Day Streak</p>
                <p className="text-xs text-gray-500">In progress (5/30)</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Challenges Completed</span>
                <span className="text-sm font-medium text-gray-700">24</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Perfect Scores</span>
                <span className="text-sm font-medium text-gray-700">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-700">Longest Streak</span>
                <span className="text-sm font-medium text-gray-700">7 days</span>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Link href="/profile/achievements" className="text-blue-600 hover:underline text-sm font-medium">
                View all achievements
              </Link>
            </div>
          </div>
        </div>
        
        {/* Today's Task button in bottom right corner */}
        <div className="fixed bottom-8 right-8">
          <Link href="/daily-challenge/todays-task" className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-full shadow-lg transition-all hover:shadow-xl">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
            </svg>
            Today's Task
          </Link>
        </div>
      </div>
    </div>
  );
} 