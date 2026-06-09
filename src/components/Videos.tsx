import { useRef, useState } from 'react'
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

function youtubeVideoId(src: string): string | null {
  const patterns = [
    /youtube\.com\/shorts\/([^/?&]+)/i,
    /youtube\.com\/watch\?v=([^&]+)/i,
    /youtu\.be\/([^/?&]+)/i,
    /youtube\.com\/embed\/([^/?&]+)/i,
  ]
  for (const pattern of patterns) {
    const match = src.match(pattern)
    if (match?.[1]) return match[1]
  }
  return null
}

function isYoutubeShort(src: string) {
  return /youtube\.com\/shorts\//i.test(src)
}

const shellClass = (large: boolean, className: string) =>
  `overflow-hidden rounded-2xl bg-slate-900 shadow-inner ${large ? 'rounded-t-3xl rounded-b-none' : ''} ${className}`

function youtubeEmbedSrc(videoId: string, autoplay = false) {
  const params = new URLSearchParams({
    modestbranding: '1',
    rel: '0',
    playsinline: '1',
    iv_load_policy: '3',
    fs: '1',
  })
  if (autoplay) params.set('autoplay', '1')
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`
}

const iframeAllow =
  'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen'

type YoutubePlayerProps = {
  videoId: string
  title: string
  short: boolean
  className?: string
  centeredShort?: boolean
  clickToPlay?: boolean
}

function YoutubePlayer({
  videoId,
  title,
  short,
  className = '',
  centeredShort = false,
  clickToPlay = false,
}: YoutubePlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(!clickToPlay)
  const [thumbSrc, setThumbSrc] = useState(
    short
      ? `https://i.ytimg.com/vi/${videoId}/oardefault.jpg`
      : `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
  )

  async function enterFullscreen() {
    const el = containerRef.current
    if (!el) return
    try {
      await el.requestFullscreen()
    } catch {
      // Browser blocked or unsupported — YouTube controls remain available.
    }
  }

  if (playing) {
    return (
      <div
        ref={containerRef}
        className={`relative h-full w-full ${shellClass(false, className)} [&:fullscreen]:!h-screen [&:fullscreen]:!w-screen [&:fullscreen]:!max-w-none [&:fullscreen]:rounded-none`}
      >
        <iframe
          className="h-full w-full"
          src={youtubeEmbedSrc(videoId, clickToPlay && playing)}
          title={title}
          allow={iframeAllow}
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
        <button
          type="button"
          onClick={enterFullscreen}
          className="absolute top-2 right-2 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-black/60 text-white transition hover:bg-black/80"
          aria-label={`Fullscreen: ${title}`}
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
            />
          </svg>
        </button>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      className={`group relative block h-full w-full cursor-pointer border-0 p-0 text-left ${shellClass(false, className)}`}
      aria-label={`Play video: ${title}`}
    >
      {centeredShort && short ? (
        <span className="flex h-full items-center justify-center">
          <img
            src={thumbSrc}
            alt=""
            className="h-full w-auto max-w-full object-cover"
            style={{ aspectRatio: '9 / 16' }}
            onError={() => setThumbSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
          />
        </span>
      ) : (
        <img
          src={thumbSrc}
          alt=""
          className="h-full w-full object-cover"
          onError={() => setThumbSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`)}
        />
      )}
      <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/20 transition group-hover:bg-black/35">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-slate-900 shadow-lg">
          <svg className="ml-1 h-6 w-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  )
}

type SiteVideoProps = {
  entry: Pick<VideoEntry, 'src' | 'poster' | 'title'>
  className?: string
  large?: boolean
  gallery?: boolean
}

function SiteVideo({ entry, className = '', large = false, gallery = false }: SiteVideoProps) {
  const [missing, setMissing] = useState(false)
  const youtubeId = youtubeVideoId(entry.src)
  const youtubeShort = Boolean(youtubeId && isYoutubeShort(entry.src))

  if (!hasSrc(entry.src)) {
    return <VideoPlaceholder title={entry.title} className={className} gallery={gallery} />
  }

  if (youtubeId) {
    return (
      <YoutubePlayer
        videoId={youtubeId}
        title={entry.title}
        short={youtubeShort}
        className={className}
        centeredShort={gallery && youtubeShort}
        clickToPlay={gallery}
      />
    )
  }

  if (missing) {
    return (
      <VideoPlaceholder
        title={entry.title}
        hint={`File not found: ${entry.src}`}
        className={className}
        gallery={gallery}
      />
    )
  }

  return (
    <div className={shellClass(large, className)}>
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

type PlaceholderProps = { title: string; hint?: string; className?: string; gallery?: boolean }

function VideoPlaceholder({ title, hint, className = '', gallery = false }: PlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-4 text-center ${
        gallery ? 'h-full min-h-0' : ''
      } ${className}`}
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
    : 'bg-easymatch-100 text-easymatch-800'
}

function galleryGridClass() {
  return 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
}

function galleryFrameClass() {
  return 'aspect-video w-full'
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
                    <ul className={galleryGridClass()}>
                      {items.map((item) => (
                        <li key={item.title} className="flex flex-col gap-3">
                          <div className={galleryFrameClass()}>
                            <SiteVideo entry={item} className="h-full w-full" gallery />
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
