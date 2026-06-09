import { useState } from 'react'
import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

const { contact } = brand

export function Contact() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState<string>(t.contactForm.categories[0])
  const [message, setMessage] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`${t.contactForm.subjectPrefix}: ${category}`)
    const body = encodeURIComponent(
      `${t.contactForm.nameLabel}: ${name}\n${t.contactForm.emailLabel}: ${email}\n${t.contactForm.categoryLabel}: ${category}\n\n${message}`,
    )
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-12 text-white shadow-xl sm:px-12 lg:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">{t.contact.intro}</p>
            <p className="mx-auto mt-2 text-sm text-brand-200">{t.contact.responseTime}</p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-xl space-y-4 rounded-2xl border border-white/20 bg-white/10 p-6 text-left sm:p-8"
          >
            <div>
              <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contactForm.nameLabel}
              </label>
              <input
                id="contact-name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contactForm.emailLabel}
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
            </div>
            <div>
              <label htmlFor="contact-category" className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contactForm.categoryLabel}
              </label>
              <select
                id="contact-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-brand-800 px-4 py-2.5 text-sm text-white focus:border-white/40 focus:outline-none"
              >
                {t.contactForm.categories.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contactForm.messageLabel}
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder:text-white/50 focus:border-white/40 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-white py-3 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              {t.contactForm.submit}
            </button>
          </form>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a
              href={`mailto:${contact.email}`}
              className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:bg-white/15"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contact.email}
              </span>
              <span className="mt-2 text-sm font-semibold break-all">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:bg-white/15"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contact.phone}
              </span>
              <span className="mt-2 text-sm font-semibold">{contact.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-5 transition hover:bg-white/15"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contact.whatsapp}
              </span>
              <span className="mt-2 text-sm font-semibold">{contact.phoneDisplay}</span>
            </a>
            <div className="flex flex-col rounded-2xl border border-white/20 bg-white/10 p-5">
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-200">
                {t.contact.location}
              </span>
              <span className="mt-2 text-sm font-semibold">
                {contact.addressLine1}
                <br />
                {contact.addressLine2}
              </span>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-brand-200">
            {t.contact.serving}
            <br />
            <span className="text-brand-300/90">{contact.hours}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
