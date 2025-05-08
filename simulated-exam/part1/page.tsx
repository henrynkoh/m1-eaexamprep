"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

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

export default function SimulatedExamPart1Page() {
  // State for exam simulation
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
  const [timeRemaining, setTimeRemaining] = useState(3.5 * 60 * 60); // 3.5 hours in seconds
  const [examMode, setExamMode] = useState<'intro' | 'exam' | 'completed'>('intro');
  
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
  
  // Sample exam questions (would be 100 in production)
  const examQuestions: ExamQuestion[] = [
    {
      id: 0,
      text: "John, a single taxpayer, had wages of $82,000 and received $3,000 of qualified dividends during the tax year 2025. What is the amount of qualified dividends that will be taxed at 0%?",
      options: [
        { id: "a", text: "$0" },
        { id: "b", text: "$1,400" },
        { id: "c", text: "$3,000" },
        { id: "d", text: "$2,100" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, single taxpayers with taxable income up to $49,500 can receive qualified dividends at the 0% rate. John's taxable income after the standard deduction ($15,200) is $66,800, which exceeds this threshold. The amount taxed at 0% is calculated as $49,500 - ($82,000 - $15,200) = $1,400. [IRC §1(h)(1)(B); Rev. Proc. 2024-xx]"
    },
    {
      id: 1,
      text: "Mary, age 67, is claimed as a dependent on her son's tax return for 2025. What is her standard deduction amount?",
      options: [
        { id: "a", text: "$15,200" },
        { id: "b", text: "$1,650" },
        { id: "c", text: "$1,650 or her earned income plus $450, whichever is greater, but not to exceed $15,200" },
        { id: "d", text: "$17,300" }
      ],
      correctAnswer: "c",
      explanation: "When someone is claimed as a dependent on another taxpayer's return for 2025, their standard deduction is limited to the greater of $1,650 or their earned income plus $450, but cannot exceed the basic standard deduction amount ($15,200 for 2025). [IRC §63(c)(5); Rev. Proc. 2024-xx]"
    },
    {
      id: 2,
      text: "Which of the following is NOT considered earned income for the purposes of the Earned Income Tax Credit (EITC) for tax year 2025?",
      options: [
        { id: "a", text: "Wages, salaries, and tips" },
        { id: "b", text: "Net earnings from self-employment" },
        { id: "c", text: "Alimony received" },
        { id: "d", text: "Union strike benefits" }
      ],
      correctAnswer: "c",
      explanation: "Alimony received is not considered earned income for EITC purposes for 2025. Earned income includes wages, salaries, tips, net earnings from self-employment, and union strike benefits. Alimony is considered unearned income. Note that for divorces executed after 2018, alimony is not taxable to the recipient. [IRC §32(c)(2); IRS Publication 596]"
    },
    {
      id: 3,
      text: "Tom has a traditional IRA and wants to convert it to a Roth IRA in 2025. He is 45 years old. Which of the following statements is true regarding this conversion?",
      options: [
        { id: "a", text: "Tom will pay a 10% early withdrawal penalty on the converted amount" },
        { id: "b", text: "Tom will owe income tax on the converted amount" },
        { id: "c", text: "Tom must convert the entire traditional IRA balance" },
        { id: "d", text: "Tom can only convert $7,500 per year" }
      ],
      correctAnswer: "b",
      explanation: "When converting a traditional IRA to a Roth IRA in 2025, the taxpayer must include the converted amount in their gross income for the year of conversion. However, there is no 10% early withdrawal penalty for a conversion, even if the taxpayer is under 59½. [IRC §408A(d)(3); Treas. Reg. §1.408A-4, Q&A-1]"
    },
    {
      id: 4,
      text: "Which of the following filing statuses has the lowest standard deduction for 2025?",
      options: [
        { id: "a", text: "Single" },
        { id: "b", text: "Married Filing Jointly" },
        { id: "c", text: "Head of Household" },
        { id: "d", text: "Married Filing Separately" }
      ],
      correctAnswer: "d",
      explanation: "For 2025, the standard deduction amounts are: Married Filing Jointly: $30,400; Head of Household: $22,800; Single: $15,200; and Married Filing Separately: $15,200. While Single and Married Filing Separately have the same amount, Married Filing Separately is considered the lowest because it's typically less advantageous than filing Single. [IRC §63(c); Rev. Proc. 2024-xx]"
    },
    {
      id: 5,
      text: "What is the standard deduction for a head of household filer for 2025?",
      options: [
        { id: "a", text: "$21,300" },
        { id: "b", text: "$22,800" },
        { id: "c", text: "$30,400" },
        { id: "d", text: "$15,200" }
      ],
      correctAnswer: "b",
      explanation: "The standard deduction for head of household filing status for 2025 is projected to be $22,800. [IRC §63(c)(2); Rev. Proc. 2024-xx]"
    },
    {
      id: 6,
      text: "What is the maximum Child Tax Credit for a qualifying child under age 17 for tax year 2025?",
      options: [
        { id: "a", text: "$1,600" },
        { id: "b", text: "$2,000" },
        { id: "c", text: "$3,000" },
        { id: "d", text: "$3,600" }
      ],
      correctAnswer: "b",
      explanation: "The Child Tax Credit for 2025 is $2,000 per qualifying child under 17, with up to $1,700 being refundable as the Additional Child Tax Credit. Note that after the Tax Cuts and Jobs Act provisions sunset at the end of 2025, there may be changes to this credit for future tax years. [IRC §24(a), §24(h); Rev. Proc. 2024-xx]"
    },
    {
      id: 7,
      text: "What is the income threshold where the Child Tax Credit begins to phase out for married filing jointly in 2025?",
      options: [
        { id: "a", text: "$200,000" },
        { id: "b", text: "$400,000" },
        { id: "c", text: "$150,000" },
        { id: "d", text: "$110,000" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, the Child Tax Credit begins to phase out at $400,000 of modified adjusted gross income for married couples filing jointly. This higher threshold was established by the Tax Cuts and Jobs Act and remains in effect through 2025. [IRC §24(b)(2); IRC §24(h)(3)]"
    },
    {
      id: 8,
      text: "What is the standard deduction for a single taxpayer for 2025?",
      options: [
        { id: "a", text: "$14,600" },
        { id: "b", text: "$15,200" },
        { id: "c", text: "$16,100" },
        { id: "d", text: "$13,850" }
      ],
      correctAnswer: "b",
      explanation: "The standard deduction for single taxpayers and married filing separately is projected to be $15,200 for the 2025 tax year. [IRC §63(c)(2); Rev. Proc. 2024-xx]"
    },
    {
      id: 9,
      text: "What is the standard deduction for married filing jointly for 2025?",
      options: [
        { id: "a", text: "$27,700" },
        { id: "b", text: "$30,400" },
        { id: "c", text: "$29,200" },
        { id: "d", text: "$31,500" }
      ],
      correctAnswer: "b",
      explanation: "The standard deduction for married couples filing jointly is projected to be $30,400 for the 2025 tax year. [IRC §63(c)(2); Rev. Proc. 2024-xx]"
    },
    {
      id: 10,
      text: "For 2025, what is the additional standard deduction amount for taxpayers who are 65 or older or blind?",
      options: [
        { id: "a", text: "$1,650 for unmarried individuals and $1,350 for married individuals" },
        { id: "b", text: "$2,000 for unmarried individuals and $1,650 for married individuals" },
        { id: "c", text: "$1,500 for unmarried individuals and $1,200 for married individuals" },
        { id: "d", text: "$2,200 for unmarried individuals and $1,850 for married individuals" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, the additional standard deduction for age (65 or older) or blindness is projected to be $2,000 for unmarried taxpayers and $1,650 for each qualifying spouse for married taxpayers. [IRC §63(f); Rev. Proc. 2024-xx]"
    },
    {
      id: 11,
      text: "What is the maximum income a single taxpayer can earn in 2025 to still qualify for the full Earned Income Tax Credit with no qualifying children?",
      options: [
        { id: "a", text: "$10,800" },
        { id: "b", text: "$12,500" },
        { id: "c", text: "$19,800" },
        { id: "d", text: "$9,250" }
      ],
      correctAnswer: "c",
      explanation: "For 2025, a single taxpayer with no qualifying children can earn up to approximately $19,800 and still qualify for the full Earned Income Tax Credit. [IRC §32; Rev. Proc. 2024-xx]"
    },
    {
      id: 12,
      text: "What is the maximum amount of the Child and Dependent Care Credit for one qualifying individual in 2025?",
      options: [
        { id: "a", text: "$1,200" },
        { id: "b", text: "$2,100" },
        { id: "c", text: "$3,050" },
        { id: "d", text: "$4,000" }
      ],
      correctAnswer: "a",
      explanation: "The maximum Child and Dependent Care Credit for one qualifying individual is up to 35% of $3,000 in qualifying expenses, which equals $1,050 for 2025. With inflation adjustments, the maximum amount may be approximately $1,200. The percentage decreases as AGI increases. [IRC §21; Rev. Proc. 2024-xx]"
    },
    {
      id: 13,
      text: "What is the standard mileage rate for medical and moving purposes projected for 2025?",
      options: [
        { id: "a", text: "14 cents per mile" },
        { id: "b", text: "25 cents per mile" },
        { id: "c", text: "70 cents per mile" },
        { id: "d", text: "65 cents per mile" }
      ],
      correctAnswer: "b",
      explanation: "The standard mileage rate for medical and moving purposes (limited to active duty military) is projected to be approximately 25 cents per mile for 2025, assuming modest increases from the 2023 rate of 22 cents. [IRC §213; Notice 2025-xx]"
    },
    {
      id: 14,
      text: "What is the maximum amount that can be contributed to a Health Savings Account (HSA) for family coverage in 2025?",
      options: [
        { id: "a", text: "$4,150" },
        { id: "b", text: "$8,300" },
        { id: "c", text: "$9,100" },
        { id: "d", text: "$7,750" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, the maximum contribution to a Health Savings Account (HSA) for family coverage is projected to be $8,300, based on inflation adjustments from the 2023 amount of $7,750. [IRC §223(b)(2); Rev. Proc. 2024-xx]"
    },
    {
      id: 15,
      text: "Which of the following expenses is NOT deductible as a medical expense for the 2025 tax year?",
      options: [
        { id: "a", text: "Prescription medications" },
        { id: "b", text: "Health insurance premiums" },
        { id: "c", text: "Over-the-counter vitamins" },
        { id: "d", text: "Dental treatment" }
      ],
      correctAnswer: "c",
      explanation: "Over-the-counter vitamins are not deductible as medical expenses for 2025 unless prescribed by a doctor for a specific medical condition. General health supplements are considered personal, not medical expenses. [IRC §213(d); IRS Publication 502]"
    },
    {
      id: 16,
      text: "For 2025, what percentage of adjusted gross income (AGI) must medical expenses exceed to be deductible as an itemized deduction?",
      options: [
        { id: "a", text: "7.5%" },
        { id: "b", text: "10%" },
        { id: "c", text: "2%" },
        { id: "d", text: "5%" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, medical expenses are projected to be deductible as an itemized deduction only to the extent they exceed 10% of adjusted gross income (AGI). The 7.5% threshold was made permanent by the Consolidated Appropriations Act of 2021, but the Tax Cuts and Jobs Act provisions are scheduled to sunset at the end of 2025, potentially reverting to the 10% threshold. [IRC §213(a); Tax Cuts and Jobs Act provisions expiring]"
    },
    {
      id: 17,
      text: "What is the maximum amount of student loan interest that can be deducted in 2025?",
      options: [
        { id: "a", text: "$2,000" },
        { id: "b", text: "$2,500" },
        { id: "c", text: "$4,000" },
        { id: "d", text: "$5,000" }
      ],
      correctAnswer: "b",
      explanation: "The maximum student loan interest deduction remains at $2,500 per return for 2025. This amount is not indexed for inflation. This is an above-the-line deduction, so it can be taken even if the taxpayer does not itemize deductions. [IRC §221; IRS Publication 970]"
    },
    {
      id: 18,
      text: "What is the maximum income level for a single taxpayer to qualify for the full American Opportunity Tax Credit in 2025?",
      options: [
        { id: "a", text: "$80,000" },
        { id: "b", text: "$90,000" },
        { id: "c", text: "$75,000" },
        { id: "d", text: "$85,000" }
      ],
      correctAnswer: "a",
      explanation: "For 2025, the American Opportunity Tax Credit begins to phase out for single taxpayers with modified adjusted gross income (MAGI) over $80,000. The credit is completely phased out at $90,000 MAGI. These thresholds are not indexed for inflation. [IRC §25A(i)(4); IRS Publication 970]"
    },
    {
      id: 19,
      text: "What is the maximum contribution limit for a traditional or Roth IRA in 2025 for individuals under age 50?",
      options: [
        { id: "a", text: "$6,000" },
        { id: "b", text: "$6,500" },
        { id: "c", text: "$7,000" },
        { id: "d", text: "$7,500" }
      ],
      correctAnswer: "c",
      explanation: "For 2025, the maximum contribution limit for a traditional or Roth IRA is projected to be $7,000 for individuals under age 50, based on inflation adjustments from the 2023 amount of $6,500. [IRC §219(b)(5); Notice 2024-xx]"
    },
    {
      id: 20,
      text: "What is the catch-up contribution limit for individuals age 50 or older contributing to a traditional or Roth IRA in 2025?",
      options: [
        { id: "a", text: "$500" },
        { id: "b", text: "$1,000" },
        { id: "c", text: "$1,500" },
        { id: "d", text: "$2,000" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, individuals age 50 or older can make an additional catch-up contribution of $1,000 to their traditional or Roth IRA, bringing their total contribution limit to $8,000. This catch-up amount is not indexed for inflation. [IRC §219(b)(5)(B); IRC §414(v)]"
    },
    {
      id: 21,
      text: "A taxpayer paid $5,500 in qualified education expenses for their dependent child's college tuition in 2025. What is the maximum Lifetime Learning Credit they can claim?",
      options: [
        { id: "a", text: "$1,100" },
        { id: "b", text: "$2,000" },
        { id: "c", text: "$2,200" },
        { id: "d", text: "$2,750" }
      ],
      correctAnswer: "a",
      explanation: "The Lifetime Learning Credit for 2025 is equal to 20% of qualified education expenses up to $10,000. For $5,500 in expenses, the credit would be $1,100 (20% of $5,500). [IRC §25A(c); IRS Publication 970]"
    },
    {
      id: 22,
      text: "What is the maximum qualified adoption expense eligible for the Adoption Credit in 2025?",
      options: [
        { id: "a", text: "$14,890" },
        { id: "b", text: "$16,250" },
        { id: "c", text: "$17,500" },
        { id: "d", text: "$18,900" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, the maximum qualified adoption expense eligible for the Adoption Credit is projected to be approximately $16,250 per eligible child, based on inflation adjustments from the 2023 amount of $14,890. [IRC §23; Rev. Proc. 2024-xx]"
    },
    {
      id: 23,
      text: "What is the standard deduction for a taxpayer who can be claimed as a dependent and has earned income of $7,000 for 2025?",
      options: [
        { id: "a", text: "$1,650" },
        { id: "b", text: "$7,450" },
        { id: "c", text: "$8,850" },
        { id: "d", text: "$15,200" }
      ],
      correctAnswer: "b",
      explanation: "For a dependent with earned income in 2025, the standard deduction is the greater of $1,650 or earned income plus $450, but not to exceed $15,200 (the standard deduction for single filers). With earned income of $7,000, the standard deduction would be $7,450 ($7,000 + $450). [IRC §63(c)(5); Rev. Proc. 2024-xx]"
    },
    {
      id: 24,
      text: "What is the projected Education Loan Interest Deduction phaseout range for married taxpayers filing jointly in 2025?",
      options: [
        { id: "a", text: "$155,000 to $185,000" },
        { id: "b", text: "$170,000 to $200,000" },
        { id: "c", text: "$145,000 to $175,000" },
        { id: "d", text: "$180,000 to $210,000" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, the student loan interest deduction is projected to phase out for married taxpayers filing jointly with MAGI between approximately $170,000 and $200,000, based on inflation adjustments from the 2023 range of $155,000 to $185,000. [IRC §221(b)(2)(B); Rev. Proc. 2024-xx]"
    },
    {
      id: 25,
      text: "For 2025, what is the projected annual gift tax exclusion amount per donee?",
      options: [
        { id: "a", text: "$17,000" },
        { id: "b", text: "$18,000" },
        { id: "c", text: "$19,000" },
        { id: "d", text: "$20,000" }
      ],
      correctAnswer: "c",
      explanation: "The annual gift tax exclusion for 2025 is projected to be $19,000 per donee, based on inflation adjustments from the 2023 amount of $17,000. This means an individual can give up to $19,000 to any number of people without reporting the gifts or paying gift tax. [IRC §2503(b); Rev. Proc. 2024-xx]"
    },
    {
      id: 26,
      text: "What is the amount of the personal exemption deduction projected for tax year 2025?",
      options: [
        { id: "a", text: "$0" },
        { id: "b", text: "$4,700" },
        { id: "c", text: "$5,000" },
        { id: "d", text: "$5,500" }
      ],
      correctAnswer: "a",
      explanation: "The personal exemption deduction remains at $0 for tax year 2025. The Tax Cuts and Jobs Act suspended personal exemptions from 2018 through 2025. Note that after 2025, personal exemptions may be reinstated unless Congress takes action. [IRC §151(d)(5); Tax Cuts and Jobs Act of 2017]"
    },
    {
      id: 27,
      text: "What is the projected foreign earned income exclusion amount for 2025?",
      options: [
        { id: "a", text: "$120,000" },
        { id: "b", text: "$129,500" },
        { id: "c", text: "$135,000" },
        { id: "d", text: "$142,000" }
      ],
      correctAnswer: "c",
      explanation: "For 2025, the maximum foreign earned income exclusion is projected to be approximately $135,000, based on inflation adjustments from the 2023 amount of $120,000. This exclusion applies to U.S. citizens and resident aliens who live and work abroad and meet certain requirements. [IRC §911(b)(2)(D); Rev. Proc. 2024-xx]"
    },
    {
      id: 28,
      text: "For tax year 2025, what is the projected maximum income a taxpayer can have to claim the maximum Retirement Savings Contribution Credit (Saver's Credit) as a single filer?",
      options: [
        { id: "a", text: "$21,750" },
        { id: "b", text: "$24,000" },
        { id: "c", text: "$25,500" },
        { id: "d", text: "$23,000" }
      ],
      correctAnswer: "b",
      explanation: "For 2025, a single filer can claim the maximum 50% Saver's Credit if their adjusted gross income (AGI) does not exceed approximately $24,000, based on inflation adjustments from the 2023 threshold of $21,750. [IRC §25B; Rev. Proc. 2024-xx]"
    },
    {
      id: 29,
      text: "What is the standard mileage rate for charitable purposes for 2025?",
      options: [
        { id: "a", text: "14 cents per mile" },
        { id: "b", text: "25 cents per mile" },
        { id: "c", text: "68 cents per mile" },
        { id: "d", text: "72 cents per mile" }
      ],
      correctAnswer: "a",
      explanation: "The standard mileage rate for charitable purposes remains at 14 cents per mile for 2025. This rate is set by statute and does not change annually with inflation. [IRC §170(i); Notice 2025-xx]"
    },
    {
      id: 30,
      text: "What is the projected standard mileage rate for business use of an automobile for 2025?",
      options: [
        { id: "a", text: "65.5 cents per mile" },
        { id: "b", text: "68 cents per mile" },
        { id: "c", text: "72 cents per mile" },
        { id: "d", text: "75.5 cents per mile" }
      ],
      correctAnswer: "c",
      explanation: "The standard mileage rate for the business use of a car, van, pickup, or panel truck is projected to be approximately 72 cents per mile for 2025, based on inflation adjustments from the 2023 rate of 65.5 cents per mile. [IRC §162; Notice 2025-xx]"
    }
    // In production, would include 100 questions total
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

  // Calculate score for completed exam
  const calculateScore = (): { score: number; total: number; percentage: number } => {
    let correct = 0;
    
    examQuestions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    
    return {
      score: correct,
      total: examQuestions.length,
      percentage: Math.round((correct / examQuestions.length) * 100)
    };
  };
  
  // Rendering different exam modes
  if (examMode === 'intro') {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">100 questions • 3.5 hours</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Exam Instructions</h2>
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
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium"
              >
                Begin Exam
              </button>
            </div>
          </div>
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
            <h1 className="text-2xl font-bold text-blue-600">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">100 questions • {formatTime(timeRemaining)} remaining</p>
          </header>
          
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main exam content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <div className="flex justify-between items-center border-b pb-4 mb-6">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3 font-medium">
                      {activeQuestion + 1}
                    </div>
                    <span className="text-gray-500 text-sm">Question {activeQuestion + 1} of {examQuestions.length}</span>
                  </div>
                  <div className="flex items-center">
                    <button 
                      onClick={() => toggleFlagQuestion(activeQuestion)}
                      className={`mr-4 p-1 rounded-full ${
                        flaggedQuestions.includes(activeQuestion) 
                          ? 'text-yellow-500 bg-yellow-50' 
                          : 'text-gray-400 hover:text-yellow-500'
                      }`}
                      aria-label="Flag this question"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill={flaggedQuestions.includes(activeQuestion) ? "currentColor" : "none"} viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </button>
                    <div className="text-blue-600 font-medium">{formatTime(timeRemaining)}</div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h2 className="text-lg font-medium mb-6">
                    {question.text}
                  </h2>
                  
                  <div className="space-y-3">
                    {question.options.map((option) => (
                      <div 
                        key={option.id}
                        className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                          selectedAnswers[activeQuestion] === option.id 
                            ? 'border-blue-500 bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        onClick={() => handleAnswerSelect(activeQuestion, option.id)}
                      >
                        <label className="flex items-start cursor-pointer">
                          <div className="flex items-center h-5">
                            <input
                              type="radio"
                              name={`question-${activeQuestion}`}
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                              checked={selectedAnswers[activeQuestion] === option.id}
                              onChange={() => handleAnswerSelect(activeQuestion, option.id)}
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
                    onClick={() => navigateToQuestion(Math.max(0, activeQuestion - 1))}
                    className={`px-4 py-2 rounded-md ${
                      activeQuestion === 0 
                        ? 'bg-gray-200 text-gray-500 cursor-not-allowed' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <button
                    onClick={() => navigateToQuestion(Math.min(examQuestions.length - 1, activeQuestion + 1))}
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
            
            {/* Question Navigator */}
            <div className="lg:w-64">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h3 className="text-lg font-medium text-gray-800 mb-4">Question Navigator</h3>
                <div className="grid grid-cols-5 gap-2">
                  {examQuestions.map((_, i) => (
                    <button 
                      key={i} 
                      onClick={() => navigateToQuestion(i)}
                      className={`h-10 w-10 rounded-md flex items-center justify-center border text-sm
                        ${i === activeQuestion ? 'bg-blue-600 text-white' : ''}
                        ${selectedAnswers[i] && i !== activeQuestion ? 'bg-green-100 border-green-300' : ''}
                        ${!selectedAnswers[i] && i !== activeQuestion ? 'border-gray-300 hover:bg-gray-50' : ''}
                        ${flaggedQuestions.includes(i) ? 'ring-2 ring-yellow-400' : ''}
                      `}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-500">Answered:</span>
                    <span className="text-sm font-medium">
                      {Object.keys(selectedAnswers).length}/{examQuestions.length}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-500">Flagged:</span>
                    <span className="text-sm font-medium">
                      {flaggedQuestions.length}
                    </span>
                  </div>
                  
                  <div className="flex justify-center mt-6">
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
          </div>
        </div>
      </div>
    );
  }
  
  // Completed mode
  if (examMode === 'completed') {
    const score = calculateScore();
    const isPassing = score.percentage >= 70;
    
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <header className="mb-6">
            <h1 className="text-2xl font-bold text-blue-600">Part 1: Individuals Exam</h1>
            <p className="text-gray-600 mt-1">Results</p>
          </header>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-600 mb-6">Your Exam Results</h2>
            
            <div className="flex flex-col items-center justify-center mb-8">
              <div className={`text-4xl font-bold mb-2 ${isPassing ? 'text-green-600' : 'text-red-600'}`}>
                {score.percentage}%
              </div>
              <div className="text-lg text-gray-700">
                You answered {score.score} out of {score.total} questions correctly.
              </div>
              <div className={`mt-3 text-lg font-medium ${isPassing ? 'text-green-600' : 'text-red-600'}`}>
                {isPassing ? 'Congratulations! You passed.' : 'You did not pass. Keep studying and try again.'}
              </div>
            </div>
            
            <div className="space-y-8 mt-8">
              <h3 className="font-semibold text-lg text-blue-600 border-b pb-2">Question Review</h3>
              
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
                          <div key={option.id} className={`pl-2 py-1 border-l-4 ${
                            option.id === question.correctAnswer
                              ? 'border-green-500 bg-green-50'
                              : selectedAnswers[question.id] === option.id && option.id !== question.correctAnswer
                                ? 'border-red-500 bg-red-50'
                                : 'border-transparent'
                          }`}>
                            <span className="font-medium">{option.id.toUpperCase()}:</span> {option.text}
                            {option.id === question.correctAnswer && (
                              <span className="ml-2 text-green-600 text-sm font-medium">
                                ✓ Correct Answer
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-3 text-sm bg-blue-50 p-3 rounded-md text-blue-700">
                        <p className="font-medium">Explanation:</p>
                        <p>{question.explanation}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200 flex justify-center">
              <Link href="/simulated-exam" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium mr-4">
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
                className="px-6 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 font-medium"
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