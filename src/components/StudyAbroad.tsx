import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

export function StudyAbroad() {
  const { t } = useLanguage()
  const s = t.studyAbroad

  return (
    <section id="study-abroad" className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{s.eyebrow}</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{s.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{s.intro}</p>
            <ul className="mt-8 space-y-3">
              {s.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-brand-600 px-8 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              {s.cta}
            </a>
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
            <img
              src={brand.consultingImages.studyAbroad}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <ul className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {s.services.map((item, i) => {
            const images = [
              brand.consultingImages.admissionCounselling,
              brand.consultingImages.ieltsScholarship,
              brand.consultingImages.universityConnection,
            ]
            return (
              <li key={item.title} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                <img src={images[i]} alt="" className="h-40 w-full object-cover" />
                <div className="p-5">
                  <h3 className="font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
