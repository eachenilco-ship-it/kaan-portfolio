type SectionLabelProps = {
  label: string
  index: string
  tone?: 'dark' | 'light'
}

export function SectionLabel({ label, index, tone = 'light' }: SectionLabelProps) {
  const isDark = tone === 'dark'
  return (
    <div
      className={`flex items-center justify-between gap-4 border-b pb-4 ${
        isDark ? 'border-ink/10' : 'border-hairline'
      }`}
    >
      <span
        className={`label-eyebrow flex items-center gap-2 ${
          isDark ? 'text-ink/50' : 'text-sand'
        }`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-gold" />
        {label}
      </span>
      <span
        className={`font-display text-xs font-semibold ${
          isDark ? 'text-ink/40' : 'text-sand/70'
        }`}
      >
        {index}
      </span>
    </div>
  )
}
