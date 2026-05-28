import { useLanguage } from '../i18n/LanguageContext'

export function LanguageToggle() {
  const { locale, toggleLocale, t } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLocale}
      className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
      aria-label={locale === 'en' ? 'Switch to Bengali' : 'Switch to English'}
    >
      <span className="text-brand-600">{t.lang.current}</span>
      <span className="text-slate-300" aria-hidden>
        |
      </span>
      <span>{t.lang.switchTo}</span>
    </button>
  )
}
