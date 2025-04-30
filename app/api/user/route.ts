import { NextResponse } from 'next/server';

// Sample user data - In a real app, this would come from a database
const users = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    progress: {
      overallScore: 68,
      quizzesTaken: 12,
      questionsAnswered: 245,
      topicsStudied: 8,
      scores: [
        { date: '2023-11-01', score: 55 },
        { date: '2023-11-05', score: 60 },
        { date: '2023-11-10', score: 63 },
        { date: '2023-11-15', score: 68 },
      ],
      predictedScore: 75,
      topics: [
        {
          id: '101',
          title: 'Individual Income Tax Basics',
          category: 'Part1',
          mastery: 72,
          questionsCount: 50,
          completedCount: 35
        },
        {
          id: '102',
          title: 'Itemized Deductions',
          category: 'Part1',
          mastery: 65,
          questionsCount: 45,
          completedCount: 30
        },
        {
          id: '103',
          title: 'Business Entity Formation',
          category: 'Part2',
          mastery: 45,
          questionsCount: 40,
          completedCount: 20
        },
        {
          id: '104',
          title: 'Partnership Taxation',
          category: 'Part2',
          mastery: 38,
          questionsCount: 50,
          completedCount: 15
        },
        {
          id: '105',
          title: 'Representation Practices',
          category: 'Part3',
          mastery: 55,
          questionsCount: 30,
          completedCount: 18
        }
      ]
    }
  }
];

// Get user data by ID
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const userId = searchParams.get('userId');
  
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required' }, { status: 400 });
  }
  
  const user = users.find(u => u.id === userId);
  
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }
  
  return NextResponse.json(user);
}

// Update user progress
export async function POST(request: Request) {
  try {
    const { userId, quizResults } = await request.json();
    
    if (!userId || !quizResults) {
      return NextResponse.json(
        { error: 'User ID and quiz results are required' },
        { status: 400 }
      );
    }
    
    // In a real app, validate and update the user's progress in the database
    // For this demo, we'll just return success with the data received
    
    return NextResponse.json({
      success: true,
      message: 'Progress updated (not actually saved in this demo)',
      data: { userId, quizResults }
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update progress' },
      { status: 400 }
    );
  }
}