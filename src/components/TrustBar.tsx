import { useLanguage } from '../i18n/LanguageContext'

export function TrustBar() {
  const { t } = useLanguage()

  return (
    <section className="border-b border-slate-200 bg-slate-50 py-6" aria-label={t.trustBar.label}>
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.trustBar.items.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm font-medium text-slate-700">
              <svg className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
