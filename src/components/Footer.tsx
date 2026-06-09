import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()
  const f = t.footer

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#" className="inline-block shrink-0">
              <Logo size="footer" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">{f.tagline}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{f.company}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {f.companyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{f.products}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {f.productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target={link.external ? '_blank' : undefined}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">{f.policies}</p>
            <ul className="mt-4 space-y-2 text-sm">
              {f.policyLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            {t.brand.industry} · {t.brand.primaryMarket}
          </p>
          <p className="text-sm text-slate-500">
            © {year} {brand.name}
          </p>
        </div>
      </div>
    </footer>
  )
}
