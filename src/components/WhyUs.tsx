import { useLanguage } from '../i18n/LanguageContext'

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section id="why-us" className="bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t.whyUs.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.whyUs.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">{t.whyUs.intro}</p>
        </div>

        <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.whyUs.items.map((item, i) => (
            <li key={item.title} className="text-center sm:text-left">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                {i + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
