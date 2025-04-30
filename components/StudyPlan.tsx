import React from 'react';
import Link from 'next/link';

interface StudyTopic {
  id: string;
  title: string;
  category: 'Part1' | 'Part2' | 'Part3';
  mastery: number; // 0-100
  questionsCount: number;
  completedCount: number;
}

interface StudyPlanProps {
  topics: StudyTopic[];
  userDailyGoal?: number;
}

const StudyPlan: React.FC<StudyPlanProps> = ({ 
  topics, 
  userDailyGoal = 20 
}) => {
  // Sort topics by mastery (ascending) to prioritize weak areas
  const sortedTopics = [...topics].sort((a, b) => a.mastery - b.mastery);
  
  // Calculate the total mastery percentage
  const totalMastery = topics.length > 0 
    ? topics.reduce((sum, topic) => sum + topic.mastery, 0) / topics.length 
    : 0;
  
  // Get recommended topics (lowest mastery first, up to 3)
  const recommendedTopics = sortedTopics.slice(0, 3);

  // Progress bar color based on mastery level
  const getProgressColor = (mastery: number) => {
    if (mastery < 40) return 'bg-red-500';
    if (mastery < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <div className="card">
      <h2 className="text-xl font-semibold mb-4">Your Adaptive Study Plan</h2>
      
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium">Overall Mastery</span>
          <span className="text-sm font-medium">{Math.round(totalMastery)}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div 
            className={`h-2.5 rounded-full ${getProgressColor(totalMastery)}`} 
            style={{ width: `${totalMastery}%` }}
          ></div>
        </div>
      </div>
      
      <h3 className="font-medium text-gray-800 mb-3">Recommended Focus Areas</h3>
      
      <div className="space-y-4 mb-6">
        {recommendedTopics.map((topic) => (
          <div key={topic.id} className="border rounded-md p-3">
            <div className="flex justify-between mb-1">
              <h4 className="font-medium">{topic.title}</h4>
              <span className={`text-xs px-2 py-1 rounded-full ${
                topic.category === 'Part1' ? 'bg-blue-100 text-blue-800' :
                topic.category === 'Part2' ? 'bg-purple-100 text-purple-800' :
                'bg-green-100 text-green-800'
              }`}>
                {topic.category}
              </span>
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Mastery</span>
              <span className="text-sm font-medium">{topic.mastery}%</span>
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
              <div 
                className={`h-2 rounded-full ${getProgressColor(topic.mastery)}`} 
                style={{ width: `${topic.mastery}%` }}
              ></div>
            </div>
            
            <div className="text-sm text-gray-600 mb-3">
              {topic.completedCount} of {topic.questionsCount} questions completed
            </div>
            
            <Link 
              href={`/practice/${topic.id}`} 
              className="btn-primary text-sm py-1.5 px-3 inline-block"
            >
              Practice Now
            </Link>
          </div>
        ))}
      </div>
      
      <div className="border-t pt-4">
        <h3 className="font-medium text-gray-800 mb-3">Today's Goal</h3>
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
          <div>
            <p className="text-sm font-medium">Complete {userDailyGoal} questions today</p>
            <Link 
              href="/daily-challenge"
              className="text-sm text-primary hover:underline"
            >
              Start Daily Challenge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyPlan; 