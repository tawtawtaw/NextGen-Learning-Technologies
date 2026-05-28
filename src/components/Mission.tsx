import { useLanguage } from '../i18n/LanguageContext'

export function Mission() {
  const { t } = useLanguage()

  return (
    <section id="about" className="border-y border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-100">
            {t.missionSection.eyebrow}
          </p>
          <blockquote className="mt-4 border-l-4 border-accent-500 pl-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
            {t.brand.mission}
          </blockquote>
          <p className="mt-8 text-lg text-slate-400">{t.missionSection.supporting}</p>
        </div>
      </div>
    </section>
  )
}
