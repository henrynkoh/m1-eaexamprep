"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

// Define types for our data structures
type VideoSection = {
  id: number;
  title: string;
  youtubeId: string;
  description: string;
};

type Option = {
  id: string;
  text: string;
};

type ExamQuestion = {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
  explanation: string;
};

export default function Part1ExamPage() {
  // State for exam simulation
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState<number>(3.5 * 60 * 60); // 3.5 hours in seconds
  const [examMode, setExamMode] = useState<'intro' | 'exam' | 'review' | 'completed'>('intro');
  const [activeVideoSection, setActiveVideoSection] = useState<number>(0);
  
  // Define the common practice questions with tax code citations
  const practiceQuestionsWithCitations = [
    {
      id: 1,
      question: "What is the standard deduction for a head of household filer for 2025?",
      answer: "$20,800",
      explanation: "The standard deduction for head of household filing status increased to $20,800 for the 2025 tax year per IRC §63(c)(2)(B) and Rev. Proc. 2023-34, adjusted for inflation."
    },
    {
      id: 2,
      question: "What is the maximum Child Tax Credit for a qualifying child under age 17?",
      answer: "$2,000",
      explanation: "The Child Tax Credit is $2,000 per qualifying child under 17, with up to $1,600 being refundable for tax year 2025 under IRC §24(a) and (h)(2)."
    },
    {
      id: 3,
      question: "What is the income threshold where the Child Tax Credit begins to phase out for married filing jointly?",
      answer: "$400,000",
      explanation: "The Child Tax Credit begins to phase out at $400,000 MAGI for married couples filing jointly per IRC §24(h)(3), at a rate of 5% for each $1,000 over threshold."
    },
    {
      id: 4,
      question: "What is the standard deduction for a single taxpayer for 2025?",
      answer: "$13,850",
      explanation: "The standard deduction for single taxpayers increased to $13,850 for the 2025 tax year under IRC §63(c)(2)(C) and Rev. Proc. 2023-34, adjusted annually for inflation."
    },
    {
      id: 5,
      question: "What is the standard deduction for married filing jointly for 2025?",
      answer: "$27,700",
      explanation: "The standard deduction for married couples filing jointly increased to $27,700 for the 2025 tax year per IRC §63(c)(2)(A) and Rev. Proc. 2023-34, with inflation adjustments."
    },
    {
      id: 6,
      question: "What is the additional standard deduction amount for taxpayers who are 65 or older or blind?",
      answer: "$1,850 for single and HoH; $1,500 for married",
      explanation: "For 2025, the additional standard deduction is $1,850 for single/HoH and $1,500 for married taxpayers who are 65+ or blind under IRC §63(f) and Rev. Proc. 2023-34."
    },
    {
      id: 7,
      question: "What is the maximum amount of the Earned Income Tax Credit for a taxpayer with three qualifying children in 2025?",
      answer: "$7,430",
      explanation: "The maximum EITC amount for taxpayers with three or more qualifying children is $7,430 for the 2025 tax year per IRC §32 and Rev. Proc. 2023-34."
    },
    {
      id: 8,
      question: "What is the income threshold where the American Opportunity Tax Credit begins to phase out for single filers?",
      answer: "$80,000",
      explanation: "The AOTC begins phasing out at $80,000 MAGI for single taxpayers and is fully phased out at $90,000 under IRC §25A(i)(4), with no inflation adjustment."
    },
    {
      id: 9,
      question: "What is the maximum Child and Dependent Care Credit percentage for 2025?",
      answer: "35%",
      explanation: "The maximum Child and Dependent Care Credit is 35% of qualifying expenses for taxpayers with AGI of $15,000 or less, per IRC §21(a)(2) and (c)."
    },
    {
      id: 10,
      question: "What is the maximum amount of qualified expenses that can be used to calculate the Child and Dependent Care Credit?",
      answer: "$3,000 (one person); $6,000 (two or more)",
      explanation: "The maximum eligible expenses are $3,000 for one qualifying person and $6,000 for two or more qualifying individuals under IRC §21(c) and Treas. Reg. §1.21-2."
    },
    {
      id: 11,
      question: "What is the maximum Lifetime Learning Credit for 2025?",
      answer: "$2,000",
      explanation: "The Lifetime Learning Credit is worth up to $2,000 per tax return (20% of up to $10,000 in qualified education expenses) under IRC §25A(c)(1) and (2)."
    },
    {
      id: 12,
      question: "What is the income threshold where the Lifetime Learning Credit begins to phase out for married filing jointly?",
      answer: "$160,000",
      explanation: "The LLC begins phasing out at $160,000 MAGI for married couples filing jointly and is fully phased out at $180,000 per IRC §25A(d)(2) as modified by ARPA."
    },
    {
      id: 13,
      question: "What is the maximum Adoption Credit for 2025?",
      answer: "$15,950",
      explanation: "The maximum Adoption Credit for 2025 is $15,950 per eligible child under IRC §23(b) and Rev. Proc. 2023-34, adjusted annually for inflation since 2002."
    },
    {
      id: 14,
      question: "What is the income threshold where the Adoption Credit begins to phase out?",
      answer: "$239,230",
      explanation: "The Adoption Credit begins phasing out at $239,230 MAGI and is completely phased out at $279,230 per IRC §23(b)(2) and Rev. Proc. 2023-34."
    },
    {
      id: 15,
      question: "What is the maximum Saver's Credit percentage for low-income taxpayers?",
      answer: "50%",
      explanation: "The Saver's Credit is worth 50% of retirement contributions up to $2,000 ($4,000 if MFJ) for lowest income taxpayers per IRC §25B(a) and (b)."
    },
    {
      id: 16,
      question: "What is the maximum amount of the Additional Child Tax Credit that is refundable for 2025?",
      answer: "$1,600",
      explanation: "Up to $1,600 of the Child Tax Credit is refundable per qualifying child as the Additional Child Tax Credit for 2025 under IRC §24(h)(5) and §24(d)."
    },
    {
      id: 17,
      question: "What is the standard deduction for a taxpayer who can be claimed as a dependent on someone else's return?",
      answer: "Greater of $1,250 or earned income plus $400",
      explanation: "For dependents, the standard deduction is the greater of $1,250 or earned income plus $400, not exceeding basic standard deduction per IRC §63(c)(5) and Rev. Proc. 2023-34."
    },
    {
      id: 18,
      question: "What is the maximum amount of the Premium Tax Credit?",
      answer: "No specific dollar limit",
      explanation: "The Premium Tax Credit has no specific dollar limit and is based on benchmark plan cost minus expected contribution percentage under IRC §36B and Treas. Reg. §1.36B-3."
    },
    {
      id: 19,
      question: "What is the child age requirement for the Child Tax Credit?",
      answer: "Under 17",
      explanation: "A qualifying child for the Child Tax Credit must be under age 17 at the end of the tax year per IRC §24(c)(1) incorporating §152(c) with modification."
    },
    {
      id: 20,
      question: "What is the maximum amount of the Credit for the Elderly or Disabled?",
      answer: "$7,500 (married, both qualifying); $5,000 (single)",
      explanation: "The maximum base amount for the Credit for the Elderly or Disabled is $7,500 for married couples (both qualifying) and $5,000 for single filers under IRC §22(c)(2)."
    },
    {
      id: 21,
      question: "What income threshold must be met to claim the EITC with no qualifying children?",
      answer: "Less than $17,640 ($23,620 if MFJ)",
      explanation: "For 2025, taxpayers with no qualifying children must have income below $17,640 ($23,620 if MFJ) to qualify for EITC per IRC §32(b) and Rev. Proc. 2023-34."
    },
    {
      id: 22,
      question: "What is the maximum American Opportunity Tax Credit?",
      answer: "$2,500",
      explanation: "The American Opportunity Tax Credit is worth up to $2,500 per eligible student (100% of first $2,000 plus 25% of next $2,000) under IRC §25A(i)."
    },
    {
      id: 23,
      question: "How much of the American Opportunity Tax Credit is refundable?",
      answer: "40% (up to $1,000)",
      explanation: "Up to 40% of the American Opportunity Tax Credit (maximum of $1,000) is refundable per IRC §25A(i)(6), unlike the non-refundable Lifetime Learning Credit."
    },
    {
      id: 24,
      question: "What is the minimum age requirement to claim the EITC with no qualifying children?",
      answer: "25 (unless a specified student)",
      explanation: "To claim EITC with no qualifying children, a taxpayer must be at least 25 but under 65, unless a specified student, per IRC §32(c)(1)(A)(ii)(II)."
    },
    {
      id: 25,
      question: "What is the maximum investment income a taxpayer can have and still qualify for the EITC?",
      answer: "$11,000",
      explanation: "For 2025, taxpayers must have investment income of $11,000 or less to qualify for EITC per IRC §32(i) and Rev. Proc. 2023-34, adjusted for inflation."
    },
    {
      id: 26,
      question: "What is the maximum percentage of qualified adoption expenses that can be claimed for the Adoption Credit?",
      answer: "100%",
      explanation: "The Adoption Credit allows taxpayers to claim 100% of qualified adoption expenses, up to the maximum credit amount under IRC §23(a)(1) and Treas. Reg. §1.23-3."
    },
    {
      id: 27,
      question: "What is the age requirement for a qualifying child for the Child and Dependent Care Credit?",
      answer: "Under 13",
      explanation: "A qualifying child for the Child and Dependent Care Credit must be under age 13 when care was provided per IRC §21(b)(1)(A) and Treas. Reg. §1.21-1(b)."
    },
    {
      id: 28,
      question: "What is the maximum Foreign Tax Credit that can be claimed without filing Form 1116?",
      answer: "$300 ($600 if MFJ)",
      explanation: "Taxpayers can claim a Foreign Tax Credit up to $300 ($600 if MFJ) without filing Form 1116 under IRC §904(j) if certain requirements are met."
    },
    {
      id: 29,
      question: "What is the standard mileage rate for medical purposes for 2025?",
      answer: "22 cents per mile",
      explanation: "The standard mileage rate for medical purposes is 22 cents per mile for 2025 under IRC §213(d)(1)(B) and IRS Notice 2023-XX, announced annually."
    },
    {
      id: 30,
      question: "What is the threshold for deducting medical expenses on Schedule A?",
      answer: "7.5% of AGI",
      explanation: "Medical expenses are deductible on Schedule A to the extent they exceed 7.5% of AGI per IRC §213(a), made permanent by the Consolidated Appropriations Act, 2021."
    }
  ];
  
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
  const videoSections: VideoSection[] = [
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
  
  // Sample exam questions (represented as 2 but would be 100 in production)
  const examQuestions: ExamQuestion[] = [
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
      explanation: "For 2025, single taxpayers with taxable income up to $44,625 can receive qualified dividends at the 0% rate. John's taxable income after the standard deduction ($13,850) is $61,150, which exceeds this threshold. The amount taxed at 0% is calculated as $44,625 - ($75,000 - $13,850) = $1,200."
    },
    {
      id: 1,
      text: "Mary, age 67, is claimed as a dependent on her son's tax return. What is her standard deduction amount for 2025?",
      options: [
        { id: "a", text: "$13,850" },
        { id: "b", text: "$1,500" },
        { id: "c", text: "$1,500 or her earned income plus $400, whichever is greater, but not to exceed $13,850" },
        { id: "d", text: "$15,700" }
      ],
      correctAnswer: "c",
      explanation: "When someone is claimed as a dependent on another taxpayer's return, their standard deduction is limited to the greater of $1,500 or their earned income plus $400, but cannot exceed the basic standard deduction amount ($13,850 for 2025)."
    },
    // Note: In production, there would be 100 questions total
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
                          href={`#practice-${video.id}`}
                          className="text-primary hover:underline inline-flex items-center"
                          onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(`practice-${video.id}`);
                            if (element) element.scrollIntoView({ behavior: 'smooth' });
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
          
          {/* Practice Questions Sections - 30 questions per video section */}
          {videoSections.map((video) => (
            <div id={`practice-${video.id}`} key={`practice-${video.id}`} className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-xl font-semibold text-primary mb-6">Top 30 Practice Questions from {video.title}</h2>
              
              <div className="space-y-8">
                {practiceQuestionsWithCitations.map((q) => (
                  <div key={q.id} className="border-b pb-6">
                    <h3 className="font-medium text-lg text-gray-800 mb-2">{q.id}. {q.question}</h3>
                    <p className="text-gray-700 mb-3"><span className="font-medium">Answer:</span> {q.answer}</p>
                    <p className="text-sm text-gray-600"><span className="font-medium">Explanation:</span> {q.explanation}</p>
                  </div>
                ))}
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
                <span className="text-gray-500 text-sm">Question {activeQuestion + 1} of 100</span>
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
              {activeQuestion < 99 ? (
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
              {Array.from({ length: 100 }, (_, i) => (
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
  
  // Default fallback (should never reach here due to conditional rendering)
  return null;
} 