export interface Pillar {
  id: string
  number: string
  title: string
  icon: string
  summary: string
  body: string[]
}

export const pillars: Pillar[] = [
  {
    id: 'market-leadership',
    number: '01',
    title: 'Market Leadership',
    icon: 'crown',
    summary: 'Building dominant positions through flavour-led portfolios and deep retail relationships.',
    body: [
      'A 64-year operating legacy gives Sanjivani Spirits unmatched familiarity with local consumer behaviour, retail patterns, and regional distribution dynamics.',
      'From Bobby Santra as the flagship to the most-loved Premium Santra, the portfolio is engineered for shelf recognition, repeat purchase, and strong offtake velocity.',
      'Leadership is measured not just in market share, but in how consistently retailers, dealers, and consumers choose the brand over decades.',
    ],
  },
  {
    id: 'environmental-care',
    number: '02',
    title: 'Environmental Care',
    icon: 'leaf',
    summary: 'Integrated value chains and responsible operations that lighten the footprint with every bottle.',
    body: [
      'The group operates across sugar, ethanol, and spirits, turning molasses into alcohol through a circular, utilisation-first approach.',
      'Multi-pressure distillation, efficient packaging, and disciplined utility management reduce water, energy, and material intensity across every process.',
      'Growth never comes at the cost of the environment. Every investment is audited against measurable efficiency and sustainability metrics.',
    ],
  },
  {
    id: 'people-first',
    number: '03',
    title: 'People-First Culture',
    icon: 'heart',
    summary: 'An organisation where farmers, employees, dealers, and consumers grow together, always.',
    body: [
      'Built by Late Honourable Shri Shankarraoji Kolhe Saheb for the community, the group still puts small landholders, employees, and local livelihoods at the centre.',
      'From factory floor teams to senior leadership, capability building, dignity, and long-term employment define how the organisation works.',
      'A people-first culture is not an afterthought — it is the reason every plant runs with discipline, pride, and ownership.',
    ],
  },
  {
    id: 'social-upliftment',
    number: '04',
    title: 'Measurable Social Upliftment',
    icon: 'community',
    summary: 'Affordable quality, socially acceptable practices, and impact that compounds for generations.',
    body: [
      'Quality at affordable prices ensures that safe, responsibly produced liquor reaches mass patrons instead of unsafe alternatives.',
      'From employment generation in Kopargaon to the broader group footprint in education, sugar, pharma, power, and solvents, the cascading impact is deeply local.',
      'Every operating decision is weighed against its contribution to the community — not just the quarter.',
    ],
  },
]
