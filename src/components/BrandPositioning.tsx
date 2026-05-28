import { useLanguage } from '../i18n/LanguageContext'

export function BrandPositioning() {
  const { t } = useLanguage()
  const tb = t.brand

  const pillars = [
    { label: t.positioning.industry, value: tb.industry },
    { label: t.positioning.primaryMarket, value: tb.primaryMarket },
    { label: t.positioning.mission, value: tb.mission },
  ]

  return (
    <section
      id="positioning"
      className="border-b border-slate-200 bg-white py-16 lg:py-20"
      aria-labelledby="positioning-heading"
    >
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {t.positioning.eyebrow}
        </p>
        <h2
          id="positioning-heading"
          className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          {t.positioning.title}
        </h2>
        <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          {t.positioning.description}
        </p>

        <dl className="mt-10 grid gap-6 sm:grid-cols-3">
          {pillars.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50/80 p-6"
            >
              <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                {item.label}
              </dt>
              <dd className="mt-2 text-base font-semibold leading-snug text-slate-900">
                {item.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
