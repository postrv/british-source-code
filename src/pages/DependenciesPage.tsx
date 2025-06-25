import { useSearchParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Tag, ArrowLeft, Users, Layers, Building2, Lightbulb } from 'lucide-react'
import { cultureNodes } from '../data/cultureGraph'

const DependenciesPage = () => {
  const [searchParams] = useSearchParams()
  const tag = searchParams.get('tag') || ''
  
  // Module data with dependencies
  const moduleData: Record<string, any> = {
    humour: {
      name: 'British Humour Module',
      dependencies: ['self-deprecation', 'wordplay', 'timing', 'class-awareness'],
      type: 'module'
    },
    queuing: {
      name: 'Queuing System',
      dependencies: ['patience', 'fair-play', 'social-awareness', 'time-management'],
      type: 'module'
    },
    tea: {
      name: 'Tea Framework',
      dependencies: ['kettle', 'milk', 'biscuits', 'timing'],
      type: 'module'
    },
    class: {
      name: 'Class System',
      dependencies: ['accent-detection', 'education-markers', 'cultural-capital', 'manners'],
      type: 'module'
    },
    weather: {
      name: 'Weather Discussion Framework',
      dependencies: ['basic-meteorology', 'safe-conversation-topics', 'mild-complaint-generation'],
      type: 'module'
    },
    understatement: {
      name: 'Understatement Engine',
      dependencies: ['modesty', 'diplomatic-language', 'context-awareness'],
      type: 'module'
    },
    euphemism: {
      name: 'Euphemism Library',
      dependencies: ['social-sensitivity', 'linguistic-creativity', 'cultural-taboos'],
      type: 'module'
    },
    'pub-culture': {
      name: 'Pub Culture System',
      dependencies: ['local-knowledge', 'round-buying-etiquette', 'conversation-skills'],
      type: 'module'
    },
    'sunday-roast': {
      name: 'Sunday Roast Tradition',
      dependencies: ['cooking-skills', 'family-dynamics', 'timing-coordination', 'yorkshire-pudding'],
      type: 'module'
    },
    cricket: {
      name: 'Cricket Module',
      dependencies: ['patience', 'fair-play', 'weather-resilience', 'tea-breaks'],
      type: 'module'
    },
    'common-law': {
      name: 'Common Law System',
      dependencies: ['precedent-database', 'judicial-reasoning', 'equity-principles'],
      type: 'module'
    },
    parliamentary: {
      name: 'Parliamentary Procedure',
      dependencies: ['democracy', 'debate-skills', 'tradition', 'compromise'],
      type: 'module'
    },
    eccentricity: {
      name: 'Eccentricity Module',
      dependencies: ['individuality', 'harmless-quirks', 'social-tolerance'],
      type: 'module'
    },
    apologising: {
      name: 'Automatic Apologising System',
      dependencies: ['politeness', 'social-anxiety', 'conflict-avoidance'],
      type: 'module'
    },
    tutting: {
      name: 'Tutting Framework',
      dependencies: ['passive-aggression', 'social-disapproval', 'conflict-avoidance'],
      type: 'module'
    },
    oxbridge: {
      name: 'Oxbridge System',
      dependencies: ['collegiate-system', 'tutorial-method', 'academic-rivalry', 'boat-race'],
      type: 'module'
    }
  }

  // Find modules that have the selected tag as a dependency
  const matchingModules = Object.entries(moduleData).filter(([_, module]) =>
    module.dependencies.includes(tag)
  )

  // Find culture graph nodes that have the tag
  const matchingNodes = cultureNodes.filter(node =>
    node.tags.includes(tag) || 
    node.relatedConcepts.includes(tag) ||
    node.label.toLowerCase().includes(tag.toLowerCase()) ||
    node.description.toLowerCase().includes(tag.toLowerCase())
  )

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'person': return Users
      case 'institution': return Building2
      case 'concept': return Lightbulb
      case 'practice': return Layers
      default: return Tag
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'person': return 'text-union-jack-red'
      case 'institution': return 'text-union-jack-blue'
      case 'concept': return 'text-british-racing-green'
      case 'practice': return 'text-purple-600'
      default: return 'text-gray-600'
    }
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
            className="inline-flex items-center space-x-2 text-union-jack-blue hover:underline mb-6"
          >
            <ArrowLeft size={16} />
            <span>Back to Modules</span>
          </Link>

          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-british-racing-green p-3 rounded-lg">
                <Tag className="text-white w-6 h-6" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-british-racing-green">
                  Dependencies: {tag}
                </h1>
                <p className="text-gray-600 text-lg">
                  Cultural elements and modules that depend on or relate to "{tag}"
                </p>
              </div>
            </div>
          </div>

          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-british-racing-green mb-2">
                Cultural Modules
              </h3>
              <p className="text-3xl font-bold text-union-jack-blue">
                {matchingModules.length}
              </p>
              <p className="text-gray-600 text-sm">
                modules depend on this concept
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold text-british-racing-green mb-2">
                Graph Elements
              </h3>
              <p className="text-3xl font-bold text-union-jack-red">
                {matchingNodes.length}
              </p>
              <p className="text-gray-600 text-sm">
                cultural elements relate to this concept
              </p>
            </div>
          </div>

          {/* Matching Modules */}
          {matchingModules.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-semibold text-british-racing-green mb-6">
                Cultural Modules with "{tag}" Dependency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {matchingModules.map(([moduleId, module], index) => (
                  <motion.div
                    key={moduleId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link
                      to={`/modules/${moduleId}`}
                      className="card-british hover:shadow-lg transition-shadow duration-300 block h-full"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="bg-purple-600 p-3 rounded-lg">
                          <Layers className="text-white w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-british-racing-green mb-2">
                            {module.name}
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {module.dependencies.map((dep: string) => (
                              <span
                                key={dep}
                                className={`px-2 py-1 text-xs rounded-full ${
                                  dep === tag 
                                    ? 'bg-union-jack-blue text-white' 
                                    : 'bg-gray-100 text-gray-600'
                                }`}
                              >
                                {dep}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Matching Culture Graph Nodes */}
          {matchingNodes.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold text-british-racing-green mb-6">
                Related Cultural Elements
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {matchingNodes.map((node, index) => {
                  const IconComponent = getTypeIcon(node.type)
                  const colorClass = getTypeColor(node.type)
                  
                  return (
                    <motion.div
                      key={node.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link
                        to="/visualisation"
                        className="card-british hover:shadow-lg transition-shadow duration-300 block h-full"
                      >
                        <div className="flex items-start space-x-4">
                          {node.image ? (
                            <img
                              src={node.image}
                              alt={node.label}
                              className="w-12 h-12 rounded-lg object-cover"
                            />
                          ) : (
                            <div className={`bg-gray-100 p-2 rounded-lg`}>
                              <IconComponent className={`${colorClass} w-8 h-8`} />
                            </div>
                          )}
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-british-racing-green mb-1">
                              {node.label}
                            </h3>
                            <p className="text-sm text-gray-600 mb-2">
                              {node.category} • {node.type}
                            </p>
                            <p className="text-xs text-gray-500 line-clamp-2">
                              {node.description}
                            </p>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {node.tags.slice(0, 3).map(nodeTag => (
                                <span
                                  key={nodeTag}
                                  className={`px-2 py-1 text-xs rounded-full ${
                                    nodeTag === tag 
                                      ? 'bg-union-jack-red text-white' 
                                      : 'bg-gray-100 text-gray-600'
                                  }`}
                                >
                                  #{nodeTag}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* No Results */}
          {matchingModules.length === 0 && matchingNodes.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-gray-100 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Tag className="text-gray-400 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No Dependencies Found
              </h3>
              <p className="text-gray-600">
                No modules or cultural elements were found that depend on or relate to "{tag}".
              </p>
              <Link
                to="/modules"
                className="btn-british btn-primary mt-4 inline-block"
              >
                Browse All Modules
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default DependenciesPage 