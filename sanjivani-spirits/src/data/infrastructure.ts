export interface GalleryItem {
  id: string
  prompt: string
  size:
    | 'square_hd'
    | 'square'
    | 'portrait_4_3'
    | 'portrait_16_9'
    | 'landscape_4_3'
    | 'landscape_16_9'
  caption: string
  category: 'hero' | 'plant' | 'process' | 'people' | 'packaging'
}

export const infrastructureGallery: GalleryItem[] = [
  {
    id: 'campus',
    prompt:
      'Wide establishing shot of a modern premium industrial distillery campus at golden hour, clean concrete architecture, tall distillation columns silhouetted, landscaped approach road, editorial commercial photography, cinematic warm grade, 16:9 wide composition',
    size: 'landscape_16_9',
    caption: 'Distillery campus with a clean, modern industrial footprint.',
    category: 'plant',
  },
  {
    id: 'columns',
    prompt:
      'Interior view of tall multi-pressure distillation columns inside a modern spirits production facility, stainless steel, dramatic backlighting, industrial editorial photography, warm amber reflections, shallow depth of field',
    size: 'portrait_4_3',
    caption: 'Multi-pressure distillation columns at the heart of production.',
    category: 'process',
  },
  {
    id: 'qc-lab',
    prompt:
      'Premium quality control laboratory for spirits testing, glass flasks containing golden amber liquid, stainless steel workbench, soft focused scientist hands measuring sample, editorial photography, cool lab tones with warm amber highlights',
    size: 'landscape_4_3',
    caption: 'Quality-control lab focused on analysis and release confidence.',
    category: 'process',
  },
  {
    id: 'distillers',
    prompt:
      'Two experienced master distillers in a modern blending room reviewing amber spirit samples in crystal tasting glasses, warm rim lighting, matured wooden barrels in soft focus background, cinematic editorial photography',
    size: 'portrait_4_3',
    caption: 'Experienced distillers and blenders shaping product consistency.',
    category: 'people',
  },
  {
    id: 'blending-room',
    prompt:
      'Modern industrial blending room with rows of stainless steel tanks, amber spirit visible through sight glasses, controlled atmospheric lighting, clean pipework, premium editorial industrial photography, 16:9 composition',
    size: 'landscape_16_9',
    caption: 'Blending room designed for control, precision, and repeatability.',
    category: 'process',
  },
  {
    id: 'bottling',
    prompt:
      'High-speed modern bottling line producing clear and amber glass bottles, automated conveyor, clean stainless steel environment, premium packaging ready for dispatch, shallow depth of field, editorial photography',
    size: 'landscape_4_3',
    caption: 'Packaging and bottling systems ready for smooth downstream flow.',
    category: 'packaging',
  },
  {
    id: 'warehouse',
    prompt:
      'Premium industrial warehouse interior with perfectly organised pallets of finished liquor cartons, amber glass bottles stacked, modern racking, warm overhead lighting, editorial commercial photography, wide 16:9 view',
    size: 'landscape_16_9',
    caption: 'Warehouse discipline that protects stock and dispatch readiness.',
    category: 'plant',
  },
  {
    id: 'dispatch',
    prompt:
      'Logistics dispatch yard at golden hour, modern trucks being loaded with finished goods palettes outside a premium distillery, warm sunset light, editorial commercial photography, 16:9 composition',
    size: 'landscape_16_9',
    caption: 'Dispatch zone built for efficient outbound logistics.',
    category: 'plant',
  },
  {
    id: 'control-room',
    prompt:
      'Modern industrial control room with large monitor wall displaying distillation process data, dark room with glowing screens, single operator silhouette, cinematic cyberpunk-but-warm grade, editorial photography',
    size: 'landscape_4_3',
    caption: 'Central monitoring that supports production visibility and process control.',
    category: 'process',
  },
  {
    id: 'storage',
    prompt:
      'Rows of large stainless steel storage tanks inside a distillery, amber spirit visible, dramatic perspective leading lines, soft interior lighting, premium industrial editorial photography',
    size: 'landscape_4_3',
    caption: 'Storage capacity aligned with controlled process movement.',
    category: 'plant',
  },
  {
    id: 'inspection',
    prompt:
      'Close-up of quality inspection team reviewing finished bottled product on a glass table, amber liquid in premium glass bottles, focused hands checking label alignment, editorial photography, warm lighting',
    size: 'portrait_4_3',
    caption: 'Inspection practices that reinforce presentation and release quality.',
    category: 'people',
  },
  {
    id: 'production-hall',
    prompt:
      'Wide panoramic view of a premium modern distillery production hall, blending traditional copper pot stills with modern stainless steel columns, dramatic volumetric light through high windows, cinematic editorial photography',
    size: 'landscape_16_9',
    caption: 'A premium production environment where tradition meets modern technology.',
    category: 'plant',
  },
]

