import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

export function Partners() {
  const { t } = useLanguage()

  return (
    <section id="partners" className="bg-gradient-to-br from-brand-800 to-brand-900 py-20 text-white lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">{t.partners.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{t.partners.title}</h2>
          <p className="mt-4 text-lg text-brand-100">{t.partners.intro}</p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {t.partners.roles.map((role) => (
            <li key={role} className="rounded-2xl border border-white/20 bg-white/10 px-5 py-4 text-sm font-medium">
              {role}
            </li>
          ))}
        </ul>
        <a
          href={brand.links.partnerForm}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-accent-400"
        >
          {t.partners.cta}
        </a>
      </div>
    </section>
  )
}
