import { useLanguage } from '../i18n/LanguageContext'

const icons = [
  'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9',
  'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  'M13 10V3L4 14h7v7l9-11h-7z',
]

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section id="solutions" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t.solutions.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.solutions.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.solutions.intro}</p>
        </div>

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.solutions.items.map((item, i) => (
            <li
              key={item.title}
              className="group rounded-2xl border border-slate-200 bg-slate-50/50 p-8 transition hover:border-brand-200 hover:bg-brand-50/30 hover:shadow-md"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600 text-white">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={icons[i] ?? icons[0]} />
                </svg>
              </span>
              <h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
            </li>
          ))}
        </ul>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-slate-900">{t.solutions.softwareTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{t.solutions.softwareBody}</p>
          </div>
          <div className="rounded-2xl border border-brand-200 bg-brand-50/40 p-8">
            <h3 className="text-xl font-bold text-slate-900">{t.solutions.educationTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{t.solutions.educationBody}</p>
          </div>
        </div>

        <p className="mt-10 sr-only">{t.solutions.seoHidden}</p>
      </div>
    </section>
  )
}
