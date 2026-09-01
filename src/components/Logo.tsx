import iconMark from '../assets/astrazone-icon.png'

interface LogoProps {
  /** 'iconOnly' shows just the mark (e.g. tight spaces); 'default' pairs it with the wordmark. */
  variant?: 'default' | 'iconOnly'
  className?: string
}

/**
 * Renders the AstraZone logo: the real icon mark (src/assets/astrazone-icon.png)
 * paired with a typeset wordmark, since the source logo's wordmark is white and
 * only reads on dark backgrounds. Swap astrazone-icon.png to update the mark
 * everywhere — the surrounding text stays theme-aware automatically.
 */
export default function Logo({ variant = 'default', className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <img src={iconMark} alt="AstraZone IT Solutions" className="h-10 w-10 object-contain" />
      {variant === 'default' && (
        <div className="flex flex-col leading-tight">
          <span className="font-display text-base font-bold tracking-tight text-ink">AstraZone</span>
          <span className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-ink-faint">
            IT Solutions
          </span>
        </div>
      )}
    </div>
  )
}
