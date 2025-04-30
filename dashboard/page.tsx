import Link from 'next/link';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Your Dashboard</h1>
          <p className="text-gray-600">Track your progress and continue your EA exam preparation</p>
        </header>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Progress Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your Progress</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Mastery</span>
                  <span className="text-sm font-medium">68%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Questions Answered</span>
                  <span className="text-sm font-medium">245/3000</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '8%' }}></div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <p className="text-sm text-gray-700">
                  Predicted Exam Score: <span className="font-bold text-blue-600">75%</span>
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Based on your current progress and performance
                </p>
              </div>
            </div>
          </div>
          
          {/* Quick Actions */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Practice Tests</h2>
            <div className="space-y-3">
              <Link 
                href="/practice/part1" 
                className="block w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Part 1: Individuals
              </Link>
              <Link 
                href="/practice/part2" 
                className="block w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Part 2: Businesses
              </Link>
              <Link 
                href="/practice/part3" 
                className="block w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center"
              >
                Part 3: Representation
              </Link>
              <Link 
                href="/daily-challenge" 
                className="block w-full py-2 px-4 mt-4 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors text-center"
              >
                Daily Challenge
              </Link>
            </div>
          </div>
          
          {/* Recommended Study */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Recommended Focus</h2>
            <div className="space-y-3">
              <div className="border rounded-md p-3">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Partnership Taxation</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-purple-100 text-purple-800">Part2</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mastery</span>
                  <span className="text-sm font-medium">38%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '38%' }}></div>
                </div>
                <Link 
                  href="/practice/partnership-taxation" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  Practice Now
                </Link>
              </div>
              
              <div className="border rounded-md p-3">
                <div className="flex justify-between mb-1">
                  <h4 className="font-medium">Representation Practices</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">Part3</span>
                </div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Mastery</span>
                  <span className="text-sm font-medium">55%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '55%' }}></div>
                </div>
                <Link 
                  href="/practice/representation-practices" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  Practice Now
                </Link>
              </div>
              
              <div className="text-center mt-4">
                <Link 
                  href="/dashboard/weak-areas" 
                  className="text-sm text-blue-600 hover:underline"
                >
                  View all weak areas →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 