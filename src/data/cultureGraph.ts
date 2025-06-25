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
    id: 'william-conqueror',
    label: 'William the Conqueror',
    type: 'person',
    category: 'Norman Rulers',
    description: 'Norman Duke who conquered England and fundamentally transformed English culture and language',
    detailedDescription: 'William I transformed England forever through the Norman Conquest of 1066. Born the illegitimate son of Robert I of Normandy, he built a powerful duchy before claiming the English throne. His conquest introduced Norman French culture, transformed the English language, established feudalism, and created the administrative systems that would govern England for centuries.',
    period: '1028-1087',
    birthYear: 1028,
    deathYear: 1087,
    location: 'Normandy / England',
    significance: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Bayeux_Tapestry_scene44_William_Odo_Robert.jpg/400px-Bayeux_Tapestry_scene44_William_Odo_Robert.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/William_the_Conqueror',
    tags: ['norman-conquest', 'feudalism', 'domesday-book', 'castle-building', 'language-change'],
    relatedConcepts: ['feudal-system', 'norman-architecture', 'english-language'],
    keyContributions: [
      'Norman Conquest of 1066 - transformative moment in English history',
      'Introduced Norman French vocabulary into English language',
      'Established feudal system in England with systematic land grants',
      'Commissioned Domesday Book - comprehensive survey of England',
      'Built network of Norman castles establishing royal control',
      'Transformed English aristocracy and administrative systems',
      'Brought Continental European cultural influences to England'
    ],
    culturalImpact: 'The Norman Conquest fundamentally changed English culture, language, architecture, and social structure. Norman French became the language of court and administration, whilst English absorbed thousands of French words. Norman architecture transformed the English landscape.',
    modernRelevance: 'The Norman Conquest remains the last successful invasion of England. Its effects on English language, law, and culture are still visible today in vocabulary, place names, and legal traditions.',
    funFacts: [
      'Known as "William the Bastard" before his conquest due to illegitimate birth',
      'The Battle of Hastings lasted about 6 hours on 14 October 1066',
      'Domesday Book was completed in just 7 years and recorded 13,418 settlements',
      'Built the White Tower (Tower of London) to intimidate Londoners',
      'His horse at Hastings was called Gris, meaning "grey" in Norman French',
      'Died from injuries sustained when his horse reared against his saddle pommel',
      'The Bayeux Tapestry (probably commissioned by his half-brother) depicts his conquest'
    ],
    quotes: [
      '"By the splendour of God, I have taken possession of my realm; the earth of England is in my two hands"',
      '"I have persevered and by God\'s help I have conquered"'
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
    id: 'henry-viii',
    label: 'Henry VIII',
    type: 'person',
    category: 'Tudor Monarchs',
    description: 'Tudor king whose break with Rome transformed English religion, culture, and royal power',
    detailedDescription: 'Henry VIII\'s reign marked a seismic shift in English history through his break with Rome and establishment of the Church of England. Born into the Tudor dynasty, his desire for a male heir led him to challenge papal authority, dissolve monasteries, and transform England\'s religious landscape. His six marriages, larger-than-life personality, and cultural patronage made him one of history\'s most recognisable monarchs.',
    period: '1491-1547',
    birthYear: 1491,
    deathYear: 1547,
    location: 'Greenwich / London',
    significance: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hans_Holbein_the_Younger_-_King_Henry_VIII_-_Google_Art_Project.jpg/400px-Hans_Holbein_the_Younger_-_King_Henry_VIII_-_Google_Art_Project.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Henry_VIII',
    tags: ['reformation', 'church-of-england', 'monasteries', 'royal-supremacy', 'six-wives'],
    relatedConcepts: ['english-reformation', 'royal-power', 'religious-change'],
    keyContributions: [
      'Established Church of England as separate from Roman Catholicism',
      'Act of Supremacy (1534) made English monarch head of English church',
      'Dissolution of Monasteries redistributed vast wealth and land',
      'Strengthened royal power and centralised government administration',
      'Patronised Renaissance arts bringing Continental culture to England',
      'Built powerful navy laying foundation for English maritime dominance',
      'Legal and administrative reforms strengthened royal authority'
    ],
    culturalImpact: 'Henry\'s break with Rome fundamentally altered English identity, making England Protestant rather than Catholic and establishing royal supremacy over religious matters. The dissolution of monasteries transformed the English landscape and social structure.',
    modernRelevance: 'The Church of England remains the established church, with the monarch as Supreme Governor. Henry\'s assertion of royal supremacy over foreign authority resonates in modern sovereignty debates.',
    funFacts: [
      'Married six times: divorced twice, beheaded two wives, one died, one survived',
      'Was originally given title "Defender of the Faith" by Pope for opposing Luther',
      'Composed music and played multiple instruments',
      'Was 6\'2" tall and athletic in youth, becoming massively obese later',
      'His armour shows his waist expanded from 32 inches to 54 inches',
      'Spoke four languages fluently: English, French, Latin, and Spanish',
      'His break with Rome was triggered by desire to divorce Catherine of Aragon'
    ],
    quotes: [
      '"I am, I am, I am" - inscription on his personal seal',
      '"The King\'s word is more than a promise"',
      '"I will not suffer anyone to have it in his power to command me"'
    ]
  },

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
  },

  // Modern Era - Adding Orwell
  {
    id: 'orwell',
    label: 'George Orwell',
    type: 'person',
    category: 'Modern Writers',
    description: 'Author who defined the fight for free speech and warned against totalitarianism',
    detailedDescription: 'Eric Arthur Blair, known as George Orwell, became the most influential defender of free speech and democratic values in the 20th century. His experiences fighting fascism in Spain and witnessing Stalinist purges led to masterworks like "1984" and "Animal Farm" that defined concepts of thought police, doublethink, and Big Brother. His essays on language and politics remain essential reading for understanding threats to freedom.',
    period: '1903-1950',
    birthYear: 1903,
    deathYear: 1950,
    location: 'London / Burma / Spain / Jura',
    significance: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/400px-George_Orwell_press_photo.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/George_Orwell',
    tags: ['literature', 'free-speech', 'anti-totalitarian', 'political-writing', 'dystopian', 'journalism'],
    relatedConcepts: ['freedom-of-speech', 'democracy', 'anti-censorship', 'political-language'],
    keyContributions: [
      '1984 - dystopian masterpiece warning against totalitarianism',
      'Animal Farm - allegory exposing corruption of revolutionary ideals',
      '"Politics and the English Language" - seminal essay on clear thinking',
      '"The Freedom of the Press" - unpublished preface defending free speech',
      'Coined terms: Big Brother, doublethink, thoughtcrime, Newspeak',
      'Down and Out in Paris and London - exposing social inequality',
      'Homage to Catalonia - firsthand account of fighting fascism'
    ],
    culturalImpact: 'Orwell\'s concepts became universal language for discussing authoritarianism. "Orwellian" entered common usage to describe government overreach and propaganda. His warnings about surveillance and language manipulation remain prophetic.',
    modernRelevance: 'In the digital age, Orwell\'s warnings about surveillance, fake news, and thought control are more relevant than ever. His works are quoted in debates about privacy, media manipulation, and political freedom worldwide.',
    funFacts: [
      'Real name was Eric Blair - chose "George Orwell" as very English name',
      'Worked as imperial policeman in Burma, inspiring his anti-imperialism',
      'Shot through the throat by fascist sniper in Spanish Civil War',
      'Kept a pub goat named Muriel (like the goat in Animal Farm)',
      'Last words were reportedly about the trout he wanted to catch',
      'BBC rejected Animal Farm initially as too controversial',
      'Wrote 1984 whilst dying of tuberculosis on Scottish island'
    ],
    quotes: [
      '"Freedom is the right to tell people what they do not want to hear"',
      '"In a time of deceit telling the truth is a revolutionary act"',
      '"All animals are equal, but some animals are more equal than others"',
      '"War is peace. Freedom is slavery. Ignorance is strength"',
      '"The best books are those that tell you what you know already"'
    ]
  },

  // 17th Century - Adding Milton
  {
    id: 'milton',
    label: 'John Milton',
    type: 'person',
    category: 'Renaissance Writers',
    description: 'Poet and pamphleteer who wrote the first great defence of press freedom',
    detailedDescription: 'John Milton combined sublime poetry with revolutionary political thought, creating both "Paradise Lost" and "Areopagitica" - the foundational text arguing against pre-publication censorship. Writing during the English Civil War, he defended regicide, religious tolerance, and press freedom whilst serving as Cromwell\'s Latin Secretary. His blindness in later life makes his literary achievements even more remarkable.',
    period: '1608-1674',
    birthYear: 1608,
    deathYear: 1674,
    location: 'London / Cambridge',
    significance: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/John_Milton.jpg/400px-John_Milton.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_Milton',
    tags: ['literature', 'free-speech', 'republicanism', 'poetry', 'civil-war', 'press-freedom'],
    relatedConcepts: ['freedom-of-speech', 'religious-tolerance', 'press-freedom', 'civil-liberties'],
    keyContributions: [
      'Areopagitica (1644) - first great argument against press censorship',
      'Paradise Lost - epic poem exploring free will and rebellion',
      'The Tenure of Kings and Magistrates - defended right to depose tyrants',
      'Paradise Regained - sequel exploring temptation and virtue',
      'Samson Agonistes - dramatic poem on strength through suffering',
      'Defended religious tolerance and separation of church and state',
      'Served as Latin Secretary to Commonwealth government'
    ],
    culturalImpact: 'Milton\'s "Areopagitica" became the philosophical foundation for press freedom and freedom of thought. His arguments against licensing influenced the First Amendment and continue to be cited in free speech cases.',
    modernRelevance: 'Milton\'s arguments against censorship are quoted in modern debates about internet freedom, hate speech laws, and academic freedom. His defence of the "marketplace of ideas" remains central to liberal democracy.',
    funFacts: [
      'Went blind at 44 but continued writing by dictating to assistants',
      'Married three times, twice to much younger women',
      'Narrowly escaped execution when monarchy was restored in 1660',
      'Spoke Latin, Greek, Hebrew, French, Spanish, and Italian',
      'Paradise Lost was initially sold for £10 (about £1,500 today)',
      'Believed in divorce by mutual consent - very radical for his time',
      'His daughters complained about having to read to him in languages they didn\'t understand'
    ],
    quotes: [
      '"Give me the liberty to know, to utter, and to argue freely according to conscience, above all liberties"',
      '"The mind is its own place, and in itself can make a heaven of hell, a hell of heaven"',
      '"Better to reign in Hell than serve in Heaven"',
      '"Who kills a man kills a reasonable creature, but he who destroys a good book, kills reason itself"'
    ]
  },

  // Concepts - Adding Freedom of Speech
  {
    id: 'freedom-of-speech',
    label: 'Freedom of Speech',
    type: 'concept',
    category: 'Fundamental Principles',
    description: 'The cornerstone principle that ideas must be free to compete in the marketplace of thought',
    detailedDescription: 'Freedom of speech in Britain developed through centuries of struggle against censorship, from the Star Chamber\'s abolition through Milton\'s Areopagitica to Orwell\'s warnings about thought control. Unlike many countries, Britain lacks a written constitution, making this freedom both more vulnerable and more precious. It encompasses not just the right to speak, but the right to hear, read, and think freely.',
    period: '1215-present',
    foundedYear: 1215,
    significance: 95,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Speakers%27_Corner_Hyde_Park_London_2.jpg/400px-Speakers%27_Corner_Hyde_Park_London_2.jpg',
    tags: ['freedom', 'democracy', 'civil-liberties', 'human-rights', 'press-freedom', 'censorship'],
    relatedConcepts: ['democracy', 'rule-of-law', 'press-freedom', 'academic-freedom'],
    keyContributions: [
      'Established principle that truth emerges through open debate',
      'Created legal protections against prior restraint and censorship',
      'Developed concept of "marketplace of ideas" where truth competes',
      'Influenced democratic constitutions worldwide',
      'Protected minority opinions and dissenting voices',
      'Enabled scientific and social progress through free inquiry',
      'Speakers\' Corner became symbol of free speech globally'
    ],
    culturalImpact: 'British free speech tradition influenced the First Amendment and democratic constitutions worldwide. The concept of loyal opposition and parliamentary privilege created space for criticism of power.',
    modernRelevance: 'Digital age brings new challenges: online harassment, disinformation, hate speech, and platform censorship. British approaches to balancing free speech with public order continue to evolve and influence global debates.',
    funFacts: [
      'Speakers\' Corner in Hyde Park has allowed free speech since 1872',
      'Britain has no written constitution protecting free speech',
      'Parliamentary privilege allows MPs to say anything in Parliament',
      'The phrase "freedom of the press" was coined by British writers',
      'British libel laws are stricter than many democracies',
      'BBC\'s independence principle helped establish media freedom norms'
    ],
    quotes: [
      '"The liberty of the press is the Palladium of all the civil, political and religious rights of an Englishman" - Junius Letters',
      '"Freedom is the right to tell people what they do not want to hear" - Orwell'
    ]
  },

  // Scientific Revolution
  {
    id: 'wren',
    label: 'Christopher Wren',
    type: 'person',
    category: 'Architects',
    description: 'Architect who rebuilt London after the Great Fire, designing St Paul\'s Cathedral',
    detailedDescription: 'Sir Christopher Wren transformed London\'s skyline following the Great Fire of 1666, designing 51 churches including the magnificent St Paul\'s Cathedral. Born into an academic family, he was a brilliant mathematician and astronomer before turning to architecture. His baroque style combined English traditions with Continental influences, creating a distinctly British architectural language.',
    period: '1632-1723',
    birthYear: 1632,
    deathYear: 1723,
    location: 'London / Oxford',
    significance: 86,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Christopher_Wren_by_Godfrey_Kneller_1711.jpg/400px-Christopher_Wren_by_Godfrey_Kneller_1711.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Christopher_Wren',
    tags: ['architecture', 'st-pauls', 'great-fire', 'baroque', 'city-churches', 'royal-society'],
    relatedConcepts: ['london-rebuild', 'baroque-architecture', 'scientific-architecture'],
    keyContributions: [
      'St Paul\'s Cathedral - masterpiece of English baroque architecture',
      'Designed 51 City of London churches after Great Fire of 1666',
      'Royal Observatory Greenwich establishing Britain\'s naval supremacy',
      'Trinity College Library Cambridge and Sheldonian Theatre Oxford',
      'Hampton Court Palace extensions for William and Mary',
      'Founded Royal Society alongside Newton and other scientists',
      'Pioneered mathematical approach to architectural engineering'
    ],
    culturalImpact: 'Wren\'s architectural vision shaped London\'s identity for centuries. His church designs influenced British ecclesiastical architecture whilst St Paul\'s became a symbol of London resilience, especially during the Blitz.',
    modernRelevance: 'St Paul\'s remains an iconic London landmark and venue for state occasions. Wren\'s scientific approach to architecture influenced modern architectural engineering.',
    funFacts: [
      'Started as Professor of Astronomy at Oxford before becoming architect',
      'Founding member of the Royal Society alongside Newton',
      'St Paul\'s dome was inspired by St Peter\'s Basilica in Rome',
      'His epitaph in St Paul\'s reads "Si monumentum requiris, circumspice" (If you seek his monument, look around)',
      'Designed the Monument to the Great Fire - the world\'s tallest isolated stone column',
      'Lived to 90 and saw St Paul\'s Cathedral completed',
      'His son laid the final stone on St Paul\'s Cathedral'
    ],
    quotes: [
      '"Architecture has its political use; publick buildings being the ornament of a country"',
      '"The noblest part of mathematics is geometry"'
    ]
  },

  // Romantic Era
  {
    id: 'byron',
    label: 'Lord Byron',
    type: 'person',
    category: 'Romantic Poets',
    description: 'Romantic poet who embodied rebellion and passion, influencing European culture',
    detailedDescription: 'George Gordon Byron, 6th Baron Byron, became the archetypal Romantic hero through his poetry and scandalous lifestyle. Born with a club foot, he overcame physical disability to become one of Europe\'s most famous poets. His brooding good looks, numerous love affairs, and radical politics made him a celebrity whilst his poetry influenced the Romantic movement across Europe.',
    period: '1788-1824',
    birthYear: 1788,
    deathYear: 1824,
    location: 'London / Venice / Greece',
    significance: 85,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lord_Byron_coloured_drawing.png/400px-Lord_Byron_coloured_drawing.png',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Lord_Byron',
    tags: ['romanticism', 'poetry', 'rebellion', 'byronic-hero', 'greece', 'scandal'],
    relatedConcepts: ['romantic-movement', 'poetic-celebrity', 'cultural-rebellion'],
    keyContributions: [
      'Childe Harold\'s Pilgrimage - established his poetic reputation',
      'Don Juan - satirical epic poem critiquing social conventions',
      'Created the "Byronic hero" literary archetype',
      'Influenced European Romantic movement and nationalism',
      'Supported Greek independence movement, dying for the cause',
      'Pioneered celebrity culture through scandalous public persona',
      'Challenged social conventions through lifestyle and writing'
    ],
    culturalImpact: 'Byron created the template for the tortured, rebellious artist. His influence extended beyond literature to fashion, politics, and social attitudes, inspiring revolutionaries and artists across Europe.',
    modernRelevance: 'The Byronic hero remains influential in literature and popular culture. His celebration of individual passion over social convention anticipates modern artistic rebellion.',
    funFacts: [
      'Born with a club foot which he was very sensitive about',
      'Had numerous love affairs including with married women',
      'Kept a pet bear whilst at Cambridge University',
      'Was bisexual at a time when homosexuality was illegal and punishable by death',
      'Left England permanently in 1816 due to scandals',
      'Died of fever whilst fighting for Greek independence',
      'His body was refused burial in Westminster Abbey due to his "questionable morality"'
    ],
    quotes: [
      '"She walks in beauty, like the night / Of cloudless climes and starry skies"',
      '"The great object of life is sensation"',
      '"Man\'s love is of man\'s life a thing apart; \'Tis woman\'s whole existence"',
      '"There is pleasure in the pathless woods"'
    ]
  },

  // Victorian Era Social Reformers
  {
    id: 'nightingale',
    label: 'Florence Nightingale',
    type: 'person',
    category: 'Victorian Reformers',
    description: 'Founder of modern nursing who revolutionised healthcare and hospital hygiene',
    detailedDescription: 'Florence Nightingale transformed nursing from menial work into a respected profession requiring education and skill. Her work during the Crimean War, where she reduced death rates through improved sanitation, established evidence-based healthcare. Born into a wealthy family, she defied Victorian expectations to pursue her calling, becoming a pioneering statistician and healthcare reformer.',
    period: '1820-1910',
    birthYear: 1820,
    deathYear: 1910,
    location: 'Florence / London / Crimea',
    significance: 87,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg/400px-Florence_Nightingale_%28H_Hering_NPG_x82368%29.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Florence_Nightingale',
    tags: ['nursing', 'healthcare', 'crimean-war', 'statistics', 'sanitation', 'womens-rights'],
    relatedConcepts: ['professional-nursing', 'evidence-based-medicine', 'hospital-reform'],
    keyContributions: [
      'Established nursing as professional discipline requiring training',
      'Reduced Crimean War death rates from 42% to 2% through sanitation',
      'Founded first scientifically-based nursing school at St Thomas\' Hospital',
      'Pioneered use of statistics and data visualisation in healthcare',
      'Reformed British Army medical services and hospital design',
      'Advanced women\'s role in healthcare and professional work',
      'Established principles of evidence-based healthcare practice'
    ],
    culturalImpact: 'Nightingale transformed nursing from domestic service into skilled healthcare profession. Her emphasis on sanitation and statistics revolutionised medical practice and saved countless lives.',
    modernRelevance: 'Modern nursing education and evidence-based healthcare practice follow principles she established. The Nightingale Pledge remains central to nursing ethics.',
    funFacts: [
      'Named after Florence, Italy, where she was born whilst her parents travelled',
      'Refused marriage proposals to pursue her calling in nursing',
      'Invented the polar area diagram (rose diagram) to visualise statistics',
      'Carried a pet owl called Athena in her pocket',
      'First woman elected Fellow of the Statistical Society',
      'Received Order of Merit from King Edward VII - first woman to receive it',
      'Never actually worked as a nurse after returning from Crimea'
    ],
    quotes: [
      '"I attribute my success to this - I never gave or took any excuse"',
      '"Live life when you have it. Life is a splendid gift - there is nothing small about it"',
      '"To understand God\'s thoughts we must study statistics, for these are the measure of His purpose"'
    ]
  },

  {
    id: 'disraeli',
    label: 'Benjamin Disraeli',
    type: 'person',
    category: 'Victorian Statesmen',
    description: 'Conservative Prime Minister and novelist who embodied Victorian political theatre and social reform',
    detailedDescription: 'Benjamin Disraeli was one of the most colourful and influential figures in British politics. Born into a Jewish family but baptised Anglican, he became the first Jewish-born Prime Minister whilst remaining proud of his heritage. A successful novelist before entering politics, he combined literary flair with political genius, championing "One Nation" conservatism that sought to bridge class divides through social reform. His rivalry with Liberal William Gladstone defined an era.',
    period: '1804-1881',
    birthYear: 1804,
    deathYear: 1881,
    location: 'London / Hughenden Manor',
    significance: 88,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Benjamin_Disraeli_by_Cornelius_Jabez_Hughes%2C_1878.jpg/400px-Benjamin_Disraeli_by_Cornelius_Jabez_Hughes%2C_1878.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Benjamin_Disraeli',
    tags: ['politics', 'prime-minister', 'conservative', 'novelist', 'social-reform', 'empire', 'one-nation'],
    relatedConcepts: ['parliamentary-democracy', 'social-reform', 'british-empire', 'political-theatre'],
    keyContributions: [
      'Served as Conservative Prime Minister twice (1868, 1874-1880)',
      'Championed "One Nation" conservatism bridging class divides',
      'Reformed Conservative Party into modern political organisation',
      'Purchased Suez Canal shares securing British influence in Egypt',
      'Granted Queen Victoria title "Empress of India"',
      'Passed social reforms including Public Health Act and Factory Acts',
      'Wrote influential political novels including "Coningsby" and "Sybil"',
      'Established Conservative Party as party of Empire and social reform'
    ],
    culturalImpact: 'Disraeli transformed the Conservative Party from landed gentry into a modern political movement appealing to working classes. His novels influenced political thought whilst his wit and theatrical style made politics entertaining.',
    modernRelevance: 'His "One Nation" conservatism remains influential in modern Conservative thought. His vision of using state power for social reform whilst maintaining traditional institutions resonates in contemporary politics.',
    funFacts: [
      'Started his career £20,000 in debt after failed financial speculation',
      'Wore flamboyant clothes including green velvet trousers and ruffled shirts',
      'His political rival Gladstone said "He was the most remarkable man I have ever met"',
      'Proclaimed "I am not a man, I am an institution!" in Parliament',
      'Queen Victoria preferred him to Gladstone, calling him "full of poetry, romance and chivalry"',
      'His wife Mary Anne was 12 years older and helped finance his political career',
      'Coined the phrase "lies, damned lies, and statistics" (possibly apocryphally)',
      'Rose from outsider status to Earl of Beaconsfield through political brilliance'
    ],
    quotes: [
      '"I have climbed to the top of the greasy pole"',
      '"There are three kinds of lies: lies, damned lies, and statistics"',
      '"The secret of success is constancy to purpose"',
      '"Never complain and never explain"',
      '"Justice is truth in action"',
      '"Little things affect little minds"'
    ]
  },

  // Modern Era Literature
  {
    id: 'woolf',
    label: 'Virginia Woolf',
    type: 'person',
    category: 'Modernist Writers',
    description: 'Modernist novelist who revolutionised literary form and explored consciousness',
    detailedDescription: 'Virginia Woolf pioneered stream-of-consciousness narrative and modernist literary techniques whilst exploring themes of mental health, gender, and sexuality. Born into the intellectual Stephen family, she was central to the Bloomsbury Group of artists and intellectuals. Her novels like "Mrs Dalloway" and "To the Lighthouse" revolutionised fiction whilst her essays advanced feminist literary criticism.',
    period: '1882-1941',
    birthYear: 1882,
    deathYear: 1941,
    location: 'London / Bloomsbury / Sussex',
    significance: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg/400px-George_Charles_Beresford_-_Virginia_Woolf_in_1902_-_Restoration.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Virginia_Woolf',
    tags: ['modernism', 'stream-of-consciousness', 'feminism', 'bloomsbury-group', 'mental-health'],
    relatedConcepts: ['literary-modernism', 'feminist-criticism', 'psychological-realism'],
    keyContributions: [
      'Mrs Dalloway and To the Lighthouse - modernist literary masterpieces',
      'A Room of One\'s Own - foundational feminist literary criticism',
      'Pioneered stream-of-consciousness narrative technique',
      'Co-founded Hogarth Press publishing experimental literature',
      'Advanced understanding of mental health through personal experience',
      'Bloomsbury Group fostered intellectual and artistic innovation',
      'Explored gender, sexuality, and identity in groundbreaking ways'
    ],
    culturalImpact: 'Woolf\'s literary innovations influenced generations of writers whilst her feminist criticism shaped literary studies. Her exploration of mental health reduced stigma and advanced understanding.',
    modernRelevance: 'Her techniques influence contemporary literature whilst her feminist insights remain relevant to gender studies and literary criticism.',
    funFacts: [
      'Sister of art critic Clive Bell and part of the Bloomsbury Group',
      'Suffered from what would now be diagnosed as bipolar disorder',
      'Had romantic relationships with both men and women, notably Vita Sackville-West',
      'Hogarth Press published T.S. Eliot\'s "The Waste Land"',
      'Died by suicide, walking into the River Ouse with stones in her pockets',
      'Her writing desk is preserved at the Monk\'s House in Sussex',
      'Coined the phrase "stream of consciousness" for literary technique'
    ],
    quotes: [
      '"A woman must have money and a room of her own if she is to write fiction"',
      '"For most of history, Anonymous was a woman"',
      '"The mind of man is the most capricious of insects - flitting, fluttering"',
      '"Yet it is in our idleness, in our dreams, that the submerged truth sometimes comes to the top"'
    ]
  },

  {
    id: 'keynes',
    label: 'John Maynard Keynes',
    type: 'person',
    category: 'Economists',
    description: 'Economist who revolutionised economic theory and government policy during the Great Depression',
    detailedDescription: 'John Maynard Keynes transformed economic thinking by arguing that government intervention could stabilise economic cycles. His "General Theory of Employment, Interest and Money" challenged classical economics, arguing that aggregate demand drives employment and economic growth. A member of the Bloomsbury Group, he combined economic brilliance with cultural sophistication.',
    period: '1883-1946',
    birthYear: 1883,
    deathYear: 1946,
    location: 'Cambridge / London',
    significance: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/John_Maynard_Keynes.jpg/400px-John_Maynard_Keynes.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_Maynard_Keynes',
    tags: ['economics', 'keynesian-theory', 'bretton-woods', 'bloomsbury-group', 'government-intervention'],
    relatedConcepts: ['economic-policy', 'government-spending', 'macroeconomics'],
    keyContributions: [
      'General Theory of Employment, Interest and Money - revolutionary economic text',
      'Keynesian economics justifying government intervention in markets',
      'Bretton Woods Conference architect creating post-war economic order',
      'Economic Consequences of the Peace predicting WWII after harsh WWI treaties',
      'Championed full employment as achievable government policy goal',
      'Arts Council founding chairman promoting government cultural funding',
      'International Monetary Fund and World Bank institutional design'
    ],
    culturalImpact: 'Keynesian economics dominated policy-making for decades, justifying government spending on welfare states and public investment. His ideas shaped modern macroeconomic policy.',
    modernRelevance: 'Keynesian economics resurged after 2008 financial crisis. Government stimulus packages follow his prescriptions for economic downturns.',
    funFacts: [
      'Member of Bloomsbury Group alongside Virginia Woolf and E.M. Forster',
      'Made fortune speculating in currencies and commodities',
      'Married Russian ballerina Lydia Lopokova despite being predominantly gay',
      'Founded Arts Council of Great Britain promoting government arts funding',
      'Died of heart attack day after Bretton Woods negotiations concluded',
      'Cambridge college room was above the room where Newton lived',
      'Collected rare books and art, building significant cultural collections'
    ],
    quotes: [
      '"In the long run we are all dead"',
      '"The difficulty lies not so much in developing new ideas as in escaping from old ones"',
      '"Markets can remain irrational longer than you can remain solvent"',
      '"Ideas shape the course of history"'
    ]
  },

  // Industrial Era Engineers
  {
    id: 'brunel',
    label: 'Isambard Kingdom Brunel',
    type: 'person',
    category: 'Victorian Engineers',
    description: 'Engineering genius who revolutionised transport through railways, bridges, and steamships',
    detailedDescription: 'Isambard Kingdom Brunel embodied Victorian engineering ambition and innovation. Born into an engineering dynasty, he transformed British transport through audacious projects that seemed impossible. His Great Western Railway, Clifton Suspension Bridge, and revolutionary steamships pushed engineering boundaries whilst his theatrical personality made him a celebrity. He died exhausted at 53, having built the infrastructure that powered the British Empire.',
    period: '1806-1859',
    birthYear: 1806,
    deathYear: 1859,
    location: 'Portsmouth / London / Bristol',
    significance: 93,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/IKBrunelChains.jpg/400px-IKBrunelChains.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Isambard_Kingdom_Brunel',
    tags: ['engineering', 'railways', 'steamships', 'bridges', 'victorian', 'innovation', 'infrastructure'],
    relatedConcepts: ['industrial-revolution', 'transport-revolution', 'engineering-excellence'],
    keyContributions: [
      'Great Western Railway - Britain\'s finest railway with gentle gradients and broad gauge',
      'SS Great Britain - first iron ocean-going ship with screw propeller',
      'SS Great Eastern - largest ship in the world for 40 years',
      'Clifton Suspension Bridge - iconic engineering feat spanning Avon Gorge',
      'Box Tunnel - longest railway tunnel in world at time of construction',
      'Paddington Station - revolutionary train shed design with iron and glass',
      'Thames Tunnel - first underwater tunnel using revolutionary shield method',
      'Pioneered modern project management and systematic engineering approaches'
    ],
    culturalImpact: 'Brunel became the archetypal Victorian engineer-hero, embodying British technical supremacy and imperial ambition. His projects connected Britain to the world whilst his methods influenced global engineering practice.',
    modernRelevance: 'His engineering principles remain standard practice. The Great Western Railway route is still major transport artery. His ships anticipated modern vessel design whilst his project management methods predate modern techniques.',
    funFacts: [
      'Always seen smoking cigars - reportedly got through 40 per day',
      'Only 5\'4" tall but commanded enormous presence on construction sites',
      'Survived being trapped underwater in Thames Tunnel flooding',
      'His father Marc built the Thames Tunnel using the world\'s first tunnelling shield',
      'Designed a prefabricated hospital shipped to Crimean War in flat-pack form',
      'His broad gauge railway was technically superior but lost the "gauge war"',
      'Died while SS Great Eastern was being completed - his stress and overwork contributed',
      'Nicknamed "Little Giant" by his workforce who adored his hands-on leadership style'
    ],
    quotes: [
      '"I am opposed to the laying down of rules or conditions to be observed in the construction of bridges lest the progress of improvement tomorrow might be embarrassed"',
      '"The mechanic should sit down among levers, screws, wedges, wheels, etc. like a poet among the letters of the alphabet"',
      '"I have always been opposed to the system of making many drawings"'
    ]
  },

  {
    id: 'watt',
    label: 'James Watt',
    type: 'person',
    category: 'Industrial Pioneers',
    description: 'Inventor who perfected the steam engine and triggered the Industrial Revolution',
    detailedDescription: 'James Watt\'s improvements to the steam engine provided the mechanical foundation for the Industrial Revolution. Born in Greenock, Scotland, this mathematical instrument maker transformed Thomas Newcomen\'s crude steam engine into an efficient power source that revolutionised manufacturing, transport, and mining. His separate condenser and rotary motion innovations made steam power practical for industry, whilst his business partnership with Matthew Boulton created the world\'s first engineering consultancy.',
    period: '1736-1819',
    birthYear: 1736,
    deathYear: 1819,
    location: 'Greenock / Birmingham',
    significance: 89,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/James_Watt_by_Henry_Howard.jpg/400px-James_Watt_by_Henry_Howard.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/James_Watt',
    tags: ['steam-engine', 'industrial-revolution', 'invention', 'engineering', 'scottish', 'manufacturing'],
    relatedConcepts: ['industrial-revolution', 'mechanical-engineering', 'technological-innovation'],
    keyContributions: [
      'Separate condenser - made steam engines four times more efficient',
      'Rotary motion steam engine - enabled factory machinery operation',
      'Concept of horsepower - still used to measure engine power',
      'Steam engine governor - automatic speed control system',
      'Parallel motion linkage - revolutionary mechanical movement',
      'Founded engineering consultancy with Matthew Boulton',
      'Surveyed routes for canals across Scotland and England',
      'Over 100 patents for mechanical innovations'
    ],
    culturalImpact: 'Watt\'s steam engine powered the Industrial Revolution, transforming Britain from agricultural to manufacturing economy. His name became synonymous with power (the watt unit), whilst his innovations enabled mass production and modern factory systems.',
    modernRelevance: 'The watt remains the standard unit of power worldwide. His engineering principles influence modern mechanical design whilst his systematic approach to innovation established industrial R&D practices.',
    funFacts: [
      'The SI unit of power "watt" is named after him',
      'Allegedly conceived the separate condenser whilst walking on Glasgow Green',
      'Member of the Lunar Society - influential group of scientists and inventors',
      'Coined the term "horsepower" by comparing his engines to horses',
      'His workshop was preserved exactly as he left it and moved to London\'s Science Museum',
      'Refused many honours but accepted fellowship of Royal Society of Edinburgh',
      'His improvements increased steam engine efficiency from 1% to 3%',
      'Business partner Matthew Boulton said "We sell here, sir, what all the world desires - POWER"'
    ],
    quotes: [
      '"Nature can be conquered, if we can but find out her weak side"',
      '"I can think of nothing else but this machine"',
      '"Of all things in nature, I like water best"'
    ]
  },

  // Modern Cultural Icons
  {
    id: 'lennon',
    label: 'John Lennon',
    type: 'person',
    category: 'Modern Musicians',
    description: 'Beatles member who helped lead the British Invasion and became global peace activist',
    detailedDescription: 'John Winston Ono Lennon transformed popular music and culture as co-founder of The Beatles, the most successful band in history. Born in wartime Liverpool, his songwriting partnership with Paul McCartney created the soundtrack to the 1960s cultural revolution. Beyond music, Lennon became a peace activist, using his fame to promote non-violence and social change. His solo career continued pushing boundaries until his tragic assassination in 1980.',
    period: '1940-1980',
    birthYear: 1940,
    deathYear: 1980,
    location: 'Liverpool / London / New York',
    significance: 92,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/John_Lennon_1969_%28cropped%29.jpg/400px-John_Lennon_1969_%28cropped%29.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/John_Lennon',
    tags: ['beatles', 'music', 'cultural-revolution', 'peace-activism', 'liverpool', 'songwriting'],
    relatedConcepts: ['british-invasion', 'popular-music', 'cultural-export', 'youth-culture'],
    keyContributions: [
      'Co-founded The Beatles - most successful and influential band in history',
      'Lennon-McCartney songwriting partnership created pop music template',
      'Led British Invasion bringing UK music to global dominance',
      '"Imagine" - iconic peace anthem promoting unity and understanding',
      'Album "Sgt. Pepper\'s" revolutionised recording techniques and concept albums',
      'Pioneered studio experimentation and avant-garde musical techniques',
      'Used celebrity platform for peace activism and social commentary',
      'Helped establish popular music as serious artistic medium'
    ],
    culturalImpact: 'Lennon and The Beatles made Britain the global centre of popular music, establishing British cultural influence that continues today. They transformed youth culture, fashion, and social attitudes whilst proving British artists could conquer America.',
    modernRelevance: 'The Beatles remain the best-selling band ever. Lennon\'s peace message resonates in contemporary activism whilst Liverpool embraces its Beatles heritage as cultural tourism destination.',
    funFacts: [
      'Born during Nazi air raid on Liverpool in 1940',
      'Expelled from art college but met future Beatles members there',
      'The Beatles were bigger than Elvis - first British band to conquer America',
      'His iconic round glasses were inspired by character in play "How I Won the War"',
      'Staged "Bed-Ins for Peace" with Yoko Ono in Amsterdam and Montreal',
      'Returned MBE in protest against British involvement in Vietnam War',
      'Last Beatles song "I Me Mine" was recorded without him',
      'Shot by obsessed fan outside Dakota Building in New York, age 40'
    ],
    quotes: [
      '"Imagine all the people living life in peace"',
      '"Life is what happens while you\'re busy making other plans"',
      '"All you need is love"',
      '"A dream you dream alone is only a dream. A dream you dream together is reality"',
      '"We\'re more popular than Jesus now"'
    ]
  },

  // Naval Heroes
  {
    id: 'nelson',
    label: 'Horatio Nelson',
    type: 'person',
    category: 'Naval Heroes',
    description: 'Admiral who established British naval supremacy and embodied the spirit of naval heroism',
    detailedDescription: 'Vice-Admiral Horatio Nelson became Britain\'s greatest naval hero through tactical brilliance, personal courage, and inspirational leadership. Born a Norfolk parson\'s son, he rose through merit to command the Royal Navy\'s most famous victories. His innovative tactics at Trafalgar secured British naval dominance for a century whilst his death in the moment of victory created the ultimate heroic narrative. Nelson embodied British naval values: duty, honour, and service before self.',
    period: '1758-1805',
    birthYear: 1758,
    deathYear: 1805,
    location: 'Norfolk / Mediterranean / Trafalgar',
    significance: 91,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Horatio_Nelson%2C_1st_Viscount_Nelson_by_Lemuel_Francis_Abbott.jpg/400px-Horatio_Nelson%2C_1st_Viscount_Nelson_by_Lemuel_Francis_Abbott.jpg',
    wikipediaUrl: 'https://en.wikipedia.org/wiki/Horatio_Nelson%2C_1st_Viscount_Nelson',
    tags: ['navy', 'trafalgar', 'naval-supremacy', 'heroism', 'leadership', 'tactics', 'napoleonic-wars'],
    relatedConcepts: ['british-navy', 'naval-tradition', 'heroic-leadership', 'national-defence'],
    keyContributions: [
      'Battle of Trafalgar (1805) - decisive victory establishing century of British naval dominance',
      'Battle of the Nile (1798) - destroyed French fleet in Egyptian campaign',
      'Copenhagen (1801) - neutralised Danish fleet with famous "blind eye" signal',
      'Revolutionary naval tactics breaking traditional line-of-battle formations',
      'Created doctrine of aggressive close combat and decisive victory',
      'Established British naval supremacy enabling global empire and trade',
      'Signal "England expects that every man will do his duty" became national motto',
      'Transformed naval leadership through personal example and inspirational command'
    ],
    culturalImpact: 'Nelson created the template for British naval heroism and national service. His combination of tactical genius, personal courage, and dramatic death made him the ultimate British hero, inspiring generations of naval officers.',
    modernRelevance: 'Royal Navy traditions trace directly to Nelson. His leadership principles are studied in military academies worldwide. Trafalgar Square and HMS Victory preserve his memory as embodiment of British naval heritage.',
    funFacts: [
      'Lost right eye in Corsica (1794) and right arm at Tenerife (1797)',
      'Famous for ignoring orders - "I have only one eye, I have a right to be blind sometimes"',
      'Had passionate affair with Lady Emma Hamilton whilst she was married',
      'His body was preserved in brandy for the voyage home after Trafalgar',
      'Only 5\'4" tall but commanded absolute loyalty from his sailors',
      'Invented the "Nelson Touch" - innovative battle tactics confusing enemies',
      'His signal at Trafalgar was originally "England confides..." but changed to "expects"',
      'Funeral was massive state occasion with 32 admirals as pallbearers'
    ],
    quotes: [
      '"England expects that every man will do his duty"',
      '"I have only one eye, I have a right to be blind sometimes"',
      '"No captain can do very wrong if he places his ship alongside that of the enemy"',
      '"First gain the victory and then make the best use of it you can"',
      '"Thank God I have done my duty"' // his dying words
    ]
  },

  // Literary Masters
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
  },

  // Freedom of Speech relationships
  {
    id: 'milton-freedom-of-speech',
    source: 'milton',
    target: 'freedom-of-speech',
    relationship: 'founded',
    description: 'Milton\'s Areopagitica established the philosophical foundation for press freedom and free speech',
    strength: 10,
    type: 'developed',
    period: '1644',
    evidence: ['Areopagitica pamphlet', 'Anti-licensing arguments', 'Marketplace of ideas concept']
  },
  {
    id: 'orwell-freedom-of-speech',
    source: 'orwell',
    target: 'freedom-of-speech',
    relationship: 'defended',
    description: 'Orwell\'s works warned against threats to free speech and thought, defining modern understanding of censorship',
    strength: 9,
    type: 'influenced',
    period: '1930-1950',
    evidence: ['1984 dystopian warnings', 'Animal Farm allegory', 'Political essays on language']
  },
  {
    id: 'alfred-freedom-of-speech',
    source: 'alfred-great',
    target: 'freedom-of-speech',
    relationship: 'laid-groundwork',
    description: 'Alfred\'s legal reforms and emphasis on education created foundations for later development of free speech',
    strength: 6,
    type: 'influenced',
    period: '880-899',
    evidence: ['Legal codification', 'Educational reforms', 'Anglo-Saxon Chronicle']
  },
  {
    id: 'parliament-freedom-of-speech',
    source: 'parliament',
    target: 'freedom-of-speech',
    relationship: 'institutionalised',
    description: 'Parliamentary privilege and procedures created legal protections for free speech in governance',
    strength: 8,
    type: 'institutionalized',
    period: '1066-present',
    evidence: ['Parliamentary privilege', 'Freedom of debate', 'Loyal opposition concept']
  },
  {
    id: 'bbc-freedom-of-speech',
    source: 'bbc',
    target: 'freedom-of-speech',
    relationship: 'embodied',
    description: 'BBC\'s editorial independence and public service mandate exemplified press freedom principles',
    strength: 7,
    type: 'embodied',
    period: '1922-present',
    evidence: ['Editorial independence', 'Impartial broadcasting', 'Reith principles']
  },
  {
    id: 'milton-orwell',
    source: 'milton',
    target: 'orwell',
    relationship: 'influenced',
    description: 'Milton\'s arguments against censorship influenced Orwell\'s understanding of freedom and tyranny',
    strength: 7,
    type: 'influenced',
    period: '1930-1950',
    evidence: ['Anti-censorship themes', 'Defence of free thought', 'Warnings against authority']
  },
  {
    id: 'shakespeare-milton',
    source: 'shakespeare',
    target: 'milton',
    relationship: 'influenced',
    description: 'Shakespeare\'s literary techniques and exploration of power influenced Milton\'s epic poetry',
    strength: 6,
    type: 'influenced',
    period: '1608-1674',
    evidence: ['Literary techniques', 'Exploration of authority', 'Poetic innovation']
  },
  {
    id: 'common-law-freedom-of-speech',
    source: 'common-law',
    target: 'freedom-of-speech',
    relationship: 'protected',
    description: 'Common law traditions created legal precedents protecting speech and preventing prior restraint',
    strength: 8,
    type: 'developed',
    period: '1066-present',
    evidence: ['Legal precedents', 'Anti-censorship cases', 'Prior restraint doctrine']
  },

  // New relationships for added historical figures
  {
    id: 'william-conqueror-common-law',
    source: 'william-conqueror',
    target: 'common-law',
    relationship: 'established',
    description: 'William\'s conquest established Norman legal traditions that merged with Anglo-Saxon law to create common law',
    strength: 9,
    type: 'developed',
    period: '1066-1100',
    evidence: ['Norman legal procedures', 'Royal courts establishment', 'Legal system integration']
  },

  {
    id: 'william-conqueror-alfred-great',
    source: 'william-conqueror',
    target: 'alfred-great',
    relationship: 'built-upon',
    description: 'William\'s legal and administrative systems built upon foundations laid by Alfred the Great',
    strength: 7,
    type: 'developed',
    period: '1066',
    evidence: ['Anglo-Saxon legal traditions', 'Administrative continuity', 'Cultural synthesis']
  },

  {
    id: 'henry-viii-elizabeth-i',
    source: 'henry-viii',
    target: 'elizabeth-i',
    relationship: 'enabled',
    description: 'Henry\'s break with Rome and establishment of Church of England enabled Elizabeth\'s religious settlement',
    strength: 8,
    type: 'influenced',
    period: '1534-1603',
    evidence: ['Religious inheritance', 'Royal supremacy', 'Protestant establishment']
  },

  {
    id: 'henry-viii-parliament',
    source: 'henry-viii',
    target: 'parliament',
    relationship: 'strengthened',
    description: 'Henry used Parliament to legitimise his break with Rome, strengthening parliamentary authority',
    strength: 7,
    type: 'institutionalized',
    period: '1529-1547',
    evidence: ['Reformation Parliament', 'Act of Supremacy', 'Parliamentary legislation']
  },

  {
    id: 'wren-newton',
    source: 'wren',
    target: 'newton',
    relationship: 'collaborated',
    description: 'Wren and Newton were founding members of the Royal Society and scientific collaborators',
    strength: 8,
    type: 'influenced',
    period: '1660-1723',
    evidence: ['Royal Society founding', 'Scientific correspondence', 'Mathematical architecture']
  },

  {
    id: 'wren-royal-society',
    source: 'wren',
    target: 'royal-society',
    relationship: 'founded',
    description: 'Wren was a founding member of the Royal Society alongside Newton and other scientists',
    strength: 9,
    type: 'created',
    period: '1660',
    evidence: ['Founding membership', 'Scientific meetings', 'Architectural and scientific synthesis']
  },

  {
    id: 'byron-british-humour',
    source: 'byron',
    target: 'british-humour',
    relationship: 'influenced',
    description: 'Byron\'s satirical wit and irreverent social commentary enriched British humorous tradition',
    strength: 6,
    type: 'influenced',
    period: '1810-1824',
    evidence: ['Satirical poetry', 'Social comedy', 'Irreverent wit']
  },

  {
    id: 'byron-shakespeare',
    source: 'byron',
    target: 'shakespeare',
    relationship: 'inspired-by',
    description: 'Byron drew inspiration from Shakespeare\'s dramatic characters and psychological complexity',
    strength: 7,
    type: 'influenced',
    period: '1810-1824',
    evidence: ['Literary techniques', 'Character development', 'Dramatic psychology']
  },

  {
    id: 'nightingale-statistics',
    source: 'nightingale',
    target: 'royal-society',
    relationship: 'advanced',
    description: 'Nightingale\'s pioneering use of statistics and data visualisation influenced scientific methodology',
    strength: 6,
    type: 'influenced',
    period: '1850-1910',
    evidence: ['Statistical innovation', 'Data visualisation', 'Evidence-based practice']
  },

  {
    id: 'woolf-keynes',
    source: 'woolf',
    target: 'keynes',
    relationship: 'collaborated',
    description: 'Woolf and Keynes were both central members of the Bloomsbury Group of intellectuals',
    strength: 7,
    type: 'influenced',
    period: '1905-1941',
    evidence: ['Bloomsbury Group', 'Intellectual collaboration', 'Cultural innovation']
  },

  {
    id: 'woolf-shakespeare',
    source: 'woolf',
    target: 'shakespeare',
    relationship: 'reinterpreted',
    description: 'Woolf\'s modernist techniques reinterpreted Shakespearean psychological complexity for modern literature',
    strength: 6,
    type: 'influenced',
    period: '1920-1941',
    evidence: ['Literary modernism', 'Psychological realism', 'Character consciousness']
  },

  {
    id: 'keynes-cambridge',
    source: 'keynes',
    target: 'cambridge-university',
    relationship: 'studied-and-taught',
    description: 'Keynes studied and taught at Cambridge, revolutionising economic theory there',
    strength: 9,
    type: 'embodied',
    period: '1902-1946',
    evidence: ['King\'s College fellowship', 'Economic teaching', 'Academic innovation']
  },

  {
    id: 'keynes-economic-policy',
    source: 'keynes',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Keynesian economic theory fundamentally influenced British government economic policy',
    strength: 8,
    type: 'influenced',
    period: '1930-1970s',
    evidence: ['Government spending', 'Economic policy', 'Welfare state']
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
    id: 'wren-architecture',
    source: 'wren',
    target: 'oxford-university',
    relationship: 'designed',
    description: 'Wren designed the Sheldonian Theatre at Oxford, combining scientific and architectural innovation',
    strength: 7,
    type: 'created',
    period: '1664-1669',
    evidence: ['Sheldonian Theatre', 'Architectural innovation', 'Mathematical design']
  },

  {
    id: 'nightingale-social-reform',
    source: 'nightingale',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Nightingale\'s healthcare reforms influenced parliamentary legislation on public health and military medicine',
    strength: 7,
    type: 'influenced',
    period: '1860-1910',
    evidence: ['Public Health Acts', 'Military medical reform', 'Hospital regulation']
  },

  // Benjamin Disraeli relationships
  {
    id: 'disraeli-parliament',
    source: 'disraeli',
    target: 'parliament',
    relationship: 'served-and-reformed',
    description: 'Disraeli served as PM twice and transformed Parliament through theatrical politics and Conservative modernisation',
    strength: 9,
    type: 'institutionalized',
    period: '1837-1881',
    evidence: ['Prime Minister twice', 'Parliamentary oratory', 'Conservative Party reform', 'Political theatre']
  },

  {
    id: 'disraeli-british-humour',
    source: 'disraeli',
    target: 'british-humour',
    relationship: 'exemplified',
    description: 'Disraeli\'s legendary wit and theatrical parliamentary performances epitomised British political humour',
    strength: 8,
    type: 'embodied',
    period: '1837-1881',
    evidence: ['Parliamentary wit', 'Political one-liners', 'Theatrical oratory', 'Literary satire']
  },

  {
    id: 'disraeli-churchill',
    source: 'disraeli',
    target: 'churchill',
    relationship: 'influenced',
    description: 'Disraeli\'s political theatricality and oratorical style influenced Churchill\'s parliamentary approach',
    strength: 6,
    type: 'influenced',
    period: '1804-1965',
    evidence: ['Parliamentary oratory', 'Political wit', 'Conservative leadership', 'Imperial vision']
  },

  {
    id: 'disraeli-dickens',
    source: 'disraeli',
    target: 'dickens',
    relationship: 'paralleled',
    description: 'Both Disraeli and Dickens used novels to promote social reform and highlight Victorian social issues',
    strength: 7,
    type: 'influenced',
    period: '1830-1881',
    evidence: ['Social novels', 'Political reform', 'Class consciousness', 'Victorian social commentary']
  },

  {
    id: 'burns-disraeli',
    source: 'burns',
    target: 'disraeli',
    relationship: 'inspired',
    description: 'Burns\' celebration of common humanity influenced Disraeli\'s "One Nation" approach to bridging class divides',
    strength: 5,
    type: 'influenced',
    period: '1804-1881',
    evidence: ['Democratic ideals', 'Cross-class appeal', 'Social unity', 'Popular politics']
  },

  // Brunel relationships
  {
    id: 'brunel-parliament',
    source: 'brunel',
    target: 'parliament',
    relationship: 'served',
    description: 'Brunel\'s engineering projects required parliamentary approval and government backing, demonstrating state support for innovation',
    strength: 6,
    type: 'institutionalized',
    period: '1830-1859',
    evidence: ['Railway Acts', 'Government contracts', 'Public-private partnerships', 'Infrastructure investment']
  },

  {
    id: 'brunel-fair-play',
    source: 'brunel',
    target: 'fair-play',
    relationship: 'embodied',
    description: 'Brunel\'s engineering ethics and treatment of workers demonstrated Victorian ideals of fair dealing and meritocracy',
    strength: 7,
    type: 'embodied',
    period: '1830-1859',
    evidence: ['Worker safety innovations', 'Merit-based promotion', 'Engineering ethics', 'Fair contracting']
  },

  {
    id: 'brunel-british-humour',
    source: 'brunel',
    target: 'british-humour',
    relationship: 'contributed',
    description: 'Brunel\'s theatrical personality and witty responses to engineering challenges enriched British engineering culture with humour',
    strength: 5,
    type: 'influenced',
    period: '1830-1859',
    evidence: ['Engineering wit', 'Dramatic presentations', 'Self-deprecating remarks about failures', 'Theatrical personality']
  },

  {
    id: 'wren-brunel',
    source: 'wren',
    target: 'brunel',
    relationship: 'influenced',
    description: 'Wren\'s mathematical approach to architecture and large-scale project management influenced Brunel\'s engineering methods',
    strength: 6,
    type: 'influenced',
    period: '1806-1859',
    evidence: ['Mathematical engineering', 'Project management', 'Systematic approaches', 'Large-scale construction']
  },

  // Nelson relationships
  {
    id: 'nelson-fair-play',
    source: 'nelson',
    target: 'fair-play',
    relationship: 'exemplified',
    description: 'Nelson\'s naval tactics and treatment of enemies embodied British ideals of fair play and honourable conduct in warfare',
    strength: 8,
    type: 'embodied',
    period: '1770-1805',
    evidence: ['Honourable conduct in battle', 'Treatment of prisoners', 'Naval traditions', 'Chivalric values']
  },

  {
    id: 'nelson-churchill',
    source: 'nelson',
    target: 'churchill',
    relationship: 'inspired',
    description: 'Nelson\'s heroic leadership and stirring signals inspired Churchill\'s wartime oratory and leadership style',
    strength: 7,
    type: 'influenced',
    period: '1940-1945',
    evidence: ['Leadership inspiration', 'Naval tradition', 'Heroic example', 'Inspirational communication']
  },

  {
    id: 'nelson-parliament',
    source: 'nelson',
    target: 'parliament',
    relationship: 'served',
    description: 'Nelson served Parliament and Crown through naval command, demonstrating military service to democratic institutions',
    strength: 7,
    type: 'institutionalized',
    period: '1770-1805',
    evidence: ['Naval service', 'Parliamentary support', 'National defence', 'Democratic values']
  },

  {
    id: 'nelson-british-humour',
    source: 'nelson',
    target: 'british-humour',
    relationship: 'contributed',
    description: 'Nelson\'s famous signal phrases and naval wit contributed to British tradition of understatement and dry humour',
    strength: 6,
    type: 'influenced',
    period: '1770-1805',
    evidence: ['Naval wit', 'Famous signals', 'Understatement', 'British phlegm']
  },

  {
    id: 'elizabeth-i-nelson',
    source: 'elizabeth-i',
    target: 'nelson',
    relationship: 'inspired',
    description: 'Elizabeth\'s naval tradition and defeat of Spanish Armada established precedent for Nelson\'s naval supremacy',
    strength: 6,
    type: 'influenced',
    period: '1588-1805',
    evidence: ['Naval tradition', 'Spanish precedent', 'Maritime heritage', 'National defence']
  },

  {
    id: 'henry-viii-nelson',
    source: 'henry-viii',
    target: 'nelson',
    relationship: 'enabled',
    description: 'Henry VIII\'s creation of Royal Navy provided institutional foundation for Nelson\'s later naval achievements',
    strength: 7,
    type: 'influenced',
    period: '1509-1805',
    evidence: ['Royal Navy foundation', 'Naval infrastructure', 'Maritime power', 'Naval tradition']
  },

  // James Watt relationships
  {
    id: 'watt-brunel',
    source: 'watt',
    target: 'brunel',
    relationship: 'enabled',
    description: 'Watt\'s steam engine innovations provided the power source that made Brunel\'s railways and steamships possible',
    strength: 9,
    type: 'influenced',
    period: '1769-1859',
    evidence: ['Steam locomotion', 'Railway power', 'Steamship propulsion', 'Industrial mechanisation']
  },

  {
    id: 'watt-parliament',
    source: 'watt',
    target: 'parliament',
    relationship: 'influenced',
    description: 'Watt\'s industrial innovations drove parliamentary legislation on patents, trade, and industrial development',
    strength: 6,
    type: 'influenced',
    period: '1760-1820',
    evidence: ['Patent legislation', 'Industrial policy', 'Trade regulations', 'Economic transformation']
  },

  {
    id: 'smith-watt',
    source: 'smith',
    target: 'watt',
    relationship: 'paralleled',
    description: 'Smith\'s economic theories and Watt\'s mechanical innovations both drove the Industrial Revolution transformation',
    strength: 7,
    type: 'influenced',
    period: '1760-1790',
    evidence: ['Industrial Revolution', 'Economic transformation', 'Technological innovation', 'Scottish Enlightenment']
  },

  // John Lennon relationships
  {
    id: 'lennon-british-humour',
    source: 'lennon',
    target: 'british-humour',
    relationship: 'embodied',
    description: 'Lennon\'s wit, irreverence, and satirical lyrics exemplified Liverpudlian and British humorous traditions',
    strength: 7,
    type: 'embodied',
    period: '1960-1980',
    evidence: ['Witty interviews', 'Satirical songs', 'Press conferences', 'British irreverence']
  },

  {
    id: 'lennon-bbc',
    source: 'lennon',
    target: 'bbc',
    relationship: 'transformed',
    description: 'The Beatles\' relationship with BBC helped transform popular music broadcasting and youth programming',
    strength: 8,
    type: 'influenced',
    period: '1962-1970',
    evidence: ['Radio sessions', 'Top of the Pops', 'Youth programming', 'Popular music broadcasting']
  },

  {
    id: 'shakespeare-lennon',
    source: 'shakespeare',
    target: 'lennon',
    relationship: 'influenced',
    description: 'Lennon acknowledged Shakespeare\'s influence on his wordplay and lyrical creativity',
    strength: 5,
    type: 'influenced',
    period: '1960-1980',
    evidence: ['Literary influences', 'Wordplay techniques', 'Lyrical complexity', 'Cultural references']
  },

  {
    id: 'burns-lennon',
    source: 'burns',
    target: 'lennon',
    relationship: 'inspired',
    description: 'Burns\' celebration of common people and democratic ideals influenced Lennon\'s peace activism and social consciousness',
    strength: 6,
    type: 'influenced',
    period: '1960-1980',
    evidence: ['Social consciousness', 'Peace activism', 'Common humanity themes', 'Anti-establishment messages']
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