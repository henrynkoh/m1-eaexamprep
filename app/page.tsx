import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">EA Exam Prep</h1>
      <p className="text-xl mb-8">Your complete resource for Enrolled Agent exam preparation</p>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Study Resources</h2>
        <p className="mb-3">
          Access comprehensive study guides, downloadable materials, and exam strategies to help you prepare.
        </p>
        <Link href="/resources" className="text-blue-600 hover:underline">
          View Resources →
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Practice Tests</h2>
        <p className="mb-3">
          Test your knowledge with practice questions and full-length simulated exams for all three parts.
        </p>
        <Link href="/practice" className="text-blue-600 hover:underline">
          Start Practicing →
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Simulated Exams</h2>
        <p className="mb-3">
          Take full-length timed exams that simulate the real EA test environment and experience.
        </p>
        <Link href="/simulated-exam" className="text-blue-600 hover:underline">
          Take Exam →
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Daily Challenges</h2>
        <p className="mb-3">
          Keep your skills sharp with daily practice questions covering a variety of EA exam topics.
        </p>
        <Link href="/daily-challenge" className="text-blue-600 hover:underline">
          Today's Challenge →
        </Link>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Your Dashboard</h2>
        <p className="mb-3">
          Track your progress, view your performance statistics, and manage your study plan.
        </p>
        <Link href="/dashboard" className="text-blue-600 hover:underline">
          My Dashboard →
        </Link>
      </section>

      <footer className="mt-16 pt-4 border-t border-gray-200 text-gray-600">
        <p>© {new Date().getFullYear()} EA Exam Prep. All rights reserved.</p>
        <div className="flex gap-6 mt-2">
          <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>
          <Link href="/terms-of-service" className="text-blue-600 hover:underline">Terms of Service</Link>
          <Link href="/contact-us" className="text-blue-600 hover:underline">Contact Us</Link>
        </div>
      </footer>
    </div>
  )
} 