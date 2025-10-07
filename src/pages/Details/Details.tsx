import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const CONTENT: Record<string, { title: string; paragraphs: string[] }> = {
  welcome: {
    title: 'Welcome',
    paragraphs: [
      'Welcome to our site. This detail page expands on the welcome card content and gives you more context about what we offer.',
      'We built this demo to show routing and reusable components with Tailwind CSS and React Router.',
    ],
  },
  features: {
    title: 'Features',
    paragraphs: [
      'Our app demonstrates responsive layout, a header and footer, and card components that link to detail pages.',
      'The architecture is intentionally simple so you can extend it for real projects.',
    ],
  },
  announcement: {
    title: 'Announcement',
    paragraphs: [
      'This announcement provides important information at the top level. Use this area to highlight new releases, events, or updates.',
      'You can replace this text with promotional content or call-to-action links as needed.',
    ],
  },
}

export default function Details() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const key = slug ?? 'welcome'
  const content = CONTENT[key] ?? { title: key, paragraphs: ['No details available.'] }

  return (
    <main className="container-max py-12">
      <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 shadow rounded-lg p-6">
        <h1 className="text-2xl font-semibold mb-4">{content.title}</h1>
        {content.paragraphs.map((p, i) => (
          <p key={i} className="text-slate-700 dark:text-slate-200 mb-3">
            {p}
          </p>
        ))}

        <div className="mt-6">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center px-3 py-2 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-md text-sm hover:bg-slate-300"
          >
            Back
          </button>
        </div>
      </div>
    </main>
  )
}
