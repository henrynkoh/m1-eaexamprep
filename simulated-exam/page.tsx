"use client";

import Link from 'next/link';

export default function SimulatedExamPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Simulated EA Exam</h1>
          <p className="text-gray-600 mt-2">Take a full-length practice exam under test-like conditions</p>
        </header>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Choose an Exam Part</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Part 1: Individuals</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part1" className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center">
                Begin Exam
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Part 2: Businesses</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part2" className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center">
                Begin Exam
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-medium text-blue-600 mb-2">Part 3: Representation</h3>
              <p className="text-gray-600 mb-4">100 questions • 3.5 hours</p>
              <Link href="/simulated-exam/part3" className="block w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-center">
                Begin Exam
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">About Simulated Exams</h2>
          <p className="text-gray-700 mb-3">
            Our simulated exams are designed to closely mimic the actual EA exam experience:
          </p>
          
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Questions are weighted according to the actual exam specifications</li>
            <li>Time limits match the official exam duration</li>
            <li>Question formats include multiple-choice and true/false</li>
            <li>A realistic exam interface simulates the testing environment</li>
            <li>Detailed score reports help identify knowledge gaps</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Exam Tips</h2>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Time Management</h3>
                <p className="text-gray-600">Allocate about 2 minutes per question and flag difficult questions to revisit later.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Create Test Conditions</h3>
                <p className="text-gray-600">Find a quiet space without distractions and use the full time limit to build stamina.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Review Results Thoroughly</h3>
                <p className="text-gray-600">Study your score report to identify weak areas and focus your final review.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link href="/resources/exam-strategy" className="text-blue-600 hover:underline">
              View more exam strategies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 