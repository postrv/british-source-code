import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Book, Users, Layers, BarChart3, Github, ExternalLink } from 'lucide-react'

const HomePage = () => {
  const features = [
    {
      name: 'Core Modules',
      description: 'Explore the fundamental building blocks of British culture, from humour to constitutional frameworks.',
      icon: Layers,
      href: '/modules',
      color: 'bg-british-racing-green'
    },
    {
      name: 'Key Contributors',
      description: 'Meet the architects of British society, from Alfred the Great to Alan Turing.',
      icon: Users,
      href: '/contributors',
      color: 'bg-union-jack-red'
    },
    {
      name: 'Interactive Visualisation',
      description: 'See how British cultural elements interconnect in our dynamic force-directed graph.',
      icon: BarChart3,
      href: '/visualisation',
      color: 'bg-union-jack-blue'
    },
    {
      name: 'Documentation',
      description: 'Comprehensive guides and implementation details for deploying your own British culture.',
      icon: Book,
      href: '/modules',
      color: 'bg-gray-700'
    }
  ]

  const stats = [
    { label: 'Years of Development', value: '2000+' },
    { label: 'Core Contributors', value: '500+' },
    { label: 'Cultural Modules', value: '7' },
    { label: 'Cups of Tea', value: '∞' }
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-british-racing-green to-union-jack-blue text-white">
        <div className="container-british py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              🇬🇧 British Source Code
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              A cultural repository documenting the fundamental building blocks of British society
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/visualisation"
                className="btn-british bg-white text-british-racing-green hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
              >
                Explore the Culture Graph
              </Link>
              <a
                href="https://github.com/british-source-code"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-british border-2 border-white text-white hover:bg-white hover:text-british-racing-green px-8 py-3 text-lg font-semibold flex items-center gap-2"
              >
                <Github size={20} />
                View on GitHub
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-british py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-british-racing-green mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container-british">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-british-racing-green mb-4">
              System Requirements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Like any mature codebase, British culture contains legacy features, deprecated functions, 
              hotly debated design patterns, and the occasional inexplicable quirk that everyone's 
              too fond of to refactor.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  to={feature.href}
                  className="card-british hover:shadow-lg transition-shadow duration-300 block h-full"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`${feature.color} p-3 rounded-lg`}>
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-british-racing-green mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Installation Section */}
      <div className="py-20 bg-white">
        <div className="container-british">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-british-racing-green mb-8">
              Quick Installation
            </h2>
            <div className="bg-gray-900 rounded-lg p-6 text-left text-gray-100 font-mono text-sm md:text-base overflow-x-auto">
              <div className="space-y-2">
                <div><span className="text-gray-500"># Clone the repository</span></div>
                <div>git clone https://github.com/british-source-code/british-source-code.git</div>
                <div className="mt-4"><span className="text-gray-500"># Install dependencies</span></div>
                <div>npm install tea kettle biscuits</div>
                <div className="mt-4"><span className="text-gray-500"># Initialize environment</span></div>
                <div>export WEATHER=disappointing</div>
                <div>export STIFF_UPPER_LIP=true</div>
                <div className="mt-4"><span className="text-gray-500"># Deploy to Cloudflare</span></div>
                <div>npm run deploy</div>
              </div>
            </div>
            <p className="text-gray-600 mt-6 text-lg">
              Deploy your own instance of British culture in minutes with modern React/TypeScript
            </p>
          </motion.div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-british-racing-green text-white py-16">
        <div className="container-british text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Explore British Culture?
            </h2>
            <p className="text-xl mb-8 text-green-100">
              Dive into our interactive visualisation to see how all the pieces fit together
            </p>
            <Link
              to="/visualisation"
              className="btn-british bg-white text-british-racing-green hover:bg-gray-100 px-8 py-3 text-lg font-semibold"
            >
              Launch Visualisation
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HomePage 