import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ModulesPage = () => {
  const modules = [
    // Core Social Systems
    { id: 'humour', name: 'British Humour', description: 'Self-deprecation, irony, and understatement utilities' },
    { id: 'queuing', name: 'Queuing System', description: 'Advanced orderly line management protocols' },
    { id: 'tea', name: 'Tea Framework', description: 'Essential beverage preparation and timing algorithms' },
    { id: 'class', name: 'Class System', description: 'Social stratification and etiquette protocols' },
    
    // Communication Modules  
    { id: 'weather', name: 'Weather Discussion', description: 'Conversational ice-breaker and social lubricant' },
    { id: 'understatement', name: 'Understatement Engine', description: 'Advanced diplomatic downplaying algorithms' },
    { id: 'euphemism', name: 'Euphemism Library', description: 'Polite indirection and tactful communication tools' },
    
    // Cultural Practices
    { id: 'pub-culture', name: 'Pub Culture System', description: 'Community gathering and social bonding protocols' },
    { id: 'sunday-roast', name: 'Sunday Roast Tradition', description: 'Weekly family gathering and meal preparation framework' },
    { id: 'cricket', name: 'Cricket Module', description: 'Fair play embodiment and tactical complexity engine' },
    
    // Institutional Frameworks
    { id: 'common-law', name: 'Common Law System', description: 'Precedent-based legal decision-making framework' },
    { id: 'parliamentary', name: 'Parliamentary Procedure', description: 'Democratic debate and decision-making protocols' },
    
    // Quirks & Traditions
    { id: 'eccentricity', name: 'Eccentricity Module', description: 'Acceptable deviation from social norms' },
    { id: 'apologising', name: 'Automatic Apologising', description: 'Reflexive politeness and social lubrication system' },
    { id: 'tutting', name: 'Tutting Framework', description: 'Non-confrontational disapproval expression toolkit' },
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