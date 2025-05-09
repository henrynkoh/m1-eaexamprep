import Link from 'next/link';

export default function UsefulResourcesPage() {
  // Resource links
  const resources = [
    {
      title: "개인 퇴직 계좌(IRA)와 사회보장 소득에 대한 이해",
      url: "/resources/esmile1-1-1/2245/2245-개인-퇴직-계좌(IRA)와-사회보장-소득에-대한-이해.html",
      description: "Individual Retirement Accounts (IRA) and Social Security income guide"
    },
    {
      title: "세금 조정 및 공제에 대한 포괄적인 가이드",
      url: "/resources/esmile1-1-1/2243/2243-세금-조정-및-공제에-대한-포괄적인-가이드.html",
      description: "Comprehensive guide to tax adjustments and deductions"
    },
    {
      title: "세금 조정 및 공제에 대한 포괄적인 가이드 2",
      url: "/resources/esmile1-1-1/2244/2244-세금-조정-및-공제에-대한-포괄적인-가이드.html",
      description: "Additional guide to tax adjustments and deductions"
    },
    {
      title: "EA 시험 준비 과정: 자본 이득과 손실",
      url: "/resources/esmile1-1-1/2242/2242-EA-시험-준비-과정:-자본-이득과-손실.html",
      description: "EA exam preparation: Capital gains and losses"
    },
    {
      title: "소득의 종류와 과세 방식에 대한 이해",
      url: "/resources/esmile1-1-1/2240/2240-소득의-종류와-과세-방식에-대한-이해.html",
      description: "Understanding types of income and taxation methods"
    },
    {
      title: "S 법인에 대한 이해",
      url: "/resources/esmile1-1-1/2241/2241-S-법인에-대한-이해.html",
      description: "Understanding S Corporations"
    },
    {
      title: "등록 에이전트(EA) 되는 방법 완벽 가이드",
      url: "/resources/esmile1-1-1/2149/2149-등록-에이전트(EA)-되는-방법-완벽-가이드.html",
      description: "Complete guide to becoming an Enrolled Agent (EA)"
    },
    {
      title: "How to become an EN (enrolled agent)",
      url: "/resources/esmile1-1-1/2148/2148-How-to-become-an-EN-(enrolled-agent).html",
      description: "English guide to becoming an Enrolled Agent"
    },
    {
      title: "IRS e-File Provider 창업 실무가이드",
      url: "/resources/esmile1-1-1/2147/2147-IRS-e-File-Provider-창업_실무가이드.html",
      description: "Practical guide to starting an IRS e-File Provider business"
    },
    {
      title: "IRS e-file Provider 신규 등록 완벽 가이드",
      url: "/resources/esmile1-1-1/2145/2145-IRS-e-file-Provider-신규-등록-완벽-가이드.html",
      description: "Complete guide to new IRS e-file Provider registration"
    },
    {
      title: "IRS e-file providers",
      url: "/resources/esmile1-1-1/2143/2143-IRS-e-file-providers.html",
      description: "Information about IRS e-file providers"
    },
    {
      title: "2024년 세금 신고를 TurboTax로 준비하는 최적의 전략과 방법",
      url: "/resources/esmile1-1-1/2093/2093-2024년-세금-신고를-TurboTax로-준비하는-최적의-전략과-방법.html",
      description: "Optimal strategies and methods for preparing 2024 tax returns with TurboTax"
    },
    // Additional resources
    {
      title: "EA 추가 학습 자료 2152",
      url: "/resources/esmile1-1-1/2152/2152.html",
      description: "Additional EA exam study materials"
    },
    {
      title: "EA 추가 학습 자료 2247",
      url: "/resources/esmile1-1-1/2247/2247.html",
      description: "EA exam preparation resource"
    },
    {
      title: "EA 추가 학습 자료 2248",
      url: "/resources/esmile1-1-1/2248/2248.html",
      description: "Tax professional study guide"
    },
    {
      title: "EA 추가 학습 자료 2249",
      url: "/resources/esmile1-1-1/2249/2249.html",
      description: "EA certification preparation material"
    },
    {
      title: "EA 추가 학습 자료 2250",
      url: "/resources/esmile1-1-1/2250/2250.html",
      description: "Tax law and procedures guide"
    },
    {
      title: "EA 추가 학습 자료 2251",
      url: "/resources/esmile1-1-1/2251/2251.html",
      description: "Specialized tax topics reference"
    },
    {
      title: "EA 추가 학습 자료 2252",
      url: "/resources/esmile1-1-1/2252/2252.html",
      description: "Advanced tax preparation guide"
    },
    {
      title: "EA 추가 학습 자료 2254",
      url: "/resources/esmile1-1-1/2254/2254.html",
      description: "EA exam tips and strategies"
    },
    {
      title: "EA 추가 학습 자료 2255",
      url: "/resources/esmile1-1-1/2255/2255.html",
      description: "Tax regulations study guide"
    },
    {
      title: "EA 추가 학습 자료 2256",
      url: "/resources/esmile1-1-1/2256/2256.html",
      description: "IRS practices and procedures reference"
    },
    {
      title: "EA 추가 학습 자료 2257",
      url: "/resources/esmile1-1-1/2257/2257.html",
      description: "Tax representation guidelines"
    },
    {
      title: "EA 추가 학습 자료 2258",
      url: "/resources/esmile1-1-1/2258/2258.html",
      description: "Business taxation resource"
    },
    {
      title: "EA 추가 학습 자료 2259",
      url: "/resources/esmile1-1-1/2259/2259.html",
      description: "Individual taxation study material"
    },
    {
      title: "EA 추가 학습 자료 2260",
      url: "/resources/esmile1-1-1/2260/2260.html",
      description: "Tax planning strategies guide"
    },
    {
      title: "Enrolled Agent (EA) Exam: 일정 및 접수",
      url: "/resources/esmile1-1-1/2263/2263-Enrolled-Agent-(EA)-Exam_일정-및-접수.html",
      description: "EA exam scheduling and registration information"
    },
    {
      title: "EA 추가 학습 자료 2273",
      url: "/resources/esmile1-1-1/2273/2273.html",
      description: "Tax practice and ethics guide"
    },
    {
      title: "EA 추가 학습 자료 2274",
      url: "/resources/esmile1-1-1/2274/2274.html",
      description: "Advanced tax concepts and applications"
    },
    {
      title: "EA 추가 학습 자료 2276",
      url: "/resources/esmile1-1-1/2276/2276.html",
      description: "Tax preparation reference material"
    },
    {
      title: "EA 추가 학습 자료 2277",
      url: "/resources/esmile1-1-1/2277/2277.html",
      description: "Tax filing procedures guide"
    },
    {
      title: "EA 추가 학습 자료 2278 (1)",
      url: "/resources/esmile1-1-1/2278/2278.html",
      description: "Tax code interpretation guide"
    },
    {
      title: "EA 추가 학습 자료 2278 (2)",
      url: "/resources/esmile1-1-1/2278/2278.html",
      description: "Tax code applications and examples"
    },
    {
      title: "EA 추가 학습 자료 2278 (3)",
      url: "/resources/esmile1-1-1/2278/2278.html",
      description: "Tax code compliance strategies"
    },
    {
      title: "EA 추가 학습 자료 2279",
      url: "/resources/esmile1-1-1/2279/2279.html",
      description: "Tax forms and documentation guide"
    },
    {
      title: "EA 추가 학습 자료 2280 (1)",
      url: "/resources/esmile1-1-1/2280/2280.html",
      description: "Tax calculation methods and formulas"
    },
    {
      title: "EA 추가 학습 자료 2280 (2)",
      url: "/resources/esmile1-1-1/2280/2280.html",
      description: "Tax calculation examples and worksheets"
    },
    {
      title: "EA 추가 학습 자료 2318",
      url: "/resources/esmile1-1-1/2318/2318.html",
      description: "Tax professional practice management"
    },
    {
      title: "EA 추가 학습 자료 2334",
      url: "/resources/esmile1-1-1/2334/2334.html",
      description: "Tax audit preparation and defense"
    },
    {
      title: "EA 추가 학습 자료 2437",
      url: "/resources/esmile1-1-1/2437/2437.html",
      description: "Advanced tax representation strategies"
    },
    {
      title: "EA 추가 학습 자료 2513",
      url: "/resources/esmile1-1-1/2513/2513.html",
      description: "Comprehensive tax practice resource"
    },
    // New PDF links that match exactly what's shown in the image
    {
      title: "Part 1 Video 6 Retirement and Social Security.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 6 Retirement and Social Security.pdf")}`,
      isPdf: true,
      fileSize: "708 KB",
      description: "Study materials on retirement accounts and Social Security benefits"
    },
    {
      title: "Part 1 Video 4 Deductions.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 4 Deductions.pdf")}`,
      isPdf: true,
      fileSize: "1.1 MB",
      description: "Comprehensive tax deductions guide for EA exam preparation"
    },
    {
      title: "Part 1 Video 5 Calculating Tax and Tax Credits.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 5 Calculating Tax and Tax Credits.pdf")}`,
      isPdf: true,
      fileSize: "3.8 MB",
      description: "Tax calculation methods and available tax credits"
    },
    {
      title: "Part 1 Video 3 Capital Gains.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 3 Capital Gains.pdf")}`,
      isPdf: true,
      fileSize: "1.8 MB",
      description: "Capital gains tax rules and calculations"
    },
    {
      title: "Part 1 Video 2 Income &.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 2 Income &.pdf")}`,
      isPdf: true,
      fileSize: "468 KB",
      description: "Income types and taxation for EA exam"
    },
    {
      title: "Part 1 Video 1 Overview and Get Started.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 1 Overview and Get Started.pdf")}`,
      isPdf: true,
      fileSize: "4.4 MB",
      description: "Introduction to EA exam preparation concepts"
    },
    {
      title: "Part 1 Video 7 Specialized Returns.pdf",
      url: `/pdfs/${encodeURIComponent("P1 Video 7 Specialized Returns.pdf")}`,
      isPdf: true,
      fileSize: "1.8 MB",
      description: "Specialized tax return situations and requirements"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <header className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-primary">Useful Resources</h1>
              <p className="text-gray-600 mt-2">Additional materials and guides for EA exam preparation</p>
            </div>
            <Link href="/resources" className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors inline-flex items-center gap-2 w-max">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
              </svg>
              Back to Resources
            </Link>
          </div>
        </header>
        
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-8">
          <div className="grid gap-6">
            {resources.map((resource, index) => (
              <div key={index} className="border-b pb-5 last:border-0 last:pb-0">
                <div className="flex items-start">
                  <div className="text-primary shrink-0 mt-1 mr-3">
                    {resource.isPdf ? (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-600">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {resource.isPdf ? (
                      <a 
                        href={resource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline break-words"
                      >
                        {resource.title}
                        {resource.fileSize && <span className="ml-2 text-gray-500 text-sm">({resource.fileSize})</span>}
                      </a>
                    ) : (
                      <a 
                        href={resource.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-base sm:text-lg font-medium text-blue-600 hover:text-blue-800 hover:underline break-words"
                      >
                        {resource.title}
                      </a>
                    )}
                    <p className="text-gray-600 mt-1 text-sm sm:text-base">{resource.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-8 bg-blue-50 rounded-lg p-4 sm:p-6 border border-blue-200">
          <h2 className="text-lg sm:text-xl font-semibold text-primary mb-3">Note on Resources</h2>
          <p className="text-gray-700 text-sm sm:text-base">
            These resources are stored locally in your application's public directory. They can be accessed directly through your browser without needing external access.
          </p>
        </div>
      </div>
    </div>
  );
} 