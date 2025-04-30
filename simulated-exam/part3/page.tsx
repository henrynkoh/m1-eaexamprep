"use client";

import Link from 'next/link';
import { useState } from 'react';

// Mock questions for demonstration
const mockQuestions = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  text: `Question ${index + 1}: This is a sample question about representation and ethics.`,
  options: [
    { id: 'a', text: 'Answer option A' },
    { id: 'b', text: 'Answer option B' },
    { id: 'c', text: 'Answer option C' },
    { id: 'd', text: 'Answer option D' }
  ]
}));

export default function SimulatedExamPart3Page() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<(string | null)[]>(Array(100).fill(null));
  const [timeRemaining, setTimeRemaining] = useState('3:30:00');
  
  const handleNextQuestion = () => {
    if (currentQuestion < mockQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  
  const handleAnswerSelect = (optionId: string) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = optionId;
    setSelectedAnswers(newAnswers);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/simulated-exam" className="text-gray-500 hover:text-blue-600">
              Simulated Exam
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">Part 3: Representation</span>
          </div>
          <h1 className="text-3xl font-bold text-blue-600">Part 3: Representation Exam</h1>
          <p className="text-gray-600 mt-2">100 questions • 3.5 hours</p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main exam content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="flex justify-between items-center mb-6">
                <div className="font-medium">
                  Question {currentQuestion + 1} of {mockQuestions.length}
                </div>
                <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full font-medium">
                  Time: {timeRemaining}
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-lg font-medium mb-4">
                  {mockQuestions[currentQuestion].text}
                </h2>
                
                <div className="space-y-3">
                  {mockQuestions[currentQuestion].options.map((option) => (
                    <div 
                      key={option.id}
                      className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                        selectedAnswers[currentQuestion] === option.id 
                          ? 'border-blue-500 bg-blue-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleAnswerSelect(option.id)}
                    >
                      <label className="flex items-start cursor-pointer">
                        <div className="flex items-center h-5">
                          <input
                            type="radio"
                            name={`question-${currentQuestion}`}
                            className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                            checked={selectedAnswers[currentQuestion] === option.id}
                            onChange={() => handleAnswerSelect(option.id)}
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <span className="font-medium">{option.id.toUpperCase()}:</span> {option.text}
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between">
                <button
                  onClick={handlePreviousQuestion}
                  disabled={currentQuestion === 0}
                  className={`px-4 py-2 rounded-md ${
                    currentQuestion === 0 
                      ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Previous
                </button>
                
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
          
          {/* Question Navigator */}
          <div className="lg:w-64">
            <div className="bg-white rounded-lg shadow-sm p-4 sticky top-4">
              <h3 className="font-medium mb-3">Question Navigator</h3>
              
              <div className="grid grid-cols-5 gap-2">
                {mockQuestions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestion(index)}
                    className={`w-full h-9 rounded text-sm font-medium ${
                      currentQuestion === index
                        ? 'bg-blue-600 text-white'
                        : selectedAnswers[index] !== null
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500">Answered:</span>
                  <span className="text-sm font-medium">
                    {selectedAnswers.filter(a => a !== null).length}/{mockQuestions.length}
                  </span>
                </div>
                
                <button
                  className="mt-4 w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Submit Exam
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 