'use client';

import { useState } from 'react';

export default function TodaysTaskPage() {
  const [completedItems, setCompletedItems] = useState<number[]>([]);
  
  // PDF files for today's task with file sizes matching the screenshot
  const pdfFiles = [
    {
      title: "P1 Video 6 Retirement and Social Security.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 6 Retirement and Social Security.pdf")}`,
      fileSize: "725 KB"
    },
    {
      title: "P1 Video 4 Deductions.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 4 Deductions.pdf")}`,
      fileSize: "1.2 MB"
    },
    {
      title: "P1 Video 5 Calculating Tax and Tax Credits.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 5 Calculating Tax and Tax Credits.pdf")}`,
      fileSize: "3.9 MB"
    },
    {
      title: "P1 Video 3 Capital Gains.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 3 Capital Gains.pdf")}`,
      fileSize: "1.9 MB"
    },
    {
      title: "P1 Video 2 Income &.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 2 Income &.pdf")}`,
      fileSize: "479 KB"
    },
    {
      title: "P1 Video 1 Overview and Get Started.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 1 Overview and Get Started.pdf")}`,
      fileSize: "4.6 MB"
    },
    {
      title: "P1 Video 7 Specialized Returns.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 7 Specialized Returns.pdf")}`, 
      fileSize: "1.8 MB"
    }
  ];

  // Toggle completion status of a study item
  const toggleCompleted = (index: number) => {
    if (completedItems.includes(index)) {
      setCompletedItems(completedItems.filter(item => item !== index));
    } else {
      setCompletedItems([...completedItems, index]);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 md:p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 p-4 bg-blue-900 rounded-lg">
          <h1 className="text-2xl font-bold mb-3">Today's Study Materials</h1>
          <p className="text-gray-300 mb-2">Complete the following materials to stay on track with your EA exam preparation.</p>
          <p className="text-sm text-gray-400">All PDFs are available for immediate study. Click on any file to view its contents.</p>
        </div>
        
        {pdfFiles.map((file, index) => (
          <div 
            key={index} 
            className={`flex justify-between items-center py-3 px-4 mb-3 rounded-md border transition-colors ${
              completedItems.includes(index) 
                ? 'bg-blue-900/30 border-blue-700' 
                : 'bg-gray-800/60 hover:bg-gray-800 border-gray-700'
            }`}
          >
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-4 text-red-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8L14,2z M16,18H8v-2h8V18z M16,14H8v-2h8V14z M13,9V3.5L18.5,9H13z" />
              </svg>
              <a 
                href={file.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-blue-300 hover:underline"
              >
                {file.title}
              </a>
            </div>
            <div className="flex items-center">
              <span className="text-gray-400 mr-4">{file.fileSize}</span>
              <button 
                onClick={() => toggleCompleted(index)}
                className={`p-2 rounded-full ${completedItems.includes(index) ? 'bg-green-800 text-green-300' : 'bg-gray-700 text-gray-300'} hover:bg-blue-700`}
              >
                {completedItems.includes(index) ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        ))}
        
        <div className="mt-8 p-4 bg-gray-800 rounded-lg">
          <h2 className="text-lg font-semibold mb-2 text-blue-300">Study Progress</h2>
          <div className="w-full bg-gray-700 rounded-full h-4 mb-3">
            <div 
              className="bg-blue-600 h-4 rounded-full transition-all duration-500" 
              style={{ width: `${(completedItems.length / pdfFiles.length) * 100}%` }}
            ></div>
          </div>
          <p className="text-gray-300 text-sm">
            {completedItems.length === 0 
              ? "Get started on your study materials. Mark items as complete as you finish them."
              : completedItems.length === pdfFiles.length
                ? "Congratulations! You've completed all of today's study materials."
                : `You've completed ${completedItems.length} of ${pdfFiles.length} study materials.`
            }
          </p>
        </div>
      </div>
    </div>
  );
} 