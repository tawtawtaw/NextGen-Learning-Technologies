import { useLanguage } from '../i18n/LanguageContext'

function initials(name: string) {
  return name
    .split(/\s+/)
    .map((part) => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Leadership() {
  const { t } = useLanguage()
  const l = t.leadership

  return (
    <section id="leadership" className="border-y border-slate-200 bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">{l.eyebrow}</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{l.title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{l.intro}</p>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {l.members.map((member) => (
            <li
              key={member.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white"
                  aria-hidden
                >
                  {initials(member.name)}
                </span>
                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">{member.name}</h3>
                  <p className="mt-0.5 text-sm font-semibold text-brand-700">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">{member.bio}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
