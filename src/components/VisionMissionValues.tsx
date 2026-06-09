import { useLanguage } from '../i18n/LanguageContext'

const valueIcons = ['💡', '🛡️', '♿', '✓', '🌍']

export function VisionMissionValues() {
  const { t } = useLanguage()
  const v = t.visionMissionValues

  return (
    <section id="mission" className="border-y border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{v.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{v.title}</h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-brand-200 bg-brand-50/50 p-8">
            <h3 className="text-lg font-bold text-brand-800">{v.visionTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700">{v.vision}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <h3 className="text-lg font-bold text-slate-900">{v.missionTitle}</h3>
            <p className="mt-3 leading-relaxed text-slate-700">{v.mission}</p>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-bold text-slate-900">{v.valuesTitle}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {v.values.map((item, i) => (
              <li
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm"
              >
                <span className="text-2xl" aria-hidden>
                  {valueIcons[i]}
                </span>
                <p className="mt-2 text-sm font-bold text-slate-900">{item.title}</p>
                <p className="mt-1 text-xs text-slate-600">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
