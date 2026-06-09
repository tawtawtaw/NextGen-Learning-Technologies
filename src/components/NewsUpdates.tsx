import { useLanguage } from '../i18n/LanguageContext'

export function NewsUpdates() {
  const { t } = useLanguage()

  return (
    <section id="news" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t.news.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.news.title}</h2>
        <ul className="mt-12 space-y-4">
          {t.news.items.map((item) => (
            <li
              key={item.title}
              className="flex flex-col gap-1 rounded-2xl border border-slate-200 bg-slate-50/50 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-600">{item.tag}</p>
                <p className="mt-1 font-semibold text-slate-900">{item.title}</p>
                <p className="mt-1 text-sm text-slate-600">{item.summary}</p>
              </div>
              <time className="shrink-0 text-sm text-slate-400">{item.date}</time>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
