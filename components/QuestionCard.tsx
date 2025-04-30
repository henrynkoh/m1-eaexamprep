import React, { useState } from 'react';

interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  options: Option[];
  correctAnswerId: string;
  explanation: string;
  category: 'Part1' | 'Part2' | 'Part3';
  taxLawYear?: number;
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (questionId: string, answerId: string, isCorrect: boolean) => void;
  showExplanation?: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ 
  question, 
  onAnswer,
  showExplanation = false 
}) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [answered, setAnswered] = useState(false);

  const handleOptionSelect = (optionId: string) => {
    if (answered) return;
    
    setSelectedOption(optionId);
    setAnswered(true);
    
    const isCorrect = optionId === question.correctAnswerId;
    onAnswer(question.id, optionId, isCorrect);
  };

  const getOptionClassName = (optionId: string) => {
    if (!answered || !showExplanation) {
      return selectedOption === optionId 
        ? 'bg-blue-100 border-blue-500' 
        : 'bg-white hover:bg-gray-50';
    }

    if (optionId === question.correctAnswerId) {
      return 'bg-green-100 border-green-500';
    }
    
    return selectedOption === optionId && selectedOption !== question.correctAnswerId
      ? 'bg-red-100 border-red-500'
      : 'bg-white';
  };

  return (
    <div className="card mb-6">
      <div className="flex items-start gap-2">
        {question.taxLawYear && (
          <span className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full">
            {question.taxLawYear}
          </span>
        )}
        <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-800 rounded-full">
          {question.category}
        </span>
      </div>
      
      <h3 className="text-lg font-medium my-3">{question.text}</h3>
      
      <div className="space-y-3 mt-4">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionSelect(option.id)}
            disabled={answered && showExplanation}
            className={`w-full text-left p-3 border rounded-md transition-colors ${getOptionClassName(option.id)}`}
          >
            {option.text}
          </button>
        ))}
      </div>
      
      {answered && showExplanation && (
        <div className="mt-4 p-3 bg-gray-50 rounded-md border border-gray-200">
          <h4 className="font-medium text-gray-900">Explanation</h4>
          <p className="text-gray-700 mt-1">{question.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default QuestionCard; 