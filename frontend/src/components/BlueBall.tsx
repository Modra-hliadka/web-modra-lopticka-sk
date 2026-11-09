type BlueBallProps = {
  className?: string
}

export function BlueBall({ className }: BlueBallProps) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      role="img"
      aria-label="Modrá antistresová loptička s hashtagom #modralopticka"
    >
      <defs>
        <radialGradient id="ballBody" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#5b8def" />
          <stop offset="45%" stopColor="#2f58c7" />
          <stop offset="100%" stopColor="#152b63" />
        </radialGradient>
        <radialGradient id="ballShine" cx="32%" cy="26%" r="22%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.85" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="ballShadow" cx="50%" cy="50%" r="50%">
          <stop offset="60%" stopColor="#0a1733" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#0a1733" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="200" cy="360" rx="120" ry="18" fill="url(#ballShadow)" />
      <circle cx="200" cy="190" r="150" fill="url(#ballBody)" />
      <circle cx="200" cy="190" r="150" fill="url(#ballShine)" />
      <text
        x="200"
        y="202"
        textAnchor="middle"
        fontFamily="DM Sans, system-ui, sans-serif"
        fontWeight="700"
        fontSize="26"
        fill="#ffffff"
        letterSpacing="0.5"
      >
        #modralopticka
      </text>
    </svg>
  )
}
