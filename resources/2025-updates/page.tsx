import Link from 'next/link';

export default function TaxUpdatesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-1">
            <Link href="/resources" className="text-gray-500 hover:text-blue-600">
              Resources
            </Link>
            <span className="text-gray-500">/</span>
            <span className="text-gray-700">2025 Tax Updates</span>
          </div>
          <h1 className="text-3xl font-bold text-primary">2025 Tax Updates</h1>
          <p className="text-gray-600 mt-2">Key changes to tax laws and regulations for the 2025 tax year</p>
        </header>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* Main Content */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Individual Tax Changes</h2>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Tax Bracket Adjustments</h3>
                  <p className="text-gray-700">All tax brackets have been adjusted for inflation. The standard deduction has increased to $14,000 for single filers and $28,000 for married couples filing jointly.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Retirement Contribution Limits</h3>
                  <p className="text-gray-700">401(k) contribution limits have increased to $22,500 with an additional $7,500 catch-up contribution for those 50 and older. IRA contribution limits are now $7,000 with a $1,000 catch-up.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Child Tax Credit Changes</h3>
                  <p className="text-gray-700">The Child Tax Credit has been modified to $2,000 per qualifying child. The phase-out thresholds have been adjusted to $200,000 for single filers and $400,000 for joint filers.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4">Business Tax Updates</h2>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Corporate Tax Rate</h3>
                  <p className="text-gray-700">The corporate tax rate remains at 21%. The Section 179 deduction limit has increased to $1,160,000 with a phase-out threshold of $2,890,000.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Qualified Business Income Deduction</h3>
                  <p className="text-gray-700">The 20% QBI deduction continues with updated threshold amounts of $180,000 for single filers and $360,000 for joint filers.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Business Interest Limitation</h3>
                  <p className="text-gray-700">The limitation on business interest deductions has been adjusted to 30% of adjusted taxable income with updated rules for calculating ATI.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-primary mb-4">IRS Practice and Procedure Updates</h2>
              
              <div className="space-y-4 mb-6">
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Electronic Filing Requirements</h3>
                  <p className="text-gray-700">New mandatory e-filing thresholds have been established. Businesses filing 10 or more information returns must now file electronically.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">IRS Funding and Enforcement</h3>
                  <p className="text-gray-700">The IRS has received additional funding to improve taxpayer services and increase enforcement activities, particularly for high-income taxpayers and complex partnerships.</p>
                </div>
                
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-medium text-lg text-primary mb-2">Penalty Adjustments</h3>
                  <p className="text-gray-700">Penalties for failure to file and failure to pay have been adjusted for inflation. The minimum penalty for failure to file within 60 days is now $485.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            {/* Sidebar */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Important Dates</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800">January 15, 2025</h3>
                  <p className="text-gray-600 text-sm">Fourth quarter estimated tax payment deadline</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">April 15, 2025</h3>
                  <p className="text-gray-600 text-sm">Individual tax return filing deadline</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">March 15, 2025</h3>
                  <p className="text-gray-600 text-sm">S-Corporation and Partnership return deadline</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">April 15, 2025</h3>
                  <p className="text-gray-600 text-sm">C-Corporation tax return deadline</p>
                </div>
                
                <div>
                  <h3 className="font-medium text-gray-800">October 15, 2025</h3>
                  <p className="text-gray-600 text-sm">Extended individual tax return deadline</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Related Resources</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <Link href="/resources/downloads/2025-tax-update-guide.pdf" className="text-blue-600 hover:underline">
                    Complete 2025 Tax Changes Guide
                  </Link>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <Link href="/resources/downloads/2025-tax-bracket-chart.pdf" className="text-blue-600 hover:underline">
                    2025 Tax Bracket Chart
                  </Link>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <Link href="/resources/downloads/2025-deduction-limits.pdf" className="text-blue-600 hover:underline">
                    2025 Deduction Limitations
                  </Link>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="text-blue-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                    </svg>
                  </div>
                  <Link href="/resources/downloads/2025-qbi-worksheet.pdf" className="text-blue-600 hover:underline">
                    Updated QBI Worksheet
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold text-primary mb-4">Exam Impact</h2>
              <p className="text-gray-700 mb-4">The 2025 tax updates will be reflected in the EA exam starting with the testing window that opens May 1, 2025.</p>
              
              <div className="p-4 bg-yellow-50 rounded-lg mb-4">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Note:</span> If taking the exam before May 1, 2025, you will be tested on 2024 tax law.
                </p>
              </div>
              
              <Link href="/resources/exam-strategy" className="text-blue-600 hover:underline text-sm">
                View exam preparation strategies →
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Navigation */}
        <div className="mt-8 flex justify-between">
          <div>
            <Link href="/resources" className="text-blue-600 hover:underline">
              ← Back to Resources
            </Link>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
} 