import { useEffect, useState } from 'react'
import { brand } from '../brand'
import { useLanguage } from '../i18n/LanguageContext'

export function HeroSlider() {
  const { t } = useLanguage()
  const slides = t.heroSlider.slides
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((i) => (i + 1) % slides.length)
    }, 7000)
    return () => clearInterval(timer)
  }, [slides.length])

  const slide = slides[active]
  const bg = brand.heroSlides[active]
  const slideImage = bg?.image
  const slideGradient = bg?.gradient ?? 'from-brand-900 to-brand-800'

  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="absolute inset-0">
        {slideImage && (
          <img
            src={slideImage}
            alt=""
            className="h-full w-full object-cover object-center"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        )}
        <div
          className={
            slideImage
              ? 'absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/75 to-slate-900/35'
              : `absolute inset-0 bg-gradient-to-br ${slideGradient}`
          }
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 py-20 lg:px-8 lg:py-28">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-brand-100">
          <span className="h-2 w-2 rounded-full bg-accent-400" />
          {t.hero.badge}
        </p>

        <h1 className="mt-6 max-w-5xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl lg:leading-[1.05]">
          {t.heroSlider.headline}
        </h1>
        <p className="mt-5 max-w-3xl text-xl font-semibold leading-snug text-white/95 sm:text-2xl lg:text-3xl">
          {slide.title}
        </p>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-200 sm:text-xl">{slide.subtitle}</p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href={slide.ctaHref}
            className="inline-flex items-center justify-center rounded-full bg-accent-500 px-8 py-3.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-accent-400"
          >
            {slide.cta}
          </a>
          <a
            href="https://allexamsuccess.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {t.heroSlider.exploreAes}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-sm font-semibold text-white/90 transition hover:border-white/50"
          >
            {t.hero.ctaPrimary}
          </a>
        </div>

        <div className="mt-12 flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Slide ${i + 1}`}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all ${
                i === active ? 'w-8 bg-accent-400' : 'w-2 bg-white/40 hover:bg-white/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
