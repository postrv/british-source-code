import { useState } from 'react'
import { motion } from 'framer-motion'
import { Info, Users, Layers, GitBranch, Database } from 'lucide-react'
import CultureGraph from '../components/CultureGraph'
import { cultureNodes, cultureEdges } from '../data/cultureGraph'

const VisualisationPage = () => {
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null)

  // Statistics about the graph
  const stats = [
    {
      label: 'Total Nodes',
      value: cultureNodes.length,
      icon: Database,
      color: 'text-british-racing-green'
    },
    {
      label: 'Relationships',
      value: cultureEdges.length,
      icon: GitBranch,
      color: 'text-union-jack-blue'
    },
    {
      label: 'People',
      value: cultureNodes.filter(n => n.type === 'person').length,
      icon: Users,
      color: 'text-union-jack-red'
    },
    {
      label: 'Concepts',
      value: cultureNodes.filter(n => n.type === 'concept').length,
      icon: Layers,
      color: 'text-purple-600'
    }
  ]

  const nodeTypes = [
    { type: 'person', label: 'People', color: '#CF142B', description: 'Historical figures who shaped British culture' },
    { type: 'institution', label: 'Institutions', color: '#00247D', description: 'Organisations and establishments' },
    { type: 'concept', label: 'Concepts', color: '#004225', description: 'Ideas and philosophical frameworks' },
    { type: 'practice', label: 'Practices', color: '#800080', description: 'Cultural customs and behaviours' },
    { type: 'event', label: 'Events', color: '#FF6B35', description: 'Significant historical events' },
    { type: 'place', label: 'Places', color: '#2E7D32', description: 'Important locations and landmarks' },
    { type: 'artifact', label: 'Artifacts', color: '#795548', description: 'Cultural objects and creations' }
  ]

  return (
    <div className="py-12">
      <div className="container-british">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-british-racing-green mb-4">
              🇬🇧 British Culture Graph
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Explore the intricate web of relationships between the people, institutions, concepts, and practices 
              that have shaped British culture over centuries. Click on nodes and edges to discover detailed 
              information and hidden connections.
            </p>
            
            {/* Statistics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-md border border-gray-200"
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className={`${stat.color} w-8 h-8`} />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-british-racing-green mb-4">Node Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              {nodeTypes.map((type) => (
                <div
                  key={type.type}
                  className="flex items-center space-x-3 bg-white rounded-lg p-3 border border-gray-200"
                >
                  <div
                    className="w-4 h-4 rounded-full border-2 border-white"
                    style={{ backgroundColor: type.color }}
                  />
                  <div>
                    <div className="font-medium text-gray-900 text-sm">
                      {type.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {type.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Graph */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="h-[800px] relative">
              <CultureGraph
                selectedNodeId={selectedNodeId}
                onNodeSelect={setSelectedNodeId}
              />
            </div>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card-british">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="text-british-racing-green w-5 h-5" />
                <h3 className="text-lg font-semibold text-british-racing-green">
                  How to Use
                </h3>
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-sm">Click on any node to view detailed information including contributions, cultural impact, and fun facts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-sm">Click on edges (connections) to understand relationships between elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-sm">Use the search function to quickly find specific people, concepts, or institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-sm">Filter by type to focus on specific categories of cultural elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-sm">Drag nodes to reposition them and zoom in/out for better exploration</span>
                </li>
              </ul>
            </div>

            <div className="card-british">
              <div className="flex items-center space-x-2 mb-4">
                <GitBranch className="text-british-racing-green w-5 h-5" />
                <h3 className="text-lg font-semibold text-british-racing-green">
                  About the Data
                </h3>
              </div>
              <div className="space-y-3 text-gray-700 text-sm">
                <p>
                  This interactive graph represents a curated collection of British cultural elements and their 
                  interconnections, spanning over 2,000 years of history.
                </p>
                <p>
                  Each node represents a significant person, institution, concept, or practice that has contributed 
                  to British culture. The connections show how these elements influenced, created, or embodied each other.
                </p>
                <p>
                  The data includes detailed descriptions, historical context, cultural impact assessments, 
                  and modern relevance for each element, making it a comprehensive resource for understanding 
                  British cultural development.
                </p>
                <div className="mt-4 pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    🔗 Click on Wikipedia links in node details for additional information
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default VisualisationPage 