import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContributorsPage = () => {
  const contributors = [
    { id: 'shakespeare', name: 'William Shakespeare', period: '1564-1616', role: 'Core Language Architect' },
    { id: 'newton', name: 'Isaac Newton', period: '1643-1727', role: 'Physics Framework Developer' },
    { id: 'darwin', name: 'Charles Darwin', period: '1809-1882', role: 'Evolution Algorithm Creator' },
    { id: 'churchill', name: 'Winston Churchill', period: '1874-1965', role: 'Democracy Defender' },
    { id: 'turing', name: 'Alan Turing', period: '1912-1954', role: 'Computing Pioneer' },
    { id: 'austen', name: 'Jane Austen', period: '1775-1817', role: 'Social Commentary Specialist' },
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