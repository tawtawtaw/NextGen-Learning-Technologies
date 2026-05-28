import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 sm:flex-row lg:px-8">
        <a href="#" className="shrink-0">
          <Logo size="footer" />
        </a>
        <p className="text-center text-sm text-slate-500">
          {t.brand.industry} · {t.brand.primaryMarket}
        </p>
        <p className="text-sm text-slate-400">
          © {year} {brand.name}
        </p>
      </div>
    </footer>
  )
}
