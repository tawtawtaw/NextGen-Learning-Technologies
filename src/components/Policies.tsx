import { useLanguage } from '../i18n/LanguageContext'

export function Policies() {
  const { t } = useLanguage()

  return (
    <section id="policies" className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t.policies.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.policies.title}</h2>
        <p className="mt-4 max-w-2xl text-slate-600">{t.policies.intro}</p>
        <div className="mt-12 space-y-10">
          {t.policies.items.map((item) => (
            <article key={item.id} id={item.id} className="scroll-mt-24 rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-slate-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
