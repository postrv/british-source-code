import { useEffect, useRef, useState, useCallback } from 'react'
import cytoscape, { Core } from 'cytoscape'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ExternalLink, Maximize2 } from 'lucide-react'
import { cultureNodes, cultureEdges, searchNodes, getNodeById, CultureNode, CultureEdge } from '../data/cultureGraph'

interface CultureGraphProps {
  selectedNodeId?: string | null
  onNodeSelect?: (nodeId: string | null) => void
}

const CultureGraph = ({ selectedNodeId: _selectedNodeId, onNodeSelect }: CultureGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cyRef = useRef<Core | null>(null)
  const [selectedNode, setSelectedNode] = useState<CultureNode | null>(null)
  const [selectedEdge, setSelectedEdge] = useState<CultureEdge | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<CultureNode[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const [showNodePanel, setShowNodePanel] = useState(false)
  const [showEdgePanel, setShowEdgePanel] = useState(false)
  const [filterType, setFilterType] = useState<string>('all')

  // Color mapping for node types
  const getNodeColor = (node: CultureNode) => {
    const colors = {
      person: '#CF142B',      // Union Jack Red
      institution: '#00247D', // Union Jack Blue
      concept: '#004225',     // British Racing Green
      practice: '#800080',    // Purple
      event: '#FF6B35',       // Orange
      place: '#2E7D32',       // Green
      artifact: '#795548'     // Brown
    }
    return colors[node.type] || '#666666'
  }

  // Initialize Cytoscape
  useEffect(() => {
    if (!containerRef.current) return

    // Transform data for Cytoscape
    const elements = [
      ...cultureNodes.map(node => ({
        data: {
          ...node
        }
      })),
      ...cultureEdges.map(edge => ({
        data: {
          ...edge
        }
      }))
    ]

    const cy = cytoscape({
      container: containerRef.current,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            'background-color': (ele: any) => getNodeColor(ele.data()),
            'label': 'data(label)',
            'width': (ele: any) => Math.max(20, (ele.data('significance') || 50) * 0.8),
            'height': (ele: any) => Math.max(20, (ele.data('significance') || 50) * 0.8),
            'font-size': '12px',
            'text-valign': 'center',
            'text-halign': 'center',
            'color': '#fff',
            'text-outline-width': 2,
            'text-outline-color': '#000',
            'border-width': 2,
            'border-color': '#fff'
          }
        },
        {
          selector: 'node:selected',
          style: {
            'border-width': 4,
            'border-color': '#FFD700',
            'background-color': (ele: any) => getNodeColor(ele.data()),
            'font-weight': 'bold'
          }
        },
        {
          selector: 'edge',
          style: {
            'width': (ele: any) => Math.max(1, (ele.data('strength') || 5) * 0.5),
            'line-color': '#999',
            'target-arrow-color': '#999',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
            'opacity': 0.7,
            'label': 'data(relationship)',
            'font-size': '10px',
            'color': '#666',
            'text-rotation': 'autorotate'
          }
        },
        {
          selector: 'edge:selected',
          style: {
            'line-color': '#FFD700',
            'target-arrow-color': '#FFD700',
            'width': (ele: any) => Math.max(2, (ele.data('strength') || 5) * 0.7),
            'opacity': 1,
            'font-weight': 'bold'
          }
        },
        {
          selector: '.highlighted',
          style: {
            'background-color': '#FFD700',
            'line-color': '#FFD700',
            'target-arrow-color': '#FFD700',
            'opacity': 1
          }
        },
        {
          selector: '.dimmed',
          style: {
            'opacity': 0.3
          }
        }
      ],
      layout: {
        name: 'cose',
        animate: true,
        animationDuration: 1000,
        randomize: false
      } as any,
      wheelSensitivity: 0.2,
      minZoom: 0.3,
      maxZoom: 3
    })

    cyRef.current = cy

    // Event handlers
    cy.on('tap', 'node', (evt) => {
      const node = evt.target
      const nodeData = node.data()
      const cultureNode = getNodeById(nodeData.id)
      
      if (cultureNode) {
        setSelectedNode(cultureNode)
        setSelectedEdge(null)
        setShowNodePanel(true)
        setShowEdgePanel(false)
        onNodeSelect?.(nodeData.id)
        
        // Highlight connected elements
        const connectedEdges = node.connectedEdges()
        const connectedNodes = connectedEdges.connectedNodes()
        
        cy.elements().removeClass('highlighted dimmed')
        cy.elements().addClass('dimmed')
        
        node.addClass('highlighted').removeClass('dimmed')
        connectedEdges.addClass('highlighted').removeClass('dimmed')
        connectedNodes.addClass('highlighted').removeClass('dimmed')
      }
    })

    cy.on('tap', 'edge', (evt) => {
      const edge = evt.target
      const edgeData = edge.data()
      const cultureEdge = cultureEdges.find(e => e.id === edgeData.id)
      
      if (cultureEdge) {
        setSelectedEdge(cultureEdge)
        setSelectedNode(null)
        setShowEdgePanel(true)
        setShowNodePanel(false)
        
        // Highlight edge and connected nodes
        cy.elements().removeClass('highlighted dimmed')
        cy.elements().addClass('dimmed')
        
        edge.addClass('highlighted').removeClass('dimmed')
        edge.connectedNodes().addClass('highlighted').removeClass('dimmed')
      }
    })

    cy.on('tap', (evt) => {
      if (evt.target === cy) {
        // Clicked on background
        cy.elements().removeClass('highlighted dimmed')
        setSelectedNode(null)
        setSelectedEdge(null)
        setShowNodePanel(false)
        setShowEdgePanel(false)
        onNodeSelect?.(null)
      }
    })

    // Cleanup
    return () => {
      cy.destroy()
    }
  }, [onNodeSelect])

  // Handle search
  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query)
    if (query.trim()) {
      const results = searchNodes(query)
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }, [])

  // Filter nodes by type
  const handleFilter = useCallback((type: string) => {
    setFilterType(type)
    if (!cyRef.current) return

    if (type === 'all') {
      cyRef.current.elements().style('display', 'element')
    } else {
      cyRef.current.nodes().style('display', (ele: any) => 
        ele.data('type') === type ? 'element' : 'none'
      )
      // Also hide edges where both nodes are hidden
      cyRef.current.edges().style('display', (ele: any) => {
        const source = cyRef.current!.getElementById(ele.data('source'))
        const target = cyRef.current!.getElementById(ele.data('target'))
        return source.style('display') !== 'none' && target.style('display') !== 'none' ? 'element' : 'none'
      })
    }
  }, [])

  // Navigate to search result
  const navigateToNode = (nodeId: string) => {
    if (!cyRef.current) return
    
    const node = cyRef.current.getElementById(nodeId)
    if (node.length > 0) {
      cyRef.current.center(node)
      cyRef.current.zoom(1.5)
      node.trigger('tap')
    }
    setShowSearch(false)
  }

  return (
    <div className="relative w-full h-full">
      {/* Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {/* Search Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className="btn-british btn-primary p-2 rounded-lg shadow-lg"
          title="Search nodes"
        >
          <Search size={20} />
        </button>

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            value={filterType}
            onChange={(e) => handleFilter(e.target.value)}
            className="btn-british bg-white border border-gray-300 rounded-lg p-2 shadow-lg text-sm"
          >
            <option value="all">All Types</option>
            <option value="person">People</option>
            <option value="institution">Institutions</option>
            <option value="concept">Concepts</option>
            <option value="practice">Practices</option>
            <option value="event">Events</option>
            <option value="place">Places</option>
            <option value="artifact">Artifacts</option>
          </select>
        </div>

        {/* Reset View Button */}
        <button
          onClick={() => {
            if (cyRef.current) {
              cyRef.current.fit()
              cyRef.current.elements().removeClass('highlighted dimmed')
            }
          }}
          className="btn-british btn-secondary p-2 rounded-lg shadow-lg"
          title="Reset view"
        >
          <Maximize2 size={20} />
        </button>
      </div>

      {/* Search Panel */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-20 z-20 bg-white rounded-lg shadow-xl p-4 w-80"
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-british-racing-green">Search Culture Graph</h3>
              <button
                onClick={() => setShowSearch(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search nodes, descriptions, tags..."
              className="w-full p-2 border border-gray-300 rounded-lg mb-3"
              autoFocus
            />
            
            {searchResults.length > 0 && (
              <div className="max-h-60 overflow-y-auto">
                <p className="text-sm text-gray-600 mb-2">
                  {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
                {searchResults.map(node => (
                  <div
                    key={node.id}
                    onClick={() => navigateToNode(node.id)}
                    className="p-2 hover:bg-gray-100 cursor-pointer rounded border-b border-gray-100 last:border-b-0"
                  >
                    <div className="font-medium text-british-racing-green">
                      {node.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {node.category} • {node.type}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {node.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Graph Container */}
      <div
        ref={containerRef}
        className="w-full h-full bg-gray-50 rounded-lg border border-gray-200"
        style={{ minHeight: '600px' }}
      />

      {/* Node Detail Panel */}
      <AnimatePresence>
        {showNodePanel && selectedNode && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="absolute top-4 right-4 z-20 bg-white rounded-lg shadow-xl p-6 w-96 max-h-[calc(100vh-100px)] overflow-y-auto"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                {selectedNode.image && (
                  <img
                    src={selectedNode.image}
                    alt={selectedNode.label}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                )}
                <div>
                  <h3 className="text-xl font-bold text-british-racing-green">
                    {selectedNode.label}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {selectedNode.category} • {selectedNode.type}
                  </p>
                  {selectedNode.period && (
                    <p className="text-sm text-gray-500">{selectedNode.period}</p>
                  )}
                </div>
              </div>
              <button
                onClick={() => setShowNodePanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-british-racing-green mb-2">Description</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedNode.detailedDescription}
                </p>
              </div>

              {selectedNode.keyContributions && selectedNode.keyContributions.length > 0 && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Key Contributions</h4>
                  <ul className="space-y-1">
                    {selectedNode.keyContributions.map((contribution, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-union-jack-blue mr-2">•</span>
                        {contribution}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedNode.culturalImpact && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Cultural Impact</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedNode.culturalImpact}
                  </p>
                </div>
              )}

              {selectedNode.modernRelevance && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Modern Relevance</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {selectedNode.modernRelevance}
                  </p>
                </div>
              )}

              {selectedNode.funFacts && selectedNode.funFacts.length > 0 && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Fun Facts</h4>
                  <ul className="space-y-1">
                    {selectedNode.funFacts.map((fact, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-union-jack-red mr-2">💡</span>
                        {fact}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedNode.quotes && selectedNode.quotes.length > 0 && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Notable Quotes</h4>
                  {selectedNode.quotes.map((quote, index) => (
                    <blockquote key={index} className="text-sm text-gray-700 italic border-l-4 border-british-grey pl-3 mb-2">
                      {quote}
                    </blockquote>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {selectedNode.tags.map(tag => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {selectedNode.wikipediaUrl && (
                <div className="pt-2 border-t border-gray-200">
                  <a
                    href={selectedNode.wikipediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-union-jack-blue hover:underline text-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Learn more on Wikipedia</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Edge Detail Panel */}
      <AnimatePresence>
        {showEdgePanel && selectedEdge && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="absolute top-4 right-4 z-20 bg-white rounded-lg shadow-xl p-6 w-80"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-british-racing-green">
                  Relationship
                </h3>
                <p className="text-sm text-gray-600">
                  {getNodeById(selectedEdge.source)?.label} → {getNodeById(selectedEdge.target)?.label}
                </p>
              </div>
              <button
                onClick={() => setShowEdgePanel(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="font-semibold text-union-jack-blue text-lg">
                  {selectedEdge.relationship}
                </span>
              </div>
              
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedEdge.description}
                </p>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Type:</span>
                <span className="font-medium">{selectedEdge.type}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Strength:</span>
                <span className="font-medium">{selectedEdge.strength}/10</span>
              </div>

              {selectedEdge.period && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Period:</span>
                  <span className="font-medium">{selectedEdge.period}</span>
                </div>
              )}

              {selectedEdge.evidence && selectedEdge.evidence.length > 0 && (
                <div>
                  <h4 className="font-semibold text-british-racing-green mb-2">Evidence</h4>
                  <ul className="space-y-1">
                    {selectedEdge.evidence.map((evidence, index) => (
                      <li key={index} className="text-sm text-gray-700 flex items-start">
                        <span className="text-union-jack-blue mr-2">•</span>
                        {evidence}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-600">
        <div className="space-y-1">
          <div>• Click nodes/edges to inspect details</div>
          <div>• Use mouse wheel to zoom</div>
          <div>• Drag to pan, drag nodes to reposition</div>
          <div>• Use search to find specific elements</div>
        </div>
      </div>
    </div>
  )
}

export default CultureGraph 