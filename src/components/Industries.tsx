import { useLanguage } from '../i18n/LanguageContext'

export function Industries() {
  const { t } = useLanguage()

  return (
    <section id="industries" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t.industries.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.industries.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.industries.intro}</p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {t.industries.items.map((item) => (
            <li key={item.title} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
