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
    queuing: {
      name: 'Queuing System',
      description: 'Advanced orderly line management protocols ensuring fairness and social harmony through patient waiting algorithms.',
      dependencies: ['patience', 'fair-play', 'social-awareness', 'time-management'],
      features: [
        'Automatic queue position detection and maintenance',
        'Queue-jumping violation detection and tutting response',
        'Multiple queue type support (bus, shop, pub, post office)',
        'Queue etiquette enforcement with polite correction mechanisms'
      ]
    },
    tea: {
      name: 'Tea Framework',
      description: 'Essential beverage preparation and timing algorithms for all social situations.',
      dependencies: ['kettle', 'milk', 'biscuits', 'timing'],
      features: [
        'Automatic brewing time optimisation',
        'Milk-first vs tea-first debate resolution',
        'Crisis management through tea-making',
        'Social bonding through shared tea experiences'
      ]
    },
    class: {
      name: 'Class System',
      description: 'Social stratification and etiquette protocols managing complex hierarchical interactions whilst maintaining polite facade.',
      dependencies: ['accent-detection', 'education-markers', 'cultural-capital', 'manners'],
      features: [
        'Automatic class detection through speech patterns',
        'Appropriate interaction protocol selection',
        'Social mobility path calculation algorithms',
        'Polite acknowledgement of class differences without mentioning them'
      ]
    },
    'weather': {
      name: 'Weather Discussion Framework',
      description: 'Conversational ice-breaker and social lubricant system enabling interactions with strangers through meteorological observations.',
      dependencies: ['basic-meteorology', 'safe-conversation-topics', 'mild-complaint-generation'],
      features: [
        'Automatic weather observation generation',
        'Safe neutral conversation starter algorithms',
        'Regional weather pattern awareness',
        'Socially acceptable complaining about weather conditions'
      ]
    },
    understatement: {
      name: 'Understatement Engine',
      description: 'Advanced diplomatic downplaying algorithms for managing expectations and avoiding appearing boastful.',
      dependencies: ['modesty', 'diplomatic-language', 'context-awareness'],
      features: [
        'Automatic achievement minimisation protocols',
        'Disaster downplaying: "bit of a bother" classification system',
        'Success deflection through collaborative credit assignment',
        'Expectation management through careful underselling'
      ]
    },
    euphemism: {
      name: 'Euphemism Library',
      description: 'Polite indirection and tactful communication tools for discussing uncomfortable topics without causing offence.',
      dependencies: ['social-sensitivity', 'linguistic-creativity', 'cultural-taboos'],
      features: [
        'Comprehensive euphemism database for sensitive topics',
        'Context-appropriate euphemism selection algorithms',
        'Graduated politeness levels from hint to clear statement',
        'Regional euphemism variant support'
      ]
    },
    'pub-culture': {
      name: 'Pub Culture System',
      description: 'Community gathering and social bonding protocols governing behaviour in public house environments.',
      dependencies: ['local-knowledge', 'round-buying-etiquette', 'conversation-skills'],
      features: [
        'Round-buying obligation calculation and reminder system',
        'Appropriate pub conversation topic selection',
        'Bar positioning and queuing protocols',
        'Local pub etiquette adaptation mechanisms'
      ]
    },
    'sunday-roast': {
      name: 'Sunday Roast Tradition',
      description: 'Weekly family gathering and meal preparation framework maintaining social bonds through shared dining rituals.',
      dependencies: ['cooking-skills', 'family-dynamics', 'timing-coordination', 'yorkshire-pudding'],
      features: [
        'Multi-course timing coordination algorithms',
        'Family seating hierarchy management',
        'Conversation topic moderation during meals',
        'Yorkshire pudding quality assurance protocols'
      ]
    },
    cricket: {
      name: 'Cricket Module',
      description: 'Fair play embodiment and tactical complexity engine demonstrating British values through sporting excellence.',
      dependencies: ['patience', 'fair-play', 'weather-resilience', 'tea-breaks'],
      features: [
        'Fair play enforcement with honour system backup',
        'Complex rule interpretation and application',
        'Weather interruption management protocols',
        'Tea break timing optimisation algorithms'
      ]
    },
    'common-law': {
      name: 'Common Law System',
      description: 'Precedent-based legal decision-making framework evolving through judicial wisdom rather than rigid codification.',
      dependencies: ['precedent-database', 'judicial-reasoning', 'equity-principles'],
      features: [
        'Precedent matching and application algorithms',
        'Case law evolution tracking systems',
        'Equity override mechanisms for fairness',
        'Judicial discretion calculation frameworks'
      ]
    },
    parliamentary: {
      name: 'Parliamentary Procedure',
      description: 'Democratic debate and decision-making protocols ensuring orderly governance through time-tested conventions.',
      dependencies: ['democracy', 'debate-skills', 'tradition', 'compromise'],
      features: [
        'Westminster system procedure enforcement',
        'Opposition and government role management',
        'Question Time interrogation protocols',
        'Ceremonial tradition maintenance algorithms'
      ]
    },
    eccentricity: {
      name: 'Eccentricity Module',
      description: 'Acceptable deviation from social norms allowing individual expression within culturally approved boundaries.',
      dependencies: ['individuality', 'harmless-quirks', 'social-tolerance'],
      features: [
        'Eccentricity boundary detection and enforcement',
        'Harmless quirk categorisation system',
        'Social tolerance level calibration',
        'Character building through mild oddness'
      ]
    },
    apologising: {
      name: 'Automatic Apologising System',
      description: 'Reflexive politeness and social lubrication system deploying apologies in all interpersonal situations.',
      dependencies: ['politeness', 'social-anxiety', 'conflict-avoidance'],
      features: [
        'Automatic apology generation for all interactions',
        'Graduated apology intensity based on situation severity',
        'Pre-emptive apologising for potential inconvenience',
        'Sorry-not-sorry diplomatic apology variants'
      ]
    },
    tutting: {
      name: 'Tutting Framework',
      description: 'Non-confrontational disapproval expression toolkit for maintaining social order without direct conflict.',
      dependencies: ['passive-aggression', 'social-disapproval', 'conflict-avoidance'],
      features: [
        'Graduated tutting intensity management',
        'Situationally appropriate tutting selection',
        'Group tutting coordination protocols',
        'Tutting-to-action escalation thresholds'
      ]
    },
    oxbridge: {
      name: 'Oxbridge System',
      description: 'Elite educational excellence and academic rivalry protocols combining ancient traditions with cutting-edge research.',
      dependencies: ['collegiate-system', 'tutorial-method', 'academic-rivalry', 'boat-race'],
      features: [
        'Ancient university tradition maintenance algorithms',
        'Elite academic competition and excellence protocols',
        'Collegiate system social hierarchy management',
        'Town-and-gown relationship mediation frameworks',
        'Tutorial system personalised education delivery',
        'Annual boat race rivalry expression mechanism',
        'Prime Minister production pipeline optimisation'
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
                <div className="flex flex-wrap gap-2">
                  {module.dependencies.map((dep: string, index: number) => (
                    <Link
                      key={index}
                      to={`/dependencies?tag=${encodeURIComponent(dep)}`}
                      className="bg-gray-100 hover:bg-union-jack-blue hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                    >
                      {dep}
                    </Link>
                  ))}
                </div>
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