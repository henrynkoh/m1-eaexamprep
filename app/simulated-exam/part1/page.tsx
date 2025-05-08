"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Part1ExamPage() {
  // State for exam simulation
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(3.5 * 60 * 60); // 3.5 hours in seconds
  const [examMode, setExamMode] = useState('intro'); // 'intro', 'exam', 'review', 'completed'
  const [activeVideoSection, setActiveVideoSection] = useState(0);
  
  // Timer effect
  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    if (examMode === 'exam') {
      timer = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            if (timer) clearInterval(timer);
            setExamMode('completed');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [examMode]);
  
  // Format time remaining
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  // Video sections with YouTube links
  const videoSections = [
    {
      id: 0,
      title: "Video 1/7: Standard Deductions & Tax Credits",
      youtubeId: "RdobDP-aUCM",
      description: "Comprehensive guide covering standard deductions and tax credits for individuals."
    },
    {
      id: 1,
      title: "Video 2/7: Filing Statuses & Income Exclusions",
      youtubeId: "dQw4w9WgXcQ", // Placeholder
      description: "Learn about different filing statuses and income exclusions allowed by the IRS."
    },
    {
      id: 2, 
      title: "Video 3/7: Retirement Accounts & Distributions",
      youtubeId: "08k_R1jfPiQ",
      description: "Everything you need to know about retirement accounts and distribution rules."
    },
    {
      id: 3,
      title: "Video 4/7: Business Expense Deductions",
      youtubeId: "_6upyklcJiA",
      description: "Detailed explanation of business expense deductions for individual taxpayers."
    },
    {
      id: 4,
      title: "Video 5/7: Capital Gains & Losses",
      youtubeId: "hkPP9CGU28c",
      description: "How to handle capital gains and losses on individual tax returns."
    },
    {
      id: 5, 
      title: "Video 6/7: Estate & Gift Taxes",
      youtubeId: "VPWs_VCAJdI",
      description: "Overview of estate and gift tax rules affecting individual taxpayers."
    },
    {
      id: 6,
      title: "Video 7/7: Foreign Income & Reporting",
      youtubeId: "vD5BX63Gyfk",
      description: "Requirements for reporting foreign income and associated tax implications."
    }
  ];
  
  // Sample exam questions
  const examQuestions = [
    {
      id: 0,
      text: "John, a single taxpayer, had wages of $75,000 and received $2,500 of qualified dividends during the tax year. What is the amount of qualified dividends that will be taxed at 0%?",
      options: [
        { id: "a", text: "$0" },
        { id: "b", text: "$1,200" },
        { id: "c", text: "$2,500" },
        { id: "d", text: "$1,800" }
      ],
      correctAnswer: "b",
      explanation: "For 2023, single taxpayers with taxable income up to $44,625 can receive qualified dividends at the 0% rate. John's taxable income after the standard deduction ($13,850) is $61,150, which exceeds this threshold. The amount taxed at 0% is calculated as $44,625 - ($75,000 - $13,850) = $1,200."
    },
    {
      id: 1,
      text: "Mary, age 67, is claimed as a dependent on her son's tax return. What is her standard deduction amount for 2023?",
      options: [
        { id: "a", text: "$13,850" },
        { id: "b", text: "$1,500" },
        { id: "c", text: "$1,500 or her earned income plus $400, whichever is greater, but not to exceed $13,850" },
        { id: "d", text: "$15,700" }
      ],
      correctAnswer: "c",
      explanation: "When someone is claimed as a dependent on another taxpayer's return, their standard deduction is limited to the greater of $1,500 or their earned income plus $400, but cannot exceed the basic standard deduction amount ($13,850 for 2023)."
    },
    // More questions would be included here
  ];
  
  const toggleFlagQuestion = (questionId: number): void => {
    setFlaggedQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId) 
        : [...prev, questionId]
    );
  };
  
  const handleAnswerSelect = (questionId: number, answerId: string): void => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };
  
  const navigateToQuestion = (questionId: number): void => {
    setActiveQuestion(questionId);
  };
  
  const startExam = (): void => {
    setExamMode('exam');
  };
  
  const submitExam = (): void => {
    setExamMode('completed');
  };
  
  // Rendering different exam modes
  if (examMode === 'intro') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">100 questions • 3.5 hours</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-primary mb-4">Exam Instructions</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
              <li>You have 3.5 hours to complete 100 multiple-choice questions.</li>
              <li>You can mark questions for review and return to them later.</li>
              <li>Once you submit the exam, you cannot change your answers.</li>
              <li>A score of 70% or higher is required to pass.</li>
              <li>The timer will start once you begin the exam.</li>
            </ul>
            
            <div className="flex justify-between items-center">
              <Link href="/simulated-exam" className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50">
                Return to Exam Selection
              </Link>
              <button 
                onClick={startExam}
                className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Begin Exam
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-xl font-semibold text-primary mb-6">Study Resources</h2>
            <p className="text-gray-700 mb-4">
              Before taking the exam, review these instructional videos and practice questions to help you prepare:
            </p>
            
            <div className="space-y-6 mt-4">
              {videoSections.map((video, index) => (
                <div key={video.id} className="border-b pb-6 last:border-0">
                  <button 
                    onClick={() => setActiveVideoSection(index)}
                    className="text-left w-full"
                  >
                    <h3 className="text-lg font-medium text-primary hover:text-blue-700">{video.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{video.description}</p>
                  </button>
                  
                  {activeVideoSection === index && (
                    <div className="mt-4">
                      <div className="aspect-w-16 aspect-h-9 mb-3">
                        <iframe 
                          className="w-full h-64 md:h-96 rounded-lg shadow-md"
                          src={`https://www.youtube.com/embed/${video.youtubeId}`}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <h4 className="font-medium text-gray-800 mb-2">Practice Questions</h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Try these practice questions related to the content in this video:
                        </p>
                        
                        {/* This would show practice questions related to the video */}
                        <Link 
                          href="#practice-questions"
                          className="text-primary hover:underline inline-flex items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(`practice-${video.id}`);
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          View practice questions
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Practice Questions Sections */}
          {videoSections.map((video) => (
            <div id={`practice-${video.id}`} key={`practice-${video.id}`} className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary mb-6">Top 30 Practice Questions from {video.title}</h2>
              
              <div className="space-y-8">
                {/* Each video section would have 30 practice questions here */}
                <div className="border-b pb-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">1. What is the standard deduction for a head of household filer for 2023?</h3>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Answer:</span> $20,800</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Explanation:</span> The standard deduction for head of household filing status increased to $20,800 for the 2023 tax year.</p>
                </div>
                
                <div className="border-b pb-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">2. What is the maximum Child Tax Credit for a qualifying child under age 17?</h3>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Answer:</span> $2,000</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Explanation:</span> The Child Tax Credit is $2,000 per qualifying child under 17, with up to $1,600 being refundable for tax year 2023.</p>
                </div>
                
                <div className="border-b pb-6">
                  <h3 className="font-medium text-lg text-gray-800 mb-2">3. What is the income threshold where the Child Tax Credit begins to phase out for married filing jointly?</h3>
                  <p className="text-gray-700 mb-3"><span className="font-medium">Answer:</span> $400,000</p>
                  <p className="text-sm text-gray-600"><span className="font-medium">Explanation:</span> The Child Tax Credit begins to phase out at $400,000 of modified adjusted gross income for married couples filing jointly.</p>
                </div>
                
                {/* More practice questions would be added for each video section */}
              </div>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="text-primary hover:underline inline-flex items-center"
                >
                  Back to top
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  // Exam mode
  if (examMode === 'exam') {
    const question = examQuestions[activeQuestion];
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">100 questions • {formatTime(timeRemaining)} remaining</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <div className="flex items-center">
                <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-medium">
                  {activeQuestion + 1}
                </div>
                <span className="text-gray-500 text-sm">Question {activeQuestion + 1} of {examQuestions.length}</span>
              </div>
              <div className="text-sm flex items-center space-x-4">
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-gray-600 mr-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Time remaining: {formatTime(timeRemaining)}</span>
                </div>
                <button 
                  onClick={() => toggleFlagQuestion(activeQuestion)}
                  className={`px-3 py-1 border rounded-md text-gray-600 hover:bg-gray-50 ${
                    flaggedQuestions.includes(activeQuestion) 
                      ? 'bg-yellow-50 border-yellow-300' 
                      : 'border-gray-300'
                  }`}
                >
                  {flaggedQuestions.includes(activeQuestion) ? 'Unflag question' : 'Flag for review'}
                </button>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-medium text-gray-800 mb-4">
                {question.text}
              </h2>
              
              <div className="space-y-3 mt-5">
                {question.options.map((option) => (
                  <div 
                    key={option.id}
                    className={`flex items-center p-3 border rounded-md cursor-pointer transition-colors ${
                      selectedAnswers[activeQuestion] === option.id 
                        ? 'bg-blue-50 border-blue-300' 
                        : 'border-gray-200 hover:bg-blue-50'
                    }`}
                    onClick={() => handleAnswerSelect(activeQuestion, option.id)}
                  >
                    <input 
                      type="radio" 
                      name={`question-${activeQuestion}`} 
                      id={`answer-${option.id}`} 
                      className="mr-3"
                      checked={selectedAnswers[activeQuestion] === option.id}
                      onChange={() => {}} // React requires onChange handler
                    />
                    <label htmlFor={`answer-${option.id}`} className="cursor-pointer w-full">
                      {option.text}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-between">
              <button 
                onClick={() => navigateToQuestion(Math.max(0, activeQuestion - 1))}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 flex items-center"
                disabled={activeQuestion === 0}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Previous
              </button>
              {activeQuestion < examQuestions.length - 1 ? (
                <button 
                  onClick={() => navigateToQuestion(activeQuestion + 1)}
                  className="px-4 py-2 bg-primary text-white rounded-md hover:bg-blue-700 flex items-center"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </button>
              ) : (
                <button 
                  onClick={submitExam}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Submit Exam
                </button>
              )}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Question Navigator</h2>
            <div className="grid grid-cols-10 gap-2">
              {examQuestions.map((q, i) => (
                <button 
                  key={i} 
                  onClick={() => navigateToQuestion(i)}
                  className={`h-10 w-10 rounded-md flex items-center justify-center border text-sm
                    ${i === activeQuestion ? 'bg-primary text-white' : ''}
                    ${selectedAnswers[i] && i !== activeQuestion ? 'bg-green-100 border-green-300' : ''}
                    ${!selectedAnswers[i] && i !== activeQuestion ? 'border-gray-300 hover:bg-gray-50' : ''}
                    ${flaggedQuestions.includes(i) ? 'ring-2 ring-yellow-400' : ''}
                  `}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            
            <div className="flex justify-center mt-8">
              <button 
                onClick={() => setExamMode('intro')}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-600 hover:bg-gray-50 mr-3"
              >
                Pause Exam
              </button>
              <button 
                onClick={submitExam}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Submit Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  // Completed exam mode
  if (examMode === 'completed') {
    // Calculate score
    const correctAnswers = examQuestions.filter(q => 
      selectedAnswers[q.id] === q.correctAnswer
    ).length;
    
    const percentage = Math.round((correctAnswers / examQuestions.length) * 100);
    const passed = percentage >= 70;
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-primary">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">Exam Completed</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <div className="text-center mb-6">
              <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
                passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              } text-3xl font-bold mb-4`}>
                {percentage}%
              </div>
              <h2 className="text-2xl font-bold text-gray-800">
                {passed ? 'Congratulations!' : 'Not Quite There Yet'}
              </h2>
              <p className="text-gray-600 mt-2">
                You answered {correctAnswers} out of {examQuestions.length} questions correctly.
              </p>
              <p className={`font-medium text-lg mt-2 ${passed ? 'text-green-600' : 'text-red-600'}`}>
                {passed ? 'You passed the exam!' : 'You need 70% to pass the exam.'}
              </p>
            </div>
            
            <div className="space-y-8 mt-8">
              <h3 className="font-semibold text-lg text-primary border-b pb-2">Question Review</h3>
              
              {examQuestions.map((question, index) => (
                <div key={index} className="border-b pb-6 last:border-0">
                  <div className="flex items-start gap-3">
                    <div className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-full text-white font-medium ${
                      selectedAnswers[question.id] === question.correctAnswer 
                        ? 'bg-green-500' 
                        : 'bg-red-500'
                    }`}>
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-800">{question.text}</h4>
                      <div className="mt-3 space-y-2">
                        {question.options.map(option => (
                          <div key={option.id} className={`p-2 rounded ${
                            option.id === question.correctAnswer
                              ? 'bg-green-100 border border-green-300'
                              : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                                ? 'bg-red-100 border border-red-300'
                                : 'bg-gray-50 border border-gray-200'
                          }`}>
                            <span className={`${
                              option.id === question.correctAnswer
                                ? 'font-medium text-green-800'
                                : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                                  ? 'font-medium text-red-800'
                                  : 'text-gray-700'
                            }`}>
                              {option.text} {option.id === question.correctAnswer && '✓'}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="text-sm text-gray-600 mt-3">
                        <span className="font-medium">Explanation:</span> {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
              <Link href="/simulated-exam" className="px-6 py-2 bg-primary text-white rounded-md hover:bg-blue-700 font-medium mr-4">
                Back to Exam Selection
              </Link>
              <button 
                onClick={() => {
                  setExamMode('intro');
                  setSelectedAnswers({});
                  setFlaggedQuestions([]);
                  setTimeRemaining(3.5 * 60 * 60);
                  setActiveQuestion(0);
                }}
                className="px-6 py-2 border border-primary text-primary rounded-md hover:bg-blue-50 font-medium"
              >
                Retake Exam
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
} 