interface StatCardProps {
  value: string
  label: string
  accent?: string
}

function StatCard({ value, label, accent }: StatCardProps) {
  return (
    <div className="card-base p-8 lg:p-10 hover:-translate-y-0.5">
      <div
        className="font-serif text-5xl md:text-6xl font-light leading-none mb-5 text-gradient-gold"
      >
        {value}
      </div>
      <div className="divider-gold mb-5" />
      <p className="text-[14px] leading-relaxed text-stone-700 max-w-[28ch]">
        {label}
      </p>
      {accent && <div className={`mt-5 h-1 w-16 rounded-full ${accent}`} />}
    </div>
  )
}

export default StatCard
