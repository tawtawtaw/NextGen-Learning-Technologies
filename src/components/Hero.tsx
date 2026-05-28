import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()
  const { brand } = t

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 via-white to-white">
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-4 py-1.5 text-sm font-medium text-brand-700 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-brand-500" />
          {t.hero.badge}
        </div>

        <h1 className="mt-8 max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
          {t.hero.title}{' '}
          <span className="bg-gradient-to-r from-brand-600 to-brand-800 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
          {t.hero.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-brand-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-700"
          >
            {t.hero.ctaPrimary}
          </a>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700"
          >
            {t.hero.ctaSecondary}
          </a>
        </div>

        <dl className="mt-16 grid gap-6 border-t border-slate-200/80 pt-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="sm:col-span-2 lg:col-span-1">
            <dt className="text-sm font-medium text-slate-500">{t.hero.industry}</dt>
            <dd className="mt-1 font-semibold text-slate-900">{brand.industry}</dd>
          </div>
          <div>
            <dt className="text-sm font-medium text-slate-500">{t.hero.primaryMarket}</dt>
            <dd className="mt-1 font-semibold text-slate-900">{brand.primaryMarket}</dd>
          </div>
          <div className="sm:col-span-2 lg:col-span-1">
            <dt className="text-sm font-medium text-slate-500">{t.hero.mission}</dt>
            <dd className="mt-1 font-semibold leading-snug text-slate-900">{brand.mission}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
