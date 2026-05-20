export default function StatCard({ title, label, value, icon, color, sub }) {
  const displayLabel = title || label

  // color can be a hex like '#7c5cfc' or a name like 'accent'
  const colorNameMap = {
    accent: '#1a1a2e',
    green:  '#16a34a',
    yellow: '#c8860a',
    purple: '#6d28d9',
    blue:   '#1d4ed8',
    red:    '#dc2626',
  }
  const resolvedColor = (color && color.startsWith('#')) ? color : (colorNameMap[color] || '#7c5cfc')

  // icon can be a React component (lucide) or an emoji string
  const isComponent = icon && typeof icon !== 'string'
  const Icon = isComponent ? icon : null

  return (
    <div className="stat-card" style={{ borderColor: `${resolvedColor}30`, boxShadow: `0 1px 4px rgba(26,26,46,0.06), 0 0 0 1px ${resolvedColor}14` }}>
      <div className="absolute top-0 right-0 w-24 h-24 rounded-full -translate-y-6 translate-x-6 blur-2xl"
        style={{ background: resolvedColor, opacity: 0.08 }} />
      <div className="absolute top-4 right-4 w-9 h-9 rounded-xl flex items-center justify-center text-lg"
        style={{ background: `${resolvedColor}14`, border: `1px solid ${resolvedColor}28`, color: resolvedColor }}>
        {Icon ? <Icon size={18} /> : icon}
      </div>
      <div className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: '#6b6b7b' }}>{displayLabel}</div>
      <div className="font-display text-3xl font-bold leading-none" style={{ color: '#1a1a2e' }}>{value ?? '—'}</div>
      {sub && <div className="text-xs mt-1.5" style={{ color: '#9a9aaa' }}>{sub}</div>}
    </div>
  )
}
