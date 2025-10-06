import { useState } from 'react'

type FormState = {
  name: string
  email: string
  message: string
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [success, setSuccess] = useState('')

  const validate = (values: FormState) => {
    const e: Partial<FormState> = {}
    if (!values.name.trim()) e.name = 'Name is required.'
    if (!values.email.trim()) e.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) e.email = 'Enter a valid email.'
    if (!values.message.trim()) e.message = 'Message is required.'
    else if (values.message.trim().length < 10) e.message = 'Message must be at least 10 characters.'
    return e
  }

  const handleChange = (key: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((s) => ({ ...s, [key]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      // simulate successful submit
      setSuccess('Thanks! Your message has been sent.')
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSuccess(''), 5000)
    }
  }

  return (
    <main className="container-max py-12">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>

        <div className="bg-white dark:bg-slate-800 shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} noValidate>
            {success && (
              <div className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-2">
                {success}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                value={form.name}
                onChange={handleChange('name')}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Your full name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && <p id="name-error" className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange('email')}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="you@example.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && <p id="email-error" className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                value={form.message}
                onChange={handleChange('message')}
                rows={6}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="How can we help you?"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && <p id="message-error" className="mt-1 text-sm text-red-600">{errors.message}</p>}
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                Send message
              </button>
              <p className="text-sm text-slate-500">We usually reply within 1–2 business days.</p>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}
