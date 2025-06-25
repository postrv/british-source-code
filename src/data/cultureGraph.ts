export interface CultureNode {
  id: string
  label: string
  type: 'person' | 'institution' | 'concept' | 'practice' | 'event' | 'place' | 'artifact'
  category: string
  description: string
  detailedDescription: string
  period?: string
  birthYear?: number
  deathYear?: number
  foundedYear?: number
  endYear?: number
  location?: string
  significance: number // 1-100 scale for sizing
  image?: string
  wikipediaUrl?: string
  tags: string[]
  relatedConcepts: string[]
  keyContributions?: string[]
  culturalImpact?: string
  modernRelevance?: string
  funFacts?: string[]
  quotes?: string[]
}

export interface CultureEdge {
  id: string
  source: string
  target: string
  relationship: string
  description: string
  strength: number // 1-10 scale
  type: 'influenced' | 'created' | 'developed' | 'institutionalized' | 'practiced' | 'opposed' | 'succeeded' | 'embodied'
  period?: string
  evidence?: string[]
}

export const cultureNodes: CultureNode[] = [
  // Historical Figures
  {
    id: 'shakespeare',
    label: 'William Shakespeare',
    type: 'person',
    category: 'Literary Figures',
    description: 'The Bard who defined English literature and theatre',
    detailedDescription: 'William Shakespeare revolutionized English drama and poetry, creating works that explore universal human themes with unparalleled linguistic innovation. His plays shaped theatrical conventions worldwide and his vocabulary contributions to English are immeasurable.',
    period: '1564-1616',
    birthYear: 1564,
    deathYear: 1616,
    location: 'Stratford-upon-Avon',
    significance: 95,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/William_Shakespeare',
    tags: ['literature', 'theatre', 'elizabethan', 'poetry', 'drama'],
    relatedConcepts: ['english-language', 'theatre-tradition', 'royal-patronage'],
    keyContributions: [
      '37 plays including Hamlet, Macbeth, and Romeo & Juliet',
      '154 sonnets exploring love, beauty, and mortality',
      'Added ~1,700 words to English vocabulary',
      'Established dramatic conventions still used today'
    ],
    culturalImpact: 'Shakespeare\'s works are performed more than any other playwright worldwide. His phrases have become part of everyday English, and his characters represent archetypal human experiences.',
    modernRelevance: 'Continuously adapted for film, television, and modern theatre. His themes of power, love, betrayal, and ambition remain universally relevant.',
    funFacts: [
      'Invented over 1,700 words including "assassination" and "lonely"',
      'His plays have been translated into every major language',
      'The Globe Theatre burns down during a performance of Henry VIII in 1613'
    ],
    quotes: [
      '"All the world\'s a stage, and all the men and women merely players"',
      '"To be or not to be, that is the question"'
    ]
  },

  {
    id: 'newton',
    label: 'Isaac Newton',
    type: 'person',
    category: 'Scientists',
    description: 'Physicist and mathematician who revolutionized our understanding of the universe',
    detailedDescription: 'Sir Isaac Newton laid the foundations of classical mechanics, optics, and calculus. His Principia Mathematica established the laws governing motion and gravitation, fundamentally changing how we understand the physical world.',
    period: '1643-1727',
    birthYear: 1643,
    deathYear: 1727,
    location: 'Lincolnshire / Cambridge',
    significance: 92,
    image: 'https://images.unsplash.com/photo-1446776653964-20c1a3dcda4e?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Isaac_Newton',
    tags: ['science', 'mathematics', 'physics', 'enlightenment', 'royal-society'],
    relatedConcepts: ['scientific-method', 'royal-patronage', 'cambridge-university'],
    keyContributions: [
      'Laws of motion and universal gravitation',
      'Invented calculus (independently with Leibniz)',
      'Groundbreaking work in optics and colour theory',
      'Established mathematical principles of natural philosophy'
    ],
    culturalImpact: 'Newton\'s work established Britain as a leading scientific nation and influenced Enlightenment thinking across Europe.',
    modernRelevance: 'His laws still govern space travel and engineering. The scientific method he helped establish remains the foundation of modern research.',
    funFacts: [
      'Allegedly inspired by an apple falling from a tree',
      'Was Master of the Royal Mint and prosecuted counterfeiters',
      'Spent more time on alchemy than physics'
    ],
    quotes: [
      '"If I have seen further it is by standing on the shoulders of Giants"',
      '"I can calculate the motion of heavenly bodies, but not the madness of people"'
    ]
  },

  {
    id: 'churchill',
    label: 'Winston Churchill',
    type: 'person',
    category: 'Political Leaders',
    description: 'Prime Minister who led Britain through World War II',
    detailedDescription: 'Winston Churchill\'s leadership during WWII embodied British resilience and determination. His speeches rallied the nation during its darkest hour, while his strategic vision helped coordinate the Allied victory.',
    period: '1874-1965',
    birthYear: 1874,
    deathYear: 1965,
    location: 'London',
    significance: 90,
    image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Winston_Churchill',
    tags: ['politics', 'leadership', 'wwii', 'oratory', 'history'],
    relatedConcepts: ['parliamentary-democracy', 'british-empire', 'wartime-leadership'],
    keyContributions: [
      'Led Britain to victory in World War II',
      'Delivered iconic speeches that defined British resolve',
      'Won Nobel Prize in Literature',
      'Shaped post-war international relations'
    ],
    culturalImpact: 'Churchill\'s rhetoric and leadership style became synonymous with British determination and moral courage.',
    modernRelevance: 'His speeches are still quoted in times of crisis. His approach to leadership during adversity remains a model.',
    funFacts: [
      'Painted over 500 paintings as a hobby',
      'Won the Nobel Prize in Literature in 1953',
      'Famous for his love of cigars and whisky'
    ],
    quotes: [
      '"We shall never surrender"',
      '"Success is not final, failure is not fatal: it is the courage to continue that counts"'
    ]
  },

  {
    id: 'darwin',
    label: 'Charles Darwin',
    type: 'person',
    category: 'Scientists',
    description: 'Naturalist who developed the theory of evolution',
    detailedDescription: 'Charles Darwin\'s theory of evolution by natural selection revolutionized biology and our understanding of life on Earth. His meticulous observations and scientific methodology exemplified Victorian scientific inquiry.',
    period: '1809-1882',
    birthYear: 1809,
    deathYear: 1882,
    location: 'Shrewsbury / Kent',
    significance: 88,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Charles_Darwin',
    tags: ['evolution', 'biology', 'naturalist', 'scientific-revolution', 'voyage'],
    relatedConcepts: ['scientific-method', 'natural-history', 'royal-society'],
    keyContributions: [
      'Theory of evolution by natural selection',
      'The Origin of Species (1859)',
      'Voyage of the Beagle observations',
      'Established modern evolutionary biology'
    ],
    culturalImpact: 'Darwin\'s work fundamentally changed humanity\'s understanding of its place in nature and influenced philosophy, religion, and science.',
    modernRelevance: 'Evolutionary theory remains central to modern biology, medicine, and our understanding of life.',
    funFacts: [
      'Almost became a clergyman instead of a scientist',
      'Took 20 years to publish On the Origin of Species',
      'Married his first cousin, Emma Wedgwood'
    ],
    quotes: [
      '"It is not the strongest of the species that survives, but the most adaptable"',
      '"A man who dares to waste one hour of time has not discovered the value of life"'
    ]
  },

  // Institutions
  {
    id: 'parliament',
    label: 'Parliament',
    type: 'institution',
    category: 'Government',
    description: 'The Mother of Parliaments - democratic governance model',
    detailedDescription: 'The British Parliament evolved from medieval assemblies into the world\'s oldest continuous parliamentary democracy. Its Westminster system has been adopted by dozens of nations worldwide.',
    foundedYear: 1066,
    location: 'Westminster, London',
    significance: 88,
    image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Parliament_of_the_United_Kingdom',
    tags: ['democracy', 'government', 'law', 'representation', 'sovereignty'],
    relatedConcepts: ['magna-carta', 'constitutional-monarchy', 'common-law'],
    keyContributions: [
      'Established principles of democratic representation',
      'Created the Westminster parliamentary system',
      'Developed concepts of parliamentary sovereignty',
      'Influenced democratic institutions worldwide'
    ],
    culturalImpact: 'The Westminster system became the template for democratic governance in former British territories and beyond.',
    modernRelevance: 'Parliamentary procedure and democratic principles developed at Westminster continue to influence global governance.',
    funFacts: [
      'The term "Mother of Parliaments" was coined by John Bright',
      'Houses of Parliament were rebuilt after 1834 fire',
      'Big Ben is actually the name of the bell, not the tower'
    ]
  },

  {
    id: 'bbc',
    label: 'BBC',
    type: 'institution',
    category: 'Media',
    description: 'Public service broadcaster setting global standards',
    detailedDescription: 'The British Broadcasting Corporation pioneered public service broadcasting, establishing principles of impartiality, quality, and universal access that influenced media organisations worldwide.',
    foundedYear: 1922,
    location: 'London',
    significance: 75,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/BBC',
    tags: ['media', 'broadcasting', 'public-service', 'culture', 'education'],
    relatedConcepts: ['public-service', 'cultural-export', 'soft-power'],
    keyContributions: [
      'Established public service broadcasting model',
      'Created BBC World Service for global reach',
      'Pioneered television broadcasting standards',
      'Maintained editorial independence and impartiality'
    ],
    culturalImpact: 'BBC programs and standards influenced broadcasting globally, while BBC English became a benchmark for the language.',
    modernRelevance: 'Continues to set standards for public service media and serves as a model for independent journalism.',
    funFacts: [
      'BBC World Service broadcasts in over 40 languages',
      'The BBC Proms is the world\'s largest classical music festival',
      'BBC iPlayer pioneered online streaming services'
    ]
  },

  // Concepts and Practices
  {
    id: 'tea-culture',
    label: 'Tea Culture',
    type: 'practice',
    category: 'Social Customs',
    description: 'The quintessentially British social ritual',
    detailedDescription: 'Tea culture in Britain represents more than beverage consumption - it\'s a social institution that structures daily life, provides comfort during crisis, and serves as a diplomatic tool.',
    period: '17th century - present',
    foundedYear: 1660,
    significance: 70,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400',
    tags: ['social-customs', 'daily-life', 'hospitality', 'ritual', 'comfort'],
    relatedConcepts: ['afternoon-tea', 'empire-trade', 'social-hierarchy'],
    keyContributions: [
      'Established tea as Britain\'s national beverage',
      'Created afternoon tea as a social institution',
      'Developed tea etiquette and ceremonies',
      'Made tea a symbol of British identity worldwide'
    ],
    culturalImpact: 'Tea became central to British social life and a key export of British culture globally.',
    modernRelevance: 'Tea remains integral to British daily life and continues to be a diplomatic and social tool.',
    funFacts: [
      'Britons drink 165 million cups of tea daily',
      'Tea was initially more expensive than alcohol',
      'The Boston Tea Party was partly about British tea taxes'
    ]
  },

  {
    id: 'queuing',
    label: 'Queuing Culture',
    type: 'practice',
    category: 'Social Behaviour',
    description: 'The art of orderly waiting',
    detailedDescription: 'British queuing culture represents fairness, patience, and social order. It embodies the principle that everyone gets their turn regardless of status - a microcosm of democratic values.',
    significance: 60,
    image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400',
    tags: ['social-behaviour', 'fairness', 'order', 'patience', 'democracy'],
    relatedConcepts: ['fair-play', 'social-order', 'public-behaviour'],
    keyContributions: [
      'Established orderly queuing as social norm',
      'Demonstrated democratic principles in daily life',
      'Created informal social contracts',
      'Influenced crowd management worldwide'
    ],
    culturalImpact: 'British queuing became legendary worldwide and influenced crowd management practices globally.',
    modernRelevance: 'Queuing culture continues to be a marker of British identity and civilised behaviour.',
    funFacts: [
      'Queue-jumping is considered one of the worst social crimes',
      'The longest recorded queue was 5 miles long',
      'There\'s actual research on optimal queuing psychology'
    ]
  },

  {
    id: 'british-humour',
    label: 'British Humour',
    type: 'concept',
    category: 'Cultural Values',
    description: 'Self-deprecating wit and ironic observation',
    detailedDescription: 'British humour combines self-deprecation, understatement, irony, and absurdity. It serves as social lubricant, defense mechanism, and cultural export, influencing comedy worldwide.',
    significance: 85,
    image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400',
    tags: ['humor', 'wit', 'irony', 'self-deprecation', 'social-interaction'],
    relatedConcepts: ['understatement', 'class-consciousness', 'coping-mechanism'],
    keyContributions: [
      'Developed distinctive comedic style',
      'Created influential comedy formats',
      'Exported British comedy globally',
      'Used humor as diplomatic soft power'
    ],
    culturalImpact: 'British comedy formats and styles have been adapted worldwide, from sitcoms to panel shows.',
    modernRelevance: 'British humor continues to influence global comedy and remains a key cultural export.',
    funFacts: [
      'Self-deprecation is considered the highest form of British wit',
      'British comedy exports are worth billions annually',
      'Many comedy formats originated in Britain'
    ]
  },

  {
    id: 'common-law',
    label: 'Common Law',
    type: 'concept',
    category: 'Legal System',
    description: 'Judge-made legal system based on precedent',
    detailedDescription: 'The common law system developed in England created legal principles through judicial decisions rather than written codes. This system emphasizes precedent and has been adopted worldwide.',
    foundedYear: 1066,
    significance: 80,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
    tags: ['law', 'justice', 'precedent', 'courts', 'legal-system'],
    relatedConcepts: ['magna-carta', 'trial-by-jury', 'rule-of-law'],
    keyContributions: [
      'Established precedent-based legal system',
      'Created principles of judicial independence',
      'Developed trial by jury system',
      'Influenced legal systems globally'
    ],
    culturalImpact: 'Common law principles spread throughout the former British Empire and continue to influence international law.',
    modernRelevance: 'Common law systems operate in many countries and international courts use common law principles.'
  },

  {
    id: 'fair-play',
    label: 'Fair Play',
    type: 'concept',
    category: 'Cultural Values',
    description: 'The principle of playing by the rules and giving everyone a chance',
    detailedDescription: 'Fair play represents the British ideal of justice, sportsmanship, and equitable treatment. It extends from sports into politics, business, and daily life as a fundamental cultural value.',
    significance: 75,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=400',
    tags: ['sportsmanship', 'justice', 'ethics', 'equality', 'competition'],
    relatedConcepts: ['cricket', 'gentlemans-code', 'rule-of-law'],
    keyContributions: [
      'Established sporting ethics and rules',
      'Influenced international sports governance',
      'Created gentlemanly codes of conduct',
      'Promoted ethical competition'
    ],
    culturalImpact: 'Fair play became a global sporting and ethical principle, associated with British sporting culture.',
    modernRelevance: 'Fair play principles govern modern sports and are integral to international competition.',
    funFacts: [
      'The term originated in 16th century sporting contexts',
      'Cricket is often called the epitome of fair play',
      'Fair Play awards exist in many international sports'
    ]
  }
]