export interface OperationalHighlight {
  id: string
  number: string
  title: string
  summary: string
}

export const operationalHighlights: OperationalHighlight[] = [
  {
    id: 'distillation',
    number: '01',
    title: 'Distillation Strength',
    summary: 'Modern plant systems support stable and efficient production.',
  },
  {
    id: 'quality',
    number: '02',
    title: 'Quality Control',
    summary: 'Process discipline and testing help protect consistency.',
  },
  {
    id: 'dispatch',
    number: '03',
    title: 'Dispatch Readiness',
    summary: 'Packaging, storage, and movement stay aligned with market demand.',
  },
]

export interface ValueChainSegment {
  id: string
  title: string
  summary: string
  icon: 'brew' | 'package' | 'brand' | 'truck'
}

export const valueChain: ValueChainSegment[] = [
  {
    id: 'mfg',
    title: 'Alcohol Manufacturing',
    summary:
      'Control begins at the production end, where process design and infrastructure reliability shape the foundation of quality.',
    icon: 'brew',
  },
  {
    id: 'pack',
    title: 'Processing & Packaging',
    summary:
      'Blending, finishing, packaging, and storage are managed to preserve consistency and support smooth dispatch cycles.',
    icon: 'package',
  },
  {
    id: 'brand',
    title: 'Brand Portfolio',
    summary:
      'A diverse consumer-facing line-up allows the business to translate operational strength into real market presence.',
    icon: 'brand',
  },
  {
    id: 'supply',
    title: 'Market Supply',
    summary:
      'An integrated model helps reduce friction between production output and the pace of retail demand.',
    icon: 'truck',
  },
]

export interface OperationalPriority {
  id: string
  number: string
  title: string
  summary: string
}

export const operationalPriorities: OperationalPriority[] = [
  {
    id: 'equipment',
    number: '01',
    title: 'Equipment Quality',
    summary:
      'Plant capability starts with strong equipment sourced from respected national and international manufacturers.',
  },
  {
    id: 'process',
    number: '02',
    title: 'Process Discipline',
    summary:
      'Production systems are built around stable operations, repeatable methods, and practical quality checkpoints.',
  },
  {
    id: 'people',
    number: '03',
    title: 'People Capability',
    summary:
      'Experienced teams bring the human skill needed to elevate equipment performance into finished product excellence.',
  },
  {
    id: 'integration',
    number: '04',
    title: 'Business Integration',
    summary:
      'The value chain model keeps production, packaging, and portfolio planning connected instead of operating in silos.',
  },
]

export interface InfrastructurePromise {
  title: string
  summary: string
  accent: string
}

export const infrastructurePromises: InfrastructurePromise[] = [
  {
    title: 'End-to-End',
    summary:
      'A balanced model covers alcohol manufacturing, production systems, and the consumer-facing portfolio.',
    accent: 'from-amber-500 via-orange-500 to-amber-600',
  },
  {
    title: 'State-of-the-Art',
    summary:
      'Modern plant capability supports efficiency, repeatability, and better process confidence.',
    accent: 'from-zinc-800 via-neutral-900 to-stone-900',
  },
  {
    title: 'Quality-Led',
    summary:
      'Experienced teams and structured operations work together to protect the final drinking experience.',
    accent: 'from-emerald-600 via-teal-600 to-green-700',
  },
]
