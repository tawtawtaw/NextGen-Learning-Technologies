import { brand } from '../brand'
import aesLogoUrl from '../assets/allexamsuccess_logo.png'
import easymatchLogoUrl from '../assets/easymatchbd_logo.jpg'
import { useLanguage } from '../i18n/LanguageContext'

type SubId = (typeof brand.subsidiaries)[number]['id']

function productCopy(t: ReturnType<typeof useLanguage>['t'], id: SubId) {
  if (id === 'all-exam-success') return t.subsidiaries.allExamSuccess
  return t.subsidiaries.easyMatchBd
}

function badgeLabel(t: ReturnType<typeof useLanguage>['t'], id: SubId) {
  if (id === 'all-exam-success') return t.subsidiaries.flagshipBadge
  return t.subsidiaries.liveBadge
}

export function Subsidiaries() {
  const { t } = useLanguage()

  return (
    <section id="subsidiaries" className="bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
            {t.subsidiaries.eyebrow}
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t.subsidiaries.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.subsidiaries.intro}</p>
        </div>

        <div className="mt-12 flex flex-col gap-12">
          {brand.subsidiaries.map((sub) => {
            const copy = productCopy(t, sub.id)
            const hasAndroid = Boolean(sub.playStoreUrl)
            const hasIos = Boolean(sub.appStoreUrl)
            const hasAnyApp = hasAndroid || hasIos
            const isAes = sub.id === 'all-exam-success'
            const helpline = sub.helpline?.trim()
            const facebookUrl = sub.facebookUrl?.trim()
            const youtubeUrl = sub.youtubeUrl?.trim()

            return (
              <article
                key={sub.id}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50"
              >
                <div className="grid lg:grid-cols-[1.1fr_1fr]">
                  <div
                    className={`border-b border-slate-100 p-8 lg:border-b-0 lg:border-r lg:p-10 ${
                      isAes
                        ? 'bg-gradient-to-br from-amber-50 via-white to-brand-50'
                        : 'bg-gradient-to-br from-rose-50 via-white to-slate-50'
                    }`}
                  >
                    <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm ring-1 ring-slate-200/80">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${isAes ? 'bg-brand-600' : 'bg-rose-500'}`}
                      />
                      <span className="text-slate-600">{badgeLabel(t, sub.id)}</span>
                      <span className="text-slate-300">·</span>
                      <span>{t.subsidiaries.subsidiaryBadge}</span>
                    </p>

                    <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
                      {isAes ? (
                        <img
                          src={aesLogoUrl}
                          alt={sub.name}
                          className="h-14 w-auto max-w-[min(100%,240px)] shrink-0 object-contain object-left sm:h-16"
                          width={240}
                          height={64}
                        />
                      ) : (
                        <img
                          src={easymatchLogoUrl}
                          alt={sub.name}
                          className="h-14 w-auto max-w-[min(100%,260px)] shrink-0 object-contain object-left sm:h-16"
                          width={260}
                          height={64}
                        />
                      )}
                      <div className="min-w-0">
                        <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">{copy.name}</h3>
                        <p className={`mt-1 text-sm font-medium ${isAes ? 'text-brand-700' : 'text-rose-700'}`}>
                          {copy.tagline}
                        </p>
                      </div>
                    </div>

                    <p className="mt-6 leading-relaxed text-slate-600">{copy.description}</p>

                    <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                      {copy.highlights.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                          <svg
                            className={`mt-0.5 h-4 w-4 shrink-0 ${isAes ? 'text-brand-600' : 'text-rose-600'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
                    <a
                      href={sub.webUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${t.subsidiaries.visitWeb}: ${sub.name}`}
                      className={`group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition ${
                        isAes
                          ? 'hover:border-brand-200 hover:bg-brand-50/50'
                          : 'hover:border-rose-200 hover:bg-rose-50/50'
                      }`}
                    >
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-xl text-white ${
                          isAes ? 'bg-brand-600' : 'bg-rose-600'
                        }`}
                      >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
                          />
                        </svg>
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                          {t.subsidiaries.webPortal}
                        </p>
                        <p className="truncate text-sm font-medium text-slate-800 underline-offset-2 group-hover:underline">
                          {sub.webUrl.replace(/^https?:\/\//, '')}
                        </p>
                      </div>
                    </a>

                    {facebookUrl && (
                      <a
                        href={facebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#1877F2]/40 hover:bg-[#1877F2]/5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2] text-white">
                          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {t.subsidiaries.facebook}
                          </p>
                          <p className="truncate text-sm font-semibold text-[#1877F2]">
                            {t.subsidiaries.visitFacebook}
                          </p>
                        </div>
                      </a>
                    )}

                    {youtubeUrl && (
                      <a
                        href={youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-[#FF0000]/40 hover:bg-[#FF0000]/5"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF0000] text-white">
                          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                            <path d="M23.498 6.186a2.99 2.99 0 0 0-2.105-2.117C19.507 3.5 12 3.5 12 3.5s-7.507 0-9.393.569A2.99 2.99 0 0 0 .502 6.186C0 8.084 0 12 0 12s0 3.916.502 5.814a2.99 2.99 0 0 0 2.105 2.117C4.493 20.5 12 20.5 12 20.5s7.507 0 9.393-.569a2.99 2.99 0 0 0 2.105-2.117C24 15.916 24 12 24 12s0-3.916-.502-5.814ZM9.75 15.5v-7l6 3.5-6 3.5Z" />
                          </svg>
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {t.subsidiaries.youtube}
                          </p>
                          <p className="truncate text-sm font-semibold text-[#FF0000]">
                            {t.subsidiaries.visitYouTube}
                          </p>
                        </div>
                      </a>
                    )}

                    {helpline ? (
                      <a
                        href={`tel:${helpline.replace(/\s/g, '')}`}
                        className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-rose-200 hover:bg-rose-50/50"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-white">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {t.subsidiaries.helpline}
                          </p>
                          <p className="text-sm font-semibold text-slate-900">{helpline}</p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-800 text-white">
                          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={1.5}
                              d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                            />
                          </svg>
                        </span>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                            {t.subsidiaries.mobileApp}
                          </p>
                          <p className="text-sm font-medium text-slate-800">
                            {hasAnyApp
                              ? `${t.subsidiaries.getAndroid} · ${t.subsidiaries.getIos}`
                              : t.subsidiaries.comingSoon}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <a
                        href={sub.webUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex flex-1 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition sm:flex-none ${
                          isAes ? 'bg-brand-600 hover:bg-brand-700' : 'bg-rose-600 hover:bg-rose-700'
                        }`}
                      >
                        {t.subsidiaries.visitWeb}
                      </a>
                      {hasAndroid && (
                        <a
                          href={sub.playStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 sm:flex-none"
                        >
                          {t.subsidiaries.getAndroid}
                        </a>
                      )}
                      {hasIos && (
                        <a
                          href={sub.appStoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700 sm:flex-none"
                        >
                          {t.subsidiaries.getIos}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
