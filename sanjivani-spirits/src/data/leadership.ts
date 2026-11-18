export interface Leader {
  id: string
  name: string
  role: string
  order: number
  messageTitle: string
  message: string
  placeholder?: string
}

export const leadership: Leader[] = [
  {
    id: 'shankarrao-kolhe',
    name: 'Late Honourable Shri Shankarraoji Kolhe Saheb',
    role: 'Founder',
    order: 1,
    messageTitle: "Founder's Message",
    placeholder: 'founder',
    message:
      'Holistic growth and prosperity for everyone have always been the guiding philosophy of the Group. Since its inception, the organization has remained committed to creating sustainable value for society while fostering economic development and empowering communities. Every initiative undertaken is driven by a vision of inclusive progress, ensuring that growth benefits not only the organization but also its employees, partners, customers, farmers, and the communities it serves. Built on the strong foundations of perseverance, trust, integrity, and transparency, the Group has successfully expanded its presence across multiple industries, consistently delivering excellence and innovation. These core values have earned the confidence of stakeholders and established long-lasting relationships based on mutual respect and accountability. Beyond business success, the Group believes in nurturing a culture of continuous learning, innovation, and responsibility. It encourages every stakeholder to think creatively, embrace change, evolve with emerging opportunities, and act with purpose to contribute towards a brighter future.',
  },
  {
    id: 'bipindada-kolhe',
    name: 'Honourable Shri Bipindada Kolhe',
    role: 'Group President',
    order: 2,
    messageTitle: "Group President's Message",
    placeholder: 'president',
    message:
      'Over the last 64 years, the Sanjivani Group has grown with India. The focus remains on developing every stakeholder while setting benchmarks in manufacturing, quality control, human resource development, operations management, and CSR.',
  },
  {
    id: 'vivekbhaiya-kolhe',
    name: 'Honourable Shri Vivekbhaiya Kolhe',
    role: 'Chairman',
    order: 3,
    messageTitle: "Chairman's Message",
    placeholder: 'chairman',
    message:
      'The liquor industry presents immense future opportunity, but sustainable growth depends on disciplined choices. The company continuously reviews its business model, risk management systems, and strategic direction to ensure it always makes the right move.',
  },
  {
    id: 'shantam-shukla',
    name: 'Honourable Shri Shantam Shukla',
    role: 'Management Advisory',
    order: 4,
    messageTitle: 'Management Advisory',
    placeholder: 'advisory',
    message:
      'The key strategic priorities are clear: ramp up production capacity at optimum costs, leverage technology, automation, and digitalisation, and sustain investments that improve profitability, sustainability, and resource development.',
  },
  {
    id: 'shiva-kumar',
    name: 'Honourable Shri Shiva Kumar',
    role: 'Chief Operating Officer',
    order: 5,
    messageTitle: "Chief Operating Officer's Message",
    placeholder: 'coo',
    message:
      '"Operational excellence" remains the guiding principle. The team is committed to continuously enhancing efficiency, maintaining the highest standards of quality, driving innovation, and creating sustainable value.',
  },
]

export interface TimelineItem {
  year: string
  title: string
  description: string
}

export const timeline: TimelineItem[] = [
  {
    year: 'Foundation',
    title: 'A Vision Takes Root In Kopargaon',
    description:
      'Sixty-four years ago, a visionary dream took shape: to build a world-class organisation that would generate employment and improve the lives of fellow villagers in Kopargaon. Although Late Honourable Shri Shankarraoji Kolhe Saheb had the opportunity to open a factory in Switzerland while working in Europe, he chose instead to return home and build for his country and community. That decision led to the foundation of Sahakar Maharshi Shankarrao Kolhe Sahakari Sakhar Karkhana Ltd., backed by poor, illiterate small landholders of the Kopargaon Taluka.',
  },
  {
    year: '1980s',
    title: 'Expansion — The Liquor Division Takes Off',
    description:
      'Under the visionary leadership of Late Honourable Shri Shankarrao Kolhe, the liquor division was established with the introduction of Country Liquor CL1 - 36. The launch of "Sanjivani Bobby Santra" quickly became a market hit among country liquor enthusiasts and accelerated the division\'s growth.',
  },
  {
    year: '1996',
    title: 'Milestone — Category Benchmark',
    description:
      'By 1996, SMSSK Ltd. had emerged as one of the top country liquor entities in India, setting a benchmark in the category. As the market became more organised, Sanjivani Spirits introduced diverse flavours and built one-to-one relationships with consumers by responding to evolving tastes.',
  },
  {
    year: 'Today',
    title: 'A Diversified Group, Steeped In Community',
    description:
      'From that humble beginning, the group has grown into a diversified enterprise spanning education, sugar, liquor, ethanol, chemicals, pharma, power, and solvents — with a long-term commitment to progress, opportunity, and self-reliance.',
  },
]

export const legacyAtAGlance = [
  {
    value: '64',
    label: 'Years of institution-building rooted in community upliftment, employment generation, and long-term development.',
  },
  {
    value: '1980s',
    label: 'The decade in which the first liquor division was established and the foundation for brand leadership was built.',
  },
  {
    value: '1996',
    label: 'The year SMSSK Ltd. stood among the top country liquor entities in India, reflecting strong category leadership.',
  },
]

export const growthOutlook = [
  {
    title: 'R&D Driven',
    summary:
      "Sanjivani Group's liquor division is equipped with strong R&D support, helping it create products that set new quality benchmarks in the Indian liquor industry.",
    accent: 'from-amber-500 to-orange-600',
  },
  {
    title: 'Consumer Centric',
    summary:
      'Product development is guided by consumer taste, with constant work on new flavours that deliver unmatched experiences and wider market appeal.',
    accent: 'from-emerald-500 to-teal-600',
  },
  {
    title: 'Nationwide Ambition',
    summary:
      'The company has prudent growth plans and has brought in experienced minds to expand its footprint across the country with a broad array of products and services.',
    accent: 'from-rose-500 to-pink-600',
  },
  {
    title: 'Technology Led',
    summary:
      'The next phase of growth is designed to be technology-driven, ensuring sustainable value creation for stakeholders well into the future.',
    accent: 'from-sky-500 to-indigo-600',
  },
]

export interface VisionMission {
  type: 'Vision' | 'Mission'
  statement: string
  accent: string
}

export const visionMission: VisionMission[] = [
  {
    type: 'Vision',
    statement:
      'To be the best country liquor manufacturer in all aspects of our business as perceived by customers and dealers.',
    accent: 'from-amber-600 via-orange-500 to-amber-700',
  },
  {
    type: 'Mission',
    statement:
      'To ensure socially acceptable practices and to provide high-quality liquor at affordable prices to our mass patrons.',
    accent: 'from-slate-800 via-stone-800 to-zinc-900',
  },
]
