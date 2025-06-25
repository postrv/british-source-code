import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContributorsPage = () => {
  const contributors = [
    // Medieval & Early Period
    { id: 'alfred-great', name: 'Alfred the Great', period: '849-899', role: 'Legal & Educational Architect' },
    { id: 'chaucer', name: 'Geoffrey Chaucer', period: '1340s-1400', role: 'Father of English Literature' },
    
    // Tudor & Renaissance
    { id: 'shakespeare', name: 'William Shakespeare', period: '1564-1616', role: 'Core Language Architect' },
    { id: 'elizabeth-i', name: 'Elizabeth I', period: '1533-1603', role: 'Renaissance Enabler' },
    
    // Scientific Revolution
    { id: 'newton', name: 'Isaac Newton', period: '1643-1727', role: 'Physics Framework Developer' },
    { id: 'darwin', name: 'Charles Darwin', period: '1809-1882', role: 'Evolution Algorithm Creator' },
    
    // Literary Masters
    { id: 'austen', name: 'Jane Austen', period: '1775-1817', role: 'Social Commentary Specialist' },
    { id: 'dickens', name: 'Charles Dickens', period: '1812-1870', role: 'Social Reform Catalyst' },
    
    // Scottish Enlightenment
    { id: 'burns', name: 'Robert Burns', period: '1759-1796', role: 'Democratic Voice Poet' },
    { id: 'smith', name: 'Adam Smith', period: '1723-1790', role: 'Economic Theory Architect' },
    
    // Welsh Contributors
    { id: 'dylan-thomas', name: 'Dylan Thomas', period: '1914-1953', role: 'Lyrical Voice of Wales' },
    { id: 'aneurin-bevan', name: 'Aneurin Bevan', period: '1897-1960', role: 'NHS Architect' },
    
    // Northern Irish Contributors
    { id: 'cs-lewis', name: 'C.S. Lewis', period: '1898-1963', role: 'Fantasy Literature Pioneer' },
    { id: 'seamus-heaney', name: 'Seamus Heaney', period: '1939-2013', role: 'Nobel Prize-Winning Poet' },
    
    // Modern Era
    { id: 'churchill', name: 'Winston Churchill', period: '1874-1965', role: 'Democracy Defender' },
    { id: 'turing', name: 'Alan Turing', period: '1912-1954', role: 'Computing Pioneer' },
  ]

  return (
    <div className="py-12">
      <div className="container-british">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-british-racing-green mb-8">
            Key Contributors
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Meet the architects of British society who have shaped culture, science, and civilization. 
            From medieval kings to modern scientists, these individuals defined what it means to be British.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/contributors/${contributor.id}`}
                  className="card-british hover:shadow-lg transition-shadow duration-300 block h-full"
                >
                  <h3 className="text-xl font-semibold text-british-racing-green mb-2">
                    {contributor.name}
                  </h3>
                  <p className="text-gray-600 mb-2">{contributor.period}</p>
                  <p className="text-sm text-gray-500">{contributor.role}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContributorsPage 