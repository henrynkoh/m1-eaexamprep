import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue your EA exam preparation</p>
        </header>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-primary">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Overall Mastery</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-800">68%</span>
              <span className="text-green-600 text-sm mb-1">↑ 2.4%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div className="bg-primary h-2 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-400">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Questions Answered</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-800">245</span>
              <span className="text-sm text-gray-500 mb-1">/3000</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-3">
              <div className="bg-blue-400 h-2 rounded-full" style={{ width: '8%' }}></div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-500">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Daily Streak</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-800">5</span>
              <span className="text-sm text-gray-500 mb-1">days</span>
            </div>
            <div className="mt-2 flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs">
                  ✓
                </div>
              ))}
              {[...Array(2)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs">
                  {i + 6}
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-500">
            <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Predicted Score</h3>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-gray-800">75%</span>
              <span className="text-green-600 text-sm mb-1">↑ 1.5%</span>
            </div>
            <p className="text-xs text-gray-500 mt-3">
              Based on performance and progression
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Practice Tests */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Practice Tests</h2>
              <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 rounded-full">Quick Access</span>
            </div>
            <div className="space-y-3">
              <Link 
                href="/practice/part1" 
                className="flex items-center justify-between w-full py-3 px-4 bg-blue-50 text-primary rounded-md hover:bg-blue-100 transition-colors group"
              >
                <span className="font-medium">Part 1: Individuals</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
              <Link 
                href="/practice/part2" 
                className="flex items-center justify-between w-full py-3 px-4 bg-blue-50 text-primary rounded-md hover:bg-blue-100 transition-colors group"
              >
                <span className="font-medium">Part 2: Businesses</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
              <Link 
                href="/practice/part3" 
                className="flex items-center justify-between w-full py-3 px-4 bg-blue-50 text-primary rounded-md hover:bg-blue-100 transition-colors group"
              >
                <span className="font-medium">Part 3: Representation</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                </svg>
              </Link>
              <Link 
                href="/daily-challenge" 
                className="flex items-center justify-between w-full py-3 px-4 mt-2 bg-orange-50 text-orange-600 rounded-md hover:bg-orange-100 transition-colors group"
              >
                <span className="font-medium">Daily Challenge</span>
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">NEW</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Recommended Study */}
          <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Recommended Focus Areas</h2>
              <Link href="/dashboard/weak-areas" className="text-sm text-primary hover:underline">View all</Link>
            </div>
            <div className="space-y-5">
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-1 items-center">
                  <h4 className="font-medium text-gray-800">Partnership Taxation</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Part 2</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mastery</span>
                  <span className="text-sm font-medium text-yellow-600">38%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Last practiced: 3 days ago</p>
                  <Link 
                    href="/practice/partnership-taxation" 
                    className="text-sm text-primary hover:underline inline-flex items-center"
                  >
                    Practice Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-1 items-center">
                  <h4 className="font-medium text-gray-800">Representation Practices</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Part 3</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mastery</span>
                  <span className="text-sm font-medium text-yellow-600">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Last practiced: 1 day ago</p>
                  <Link 
                    href="/practice/representation-practices" 
                    className="text-sm text-primary hover:underline inline-flex items-center"
                  >
                    Practice Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-1 items-center">
                  <h4 className="font-medium text-gray-800">Estate & Gift Taxation</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-100 text-blue-800">Part 1</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mastery</span>
                  <span className="text-sm font-medium text-yellow-600">62%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '62%' }}></div>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-xs text-gray-500">Last practiced: 5 days ago</p>
                  <Link 
                    href="/practice/estate-gift-taxation" 
                    className="text-sm text-primary hover:underline inline-flex items-center"
                  >
                    Practice Now
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 