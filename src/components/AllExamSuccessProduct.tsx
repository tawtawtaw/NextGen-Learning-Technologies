import { brand } from '../brand'
import aesLogoUrl from '../assets/allexamsuccess_logo.png'
import { useLanguage } from '../i18n/LanguageContext'

const examCards = ['bcs', 'bank', 'job', 'admission'] as const

export function AllExamSuccessProduct() {
  const { t } = useLanguage()
  const p = t.aesProduct
  const aes = brand.subsidiaries.find((s) => s.id === 'all-exam-success')

  return (
    <section id="all-exam-success" className="bg-gradient-to-b from-amber-50/80 via-white to-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{p.eyebrow}</p>
            <img
              src={aesLogoUrl}
              alt="All Exam Success"
              className="mt-4 h-14 w-auto object-contain object-left sm:h-16"
            />
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{p.title}</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">{p.intro}</p>
          </div>
          <div className="flex flex-wrap gap-3 lg:max-w-sm lg:justify-end">
            <a
              href="https://allexamsuccess.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              {p.ctaVisit}
            </a>
            {aes?.youtubeUrl && (
              <a
                href={aes.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300"
              >
                {p.ctaYoutube}
              </a>
            )}
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {examCards.map((key) => (
            <li
              key={key}
              className="rounded-2xl border border-amber-200/80 bg-white p-5 shadow-sm"
            >
              <p className="text-lg font-bold text-slate-900">{p.examCards[key].title}</p>
              <p className="mt-1 text-sm text-slate-600">{p.examCards[key].text}</p>
            </li>
          ))}
        </ul>

        <div className="mt-14">
          <h3 className="text-xl font-bold text-slate-900">{p.featuresTitle}</h3>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {p.features.map((f) => (
              <li key={f.title} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-5">
                <p className="font-bold text-slate-900">{f.title}</p>
                <p className="mt-1 text-sm text-slate-600">{f.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 sr-only">{p.seoHidden}</p>
      </div>
    </section>
  )
}
