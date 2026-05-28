import logoUrl from '../assets/NextGen_logo.png'
import { brand } from '../brand'

type LogoProps = {
  size?: 'sm' | 'md' | 'footer'
}

const heights = {
  sm: 'h-10',
  md: 'h-12',
  footer: 'h-9',
}

export function Logo({ size = 'sm' }: LogoProps) {
  return (
    <img
      src={logoUrl}
      alt={brand.name}
      className={`${heights[size]} w-auto max-w-[min(100%,280px)] object-contain object-left`}
      width={280}
      height={80}
    />
  )
}
