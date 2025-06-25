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
    dickens: {
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
    churchill: {
      name: 'Winston Churchill',
      period: '1874-1965',
      role: 'Democracy Defender',
      description: 'Wartime leader whose rhetoric and resolve became synonymous with British determination during the nation\'s finest hour.',
      contributions: [
        'Led Britain to victory in World War II',
        'Delivered iconic speeches that defined British courage',
        'Won Nobel Prize in Literature for historical writings',
        'Shaped post-war international relations and NATO'
      ]
    },
    turing: {
      name: 'Alan Turing',
      period: '1912-1954',
      role: 'Computing Pioneer',
      description: 'Mathematician who cracked the Enigma code and laid theoretical foundations for modern computing.',
      contributions: [
        'Broke German Enigma code, shortening WWII',
        'Developed concept of Turing machine',
        'Laid groundwork for artificial intelligence',
        'Advanced theoretical computer science'
      ]
    },
    'dylan-thomas': {
      name: 'Dylan Thomas',
      period: '1914-1953',
      role: 'Lyrical Voice of Wales',
      description: 'Wales\' greatest poet who brought Welsh poetic tradition to international prominence through lyrical, emotional verse and groundbreaking radio drama.',
      contributions: [
        'Under Milk Wood - masterpiece of radio drama',
        'Do not go gentle into that good night - iconic villanelle',
        'Brought Welsh poetic voice to international audience',
        'Pioneered modern radio drama techniques'
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