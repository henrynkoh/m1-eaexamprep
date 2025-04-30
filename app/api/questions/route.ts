import { NextResponse } from 'next/server';

// Sample data - In a real app, this would come from a database
const questions = [
  {
    id: '1',
    text: 'Which of the following is considered earned income for tax purposes?',
    options: [
      { id: 'a', text: 'Interest income from savings accounts' },
      { id: 'b', text: 'Dividends from stocks' },
      { id: 'c', text: 'Wages and salaries from employment' },
      { id: 'd', text: 'Pension distributions' }
    ],
    correctAnswerId: 'c',
    explanation: 'Earned income includes wages, salaries, tips, and other taxable employee compensation. Interest, dividends, and pension distributions are considered unearned income.',
    category: 'Part1',
    taxLawYear: 2025
  },
  {
    id: '2',
    text: 'Under the 2025 tax law, what is the standard deduction for a single filer?',
    options: [
      { id: 'a', text: '$12,950' },
      { id: 'b', text: '$13,850' },
      { id: 'c', text: '$14,600' },
      { id: 'd', text: '$15,250' }
    ],
    correctAnswerId: 'c',
    explanation: 'For 2025, the standard deduction for single filers has been increased to $14,600, reflecting both inflation adjustments and changes in tax law. This is an increase from the 2024 amount of $13,850.',
    category: 'Part1',
    taxLawYear: 2025
  },
  {
    id: '3',
    text: 'Which form is used by partnerships to report income, deductions, and other tax items?',
    options: [
      { id: 'a', text: 'Form 1040' },
      { id: 'b', text: 'Form 1120' },
      { id: 'c', text: 'Form 1065' },
      { id: 'd', text: 'Form 1120S' }
    ],
    correctAnswerId: 'c',
    explanation: 'Form 1065 (U.S. Return of Partnership Income) is used by partnerships to report income, deductions, gains, losses, etc. Form 1040 is for individual income tax returns, Form 1120 is for C corporations, and Form 1120S is for S corporations.',
    category: 'Part2',
    taxLawYear: 2024
  },
  {
    id: '4',
    text: 'According to Circular 230, which of the following actions may result in disciplinary action against an Enrolled Agent?',
    options: [
      { id: 'a', text: 'Charging reasonable fees for services' },
      { id: 'b', text: 'Providing a client with a copy of their tax return' },
      { id: 'c', text: 'Failing to file a personal tax return' },
      { id: 'd', text: 'Recommending a legitimate tax deduction' }
    ],
    correctAnswerId: 'c',
    explanation: 'According to Circular 230 (which governs practice before the IRS), willfully failing to file federal tax returns can be grounds for discipline against an EA. This is considered disreputable conduct that may result in censure, suspension, or disbarment from practice.',
    category: 'Part3',
    taxLawYear: 2023
  },
  {
    id: '5',
    text: 'Under the 2025 tax law changes, what is the maximum remote work deduction allowed for self-employed individuals?',
    options: [
      { id: 'a', text: '$1,500' },
      { id: 'b', text: '$2,500' },
      { id: 'c', text: '$5,000' },
      { id: 'd', text: 'No specific limit, subject to regular business expense rules' }
    ],
    correctAnswerId: 'd',
    explanation: 'The 2025 tax law does not impose a specific dollar limit on remote work deductions for self-employed individuals. These expenses remain subject to the regular business expense rules under Section 162, requiring them to be ordinary and necessary expenses in carrying on a trade or business.',
    category: 'Part2',
    taxLawYear: 2025
  }
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  // Filter parameters
  const category = searchParams.get('category');
  const year = searchParams.get('year');
  const limit = searchParams.get('limit') ? parseInt(searchParams.get('limit') as string) : undefined;
  
  let filteredQuestions = [...questions];
  
  // Apply filters
  if (category) {
    filteredQuestions = filteredQuestions.filter(q => q.category === category);
  }
  
  if (year) {
    const yearNum = parseInt(year);
    filteredQuestions = filteredQuestions.filter(q => q.taxLawYear === yearNum);
  }
  
  // Apply limit
  if (limit && limit > 0) {
    filteredQuestions = filteredQuestions.slice(0, limit);
  }
  
  return NextResponse.json(filteredQuestions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a real app, validate the data and save to database
    // For now, just return success with the received data
    
    return NextResponse.json({ 
      success: true, 
      message: 'Question received (not actually saved in this demo)',
      data: body 
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process question' },
      { status: 400 }
    );
  }
} 