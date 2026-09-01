import { Network, Cloud, ShieldCheck, Server } from 'lucide-react'
import iconMark from '../assets/astrazone-icon.png'

interface NetworkVisualProps {
  className?: string
}

/**
 * Hero / CTA signature visual: the real AstraZone mark set inside an ambient
 * glow, surrounded by floating capability badges. Swap src/assets/astrazone-icon.png
 * to update the mark shown here.
 */
export default function NetworkVisual({ className = '' }: NetworkVisualProps) {
  return (
    <div className={`relative ${className}`}>
      {/* ambient gradient glow */}
      <div
        className="absolute inset-0 -z-10 animate-float-slower rounded-full opacity-70 blur-3xl"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,255,0.22) 0%, rgba(0,107,255,0.10) 45%, transparent 70%)',
        }}
        aria-hidden
      />

      {/* faint concentric rings for depth */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center" aria-hidden>
        <div className="h-[340px] w-[340px] rounded-full border border-brand/10" />
        <div className="absolute h-[420px] w-[420px] rounded-full border border-brand/[0.06]" />
      </div>

      <div className="flex items-center justify-center py-10">
        <img
          src={iconMark}
          alt="AstraZone IT Solutions"
          className="w-full max-w-[280px] animate-float-slow drop-shadow-[0_25px_60px_rgba(0,107,255,0.25)]"
        />
      </div>

      {/* floating capability badges */}
      <div className="pointer-events-none absolute -left-2 top-10 hidden animate-float-slow items-center gap-2 rounded-xl border border-ink/[0.06] bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-card backdrop-blur sm:flex">
        <Network className="h-4 w-4 text-brand" aria-hidden />
        Réseaux
      </div>
      <div
        className="pointer-events-none absolute -right-4 top-24 hidden animate-float-slow items-center gap-2 rounded-xl border border-ink/[0.06] bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-card backdrop-blur sm:flex"
        style={{ animationDelay: '1.4s' }}
      >
        <Cloud className="h-4 w-4 text-brand-electric" aria-hidden />
        Cloud
      </div>
      <div
        className="pointer-events-none absolute -left-6 bottom-16 hidden animate-float-slow items-center gap-2 rounded-xl border border-ink/[0.06] bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-card backdrop-blur sm:flex"
        style={{ animationDelay: '0.7s' }}
      >
        <ShieldCheck className="h-4 w-4 text-brand-cyan" aria-hidden />
        Sécurité
      </div>
      <div
        className="pointer-events-none absolute -right-2 bottom-6 hidden animate-float-slow items-center gap-2 rounded-xl border border-ink/[0.06] bg-white/90 px-3 py-2 text-xs font-semibold text-ink shadow-card backdrop-blur sm:flex"
        style={{ animationDelay: '2s' }}
      >
        <Server className="h-4 w-4 text-brand-deep" aria-hidden />
        Infrastructure
      </div>
    </div>
  )
}
