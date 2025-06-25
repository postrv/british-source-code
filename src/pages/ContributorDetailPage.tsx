import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ContributorDetailPage = () => {
  const { id } = useParams()

  // Mock data - in a real app this would come from an API or data store
  const contributorData: Record<string, any> = {
    shakespeare: {
      name: 'William Shakespeare',
      period: '1564-1616',
      role: 'Core Language Architect',
      description: 'The Bard transformed English into a world language with universal human insights.',
      contributions: [
        '37 plays that defined dramatic structure',
        '154 sonnets exploring human nature',
        'Added ~1,700 words to English vocabulary',
        'Created timeless character archetypes'
      ]
    },
    newton: {
      name: 'Isaac Newton',
      period: '1643-1727',
      role: 'Physics Framework Developer',
      description: 'Revolutionized understanding of the universe through mathematical principles.',
      contributions: [
        'Laws of motion and universal gravitation',
        'Invented calculus (independently)',
        'Groundbreaking work in optics',
        'Established scientific method principles'
      ]
    }
  }

  const contributor = contributorData[id as string] || {
    name: 'Unknown Contributor',
    period: 'Unknown',
    role: 'Cultural Contributor',
    description: 'Information about this contributor is being researched.',
    contributions: ['Details coming soon...']
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
            to="/contributors" 
            className="text-union-jack-blue hover:underline mb-6 inline-block"
          >
            ← Back to Contributors
          </Link>

          <div className="card-british">
            <h1 className="text-4xl font-bold text-british-racing-green mb-4">
              {contributor.name}
            </h1>
            <p className="text-xl text-gray-600 mb-2">{contributor.period}</p>
            <p className="text-lg text-gray-500 mb-6">{contributor.role}</p>
            
            <p className="text-gray-700 mb-8 text-lg leading-relaxed">
              {contributor.description}
            </p>

            <h2 className="text-2xl font-semibold text-british-racing-green mb-4">
              Major Contributions
            </h2>
            <ul className="space-y-2">
              {contributor.contributions.map((contribution: string, index: number) => (
                <li key={index} className="flex items-start">
                  <span className="text-union-jack-blue mr-2">•</span>
                  <span className="text-gray-700">{contribution}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ContributorDetailPage 