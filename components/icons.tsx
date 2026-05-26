export function LogoIcon({ className = 'w-7 h-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 256 256" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M 128.005 191.173 C 128.448 156.208 156.93 128 192 128 L 192 64 L 128 64 C 128 99.346 99.346 128 64 128 L 64 192 L 128 192 Z M 192 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 64 L 64 64 L 64 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 192 L 192 192 Z" />
    </svg>
  )
}

export function ArrowRight({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

export function MenuIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="13" x2="20" y2="13" />
      <line x1="4" y1="19" x2="14" y2="19" />
    </svg>
  )
}

export function CloseIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  )
}

export function ServiceGlyph({ kind, className = 'w-6 h-6' }: { kind: string; className?: string }) {
  const common = {
    className,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  }
  if (kind === 'product') {
    return (
      <svg {...common}>
        <rect x="3" y="14" width="18" height="6" rx="1.5" />
        <rect x="5" y="8" width="14" height="4" rx="1.2" />
        <rect x="7" y="3" width="10" height="3" rx="1" />
      </svg>
    )
  }
  if (kind === 'ai') {
    return (
      <svg {...common}>
        <circle cx="6" cy="6" r="2.2" />
        <circle cx="18" cy="7" r="2.2" />
        <circle cx="12" cy="18" r="2.4" />
        <line x1="8" y1="7" x2="16" y2="7" />
        <line x1="7" y1="8" x2="11" y2="16" />
        <line x1="17" y1="9" x2="13" y2="16" />
      </svg>
    )
  }
  if (kind === 'platform') {
    return (
      <svg {...common}>
        <path d="M12 3 L20 7 L20 17 L12 21 L4 17 L4 7 Z" />
        <path d="M12 3 L12 21" />
        <path d="M4 7 L20 17" />
        <path d="M20 7 L4 17" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="11" cy="11" r="6" />
      <circle cx="11" cy="11" r="2" />
      <line x1="11" y1="2" x2="11" y2="5" />
      <line x1="11" y1="17" x2="11" y2="20" />
      <line x1="2" y1="11" x2="5" y2="11" />
      <line x1="17" y1="11" x2="20" y2="11" />
      <line x1="16.2" y1="16.2" x2="21" y2="21" />
    </svg>
  )
}
