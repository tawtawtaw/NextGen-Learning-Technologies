import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

const { contact } = brand

export function Contact() {
  const { t } = useLanguage()
  const demoSubject = encodeURIComponent('Demo request — NextGen Learning Technologies')

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-12 text-white shadow-xl sm:px-12 lg:py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.contact.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100">{t.contact.intro}</p>
          </div>

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

          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`mailto:${contact.demoEmail}?subject=${demoSubject}`}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-brand-800 transition hover:bg-brand-50"
            >
              {t.contact.demo}
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {contact.email}
            </a>
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
