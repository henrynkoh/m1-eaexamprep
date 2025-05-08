import Link from 'next/link';

export default function WeakAreasPage() {
  // Sample data for weak areas
  const weakAreas = [
    {
      id: 1,
      topic: "Partnership Taxation",
      part: "Part 2",
      mastery: 38,
      status: "Needs Improvement",
      topics: ["Basis Calculation", "Distributions", "Sale of Partnership Interest"],
      practiceLink: "/practice/partnership-taxation"
    },
    {
      id: 2,
      topic: "Representation Practices",
      part: "Part 3",
      mastery: 55,
      status: "Moderate",
      topics: ["Powers of Attorney", "Practice Before IRS", "Tax Return Preparers"],
      practiceLink: "/practice/representation-practices"
    },
    {
      id: 3,
      topic: "Retirement Plans",
      part: "Part 1",
      mastery: 42,
      status: "Needs Improvement",
      topics: ["IRA Contributions", "Required Distributions", "Plan Limitations"],
      practiceLink: "/practice/retirement-plans"
    },
    {
      id: 4,
      topic: "S Corporation Taxation",
      part: "Part 2",
      mastery: 47,
      status: "Needs Improvement",
      topics: ["Eligibility Requirements", "Built-in Gains", "Basis Calculation"],
      practiceLink: "/practice/s-corporation"
    },
    {
      id: 5,
      topic: "IRS Collections",
      part: "Part 3",
      mastery: 52,
      status: "Moderate",
      topics: ["Liens", "Levies", "Installment Agreements", "Offers in Compromise"],
      practiceLink: "/practice/irs-collections"
    },
    {
      id: 6,
      topic: "AMT Calculations",
      part: "Part 1",
      mastery: 35,
      status: "Needs Improvement",
      topics: ["Adjustments", "Preferences", "Exemption Calculations"],
      practiceLink: "/practice/amt-calculations"
    }
  ];

  // Function to determine color based on mastery level
  const getMasteryColor = (mastery: number) => {
    if (mastery < 40) return 'bg-red-500';
    if (mastery < 60) return 'bg-yellow-500';
    if (mastery < 80) return 'bg-blue-500';
    return 'bg-green-500';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-2">
          <Link href="/dashboard" className="text-gray-500 hover:text-blue-600">
            Dashboard
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-700">Weak Areas</span>
        </div>
        
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600">Weak Areas Analysis</h1>
          <p className="text-gray-600 mt-2">
            Focus on these topics to improve your EA exam performance
          </p>
        </header>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-600 mb-6">Your Learning Priority List</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Topic
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Part
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Mastery
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {weakAreas.map((area) => (
                  <tr key={area.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{area.topic}</div>
                      <div className="text-xs text-gray-500 mt-1">
                        {area.topics.join(' • ')}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {area.part}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-14 text-sm font-medium text-gray-900">
                          {area.mastery}%
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${getMasteryColor(area.mastery)}`}
                            style={{ width: `${area.mastery}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        area.mastery < 40 ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {area.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <Link href={area.practiceLink} className="text-blue-600 hover:text-blue-900">
                        Practice
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-blue-600 mb-4">Improvement Strategy</h2>
          
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Study Topic Guides</h3>
                <p className="text-gray-600">Review our topic-specific guides to strengthen your understanding of core concepts.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Targeted Practice</h3>
                <p className="text-gray-600">Complete at least 20 practice questions for each weak topic to reinforce learning.</p>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="text-blue-600 shrink-0 mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium text-gray-800">Track Your Progress</h3>
                <p className="text-gray-600">Review your mastery scores weekly to see improvement and adjust your study plan.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-gray-200">
            <Link href="/resources/study-strategies" className="text-blue-600 hover:underline">
              Browse all study strategies →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 