import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ModulesPage = () => {
  const modules = [
    { id: 'humour', name: 'British Humour', description: 'Self-deprecation, irony, and understatement utilities' },
    { id: 'queuing', name: 'Queuing System', description: 'Advanced orderly line management protocols' },
    { id: 'tea', name: 'Tea Framework', description: 'Essential beverage preparation and timing algorithms' },
    { id: 'weather', name: 'Weather Discussion', description: 'Conversational ice-breaker and social lubricant' },
    { id: 'class', name: 'Class System', description: 'Social stratification and etiquette protocols' },
    { id: 'eccentricity', name: 'Eccentricity Module', description: 'Acceptable deviation from social norms' },
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
            Core Modules
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            The fundamental building blocks of British culture, ready for deployment.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={`/modules/${module.id}`}
                  className="card-british hover:shadow-lg transition-shadow duration-300 block h-full"
                >
                  <h3 className="text-xl font-semibold text-british-racing-green mb-2">
                    {module.name}
                  </h3>
                  <p className="text-gray-600">{module.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ModulesPage 