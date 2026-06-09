import { useLanguage } from '../i18n/LanguageContext'

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <section id="testimonials" className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{t.testimonials.eyebrow}</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.testimonials.title}</h2>
          <p className="mt-4 text-lg text-slate-600">{t.testimonials.intro}</p>
        </div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-3">
          {t.testimonials.slots.map((slot) => (
            <li
              key={slot.role}
              className="flex flex-col rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-8 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{slot.role}</p>
              <p className="mt-3 text-sm text-slate-500">{slot.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
