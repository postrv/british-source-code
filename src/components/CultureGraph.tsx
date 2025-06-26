import { useEffect, useRef, useState, useCallback } from 'react'
import cytoscape, { Core } from 'cytoscape'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ExternalLink, Maximize2, Filter, ChevronDown, ChevronUp, Users, Building2, Lightbulb, Calendar, MapPin } from 'lucide-react'
import { cultureNodes, cultureEdges, getNodeById, CultureNode, CultureEdge } from '../data/cultureGraph'

interface CultureGraphProps {
  selectedNodeId?: string | null
  onNodeSelect?: (nodeId: string | null) => void
}

interface SearchResult extends CultureNode {
  score: number
  matchType: 'name' | 'description' | 'tag' | 'contribution' | 'fact'
}

interface FilterState {
  types: string[]
  periods: string[]
  regions: string[]
  significance: [number, number]
  searchQuery: string
}

const CultureGraph = ({ selectedNodeId: _selectedNodeId, onNodeSelect }: CultureGraphProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const cyRef = useRef<Core | null>(null)
  const [selectedNode, setSelectedNode] = useState<CultureNode | null>(null)
  const [selectedEdge, setSelectedEdge] = useState<CultureEdge | null>(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [showSearch, setShowSearch] = useState(false)
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false)
  const [showNodePanel, setShowNodePanel] = useState(false)
  const [showEdgePanel, setShowEdgePanel] = useState(false)
  const [filteredNodeCount, setFilteredNodeCount] = useState(cultureNodes.length)
  
  const [filters, setFilters] = useState<FilterState>({
    types: [],
    periods: [],
    regions: [],
    significance: [0, 100],
    searchQuery: ''
  })

  // Enhanced search with fuzzy matching and scoring
  const enhancedSearch = useCallback((query: string): SearchResult[] => {
    if (!query.trim()) return []

    const lowerQuery = query.toLowerCase()
    const results: SearchResult[] = []

    cultureNodes.forEach(node => {
      let score = 0
      let matchType: SearchResult['matchType'] = 'description'

      // Exact name match (highest priority)
      if (node.label.toLowerCase() === lowerQuery) {
        score = 100
        matchType = 'name'
      }
      // Name starts with query
      else if (node.label.toLowerCase().startsWith(lowerQuery)) {
        score = 90
        matchType = 'name'
      }
      // Name contains query
      else if (node.label.toLowerCase().includes(lowerQuery)) {
        score = 80
        matchType = 'name'
      }
      // Tag exact match
      else if (node.tags.some(tag => tag.toLowerCase() === lowerQuery)) {
        score = 70
        matchType = 'tag'
      }
      // Tag contains query
      else if (node.tags.some(tag => tag.toLowerCase().includes(lowerQuery))) {
        score = 60
        matchType = 'tag'
      }
      // Description contains query
      else if (node.description.toLowerCase().includes(lowerQuery)) {
        score = 50
        matchType = 'description'
      }
      // Detailed description contains query
      else if (node.detailedDescription.toLowerCase().includes(lowerQuery)) {
        score = 40
        matchType = 'description'
      }
      // Key contributions contain query
      else if (node.keyContributions?.some(contrib => contrib.toLowerCase().includes(lowerQuery))) {
        score = 30
        matchType = 'contribution'
      }
      // Fun facts contain query
      else if (node.funFacts?.some(fact => fact.toLowerCase().includes(lowerQuery))) {
        score = 20
        matchType = 'fact'
      }

      if (score > 0) {
        results.push({ ...node, score, matchType })
      }
    })

    return results.sort((a, b) => b.score - a.score).slice(0, 10)
  }, [])

  // Handle search with debouncing
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchQuery.trim()) {
        const results = enhancedSearch(searchQuery)
        setSearchResults(results)
      } else {
        setSearchResults([])
      }
    }, 300)

    return () => clearTimeout(timeoutId)
  }, [searchQuery, enhancedSearch])

  // Get unique filter options
  const getFilterOptions = useCallback(() => {
    const types = [...new Set(cultureNodes.map(node => node.type))]
    const periods = [...new Set(cultureNodes.map(node => {
      if (node.birthYear) {
        if (node.birthYear < 1066) return 'Ancient & Anglo-Saxon'
        if (node.birthYear < 1485) return 'Medieval'
        if (node.birthYear < 1603) return 'Tudor'
        if (node.birthYear < 1714) return 'Stuart'
        if (node.birthYear < 1837) return 'Georgian'
        if (node.birthYear < 1901) return 'Victorian'
        if (node.birthYear < 1945) return 'Early Modern'
        return 'Contemporary'
      }
      if (node.foundedYear) {
        if (node.foundedYear < 1066) return 'Ancient & Anglo-Saxon'
        if (node.foundedYear < 1485) return 'Medieval'
        if (node.foundedYear < 1603) return 'Tudor'
        if (node.foundedYear < 1714) return 'Stuart'
        if (node.foundedYear < 1837) return 'Georgian'
        if (node.foundedYear < 1901) return 'Victorian'
        if (node.foundedYear < 1945) return 'Early Modern'
        return 'Contemporary'
      }
      return 'Unknown'
    }).filter(Boolean))]
    
    const regions = [...new Set(cultureNodes.map(node => {
      if (!node.location) return 'Unknown'
      if (node.location.includes('Scotland') || node.location.includes('Edinburgh') || node.location.includes('Glasgow')) return 'Scotland'
      if (node.location.includes('Wales') || node.location.includes('Cardiff') || node.location.includes('Swansea')) return 'Wales'
      if (node.location.includes('Ireland') || node.location.includes('Belfast') || node.location.includes('Dublin')) return 'Ireland'
      return 'England'
    }))]

    return { types, periods, regions }
  }, [])

  const { types: typeOptions, periods: periodOptions, regions: regionOptions } = getFilterOptions()

  // Apply filters to graph
  const applyFilters = useCallback(() => {
    if (!cyRef.current) return

    let visibleNodes = cultureNodes

    // Apply type filter
    if (filters.types.length > 0) {
      visibleNodes = visibleNodes.filter(node => filters.types.includes(node.type))
    }

    // Apply period filter
    if (filters.periods.length > 0) {
      visibleNodes = visibleNodes.filter(node => {
        const year = node.birthYear || node.foundedYear
        if (!year) return filters.periods.includes('Unknown')
        
        let period = 'Contemporary'
        if (year < 1066) period = 'Ancient & Anglo-Saxon'
        else if (year < 1485) period = 'Medieval'
        else if (year < 1603) period = 'Tudor'
        else if (year < 1714) period = 'Stuart'
        else if (year < 1837) period = 'Georgian'
        else if (year < 1901) period = 'Victorian'
        else if (year < 1945) period = 'Early Modern'
        
        return filters.periods.includes(period)
      })
    }

    // Apply region filter
    if (filters.regions.length > 0) {
      visibleNodes = visibleNodes.filter(node => {
        if (!node.location) return filters.regions.includes('Unknown')
        
        let region = 'England'
        if (node.location.includes('Scotland') || node.location.includes('Edinburgh') || node.location.includes('Glasgow')) region = 'Scotland'
        else if (node.location.includes('Wales') || node.location.includes('Cardiff') || node.location.includes('Swansea')) region = 'Wales'
        else if (node.location.includes('Ireland') || node.location.includes('Belfast') || node.location.includes('Dublin')) region = 'Ireland'
        
        return filters.regions.includes(region)
      })
    }

    // Apply significance filter
    visibleNodes = visibleNodes.filter(node => 
      node.significance >= filters.significance[0] && 
      node.significance <= filters.significance[1]
    )

    // Apply search filter
    if (filters.searchQuery.trim()) {
      const searchResults = enhancedSearch(filters.searchQuery)
      const searchIds = new Set(searchResults.map(r => r.id))
      visibleNodes = visibleNodes.filter(node => searchIds.has(node.id))
    }

    const visibleNodeIds = new Set(visibleNodes.map(node => node.id))
    setFilteredNodeCount(visibleNodes.length)

    // Show/hide nodes
    cyRef.current.nodes().style('display', (ele: any) => 
      visibleNodeIds.has(ele.data('id')) ? 'element' : 'none'
    )

    // Show/hide edges based on visible nodes
    cyRef.current.edges().style('display', (ele: any) => {
      const source = ele.data('source')
      const target = ele.data('target')
      return visibleNodeIds.has(source) && visibleNodeIds.has(target) ? 'element' : 'none'
    })

    // Fit view to visible elements
    const visibleElements = cyRef.current.elements(':visible')
    if (visibleElements.length > 0) {
      cyRef.current.fit(visibleElements, 50)
    }
  }, [filters, enhancedSearch])

  // Update filters
  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }))
  }, [])

  // Clear all filters
  const clearAllFilters = useCallback(() => {
    setFilters({
      types: [],
      periods: [],
      regions: [],
      significance: [0, 100],
      searchQuery: ''
    })
    setSearchQuery('')
  }, [])

  // Toggle filter value
  const toggleFilterValue = useCallback((filterType: 'types' | 'periods' | 'regions', value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter(v => v !== value)
        : [...prev[filterType], value]
    }))
  }, [])

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

  // Get icon for node type
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'person': return Users
      case 'institution': return Building2
      case 'concept': return Lightbulb
      case 'practice': return Calendar
      case 'event': return Calendar
      case 'place': return MapPin
      case 'artifact': return Building2
      default: return Lightbulb
    }
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
            'width': (ele: any) => Math.max(30, Math.min(60, (ele.data('significance') || 50) * 0.6)),
            'height': (ele: any) => Math.max(30, Math.min(60, (ele.data('significance') || 50) * 0.6)),
            'font-size': '11px',
            'text-valign': 'center',
            'text-halign': 'center',
            'color': '#fff',
            'text-outline-width': 2,
            'text-outline-color': '#000',
            'border-width': 2,
            'border-color': '#fff',
            'text-wrap': 'wrap',
            'text-max-width': '80px'
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
        randomize: false,
        idealEdgeLength: 80,
        nodeOverlap: 10,
        refresh: 20,
        fit: true,
        padding: 50,
        componentSpacing: 100,
        nodeRepulsion: 8000,
        edgeElasticity: 100,
        nestingFactor: 5,
        gravity: 80,
        numIter: 1000,
        initialTemp: 200,
        coolingFactor: 0.95,
        minTemp: 1.0
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

  // Apply filters when they change
  useEffect(() => {
    applyFilters()
  }, [applyFilters])

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

  const activeFilterCount = filters.types.length + filters.periods.length + filters.regions.length + (filters.searchQuery ? 1 : 0)

  return (
    <div className="relative w-full h-full">
      {/* Enhanced Controls */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
        {/* Search Button */}
        <button
          onClick={() => setShowSearch(!showSearch)}
          className={`btn-british p-3 rounded-lg shadow-lg transition-colors ${
            showSearch || searchQuery ? 'btn-primary' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
          title="Search nodes"
        >
          <Search size={20} />
        </button>

        {/* Advanced Filters Button */}
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className={`btn-british p-3 rounded-lg shadow-lg transition-colors relative ${
            showAdvancedFilters || activeFilterCount > 0 ? 'btn-primary' : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          }`}
          title="Advanced filters"
        >
          <Filter size={20} />
          {activeFilterCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-union-jack-red text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Reset View Button */}
        <button
          onClick={() => {
            if (cyRef.current) {
              cyRef.current.fit()
              cyRef.current.elements().removeClass('highlighted dimmed')
            }
          }}
          className="btn-british btn-secondary p-3 rounded-lg shadow-lg"
          title="Reset view"
        >
          <Maximize2 size={20} />
        </button>

        {/* Clear Filters Button */}
        {activeFilterCount > 0 && (
          <button
            onClick={clearAllFilters}
            className="btn-british bg-union-jack-red text-white hover:bg-red-700 p-3 rounded-lg shadow-lg"
            title="Clear all filters"
          >
            <X size={20} />
          </button>
        )}
      </div>

      {/* Enhanced Search Panel */}
      <AnimatePresence>
        {showSearch && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-20 z-20 bg-white rounded-lg shadow-xl p-4 w-96 max-h-96 overflow-hidden flex flex-col"
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
            
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  updateFilter('searchQuery', e.target.value)
                }}
                placeholder="Search nodes, descriptions, tags..."
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-union-jack-blue focus:border-transparent"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => {
                    setSearchQuery('')
                    updateFilter('searchQuery', '')
                  }}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X size={16} />
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {searchResults.length > 0 && (
                <div>
                  <p className="text-sm text-gray-600 mb-2">
                    {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                  </p>
                  {searchResults.map(node => {
                    const IconComponent = getTypeIcon(node.type)
                    return (
                      <div
                        key={node.id}
                        onClick={() => navigateToNode(node.id)}
                        className="p-3 hover:bg-gray-100 cursor-pointer rounded border-b border-gray-100 last:border-b-0"
                      >
                        <div className="flex items-start space-x-3">
                          <div className="flex-shrink-0">
                            {node.image ? (
                              <img
                                src={node.image}
                                alt={node.label}
                                className="w-10 h-10 rounded-lg object-cover"
                              />
                            ) : (
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                                <IconComponent size={16} className="text-gray-600" />
                              </div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-medium text-british-racing-green">
                              {node.label}
                            </div>
                            <div className="text-sm text-gray-600">
                              {node.category} • {node.type}
                            </div>
                            <div className="text-xs text-gray-500 mt-1 line-clamp-2">
                              {node.description}
                            </div>
                            <div className="flex items-center mt-1">
                              <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                                {node.matchType} match
                              </span>
                              <span className="text-xs text-gray-400 ml-2">
                                Score: {node.score}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              
              {searchQuery && searchResults.length === 0 && (
                <div className="text-center py-6">
                  <div className="text-gray-400 mb-2">
                    <Search size={24} className="mx-auto" />
                  </div>
                  <p className="text-sm text-gray-600">No results found for "{searchQuery}"</p>
                  <p className="text-xs text-gray-500 mt-1">Try different keywords or check spelling</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {showAdvancedFilters && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-4 left-20 z-20 bg-white rounded-lg shadow-xl p-4 w-80 max-h-96 overflow-hidden flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-british-racing-green">Advanced Filters</h3>
              <div className="flex items-center space-x-2">
                <span className="text-xs text-gray-500">
                  {filteredNodeCount} / {cultureNodes.length} nodes
                </span>
                <button
                  onClick={() => setShowAdvancedFilters(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto space-y-4">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type ({filters.types.length} selected)
                </label>
                <div className="grid grid-cols-2 gap-1">
                  {typeOptions.map(type => {
                    const IconComponent = getTypeIcon(type)
                    const isSelected = filters.types.includes(type)
                    return (
                      <button
                        key={type}
                        onClick={() => toggleFilterValue('types', type)}
                        className={`flex items-center space-x-2 p-2 rounded text-sm transition-colors ${
                          isSelected 
                            ? 'bg-union-jack-blue text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <IconComponent size={14} />
                        <span className="capitalize">{type}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Period Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Historical Period ({filters.periods.length} selected)
                </label>
                <div className="space-y-1">
                  {periodOptions.map(period => {
                    const isSelected = filters.periods.includes(period)
                    return (
                      <button
                        key={period}
                        onClick={() => toggleFilterValue('periods', period)}
                        className={`w-full text-left p-2 rounded text-sm transition-colors ${
                          isSelected 
                            ? 'bg-union-jack-red text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {period}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Region Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Region ({filters.regions.length} selected)
                </label>
                <div className="grid grid-cols-2 gap-1">
                  {regionOptions.map(region => {
                    const isSelected = filters.regions.includes(region)
                    return (
                      <button
                        key={region}
                        onClick={() => toggleFilterValue('regions', region)}
                        className={`flex items-center space-x-2 p-2 rounded text-sm transition-colors ${
                          isSelected 
                            ? 'bg-british-racing-green text-white' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        <MapPin size={14} />
                        <span>{region}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Significance Range */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Historical Significance ({filters.significance[0]} - {filters.significance[1]})
                </label>
                <div className="space-y-2">
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.significance[0]}
                    onChange={(e) => updateFilter('significance', [parseInt(e.target.value), filters.significance[1]])}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={filters.significance[1]}
                    onChange={(e) => updateFilter('significance', [filters.significance[0], parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
              <button
                onClick={clearAllFilters}
                className="flex-1 btn-british btn-secondary text-sm py-2"
              >
                Clear All
              </button>
              <button
                onClick={() => setShowAdvancedFilters(false)}
                className="flex-1 btn-british btn-primary text-sm py-2"
              >
                Apply Filters
              </button>
            </div>
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
            className="absolute top-4 right-4 bottom-4 z-20 bg-white rounded-lg shadow-xl w-96 flex flex-col"
          >
            {/* Header - Fixed */}
            <div className="p-6 flex-shrink-0 border-b border-gray-200">
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
            </div>

            {/* Content - Scrollable */}
            <div className="flex-1 overflow-y-auto p-6">
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

      {/* Enhanced Instructions */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm rounded-lg p-3 text-xs text-gray-600 max-w-xs">
        <div className="space-y-1">
          <div className="font-medium text-british-racing-green mb-1">Graph Controls:</div>
          <div>• Click nodes/edges to inspect details</div>
          <div>• Use mouse wheel to zoom</div>
          <div>• Drag to pan, drag nodes to reposition</div>
          <div>• Use search and filters to explore content</div>
          <div>• {filteredNodeCount} of {cultureNodes.length} nodes visible</div>
        </div>
      </div>
    </div>
  )
}

export default CultureGraph 