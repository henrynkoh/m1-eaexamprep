import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ProgressChartProps {
  scores: {
    date: string;
    score: number;
  }[];
  predictedScore?: number;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ scores, predictedScore }) => {
  const chartData: ChartData<'line'> = {
    labels: scores.map(score => score.date),
    datasets: [
      {
        label: 'Score %',
        data: scores.map(score => score.score),
        borderColor: '#1e40af',
        backgroundColor: 'rgba(30, 64, 175, 0.1)',
        tension: 0.3,
      },
    ],
  };

  if (predictedScore) {
    const lastDate = scores[scores.length - 1]?.date || '';
    chartData.datasets.push({
      label: 'Predicted Score %',
      data: [...Array(scores.length - 1).fill(null), scores[scores.length - 1]?.score, predictedScore],
      borderColor: '#f97316',
      backgroundColor: 'rgba(249, 115, 22, 0.1)',
      borderDash: [5, 5],
      tension: 0.3,
    });
    if (chartData.labels && Array.isArray(chartData.labels)) {
      chartData.labels = [...chartData.labels, 'Predicted'];
    }
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Your Progress Over Time',
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            return `Score: ${context.raw}%`;
          }
        }
      }
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: 'Score (%)'
        }
      },
      x: {
        title: {
          display: true,
          text: 'Date'
        }
      }
    }
  };

  return (
    <div className="card p-6">
      <Line data={chartData} options={options} />
      
      {predictedScore && (
        <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded-md">
          <h4 className="font-medium text-gray-900">Predicted Exam Score</h4>
          <p className="text-gray-700">
            Based on your current progress, your predicted exam score is <span className="font-bold text-accent">{predictedScore}%</span>
          </p>
          {predictedScore < 75 && (
            <p className="text-sm text-gray-600 mt-2">
              Keep practicing! We recommend focusing on your weak areas to improve your score.
            </p>
          )}
          {predictedScore >= 75 && predictedScore < 85 && (
            <p className="text-sm text-gray-600 mt-2">
              You're on track to pass! Continue reviewing challenging topics to boost your confidence.
            </p>
          )}
          {predictedScore >= 85 && (
            <p className="text-sm text-gray-600 mt-2">
              Excellent progress! You're well-prepared for the exam.
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default ProgressChart; 