export const cultureEdges: CultureEdge[] = [
  {
    id: 'shakespeare-british-humour',
    source: 'shakespeare',
    target: 'british-humour',
    relationship: 'influenced',
    description: 'Shakespeare\'s wit and wordplay helped shape British comedic traditions',
    strength: 8,
    type: 'influenced',
    period: '1590-1616',
    evidence: ['Comic characters', 'Witty dialogue', 'Wordplay techniques']
  },
  {
    id: 'newton-darwin',
    source: 'newton',
    target: 'darwin',
    relationship: 'influenced',
    description: 'Newton\'s scientific approach influenced Darwin\'s methodology and thinking',
    strength: 6,
    type: 'influenced',
    evidence: ['Scientific methodology', 'Empirical approach', 'Royal Society tradition']
  },
  {
    id: 'parliament-common-law',
    source: 'parliament',
    target: 'common-law',
    relationship: 'complemented',
    description: 'Parliament and common law developed as complementary legal frameworks',
    strength: 9,
    type: 'developed',
    period: '1066-present',
    evidence: ['Constitutional development', 'Legal precedents', 'Parliamentary acts']
  },
  {
    id: 'tea-culture-queuing',
    source: 'tea-culture',
    target: 'queuing',
    relationship: 'reinforced',
    description: 'Tea culture reinforced British values of patience and orderly behaviour',
    strength: 7,
    type: 'embodied',
    period: '1700-present',
    evidence: ['Tea time etiquette', 'Social rituals', 'Polite behaviour']
  },
  {
    id: 'churchill-parliament',
    source: 'churchill',
    target: 'parliament',
    relationship: 'served',
    description: 'Churchill\'s 60-year parliamentary career demonstrated democratic continuity',
    strength: 8,
    type: 'embodied',
    period: '1900-1964',
    evidence: ['Member of Parliament', 'Prime Minister twice', 'Parliamentary speeches']
  },
  {
    id: 'bbc-british-humour',
    source: 'bbc',
    target: 'british-humour',
    relationship: 'broadcast',
    description: 'BBC programming exported British humour globally through comedy shows',
    strength: 7,
    type: 'created',
    period: '1930-present',
    evidence: ['Comedy programmes', 'Panel shows', 'Cultural exports']
  },
  {
    id: 'queuing-fair-play',
    source: 'queuing',
    target: 'fair-play',
    relationship: 'demonstrates',
    description: 'Orderly queuing embodies principles of fairness and equal treatment',
    strength: 8,
    type: 'embodied',
    evidence: ['Social conventions', 'Queue jumping taboo', 'Democratic principles']
  },
  {
    id: 'shakespeare-common-law',
    source: 'shakespeare',
    target: 'common-law',
    relationship: 'reflected',
    description: 'Shakespeare\'s plays often explored themes of justice and legal precedent',
    strength: 6,
    type: 'embodied',
    period: '1590-1616',
    evidence: ['Legal themes in plays', 'Court scenes', 'Justice concepts']
  },
  {
    id: 'darwin-newton',
    source: 'darwin',
    target: 'newton',
    relationship: 'built-upon',
    description: 'Darwin\'s evolutionary theory built upon Newton\'s scientific methods',
    strength: 7,
    type: 'developed',
    period: '1831-1882',
    evidence: ['Scientific rigour', 'Observational methods', 'Evidence-based conclusions']
  },
  {
    id: 'tea-culture-british-humour',
    source: 'tea-culture',
    target: 'british-humour',
    relationship: 'facilitated',
    description: 'Tea time provided social context for British wit and conversation',
    strength: 6,
    type: 'influenced',
    evidence: ['Social gatherings', 'Conversational rituals', 'Polite humour']
  },
  {
    id: 'parliament-fair-play',
    source: 'parliament',
    target: 'fair-play',
    relationship: 'institutionalised',
    description: 'Parliamentary procedure codified principles of fair play in governance',
    strength: 8,
    type: 'institutionalized',
    period: '1066-present',
    evidence: ['Parliamentary rules', 'Democratic process', 'Fair representation']
  }
]

// Search functionality
export const searchNodes = (query: string): CultureNode[] => {
  const lowerQuery = query.toLowerCase()
  return cultureNodes.filter(node => 
    node.label.toLowerCase().includes(lowerQuery) ||
    node.description.toLowerCase().includes(lowerQuery) ||
    node.detailedDescription.toLowerCase().includes(lowerQuery) ||
    node.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    node.keyContributions?.some(contrib => contrib.toLowerCase().includes(lowerQuery)) ||
    node.funFacts?.some(fact => fact.toLowerCase().includes(lowerQuery))
  )
}

export const getNodeById = (id: string): CultureNode | undefined => {
  return cultureNodes.find(node => node.id === id)
}

export const getEdgesByNode = (nodeId: string): CultureEdge[] => {
  return cultureEdges.filter(edge => edge.source === nodeId || edge.target === nodeId)
}

export const getRelatedNodes = (nodeId: string): CultureNode[] => {
  const relatedEdges = getEdgesByNode(nodeId)
  const relatedIds = relatedEdges.map(edge => 
    edge.source === nodeId ? edge.target : edge.source
  )
  return cultureNodes.filter(node => relatedIds.includes(node.id))
} 