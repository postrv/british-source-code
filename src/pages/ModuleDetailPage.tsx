import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ModuleDetailPage = () => {
  const { id } = useParams()

  // Mock data - in a real app this would come from an API or data store
  const moduleData: Record<string, any> = {
    humour: {
      name: 'British Humour Module',
      description: 'Essential comedy frameworks, irony handlers, and understatement utilities that power British social interaction.',
      dependencies: ['self-deprecation', 'wordplay', 'timing', 'class-awareness'],
      features: [
        'Self-deprecation engine with automated downplay functions',
        'Multi-level irony framework (verbal, situational, dramatic)',
        'Timing-based comedy delivery system',
        'Regional humour variant support (Scottish, Welsh, Northern)'
      ]
    },
    tea: {
      name: 'Tea Framework',
      description: 'Essential beverage preparation and timing algorithms for all social situations.',
      dependencies: ['kettle', 'milk', 'biscuits', 'timing'],
      features: [
        'Automatic brewing time optimization',
        'Milk-first vs tea-first debate resolution',
        'Crisis management through tea-making',
        'Social bonding through shared tea experiences'
      ]
    }
  }

  const module = moduleData[id as string] || {
    name: 'Unknown Module',
    description: 'Documentation for this module is being written.',
    dependencies: ['patience'],
    features: ['Coming soon...']
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
            to="/modules" 
            className="text-union-jack-blue hover:underline mb-6 inline-block"
          >
            ← Back to Modules
          </Link>

          <div className="card-british">
            <h1 className="text-4xl font-bold text-british-racing-green mb-6">
              {module.name}
            </h1>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {module.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-british-racing-green mb-4">
                  Dependencies
                </h2>
                <ul className="space-y-2">
                  {module.dependencies.map((dep: string, index: number) => (
                    <li key={index} className="flex items-center">
                      <code className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {dep}
                      </code>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-british-racing-green mb-4">
                  Core Features
                </h2>
                <ul className="space-y-2">
                  {module.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <span className="text-union-jack-blue mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ModuleDetailPage 