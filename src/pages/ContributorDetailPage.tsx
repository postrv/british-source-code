import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContributorDetailPage = () => {
  const { id } = useParams()

  // Mock data - in a real app this would come from an API or data store
  const contributorData: Record<string, any> = {
    'alfred-great': {
      name: 'Alfred the Great',
      period: '849-899',
      role: 'Legal & Educational Architect',
      description: 'The only English monarch to earn the title "Great", Alfred laid the foundations of English education, legal system, and cultural preservation.',
      contributions: [
        'Established first English schools and promoted widespread literacy',
        'Created comprehensive legal code forming basis of common law',
        'Founded the Anglo-Saxon Chronicle documenting English history',
        'Translated essential Latin works into accessible Old English'
      ]
    },
    'william-conqueror': {
      name: 'William the Conqueror',
      period: '1028-1087',
      role: 'Norman Conquest Leader',
      description: 'Norman Duke who conquered England in 1066, fundamentally transforming English culture, language, and society through the introduction of Norman French influence.',
      contributions: [
        'Norman Conquest of 1066 - transformative moment in English history',
        'Introduced Norman French vocabulary into English language',
        'Established feudal system in England with systematic land grants',
        'Commissioned Domesday Book - comprehensive survey of England',
        'Built network of Norman castles establishing royal control',
        'Transformed English aristocracy and administrative systems'
      ]
    },
    chaucer: {
      name: 'Geoffrey Chaucer',
      period: '1340s-1400',
      role: 'Father of English Literature',
      description: 'Chaucer revolutionised literature by writing in Middle English, making stories accessible to common folk whilst providing sharp social commentary.',
      contributions: [
        'The Canterbury Tales - masterpiece of character-driven storytelling',
        'Established English as worthy language for serious literature',
        'Created realistic portraits spanning all social classes',
        'Pioneered satirical tradition in English writing'
      ]
    },
    'henry-viii': {
      name: 'Henry VIII',
      period: '1491-1547',
      role: 'Religious Reformation King',
      description: 'Tudor monarch whose break with Rome transformed English religion, culture, and royal power, establishing the Church of England and fundamentally altering British identity.',
      contributions: [
        'Established Church of England as separate from Roman Catholicism',
        'Act of Supremacy (1534) made English monarch head of English church',
        'Dissolution of Monasteries redistributed vast wealth and land',
        'Strengthened royal power and centralised government administration',
        'Patronised Renaissance arts bringing Continental culture to England',
        'Built powerful navy laying foundation for English maritime dominance'
      ]
    },
    shakespeare: {
      name: 'William Shakespeare',
      period: '1564-1616',
      role: 'Core Language Architect',
      description: 'The Bard transformed English into a world language with universal human insights.',
      contributions: [
        '37 plays that defined dramatic structure',
        '154 sonnets exploring human nature',
        'Added ~1,700 words to English vocabulary',
        'Created timeless character archetypes'
      ]
    },
    'elizabeth-i': {
      name: 'Elizabeth I',
      period: '1533-1603',
      role: 'Renaissance Enabler',
      description: 'The Virgin Queen presided over England\'s Golden Age, fostering arts, literature, and national confidence that established Britain as a cultural powerhouse.',
      contributions: [
        'Patronised Shakespeare, Marlowe, and other literary giants',
        'Defeated Spanish Armada establishing English naval supremacy',
        'Created religious settlement ending decades of turmoil',
        'Inspired era of exploration, art, and intellectual achievement'
      ]
    },
    'wren': {
      name: 'Christopher Wren',
      period: '1632-1723',
      role: 'Architectural Visionary',
      description: 'Architect who rebuilt London after the Great Fire of 1666, designing St Paul\'s Cathedral and 51 city churches, creating a distinctly British architectural language.',
      contributions: [
        'St Paul\'s Cathedral - masterpiece of English baroque architecture',
        'Designed 51 City of London churches after Great Fire of 1666',
        'Royal Observatory Greenwich establishing Britain\'s naval supremacy',
        'Founded Royal Society alongside Newton and other scientists',
        'Pioneered mathematical approach to architectural engineering',
        'Trinity College Library Cambridge and Sheldonian Theatre Oxford'
      ]
    },
    newton: {
      name: 'Isaac Newton',
      period: '1643-1727',
      role: 'Physics Framework Developer',
      description: 'Revolutionised understanding of the universe through mathematical principles.',
      contributions: [
        'Laws of motion and universal gravitation',
        'Invented calculus (independently)',
        'Groundbreaking work in optics',
        'Established scientific method principles'
      ]
    },
    darwin: {
      name: 'Charles Darwin',
      period: '1809-1882',
      role: 'Evolution Algorithm Creator',
      description: 'Transformed humanity\'s understanding of life through meticulous observation and revolutionary thinking.',
      contributions: [
        'Theory of evolution by natural selection',
        'The Origin of Species - scientific masterpiece',
        'Voyage of the Beagle observations',
        'Established modern evolutionary biology'
      ]
    },
    'byron': {
      name: 'Lord Byron',
      period: '1788-1824',
      role: 'Romantic Rebel Poet',
      description: 'Romantic poet who embodied rebellion and passion, creating the "Byronic hero" archetype whilst influencing European culture and challenging social conventions.',
      contributions: [
        'Childe Harold\'s Pilgrimage - established his poetic reputation',
        'Don Juan - satirical epic poem critiquing social conventions',
        'Created the "Byronic hero" literary archetype',
        'Influenced European Romantic movement and nationalism',
        'Supported Greek independence movement, dying for the cause',
        'Pioneered celebrity culture through scandalous public persona'
      ]
    },
    austen: {
      name: 'Jane Austen',
      period: '1775-1817',
      role: 'Social Commentary Specialist',
      description: 'Perfected the art of social satire, creating witty observations of society that established the template for British comedy.',
      contributions: [
        'Pride and Prejudice - masterpiece of social comedy',
        'Perfected the novel of manners with psychological depth',
        'Created memorable characters like Elizabeth Bennet',
        'Established British tradition of gentle but pointed social criticism'
      ]
    },
    'dickens': {
      name: 'Charles Dickens',
      period: '1812-1870',
      role: 'Social Reform Catalyst',
      description: 'Used literature as a weapon for social justice, exposing Victorian society\'s inequalities whilst creating unforgettable characters.',
      contributions: [
        'A Christmas Carol - transformed Christmas into celebration of generosity',
        'Oliver Twist - exposed brutal child labour conditions',
        'Hard Times - critiqued industrial capitalism\'s human cost',
        'Pioneered serialised novel publication reaching working classes'
      ]
    },
    'nelson': {
      name: 'Horatio Nelson',
      period: '1758-1805',
      role: 'Naval Supremacy Architect',
      description: 'Admiral who established British naval supremacy through tactical brilliance, personal courage, and inspirational leadership. His victory at Trafalgar secured British dominance of the seas for a century.',
      contributions: [
        'Battle of Trafalgar (1805) - decisive victory establishing century of British naval dominance',
        'Revolutionary naval tactics breaking traditional line-of-battle formations',
        'Created doctrine of aggressive close combat and decisive victory',
        'Signal "England expects that every man will do his duty" became national motto',
        'Transformed naval leadership through personal example and inspirational command',
        'Established British naval supremacy enabling global empire and trade'
      ]
    },
    'brunel': {
      name: 'Isambard Kingdom Brunel',
      period: '1806-1859',
      role: 'Engineering Genius',
      description: 'Engineering genius who revolutionised transport through railways, bridges, and steamships. His audacious projects pushed engineering boundaries whilst his theatrical personality made him a Victorian celebrity.',
      contributions: [
        'Great Western Railway - Britain\'s finest railway with gentle gradients and broad gauge',
        'SS Great Britain - first iron ocean-going ship with screw propeller',
        'Clifton Suspension Bridge - iconic engineering feat spanning Avon Gorge',
        'SS Great Eastern - largest ship in the world for 40 years',
        'Paddington Station - revolutionary train shed design with iron and glass',
        'Thames Tunnel - first underwater tunnel using revolutionary shield method',
        'Pioneered modern project management and systematic engineering approaches'
      ]
    },
    'nightingale': {
      name: 'Florence Nightingale',
      period: '1820-1910',
      role: 'Healthcare Revolutionary',
      description: 'Founder of modern nursing who revolutionised healthcare through improved sanitation, statistical analysis, and professional education standards.',
      contributions: [
        'Established nursing as professional discipline requiring training',
        'Reduced Crimean War death rates from 42% to 2% through sanitation',
        'Founded first scientifically-based nursing school at St Thomas\' Hospital',
        'Pioneered use of statistics and data visualisation in healthcare',
        'Reformed British Army medical services and hospital design',
        'Advanced women\'s role in healthcare and professional work'
      ]
    },
    'disraeli': {
      name: 'Benjamin Disraeli',
      period: '1804-1881',
      role: 'One Nation Conservative',
      description: 'Conservative Prime Minister and novelist who embodied Victorian political theatre whilst championing social reform. The first Jewish-born PM, he transformed the Conservative Party through his "One Nation" philosophy.',
      contributions: [
        'Served as Conservative Prime Minister twice (1868, 1874-1880)',
        'Championed "One Nation" conservatism bridging class divides',
        'Reformed Conservative Party into modern political organisation',
        'Purchased Suez Canal shares securing British influence in Egypt',
        'Passed social reforms including Public Health Act and Factory Acts',
        'Wrote influential political novels including "Coningsby" and "Sybil"',
        'Established Conservative Party as party of Empire and social reform'
      ]
    },
    'watt': {
      name: 'James Watt',
      period: '1736-1819',
      role: 'Steam Power Revolutionary',
      description: 'Scottish inventor who perfected the steam engine and triggered the Industrial Revolution. His mechanical innovations provided the power source that transformed manufacturing, transport, and mining across Britain.',
      contributions: [
        'Separate condenser - made steam engines four times more efficient',
        'Rotary motion steam engine - enabled factory machinery operation',
        'Concept of horsepower - still used to measure engine power today',
        'Steam engine governor - automatic speed control system',
        'Founded engineering consultancy with Matthew Boulton',
        'Over 100 patents for mechanical innovations',
        'The SI unit of power "watt" is named after him'
      ]
    },
    'lennon': {
      name: 'John Lennon',
      period: '1940-1980',
      role: 'Global Music Revolutionary',
      description: 'Beatles co-founder who led the British Invasion of American popular music and became a global peace activist. His songwriting partnership with Paul McCartney created the soundtrack to the 1960s cultural revolution.',
      contributions: [
        'Co-founded The Beatles - most successful and influential band in history',
        'Led British Invasion bringing UK music to global dominance',
        '"Imagine" - iconic peace anthem promoting unity and understanding',
        'Lennon-McCartney songwriting partnership created pop music template',
        'Pioneered studio experimentation and avant-garde musical techniques',
        'Used celebrity platform for peace activism and social commentary',
        'Helped establish popular music as serious artistic medium'
      ]
    },
    burns: {
      name: 'Robert Burns',
      period: '1759-1796',
      role: 'Democratic Voice Poet',
      description: 'Scotland\'s national poet celebrated common humanity and democratic ideals, writing in Scots dialect to reach ordinary people.',
      contributions: [
        'Auld Lang Syne - most recognised song worldwide on New Year\'s Eve',
        'Preserved and celebrated Scots language and culture',
        'Influenced Romantic poetry movement across Europe',
        'Championed egalitarian ideals: "A man\'s a man for a\' that"'
      ]
    },
    smith: {
      name: 'Adam Smith',
      period: '1723-1790',
      role: 'Economic Theory Architect',
      description: 'Father of modern economics who balanced market efficiency with moral philosophy, creating framework for ethical capitalism.',
      contributions: [
        'The Wealth of Nations - foundation of modern economic theory',
        'Theory of Moral Sentiments - explored human empathy and social bonds',
        'Concept of "invisible hand" in free markets',
        'Analysis of division of labour and specialisation'
      ]
    },
    'woolf': {
      name: 'Virginia Woolf',
      period: '1882-1941',
      role: 'Modernist Literary Pioneer',
      description: 'Modernist novelist who revolutionised literary form through stream-of-consciousness technique whilst exploring themes of mental health, gender, and sexuality.',
      contributions: [
        'Mrs Dalloway and To the Lighthouse - modernist literary masterpieces',
        'A Room of One\'s Own - foundational feminist literary criticism',
        'Pioneered stream-of-consciousness narrative technique',
        'Co-founded Hogarth Press publishing experimental literature',
        'Advanced understanding of mental health through personal experience',
        'Bloomsbury Group fostered intellectual and artistic innovation'
      ]
    },
    'keynes': {
      name: 'John Maynard Keynes',
      period: '1883-1946',
      role: 'Economic Theory Revolutionary',
      description: 'Economist who revolutionised economic theory by arguing that government intervention could stabilise economic cycles, fundamentally influencing modern macroeconomic policy.',
      contributions: [
        'General Theory of Employment, Interest and Money - revolutionary economic text',
        'Keynesian economics justifying government intervention in markets',
        'Bretton Woods Conference architect creating post-war economic order',
        'Championed full employment as achievable government policy goal',
        'Arts Council founding chairman promoting government cultural funding',
        'International Monetary Fund and World Bank institutional design'
      ]
    },
    'aneurin-bevan': {
      name: 'Aneurin Bevan',
      period: '1897-1960',
      role: 'NHS Architect',
      description: 'Welsh politician who transformed British society by creating the National Health Service, establishing healthcare free at the point of use as a fundamental right.',
      contributions: [
        'Founded the National Health Service (1948)',
        'Championed principle of healthcare free at point of use',
        'Overcame medical profession opposition to create NHS',
        'Established foundation of British welfare state'
      ]
    },
    'cs-lewis': {
      name: 'C.S. Lewis',
      period: '1898-1963',
      role: 'Fantasy Literature Pioneer',
      description: 'Northern Irish scholar and writer who combined rigorous academia with imaginative storytelling, creating the Chronicles of Narnia and influential Christian apologetics.',
      contributions: [
        'The Chronicles of Narnia - beloved fantasy series',
        'Mere Christianity - influential Christian apologetics',
        'Medieval literature scholarship at Oxford and Cambridge',
        'Bridged academic rigor with popular accessibility'
      ]
    },
    'seamus-heaney': {
      name: 'Seamus Heaney',
      period: '1939-2013',
      role: 'Nobel Prize-Winning Poet',
      description: 'Northern Irish poet who articulated the experience of rural Ireland and the Troubles, earning the Nobel Prize for Literature whilst bridging cultural and political divides.',
      contributions: [
        'Nobel Prize in Literature (1995)',
        'Death of a Naturalist - groundbreaking debut collection',
        'Translation of Beowulf - modern English masterpiece',
        'Articulated Northern Irish experience in poetry'
      ]
    },
    milton: {
      name: 'John Milton',
      period: '1608-1674',
      role: 'Free Speech Pioneer',
      description: 'Poet and pamphleteer who wrote the first great defence of press freedom whilst creating sublime epic poetry. His Areopagitica established the philosophical foundation for free speech.',
      contributions: [
        'Areopagitica (1644) - first systematic argument against press censorship',
        'Paradise Lost - epic poem exploring free will and rebellion',
        'Defended religious tolerance and separation of church and state',
        'Established concept of "marketplace of ideas" in democratic thought'
      ]
    },
    orwell: {
      name: 'George Orwell',
      period: '1903-1950',
      role: 'Anti-Totalitarian Voice',
      description: 'Author who defined the modern understanding of threats to freedom and democracy. His warnings about surveillance, propaganda, and thought control remain prophetic in the digital age.',
      contributions: [
        '1984 - dystopian masterpiece warning against totalitarian surveillance',
        'Animal Farm - allegory exposing corruption of revolutionary ideals',
        'Coined terms: Big Brother, doublethink, thoughtcrime, Newspeak',
        '"Politics and the English Language" - essay on clear thinking and honest communication'
      ]
    }
  }

  const contributor = contributorData[id as string] || {
    name: 'Unknown Contributor',
    period: 'Unknown',
    role: 'Cultural Contributor',
    description: 'Information about this contributor is being researched.',
    contributions: ['Details coming soon...']
  }

  return (
    <div className="py-12">
      <div className="container-british">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/contributors" 
            className="text-union-jack-blue hover:underline mb-6 inline-block"
          >
            ← Back to Contributors
          </Link>

          <div className="card-british">
            <h1 className="text-4xl font-bold text-british-racing-green mb-4">
              {contributor.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{contributor.period}</p>
            <p className="text-lg text-gray-500 mb-6">{contributor.role}</p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {contributor.description}
            </p>

            <h2 className="text-2xl font-semibold text-british-racing-green mb-4">
              Major Contributions
            </h2>
            <ul className="space-y-2">
              {contributor.contributions.map((contribution: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-gray-700">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContributorDetailPage 