import { useLanguage } from '../i18n/LanguageContext'

export function Portfolio() {
  const { t } = useLanguage()

  return (
    <section id="portfolio" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t.portfolio.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.portfolio.title}</h2>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.portfolio.items.map((item) => (
            <li
              key={item.title}
              className={`flex flex-col rounded-2xl border p-6 ${
                item.status === 'live'
                  ? 'border-brand-200 bg-brand-50/40'
                  : item.status === 'coming'
                    ? 'border-easymatch-200 bg-easymatch-50/30'
                    : 'border-slate-200 bg-slate-50'
              }`}
            >
              <span
                className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  item.status === 'live'
                    ? 'bg-brand-100 text-brand-800'
                    : item.status === 'coming'
                      ? 'bg-easymatch-100 text-easymatch-800'
                      : 'bg-slate-200 text-slate-700'
                }`}
              >
                {t.portfolio.status[item.status]}
              </span>
              <h3 className="mt-3 font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
