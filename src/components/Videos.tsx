import { useState } from 'react'
import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

const { videos } = brand

const GALLERY_ORDER = ['all-exam-success', 'easy-match-bd'] as const
type GalleryProduct = (typeof GALLERY_ORDER)[number]

type VideoEntry = {
  product: GalleryProduct
  src: string
  poster?: string
  title: string
  subtitle?: string
}

function hasSrc(src: string) {
  return Boolean(src?.trim())
}

type SiteVideoProps = {
  entry: Pick<VideoEntry, 'src' | 'poster' | 'title'>
  className?: string
  large?: boolean
}

function SiteVideo({ entry, className = '', large = false }: SiteVideoProps) {
  const [missing, setMissing] = useState(false)

  if (!hasSrc(entry.src)) {
    return <VideoPlaceholder title={entry.title} className={className} />
  }

  if (missing) {
    return (
      <VideoPlaceholder
        title={entry.title}
        hint={`File not found: ${entry.src}`}
        className={className}
      />
    )
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl bg-slate-900 shadow-inner ${large ? 'rounded-t-3xl rounded-b-none' : ''} ${className}`}
    >
      <video
        className="h-full w-full object-contain"
        controls
        playsInline
        preload="metadata"
        poster={entry.poster && hasSrc(entry.poster) ? entry.poster : undefined}
        onError={() => setMissing(true)}
      >
        <source src={entry.src} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  )
}

type PlaceholderProps = { title: string; hint?: string; className?: string }

function VideoPlaceholder({ title, hint, className = '' }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 text-center ${className}`}
    >
      <span className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-200 text-slate-400">
        <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M4 8a2 2 0 012-2h9a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2V8z"
          />
        </svg>
      </span>
      <p className="text-sm font-medium text-slate-600">{title}</p>
      <p className="max-w-xs text-xs text-slate-400">
        {hint ?? 'Add your .mp4 file to public/videos/ and set the path in src/brand.ts'}
      </p>
    </div>
  )
}

function gallerySectionLabel(t: ReturnType<typeof useLanguage>['t'], product: GalleryProduct) {
  if (product === 'all-exam-success') return t.videos.galleryAllExamSuccess
  return t.videos.galleryEasyMatchBd
}

function pillClass(product: GalleryProduct) {
  return product === 'all-exam-success'
    ? 'bg-brand-100 text-brand-700'
    : 'bg-rose-100 text-rose-800'
}

export function Videos() {
  const { t } = useLanguage()

  return (
    <section id="videos" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-brand-600">
          {t.videos.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {t.videos.title}
        </h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">{t.videos.intro}</p>

        <div className="mt-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {t.videos.featuredLabel}
          </p>
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-slate-200">
            <div className="aspect-video">
              <SiteVideo
                entry={videos.featured}
                large
                className="h-full rounded-none"
              />
            </div>
            <div className="rounded-b-3xl border border-t-0 border-slate-200 px-6 py-4">
              <p className="font-semibold text-slate-900">{videos.featured.title}</p>
              {videos.featured.subtitle && (
                <p className="mt-1 text-sm text-slate-500">{videos.featured.subtitle}</p>
              )}
            </div>
          </div>
        </div>

        {videos.gallery.length > 0 && (
          <div className="mt-14">
            <p className="mb-8 text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t.videos.galleryLabel}
            </p>

            <div className="flex flex-col gap-14">
              {GALLERY_ORDER.map((product) => {
                const items = videos.gallery.filter((v) => v.product === product)
                if (items.length === 0) return null

                return (
                  <div key={product}>
                    <h3 className="mb-4 text-lg font-bold text-slate-900">
                      {gallerySectionLabel(t, product)}
                    </h3>
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((item) => (
                        <li key={item.title} className="flex flex-col gap-3">
                          <div className="aspect-video">
                            <SiteVideo entry={item} className="h-full" />
                          </div>
                          <div>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${pillClass(product)}`}
                            >
                              {gallerySectionLabel(t, product)}
                            </span>
                            <p className="mt-1.5 text-sm font-semibold text-slate-900">{item.title}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
