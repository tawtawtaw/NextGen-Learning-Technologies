import { useLanguage } from '../i18n/LanguageContext'

export function SeoContent() {
  const { t } = useLanguage()
  const s = t.seoContent

  return (
    <section id="expertise" className="border-t border-slate-200 bg-slate-900 py-16 text-white lg:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-200">{s.eyebrow}</p>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">{s.title}</h2>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.topics.map((topic) => (
            <li key={topic.heading} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-accent-400">{topic.heading}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{topic.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
