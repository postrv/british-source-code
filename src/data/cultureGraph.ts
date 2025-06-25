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
    detailedDescription: 'William Shakespeare revolutionised English drama and poetry, creating works that explore universal human themes with unparalleled linguistic innovation. Born in Stratford-upon-Avon to a glove-maker, he became the most performed playwright in history, creating complex characters and poetic language that defined English literature.',
    period: '1564-1616',
    birthYear: 1564,
    deathYear: 1616,
    location: 'Stratford-upon-Avon / London',
    significance: 95,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Shakespeare.jpg/400px-Shakespeare.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/William_Shakespeare',
    tags: ['literature', 'theatre', 'elizabethan', 'poetry', 'drama', 'globe-theatre'],
    relatedConcepts: ['english-language', 'theatre-tradition', 'royal-patronage'],
    keyContributions: [
      '39 plays including Hamlet, Macbeth, King Lear, and Romeo & Juliet',
      '154 sonnets and 2 long narrative poems',
      'Invented approximately 1,700 words still used today',
      'Established dramatic conventions including five-act structure',
      'Created psychological depth in dramatic characters',
      'Influenced every subsequent generation of English writers'
    ],
    culturalImpact: 'Shakespeare\'s works are performed more than any other playwright worldwide. His phrases ("break the ice", "wild goose chase") became everyday English, and his character types (the tragic hero, the comic fool) are universal archetypes.',
    modernRelevance: 'Continuously adapted for film, television, and modern theatre. His themes of power, love, betrayal, and ambition remain universally relevant. The Globe Theatre was reconstructed in 1997, demonstrating enduring appeal.',
    funFacts: [
      'Lost Years: No records exist of what he did between 1585-1592',
      'His father couldn\'t read or write, yet William became history\'s greatest writer',
      'Married Anne Hathaway when he was 18 and she was 26 and pregnant',
      'His signature appears only 6 times in surviving documents',
      'The Globe Theatre could hold 3,000 people in a city of 200,000'
    ],
    quotes: [
      '"All the world\'s a stage, and all the men and women merely players"',
      '"To be or not to be, that is the question"',
      '"Some are born great, some achieve greatness, and some have greatness thrust upon them"',
      '"What\'s in a name? That which we call a rose by any other name would smell as sweet"'
    ]
  },

  {
    id: 'newton',
    label: 'Isaac Newton',
    type: 'person',
    category: 'Scientists',
    description: 'Physicist and mathematician who revolutionised our understanding of the universe',
    detailedDescription: 'Sir Isaac Newton laid the foundations of classical mechanics, optics, and mathematical analysis. Born prematurely on Christmas Day 1642 in Woolsthorpe, Lincolnshire, he developed the laws of motion and universal gravitation that governed physics for 300 years. His Principia Mathematica (1687) is considered one of the greatest scientific works ever written.',
    period: '1643-1727',
    birthYear: 1643,
    deathYear: 1727,
    location: 'Woolsthorpe, Lincolnshire / Cambridge',
    significance: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/GodfreyKneller-IsaacNewton-1689.jpg/400px-GodfreyKneller-IsaacNewton-1689.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Isaac_Newton',
    tags: ['science', 'mathematics', 'physics', 'enlightenment', 'royal-society', 'cambridge', 'optics'],
    relatedConcepts: ['scientific-method', 'royal-society', 'cambridge-university'],
    keyContributions: [
      'Three Laws of Motion fundamental to classical mechanics',
      'Law of Universal Gravitation explaining planetary motion',
      'Co-invented calculus (independently with Leibniz)',
      'Discovered that white light comprises all colours of spectrum',
      'Wrote Principia Mathematica, foundation of mathematical physics',
      'Explained tides, comets, and precession of equinoxes',
      'Invented reflecting telescope design still used today'
    ],
    culturalImpact: 'Newton\'s work established Britain as the leading scientific nation and made Cambridge University a centre of mathematical excellence. The Royal Society gained international prestige through his membership and presidency.',
    modernRelevance: 'Newton\'s laws govern spacecraft navigation, satellite orbits, and engineering calculations. His mathematical methods remain essential to physics and engineering education worldwide.',
    funFacts: [
      'Born so prematurely he could fit in a quart pot',
      'Plague closure of Cambridge (1665-66) led to his most creative period',
      'Served as Master of the Royal Mint for 30 years, personally pursuing counterfeiters',
      'Spent more time studying alchemy and theology than mathematics',
      'Never married and was famously absent-minded about meals',
      'His cat had its own door cut through his study door at Cambridge'
    ],
    quotes: [
      '"If I have seen further it is by standing on the shoulders of Giants"',
      '"I can calculate the motion of heavenly bodies, but not the madness of people"',
      '"Truth is ever to be found in simplicity, and not in the multiplicity and confusion of things"',
      '"What we know is a drop, what we don\'t know is an ocean"'
    ]
  },

  {
    id: 'churchill',
    label: 'Winston Churchill',
    type: 'person',
    category: 'Political Leaders',
    description: 'Prime Minister who led Britain through World War II',
    detailedDescription: 'Sir Winston Leonard Spencer Churchill served as Prime Minister during Britain\'s finest hour. Born at Blenheim Palace to an aristocratic family, he had a remarkable 60-year political career, serving as a soldier, journalist, and politician before leading Britain to victory in WWII. His stirring oratory and unwavering resolve embodied British determination during the nation\'s darkest and most glorious period.',
    period: '1874-1965',
    birthYear: 1874,
    deathYear: 1965,
    location: 'Blenheim Palace / London',
    significance: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/The_Prime_Minister_The_Rt_Hon_Winston_Churchill_MP_CH_circa_1940-1945_MH26392.jpg/400px-The_Prime_Minister_The_Rt_Hon_Winston_Churchill_MP_CH_circa_1940-1945_MH26392.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Winston_Churchill',
    tags: ['politics', 'leadership', 'wwii', 'oratory', 'history', 'nobel-prize', 'painting'],
    relatedConcepts: ['parliamentary-democracy', 'british-empire', 'wartime-leadership'],
    keyContributions: [
      'Led Britain as Prime Minister during WWII (1940-1945)',
      'Delivered iconic speeches including "We Shall Fight on the Beaches"',
      'Forged the Grand Alliance with USA and Soviet Union',
      'Won Nobel Prize in Literature (1953) for historical writings',
      'Served in Parliament for 64 years across 6 decades',
      'Wrote "The Second World War" six-volume history',
      'Co-architect of the United Nations and NATO'
    ],
    culturalImpact: 'Churchill\'s rhetoric defined British wartime spirit and became the voice of democracy against fascism. His speeches are considered masterpieces of English oratory, whilst his "V for Victory" gesture became iconic.',
    modernRelevance: 'His speeches are quoted in times of crisis worldwide. His leadership model during adversity remains studied in military academies and business schools. Often voted "Greatest Briton" in polls.',
    funFacts: [
      'Escaped from Boer War prison camp, becoming a celebrity',
      'Painted over 500 artworks, exhibiting under pseudonym',
      'Built brick walls as hobby therapy at Chartwell home',
      'Smoked 8-10 cigars daily and consumed champagne with every meal',
      'Won Nobel Prize in Literature, not Peace Prize',
      'His mother was American (Jennie Jerome from New York)',
      'Last person to receive state funeral who wasn\'t royalty'
    ],
    quotes: [
      '"We shall fight on the beaches... we shall never surrender"',
      '"Never, never, never give up"',
      '"Success is not final, failure is not fatal: it is the courage to continue that counts"',
      '"The empires of the future are the empires of the mind"',
      '"History will be kind to me for I intend to write it"'
    ]
  },

  {
    id: 'darwin',
    label: 'Charles Darwin',
    type: 'person',
    category: 'Scientists',
    description: 'Naturalist who developed the theory of evolution by natural selection',
    detailedDescription: 'Charles Robert Darwin transformed our understanding of life through his theory of evolution by natural selection. Born into a wealthy Shropshire family, his five-year voyage aboard HMS Beagle (1831-1836) provided observations that led to his revolutionary theory. Despite initial reluctance to publish due to religious implications, his "On the Origin of Species" (1859) became one of the most important scientific works ever written.',
    period: '1809-1882',
    birthYear: 1809,
    deathYear: 1882,
    location: 'Shrewsbury / Down House, Kent',
    significance: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Charles_Darwin_seated_crop.jpg/400px-Charles_Darwin_seated_crop.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Charles_Darwin',
    tags: ['evolution', 'biology', 'naturalist', 'scientific-revolution', 'beagle-voyage', 'natural-selection'],
    relatedConcepts: ['scientific-method', 'natural-history', 'royal-society'],
    keyContributions: [
      'Theory of evolution by natural selection',
      'On the Origin of Species by Means of Natural Selection (1859)',
      'The Descent of Man, and Selection in Relation to Sex (1871)',
      'Voyage of the Beagle journal documenting global biodiversity',
      'Studies on coral reef formation and volcanic islands',
      'Research on plant movement, pollination, and carnivorous plants',
      'Work on earthworms and their geological importance'
    ],
    culturalImpact: 'Darwin\'s work fundamentally challenged religious views of creation and humanity\'s place in nature. The phrase "survival of the fittest" (coined by Herbert Spencer) became part of popular culture, though often misunderstood.',
    modernRelevance: 'Evolutionary theory underpins all modern biology, from medicine and agriculture to conservation. DNA sequencing has confirmed Darwin\'s predictions about common descent and the tree of life.',
    funFacts: [
      'His grandfather Erasmus Darwin was also an evolutionary theorist',
      'Studied medicine at Edinburgh but was horrified by surgery (performed without anaesthetic)',
      'Cambridge degree was in theology - he nearly became a country parson',
      'Took 23 years to publish evolution theory, fearing religious controversy',
      'Married his first cousin Emma Wedgwood (of pottery fame)',
      'Suffered mysterious illnesses possibly caused by stress over his theory',
      'Conducted experiments in his garden "thinking path" at Down House'
    ],
    quotes: [
      '"It is not the strongest of the species that survives, nor the most intelligent, but the one most responsive to change"',
      '"A man who dares to waste one hour of time has not discovered the value of life"',
      '"I have called this principle, by which each slight variation, if useful, is preserved, by the term Natural Selection"',
      '"There is grandeur in this view of life"'
    ]
  },

  // Institutions
  {
    id: 'parliament',
    label: 'Parliament',
    type: 'institution',
    category: 'Government',
    description: 'The Mother of Parliaments - democratic governance model',
    detailedDescription: 'The Parliament of the United Kingdom evolved from medieval assemblies into the world\'s oldest continuous parliamentary democracy. Beginning with Anglo-Saxon Witenagemots and formalised after the Norman Conquest, it developed through constitutional crises into a bicameral system. The Palace of Westminster houses both Commons and Lords, with traditions dating back centuries.',
    foundedYear: 1066,
    location: 'Palace of Westminster, London',
    significance: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Palace_of_Westminster%2C_London_-_Feb_2007.jpg/400px-Palace_of_Westminster%2C_London_-_Feb_2007.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Parliament_of_the_United_Kingdom',
    tags: ['democracy', 'government', 'law', 'representation', 'sovereignty', 'westminster', 'commons', 'lords'],
    relatedConcepts: ['magna-carta', 'constitutional-monarchy', 'common-law'],
    keyContributions: [
      'Established principles of democratic representation and accountability',
      'Created the Westminster parliamentary system adopted globally',
      'Developed parliamentary sovereignty as constitutional principle',
      'Pioneered concepts of loyal opposition and cabinet government',
      'Established procedures for peaceful transfer of power',
      'Created parliamentary privilege protecting free speech',
      'Developed complex committee system for detailed legislation'
    ],
    culturalImpact: 'The Westminster system became the template for democratic governance in Canada, Australia, India, and dozens of other nations. Parliamentary language ("honourable member", "third reading") entered international political vocabulary.',
    modernRelevance: 'Westminster-style parliaments govern over 2 billion people worldwide. Parliamentary procedure, Prime Minister\'s Questions, and opposition politics remain influential democratic innovations.',
    funFacts: [
      'The phrase "Mother of Parliaments" was coined by John Bright in 1865',
      'The current Palace of Westminster was rebuilt after the 1834 Great Fire',
      'Big Ben is technically the nickname for the largest bell, not the tower',
      'MPs cannot be arrested in the chamber due to parliamentary privilege',
      'The Woolsack in House of Lords is stuffed with wool from Commonwealth countries',
      'Black Rod\'s door is slammed shut during State Opening ceremony',
      'MPs must bow to the Speaker\'s chair when entering or leaving'
    ],
    quotes: [
      '"Parliament can do anything except make a man a woman and a woman a man" - Henry Campbell-Bannerman',
      '"England is the mother of parliaments" - John Bright'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/BBC_Television_Centre.jpg/400px-BBC_Television_Centre.jpg',
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

  {
    id: 'oxford-university',
    label: 'University of Oxford',
    type: 'institution',
    category: 'Education',
    description: 'The oldest university in the English-speaking world',
    detailedDescription: 'The University of Oxford, established around 1096, is the oldest university in the English-speaking world and the world\'s second-oldest university in continuous operation. Its distinctive collegiate system, tutorial method, and academic excellence have made it a model for universities worldwide, whilst producing 28 British Prime Ministers and countless influential thinkers.',
    foundedYear: 1096,
    location: 'Oxford, Oxfordshire',
    significance: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford_University_Church_of_St_Mary_the_Virgin.jpg/400px-Oxford_University_Church_of_St_Mary_the_Virgin.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/University_of_Oxford',
    tags: ['education', 'academia', 'collegiate', 'ancient-university', 'tutorial-system', 'dreaming-spires'],
    relatedConcepts: ['academic-excellence', 'british-establishment', 'intellectual-tradition'],
    keyContributions: [
      'Developed the collegiate system adopted by universities worldwide',
      'Created the Oxford tutorial system of personalised education',
      'Established academic traditions and ceremonies still followed globally',
      'Produced 28 British Prime Ministers including Churchill and Blair',
      'Founded Oxford University Press, world\'s largest university press',
      'Pioneered scholarly publishing and peer review systems',
      'Created the Rhodes Scholarship programme'
    ],
    culturalImpact: 'Oxford became synonymous with academic excellence and intellectual achievement. The "Oxbridge" term represents elite education, whilst Oxford debates, traditions, and terminology influenced universities globally.',
    modernRelevance: 'Remains one of the world\'s top universities, leading in research across disciplines. The Oxford-AstraZeneca COVID vaccine demonstrated continued scientific leadership.',
    funFacts: [
      'Oxford is older than the Aztec Empire (founded 1428)',
      'There is no record of its founding - it just gradually developed',
      'Oscar Wilde said "Oxford is the most beautiful thing in England"',
      'The Bodleian Library has a copy of every book published in Britain',
      'Students must wear academic dress (subfusc) for exams',
      'May Morning celebration involves choristers singing from Magdalen Tower',
      'The phrase "town and gown" refers to Oxford town vs university tensions'
    ],
    quotes: [
      '"The King is at Oxford, the rebel is at Cambridge" - medieval saying',
      '"Very nice sort of place, Oxford, I should think, for people that like that sort of place" - George Bernard Shaw'
    ]
  },

  {
    id: 'cambridge-university',
    label: 'University of Cambridge',
    type: 'institution',
    category: 'Education',
    description: 'The world\'s premier scientific university',
    detailedDescription: 'Founded in 1209 by scholars fleeing Oxford, the University of Cambridge became the world\'s leading centre for scientific research. Its graduates include Newton, Darwin, Hawking, and Turing, whilst its research led to groundbreaking discoveries from the structure of DNA to the development of the computer. The university\'s combination of ancient traditions and cutting-edge research embodies British intellectual achievement.',
    foundedYear: 1209,
    location: 'Cambridge, Cambridgeshire',
    significance: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CambridgeQueensCollege.jpg/400px-CambridgeQueensCollege.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/University_of_Cambridge',
    tags: ['education', 'science', 'research', 'ancient-university', 'collegiate', 'scientific-revolution'],
    relatedConcepts: ['scientific-excellence', 'newton', 'darwin', 'academic-tradition'],
    keyContributions: [
      'Produced 121 Nobel Prize winners, more than any other institution',
      'Newton developed calculus and laws of motion at Trinity College',
      'Crick and Watson discovered DNA structure at Cavendish Laboratory',
      'Turing developed computer science foundations at King\'s College',
      'Rutherford split the atom at Cavendish Laboratory',
      'Hawking revolutionised cosmology as Lucasian Professor',
      'Cambridge Mathematical Tripos became model for rigorous examinations'
    ],
    culturalImpact: 'Cambridge became the global symbol of scientific excellence. The "Cambridge" name is used by institutions worldwide seeking scientific credibility. Its boat race with Oxford captures national attention.',
    modernRelevance: 'Continues to lead in scientific research, particularly in technology, medicine, and artificial intelligence. Cambridge Science Park pioneered university-industry collaboration.',
    funFacts: [
      'Founded by scholars who fled Oxford after a town-and-gown riot',
      'Newton\'s apple tree still grows in Trinity College grounds',
      'The Cavendish Laboratory has produced 30 Nobel Prize winners',
      'Students punt on the River Cam, a quintessentially Cambridge activity',
      'The Senate House graduation ceremony hasn\'t changed for centuries',
      'Stephen Hawking held Newton\'s chair as Lucasian Professor',
      'The Mathematical Bridge was supposedly built without nails (it wasn\'t)'
    ],
    quotes: [
      '"In Cambridge the mere act of living was a constant education" - Henry Brooks Adams',
      '"Cambridge was the place for someone from the colonies or the provinces" - Stephen Fry'
    ]
  },

  {
    id: 'royal-society',
    label: 'The Royal Society',
    type: 'institution',
    category: 'Scientific Institution',
    description: 'The world\'s oldest national scientific academy',
    detailedDescription: 'Founded in 1660, the Royal Society of London for Improving Natural Knowledge became the world\'s first and most prestigious scientific academy. With the motto "Nullius in verba" (take nobody\'s word for it), it established principles of experimental science and peer review. Fellows have included Newton, Darwin, Faraday, and Hawking, making it the most influential scientific institution in history.',
    foundedYear: 1660,
    location: 'London',
    significance: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Royal_Society_20040420.jpg/400px-Royal_Society_20040420.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Royal_Society',
    tags: ['science', 'academy', 'research', 'peer-review', 'experimental-science', 'royal-charter'],
    relatedConcepts: ['scientific-method', 'newton', 'experimental-philosophy'],
    keyContributions: [
      'Established peer review system for scientific publications',
      'Published Newton\'s Principia Mathematica (1687)',
      'Created scientific journal Philosophical Transactions (1665)',
      'Developed experimental scientific methodology',
      'Promoted international scientific collaboration',
      'Advised government on scientific matters for 350+ years',
      'Elected 8 presidents who were Prime Ministers'
    ],
    culturalImpact: 'The Royal Society model was copied worldwide, establishing scientific academies globally. It made London the centre of Enlightenment science and elevated the social status of scientists.',
    modernRelevance: 'Continues as UK\'s premier scientific academy, advising government on climate change, AI, and pandemic response. Fellowship (FRS) remains the highest scientific honour in Britain.',
    funFacts: [
      'Christopher Wren was one of the founding members alongside Newton',
      'The society has published continuously since 1665 - the world\'s longest-running scientific journal',
      'Isaac Newton served as president for 24 years',
      'Charles Darwin was proposed for fellowship by Charles Lyell',
      'Women weren\'t admitted until 1945, starting with crystallographer Kathleen Lonsdale',
      'The mace used in meetings was made in 1663 and survived the Great Fire of London',
      'Einstein was elected Foreign Member in 1921'
    ],
    quotes: [
      '"Nullius in verba" - Royal Society motto (Take nobody\'s word for it)',
      '"The Royal Society is a club of the most eminent men of science" - Michael Faraday'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Tea_service_syon_house.jpg/400px-Tea_service_syon_house.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Queue_at_a_London_bus_stop.jpg/400px-Queue_at_a_London_bus_stop.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Punch_-_July_9%2C_1887.jpg/400px-Punch_-_July_9%2C_1887.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Royal_Courts_of_Justice%2C_London%2C_England-2Nov2010.jpg/400px-Royal_Courts_of_Justice%2C_London%2C_England-2Nov2010.jpg',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Cricket_at_Lord%27s_ground%2C_1837.jpg/400px-Cricket_at_Lord%27s_ground%2C_1837.jpg',
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
  },

  // Medieval & Early Period
  {
    id: 'alfred-great',
    label: 'Alfred the Great',
    type: 'person',
    category: 'Medieval Rulers',
    description: 'King of Wessex who laid foundations of English education and legal system',
    detailedDescription: 'Alfred the Great transformed Anglo-Saxon England through educational reform, legal codification, and cultural preservation. He established schools, promoted literacy, and created the Anglo-Saxon Chronicle, laying groundwork for English intellectual tradition.',
    period: '849-899',
    birthYear: 849,
    deathYear: 899,
    location: 'Wessex',
    significance: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/King_Alfred_of_England.jpg/400px-King_Alfred_of_England.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Alfred_the_Great',
    tags: ['education', 'legal-reform', 'anglo-saxon', 'literacy', 'chronicle'],
    relatedConcepts: ['english-language', 'legal-system', 'education'],
    keyContributions: [
      'Established first English schools and promoted literacy',
      'Created comprehensive legal code',
      'Founded the Anglo-Saxon Chronicle',
      'Translated Latin works into Old English'
    ],
    culturalImpact: 'Alfred\'s educational and legal reforms established the foundation for English intellectual and judicial traditions.',
    modernRelevance: 'His emphasis on education and rule of law remains central to British values.',
    funFacts: [
      'Only English king to be called "the Great"',
      'Allegedly burnt cakes while hiding from Vikings',
      'Founded the University of Oxford (according to legend)'
    ],
    quotes: [
      '"Wisdom is the principal thing; therefore get wisdom"'
    ]
  },

  {
    id: 'chaucer',
    label: 'Geoffrey Chaucer',
    type: 'person',
    category: 'Medieval Writers',
    description: 'Father of English literature and creator of The Canterbury Tales',
    detailedDescription: 'Geoffrey Chaucer revolutionised English literature by writing in Middle English rather than Latin or French, making literature accessible to common people. His Canterbury Tales offers unparalleled insight into medieval English society.',
    period: '1340s-1400',
    birthYear: 1343,
    deathYear: 1400,
    location: 'London',
    significance: 82,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Chaucer_Hoccleve.png/400px-Chaucer_Hoccleve.png',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Geoffrey_Chaucer',
    tags: ['literature', 'middle-english', 'canterbury-tales', 'social-commentary', 'poetry'],
    relatedConcepts: ['english-language', 'social-hierarchy', 'pilgrimage'],
    keyContributions: [
      'The Canterbury Tales - masterpiece of English literature',
      'Established English as a literary language',
      'Created realistic character portraits across social classes',
      'Influenced development of English poetry'
    ],
    culturalImpact: 'Chaucer established English literature as worthy of serious artistic expression and social commentary.',
    modernRelevance: 'His character types and social observations remain recognisable in contemporary British society.',
    funFacts: [
      'First poet buried in Poets\' Corner, Westminster Abbey',
      'Worked as a diplomat and civil servant',
      'His tomb became the foundation of Poets\' Corner'
    ],
    quotes: [
      '"Time and tide wait for no man"',
      '"The life so short, the craft so long to learn"'
    ]
  },

  // Tudor Era
  {
    id: 'elizabeth-i',
    label: 'Elizabeth I',
    type: 'person',
    category: 'Tudor Monarchs',
    description: 'Virgin Queen who presided over England\'s Golden Age',
    detailedDescription: 'Elizabeth I\'s 45-year reign marked the English Renaissance, seeing flourishing of arts, literature, and theatre. Her court patronage enabled Shakespeare, Marlowe, and others, whilst her political acumen established England as a major European power.',
    period: '1533-1603',
    birthYear: 1533,
    deathYear: 1603,
    location: 'London',
    significance: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Darnley_stage_3.jpg/400px-Darnley_stage_3.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Elizabeth_I',
    tags: ['monarchy', 'renaissance', 'golden-age', 'patronage', 'diplomacy'],
    relatedConcepts: ['shakespeare', 'theatre-tradition', 'naval-power'],
    keyContributions: [
      'Established England as major naval power',
      'Patronised the arts and learning',
      'Defeated Spanish Armada (1588)',
      'Created religious settlement ending decades of turmoil'
    ],
    culturalImpact: 'The Elizabethan Age became synonymous with English cultural achievement and national confidence.',
    modernRelevance: 'Symbol of strong female leadership and cultural patronage.',
    funFacts: [
      'Spoke six languages fluently',
      'Never married, earning title "Virgin Queen"',
      'Her speeches inspired troops against Spanish invasion'
    ],
    quotes: [
      '"I may have the body of a weak and feeble woman, but I have the heart and stomach of a king"',
      '"I would rather be a beggar and single than a queen and married"'
    ]
  },

  // Industrial Era
  {
    id: 'austen',
    label: 'Jane Austen',
    type: 'person',
    category: 'Literary Figures',
    description: 'Novelist who perfected social satire and domestic realism',
    detailedDescription: 'Jane Austen\'s novels offered sharp, witty observations of Regency society, particularly the marriage market and social hierarchies. Her psychological realism and social commentary established the template for modern British comedy and social criticism.',
    period: '1775-1817',
    birthYear: 1775,
    deathYear: 1817,
    location: 'Hampshire',
    significance: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg/400px-CassandraAusten-JaneAusten%28c.1810%29_hires.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Jane_Austen',
    tags: ['literature', 'social-satire', 'regency', 'marriage', 'class'],
    relatedConcepts: ['british-humour', 'social-hierarchy', 'domestic-life'],
    keyContributions: [
      'Pride and Prejudice - masterpiece of social comedy',
      'Perfected the novel of manners',
      'Created memorable characters like Elizabeth Bennet',
      'Influenced generations of British writers'
    ],
    culturalImpact: 'Austen\'s wit and social observation became archetypal of British literary sensibility.',
    modernRelevance: 'Her novels remain hugely popular, adapted countless times for film and television.',
    funFacts: [
      'Published anonymously as "By a Lady"',
      'Wrote whilst living quietly in Hampshire countryside',
      'Her books have never been out of print'
    ],
    quotes: [
      '"It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife"',
      '"The little things are infinitely the most important"'
    ]
  },

  {
    id: 'dickens',
    label: 'Charles Dickens',
    type: 'person',
    category: 'Victorian Writers',
    description: 'Victorian novelist who championed social reform through literature',
    detailedDescription: 'Charles Dickens used his novels to expose social injustices of Industrial Revolution Britain. His vivid characters and melodramatic plots brought issues like child labour, poverty, and urban squalor to middle-class attention, driving social reform.',
    period: '1812-1870',
    birthYear: 1812,
    deathYear: 1870,
    location: 'London',
    significance: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Dickens_Gurney_head.jpg/400px-Dickens_Gurney_head.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Charles_Dickens',
    tags: ['literature', 'social-reform', 'victorian', 'industrial-revolution', 'poverty'],
    relatedConcepts: ['social-reform', 'urban-life', 'class-consciousness'],
    keyContributions: [
      'A Christmas Carol - transformed Christmas traditions',
      'Oliver Twist - exposed child labour conditions',
      'Hard Times - critiqued industrial capitalism',
      'Pioneered serialised novel publication'
    ],
    culturalImpact: 'Dickens shaped Victorian social conscience and Christmas traditions whilst establishing the social novel.',
    modernRelevance: 'His Christmas stories remain central to British festive culture.',
    funFacts: [
      'Worked in boot-blacking factory as child',
      'Performed dramatic readings across Britain and America',
      'Invented many words still used today'
    ],
    quotes: [
      '"It was the best of times, it was the worst of times"',
      '"No one is useless in this world who lightens the burdens of another"'
    ]
  },

  // Scottish Contributors
  {
    id: 'burns',
    label: 'Robert Burns',
    type: 'person',
    category: 'Scottish Poets',
    description: 'Scotland\'s national poet who celebrated common humanity',
    detailedDescription: 'Robert Burns wrote in Scots dialect, celebrating ordinary people and democratic ideals. His poetry influenced Romantic movement whilst establishing Scottish cultural identity. Burns Night remains a global celebration of Scottish heritage.',
    period: '1759-1796',
    birthYear: 1759,
    deathYear: 1796,
    location: 'Ayrshire, Scotland',
    significance: 80,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Robert_Burns.jpg/400px-Robert_Burns.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Robert_Burns',
    tags: ['poetry', 'scottish', 'romanticism', 'democracy', 'dialect'],
    relatedConcepts: ['scottish-identity', 'democratic-ideals', 'folk-culture'],
    keyContributions: [
      'Auld Lang Syne - most famous New Year song worldwide',
      'Preserved and celebrated Scots language',
      'Influenced Romantic poetry movement',
      'Championed egalitarian ideals'
    ],
    culturalImpact: 'Burns became symbol of Scottish national identity and democratic values.',
    modernRelevance: 'Burns Night celebrations maintain Scottish cultural traditions globally.',
    funFacts: [
      'Auld Lang Syne sung worldwide at New Year',
      'Worked as tax collector whilst writing poetry',
      'Has more statues than any other British writer except Shakespeare'
    ],
    quotes: [
      '"A man\'s a man for a\' that"',
      '"The best laid schemes of mice and men gang aft agley"'
    ]
  },

  {
    id: 'smith',
    label: 'Adam Smith',
    type: 'person',
    category: 'Scottish Philosophers',
    description: 'Father of modern economics and moral philosophy',
    detailedDescription: 'Adam Smith\'s Wealth of Nations laid foundations of modern economic theory, introducing concepts like the invisible hand and division of labour. His earlier Theory of Moral Sentiments explored human empathy and social cohesion.',
    period: '1723-1790',
    birthYear: 1723,
    deathYear: 1790,
    location: 'Edinburgh',
    significance: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Adam_Smith_The_Muir_portrait.jpg/400px-Adam_Smith_The_Muir_portrait.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Adam_Smith',
    tags: ['economics', 'philosophy', 'scottish-enlightenment', 'capitalism', 'morality'],
    relatedConcepts: ['free-market', 'moral-philosophy', 'social-harmony'],
    keyContributions: [
      'The Wealth of Nations - foundation of modern economics',
      'Theory of Moral Sentiments - explored human empathy',
      'Concept of "invisible hand" in markets',
      'Analysis of division of labour'
    ],
    culturalImpact: 'Smith\'s economic theories shaped capitalist systems worldwide whilst maintaining focus on moral behaviour.',
    modernRelevance: 'His ideas continue to influence economic policy and business ethics.',
    funFacts: [
      'Portrait appeared on £20 note from 2007-2020',
      'Was absent-minded professor stereotype',
      'Never married and lived with his mother'
    ],
    quotes: [
      '"It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner"',
      '"The real price of everything is the toil and trouble of acquiring it"'
    ]
  },

  // Welsh Contributors
  {
    id: 'dylan-thomas',
    label: 'Dylan Thomas',
    type: 'person',
    category: 'Welsh Poets',
    description: 'Wales\' greatest poet, whose lyrical voice captured the essence of Welsh identity',
    detailedDescription: 'Dylan Marlais Thomas brought Welsh poetic tradition to international prominence through his lyrical, deeply emotional verse and prose. Born in Swansea, his work celebrated the landscape and people of Wales whilst exploring universal themes of life, death, and rebirth. His radio play "Under Milk Wood" remains a masterpiece of British literature.',
    period: '1914-1953',
    birthYear: 1914,
    deathYear: 1953,
    location: 'Swansea / New York',
    significance: 82,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Dylan_Thomas_portrait.jpg/400px-Dylan_Thomas_portrait.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Dylan_Thomas',
    tags: ['poetry', 'welsh', 'radio', 'literature', 'lyrical', 'landscape'],
    relatedConcepts: ['welsh-identity', 'poetic-tradition', 'radio-drama'],
    keyContributions: [
      'Under Milk Wood - masterpiece of radio drama',
      'Deaths and Entrances - acclaimed poetry collection',
      'Do not go gentle into that good night - iconic villanelle',
      'Portrait of the Artist as a Young Dog - autobiographical stories',
      'Brought Welsh poetic voice to international audience',
      'Pioneered modern radio drama techniques'
    ],
    culturalImpact: 'Thomas made Welsh literature internationally recognized and inspired generations of poets. His readings and performances helped establish poetry as a performance art.',
    modernRelevance: 'His poems remain widely anthologized and quoted. The Dylan Thomas Centre in Swansea and annual festivals celebrate his legacy.',
    funFacts: [
      'Coined the phrase "Do not go gentle into that good night"',
      'Died in New York at age 39, becoming a romantic literary legend',
      'His writing hut in Laugharne overlooks the Taf estuary',
      'Richard Burton starred in "Under Milk Wood" adaptations',
      'Bob Dylan was partly named after Dylan Thomas',
      'His voice recordings preserve his distinctive Welsh accent'
    ],
    quotes: [
      '"Do not go gentle into that good night, Old age should burn and rave at close of day"',
      '"The force that through the green fuse drives the flower"',
      '"I hold a beast, an angel, and a madman in me"',
      '"Poetry is what in a poem makes you laugh, cry, prickle, be silent, makes your toe nails twinkle"'
    ]
  },

  {
    id: 'aneurin-bevan',
    label: 'Aneurin Bevan',
    type: 'person',
    category: 'Welsh Politicians',
    description: 'Architect of the NHS and champion of social justice',
    detailedDescription: 'Aneurin "Nye" Bevan transformed British society by creating the National Health Service in 1948. Born into a Welsh mining family, he understood poverty and fought tirelessly for social justice. As Minister of Health, he overcame fierce opposition to establish healthcare free at the point of use - a principle that defined modern Britain.',
    period: '1897-1960',
    birthYear: 1897,
    deathYear: 1960,
    location: 'Tredegar, Wales / London',
    significance: 90,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aneurin_Bevan.jpg/400px-Aneurin_Bevan.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Aneurin_Bevan',
    tags: ['politics', 'healthcare', 'socialism', 'nhs', 'welsh', 'social-justice'],
    relatedConcepts: ['welfare-state', 'public-service', 'social-democracy'],
    keyContributions: [
      'Founded the National Health Service (1948)',
      'Championed principle of healthcare free at point of use',
      'Overcame medical profession opposition to create NHS',
      'Established foundation of British welfare state',
      'Influential Labour Party theorist and speaker',
      '"In Place of Fear" - seminal socialist text'
    ],
    culturalImpact: 'Bevan\'s NHS became a source of national pride and model for healthcare systems worldwide. His vision of social solidarity through public service shaped modern British values.',
    modernRelevance: 'The NHS remains Britain\'s most cherished institution. Bevan\'s principles of universal healthcare continue to influence policy debates globally.',
    funFacts: [
      'Son of a coal miner, left school at 13 to work in mines',
      'Self-educated through Tredegar Working Men\'s Library',
      'Married to fellow MP Jennie Lee',
      'Overcame serious stutter to become powerful orator',
      'Resigned from government over NHS prescription charges',
      'Statue stands in Cardiff city centre'
    ],
    quotes: [
      '"No society can legitimately call itself civilized if a sick person is denied medical aid because of lack of means"',
      '"The NHS will last as long as there are folk left with the faith to fight for it"',
      '"We know what happens to people who stay in the middle of the road. They get run down"',
      '"It is an act of intellectual vandalism to break up the health service"'
    ]
  },

  // Northern Irish Contributors  
  {
    id: 'cs-lewis',
    label: 'C.S. Lewis',
    type: 'person',
    category: 'Northern Irish Writers',
    description: 'Literary scholar and creator of Narnia who bridged faith and imagination',
    detailedDescription: 'Clive Staples Lewis combined rigorous scholarship with imaginative storytelling to become one of the most influential Christian apologists and fantasy writers. Born in Belfast, he taught at Oxford and Cambridge whilst creating the Chronicles of Narnia and defending Christian faith through reason and allegory.',
    period: '1898-1963',
    birthYear: 1898,
    deathYear: 1963,
    location: 'Belfast / Oxford / Cambridge',
    significance: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/C.s.lewis3.JPG/400px-C.s.lewis3.JPG',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/C._S._Lewis',
    tags: ['literature', 'fantasy', 'christianity', 'northern-irish', 'oxford', 'narnia'],
    relatedConcepts: ['fantasy-literature', 'christian-apologetics', 'academic-writing'],
    keyContributions: [
      'The Chronicles of Narnia - beloved fantasy series',
      'Mere Christianity - influential Christian apologetics',
      'The Screwtape Letters - satirical religious work',
      'Medieval literature scholarship at Oxford and Cambridge',
      'Popular Christian broadcasting during WWII',
      'Bridged academic rigor with popular accessibility'
    ],
    culturalImpact: 'Lewis made fantasy literature respectable and Christian apologetics accessible to modern audiences. Narnia influenced generations of children and adults worldwide.',
    modernRelevance: 'Narnia films and adaptations continue to entertain new generations. His apologetic works remain influential in Christian thought and literature courses.',
    funFacts: [
      'Friends with J.R.R. Tolkien in the "Inklings" group',
      'Originally atheist, converted to Christianity as adult',
      'Narnia series written in just seven years',
      'Voice of Christian faith on BBC radio during WWII',
      'Married American writer Joy Davidman late in life',
      'Died same day as JFK and Aldous Huxley'
    ],
    quotes: [
      '"Once a king or queen of Narnia, always a king or queen of Narnia"',
      '"You can\'t go back and change the beginning, but you can start where you are and change the ending"',
      '"We are what we believe we are"',
      '"Aslan is on the move"'
    ]
  },

  {
    id: 'seamus-heaney',
    label: 'Seamus Heaney',
    type: 'person',
    category: 'Northern Irish Poets',
    description: 'Nobel Prize-winning poet who gave voice to rural Ireland and the Troubles',
    detailedDescription: 'Seamus Justin Heaney brought the landscape, language, and struggles of Northern Ireland to international poetry. His work bridged the divide between rural tradition and modern conflict, earning him the Nobel Prize for Literature in 1995. He articulated the experience of the Troubles whilst celebrating the enduring power of poetry.',
    period: '1939-2013',
    birthYear: 1939,
    deathYear: 2013,
    location: 'County Derry / Dublin / Harvard',
    significance: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Seamus_Heaney_2009.jpg/400px-Seamus_Heaney_2009.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Seamus_Heaney',
    tags: ['poetry', 'nobel-prize', 'northern-irish', 'troubles', 'rural', 'translation'],
    relatedConcepts: ['irish-identity', 'conflict-poetry', 'translation-work'],
    keyContributions: [
      'Nobel Prize in Literature (1995)',
      'Death of a Naturalist - groundbreaking debut collection',
      'North - acclaimed poems about the Troubles',
      'Translation of Beowulf - modern English masterpiece',
      'Articulated Northern Irish experience in poetry',
      'Bridged cultural and political divides through art'
    ],
    culturalImpact: 'Heaney made Northern Irish poetry internationally significant and showed how literature could address political conflict with nuance and humanity.',
    modernRelevance: 'His work continues to influence poets dealing with conflict and identity. His Beowulf translation remains a popular academic text.',
    funFacts: [
      'Called "Famous Seamus" by media after Nobel Prize',
      'Son of a cattle dealer from rural County Derry',
      'Taught at Harvard University for many years',
      'His Beowulf translation won Whitbread Book of the Year',
      'Refused knighthood but accepted many other honors',
      'His funeral was attended by presidents and prime ministers'
    ],
    quotes: [
      '"If you have the words, there\'s always a chance that you\'ll find the way"',
      '"Poetry is a revelation in words by means of the words"',
      '"Walk on air against your better judgement"',
      '"Between my finger and my thumb / The squat pen rests"'
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
  },
  {
    id: 'alfred-parliament',
    source: 'alfred-great',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Alfred\'s legal reforms and advisory councils laid groundwork for parliamentary tradition',
    strength: 7,
    type: 'influenced',
    period: '870-899',
    evidence: ['Witenagemot assembly', 'Legal codification', 'Advisory governance']
  },
  {
    id: 'alfred-common-law',
    source: 'alfred-great',
    target: 'common-law',
    relationship: 'founded',
    description: 'Alfred\'s comprehensive legal code became foundation for English common law',
    strength: 8,
    type: 'developed',
    period: '880-890',
    evidence: ['Doom Book legal code', 'Integration of local laws', 'Legal precedents']
  },
  {
    id: 'chaucer-shakespeare',
    source: 'chaucer',
    target: 'shakespeare',
    relationship: 'influenced',
    description: 'Chaucer\'s literary innovations and character development influenced Shakespeare\'s dramatic techniques',
    strength: 6,
    type: 'influenced',
    period: '1340-1616',
    evidence: ['Literary techniques', 'Character archetypes', 'Social commentary']
  },
  {
    id: 'chaucer-british-humour',
    source: 'chaucer',
    target: 'british-humour',
    relationship: 'pioneered',
    description: 'Chaucer\'s satirical portraits and social comedy established British humorous tradition',
    strength: 7,
    type: 'influenced',
    period: '1380-1400',
    evidence: ['Satirical characters', 'Social comedy', 'Ironic observation']
  },
  {
    id: 'elizabeth-shakespeare',
    source: 'elizabeth-i',
    target: 'shakespeare',
    relationship: 'patronised',
    description: 'Elizabeth\'s court patronage enabled Shakespeare\'s theatrical career and artistic development',
    strength: 8,
    type: 'influenced',
    period: '1590-1603',
    evidence: ['Court performances', 'Royal patronage', 'Theatrical commissions']
  },
  {
    id: 'austen-british-humour',
    source: 'austen',
    target: 'british-humour',
    relationship: 'perfected',
    description: 'Austen refined British wit through social satire and ironic observation',
    strength: 8,
    type: 'developed',
    period: '1790-1817',
    evidence: ['Social satire', 'Ironic narrative voice', 'Comedic situations']
  },
  {
    id: 'austen-tea-culture',
    source: 'austen',
    target: 'tea-culture',
    relationship: 'depicted',
    description: 'Austen\'s novels captured the social importance of tea in Regency society',
    strength: 6,
    type: 'embodied',
    period: '1790-1817',
    evidence: ['Social scenes', 'Drawing room culture', 'Polite society']
  },
  {
    id: 'dickens-social-reform',
    source: 'dickens',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Dickens\' novels drove parliamentary social reforms addressing urban poverty',
    strength: 7,
    type: 'influenced',
    period: '1830-1870',
    evidence: ['Factory Acts', 'Education reforms', 'Poor Law amendments']
  },
  {
    id: 'burns-british-humour',
    source: 'burns',
    target: 'british-humour',
    relationship: 'contributed',
    description: 'Burns\' satirical verse and democratic humour enriched British comedic tradition',
    strength: 6,
    type: 'influenced',
    period: '1780-1796',
    evidence: ['Satirical poems', 'Social comedy', 'Democratic wit']
  },
  {
    id: 'smith-economic-thought',
    source: 'smith',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Smith\'s economic theories influenced British governmental policy and trade regulations',
    strength: 7,
    type: 'influenced',
    period: '1760-1790',
    evidence: ['Free trade policy', 'Economic legislation', 'Colonial trade reforms']
  },
  {
    id: 'newton-cambridge',
    source: 'newton',
    target: 'cambridge-university',
    relationship: 'studied-and-taught',
    description: 'Newton studied and later held the Lucasian Chair of Mathematics at Cambridge',
    strength: 9,
    type: 'embodied',
    period: '1661-1727',
    evidence: ['Trinity College fellowship', 'Lucasian Professor', 'Mathematical research']
  },
  {
    id: 'newton-royal-society',
    source: 'newton',
    target: 'royal-society',
    relationship: 'led',
    description: 'Newton served as President of the Royal Society for 24 years and published Principia through them',
    strength: 9,
    type: 'institutionalized',
    period: '1703-1727',
    evidence: ['Royal Society President', 'Principia publication', 'Scientific leadership']
  },
  {
    id: 'darwin-cambridge',
    source: 'darwin',
    target: 'cambridge-university',
    relationship: 'studied',
    description: 'Darwin studied theology at Christ\'s College, Cambridge, where he developed his passion for natural history',
    strength: 7,
    type: 'influenced',
    period: '1828-1831',
    evidence: ['Christ\'s College education', 'Natural history studies', 'Beagle voyage preparation']
  },
  {
    id: 'churchill-oxford',
    source: 'churchill',
    target: 'oxford-university',
    relationship: 'honoured',
    description: 'Churchill received honorary degree from Oxford and gave famous "Iron Curtain" speech there',
    strength: 6,
    type: 'embodied',
    period: '1946',
    evidence: ['Honorary doctorate', 'Fulton speech', 'Academic recognition']
  },
  {
    id: 'oxford-cambridge-rivalry',
    source: 'oxford-university',
    target: 'cambridge-university',
    relationship: 'competed',
    description: 'The ancient rivalry between Oxford and Cambridge drives academic excellence and cultural traditions',
    strength: 8,
    type: 'opposed',
    period: '1209-present',
    evidence: ['Boat Race', 'Academic competition', 'Oxbridge tradition']
  },
  
  // Welsh & Northern Irish Connections
  {
    id: 'dylan-thomas-british-humour',
    source: 'dylan-thomas',
    target: 'british-humour',
    relationship: 'enriched',
    description: 'Dylan Thomas brought Welsh wit and linguistic playfulness to British humorous tradition',
    strength: 6,
    type: 'influenced',
    period: '1930-1953',
    evidence: ['Wordplay in poetry', 'Humorous radio performances', 'Welsh comedic sensibility']
  },
  {
    id: 'dylan-thomas-bbc',
    source: 'dylan-thomas',
    target: 'bbc',
    relationship: 'collaborated',
    description: 'Thomas worked extensively with BBC Radio, creating influential radio dramas and poetry broadcasts',
    strength: 8,
    type: 'developed',
    period: '1940-1953',
    evidence: ['Under Milk Wood radio play', 'Poetry readings', 'Wartime broadcasts']
  },
  {
    id: 'aneurin-bevan-parliament',
    source: 'aneurin-bevan',
    target: 'parliament',
    relationship: 'transformed',
    description: 'Bevan used Parliament to create the NHS, demonstrating democratic power to transform society',
    strength: 9,
    type: 'institutionalized',
    period: '1929-1960',
    evidence: ['NHS legislation', 'Parliamentary debates', 'Social policy reform']
  },
  {
    id: 'cs-lewis-oxford',
    source: 'cs-lewis',
    target: 'oxford-university',
    relationship: 'taught',
    description: 'Lewis taught medieval literature at Oxford for 30 years, influencing generations of students',
    strength: 8,
    type: 'embodied',
    period: '1925-1954',
    evidence: ['Magdalen College fellowship', 'Literary scholarship', 'Inklings meetings']
  },
  {
    id: 'cs-lewis-cambridge',
    source: 'cs-lewis',
    target: 'cambridge-university',
    relationship: 'concluded-career',
    description: 'Lewis finished his academic career as Professor of Medieval and Renaissance Literature at Cambridge',
    strength: 7,
    type: 'embodied',
    period: '1954-1963',
    evidence: ['Chair of Medieval Literature', 'Academic lectures', 'Scholarly publications']
  },
  {
    id: 'seamus-heaney-british-humour',
    source: 'seamus-heaney',
    target: 'british-humour',
    relationship: 'contributed',
    description: 'Heaney brought Irish wit and linguistic playfulness to British poetic tradition',
    strength: 5,
    type: 'influenced',
    period: '1960-2013',
    evidence: ['Poetic humor', 'Self-deprecating interviews', 'Literary wit']
  },
  {
    id: 'burns-dylan-thomas',
    source: 'burns',
    target: 'dylan-thomas',
    relationship: 'influenced',
    description: 'Burns\' celebration of dialect and common people influenced Thomas\' Welsh poetic voice',
    strength: 6,
    type: 'influenced',
    period: '1914-1953',
    evidence: ['Dialect poetry', 'Folk traditions', 'Poetic nationalism']
  },
  {
    id: 'shakespeare-cs-lewis',
    source: 'shakespeare',
    target: 'cs-lewis',
    relationship: 'influenced',
    description: 'Shakespeare\'s literary techniques and Christian themes influenced Lewis\' academic and creative work',
    strength: 7,
    type: 'influenced',
    period: '1925-1963',
    evidence: ['Medieval literature studies', 'Narrative techniques', 'Allegorical methods']
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