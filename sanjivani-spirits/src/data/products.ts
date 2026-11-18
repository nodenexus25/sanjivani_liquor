export interface Product {
  id: string
  name: string
  tagline: string
  category: 'orange' | 'spice' | 'citrus'
  positioning: string
  flavour: string
  appeal: string
  formats: string[]
  isFlagship?: boolean
  isMostLoved?: boolean
  description: string
  gradient: string
}

export const products: Product[] = [
  {
    id: 'bobby-santra',
    name: 'Bobby Santra',
    tagline: 'Flagship Orange',
    category: 'orange',
    positioning: 'the widest-format SKU in the range',
    flavour: 'bold orange, warm sweetness, rounded spirit character',
    appeal: 'rich taste built for strong recall and repeat demand',
    formats: ['750ml', '180ml glass', '180ml pet', '90ml glass', '90ml pet'],
    isFlagship: true,
    description:
      'Blended with strong orange-based flavours, Bobby Santra is loved for its organoleptic taste, rich aroma, and full-bodied appeal that instantly connects with Santra lovers.',
    gradient: 'from-orange-500 via-amber-500 to-orange-700',
  },
  {
    id: 'zingat-santra',
    name: 'Zingat Santra',
    tagline: 'Distinct Citrus',
    category: 'orange',
    positioning: 'a fresher take on the orange segment',
    flavour: 'bright orange, softer sweetness, lighter finish',
    appeal: 'energetic and easy-drinking without losing character',
    formats: ['180ml glass', '90ml glass'],
    description:
      'Zingat brings a distinct orange flavour with a subtler, lighter, and slightly more complex taste profile. True to its name, it carries a sharp identity and a loyal following.',
    gradient: 'from-amber-400 via-orange-400 to-yellow-500',
  },
  {
    id: 'sanjivani-santra',
    name: 'Sanjivani Santra',
    tagline: 'Filtered Classic',
    category: 'orange',
    positioning: 'quality-led Santra with process credibility',
    flavour: 'expressive notes with a smooth, polished finish',
    appeal: 'balanced profile that feels clean and approachable',
    formats: ['180ml glass', '90ml glass'],
    description:
      'Sanjivani Santra is crafted for a bright, expressive flavour profile with a light and balanced finish. It is produced in a finely filtered vacuum distillation plant for a cleaner drinking experience.',
    gradient: 'from-orange-400 via-amber-300 to-yellow-400',
  },
  {
    id: 'bobby-saunf',
    name: 'Bobby Saunf',
    tagline: 'Fennel Spice',
    category: 'spice',
    positioning: "the range's signature saunf-led option",
    flavour: 'fennel, anise, herbal spice, cooling freshness',
    appeal: 'classic desi spice cues with a smooth mouthfeel',
    formats: ['180ml glass', '90ml glass'],
    description:
      'Saunf is all about fennel, anise, and layered Indian spices. It has a smooth texture, a fresh taste, and a superior blend built from fine distilled and rectified spirit.',
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
  },
  {
    id: 'sanjivani-punch',
    name: 'Sanjivani Punch',
    tagline: 'Sweet & Sour',
    category: 'citrus',
    positioning: 'an alternative choice for citrus lovers',
    flavour: 'nimbu, sweet citrus, spice bouquet, herb lift',
    appeal: 'tangy, playful, and highly familiar on the palate',
    formats: ['180ml glass', '90ml glass'],
    description:
      'Punch delivers a sweet-and-sour flavour profile carried by Indian spices and herbs. It is a desi take on lemony cocktails and remains a favourite just behind the orange-led segment.',
    gradient: 'from-lime-500 via-yellow-400 to-lemon-500',
  },
  {
    id: 'sanjivani-premium-santra',
    name: 'Sanjivani Premium Santra',
    tagline: 'Most Loved',
    category: 'orange',
    positioning: 'elevated Santra for loyal consumers',
    flavour: 'deep aroma, smooth orange character, balanced finish',
    appeal: 'premium feel without becoming too heavy',
    formats: ['180ml glass', '90ml glass'],
    isMostLoved: true,
    description:
      'Sanjivani Premium Santra is the most-loved spirit in the line-up. It combines irresistible flavour and bold aromas with a character that still feels light, balanced, and easy to enjoy.',
    gradient: 'from-amber-600 via-orange-500 to-rose-500',
  },
]

export const flavourFamilies = [
  {
    name: 'Orange Family',
    accent: 'bg-gradient-to-r from-orange-500 to-amber-500',
    description:
      'Bobby Santra, Zingat Santra, Sanjivani Santra, and Sanjivani Premium Santra cover bold, light, filtered, and premium orange expressions.',
    members: ['Bobby Santra', 'Zingat Santra', 'Sanjivani Santra', 'Sanjivani Premium Santra'],
  },
  {
    name: 'Spice Family',
    accent: 'bg-gradient-to-r from-emerald-500 to-teal-600',
    description:
      'Bobby Saunf brings fennel, anise, and Indian spices together for consumers who prefer a cooler, herbal edge.',
    members: ['Bobby Saunf'],
  },
  {
    name: 'Citrus Twist',
    accent: 'bg-gradient-to-r from-lime-500 to-yellow-500',
    description:
      'Sanjivani Punch adds a sweet-and-sour lemony profile that broadens the portfolio without straying too far from local preferences.',
    members: ['Sanjivani Punch'],
  },
]

export const portfolioStats = [
  { value: '6', label: 'Signature spirits across orange, saunf, and punch-led profiles.' },
  { value: '5', label: 'Retail pack formats spanning 750ml, glass bottles, and PET packs.' },
  { value: '3', label: 'Core flavour families that keep the range easy to understand and easy to sell.' },
  { value: '2', label: 'Convenient mini formats that support steady everyday offtake.' },
]
