import Link from 'next/link';

export default function Part2ExamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-primary">Part 2: Businesses Exam</h1>
          <p className="text-gray-600 mt-1">100 questions • 3.5 hours</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div className="flex items-center">
              <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-medium">
                1
              </div>
              <span className="text-gray-500 text-sm">Question 1 of 100</span>
            </div>
            <div className="text-sm flex items-center space-x-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Time remaining: 3:30:00</span>
              </div>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Flag for review
              </button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">
              ABC Partnership has three equal partners and reports a loss of $75,000 for the tax year. Partner X has a basis of $15,000 in their partnership interest at the beginning of the year. How much of the loss can Partner X deduct on their individual tax return?
            </h2>
            
            <div className="space-y-3 mt-5">
              <div className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-blue-50 cursor-pointer transition-colors">
                <input type="radio" name="answer" id="answer-a" className="mr-3" />
                <label htmlFor="answer-a" className="cursor-pointer w-full">$15,000</label>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-blue-50 cursor-pointer transition-colors">
                <input type="radio" name="answer" id="answer-b" className="mr-3" />
                <label htmlFor="answer-b" className="cursor-pointer w-full">$25,000</label>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-blue-50 cursor-pointer transition-colors">
                <input type="radio" name="answer" id="answer-c" className="mr-3" />
                <label htmlFor="answer-c" className="cursor-pointer w-full">$0</label>
              </div>
              <div className="flex items-center p-3 border border-gray-200 rounded-md hover:bg-blue-50 cursor-pointer transition-colors">
                <input type="radio" name="answer" id="answer-d" className="mr-3" />
                <label htmlFor="answer-d" className="cursor-pointer w-full">$75,000</label>
              </div>
            </div>
          </div>
          
          <div className="flex justify-between">
            <button className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              Previous
            </button>
            <button className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 flex items-center">
              Next
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-medium text-gray-800 mb-4">Question Navigator</h2>
          <div className="grid grid-cols-10 gap-2">
            {Array.from({ length: 100 }, (_, i) => (
              <button 
                key={i} 
                className={`h-10 w-10 rounded-md flex items-center justify-center border text-sm
                  ${i === 0 ? 'bg-primary text-white' : 'border-gray-300 hover:bg-gray-50'}
                `}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Link 
              href="/simulated-exam"
              className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 mr-3"
            >
              End Exam
            </Link>
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Submit Exam
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 