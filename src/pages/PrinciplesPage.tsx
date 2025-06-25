import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Scale, Megaphone, BookOpen, Users, Quote } from 'lucide-react'

const PrinciplesPage = () => {
  const principles = [
    {
      id: 'freedom-of-speech',
      name: 'Freedom of Speech',
      description: 'The cornerstone of British democracy - the right to speak, write, and think freely',
      icon: Megaphone,
      importance: 'Fundamental',
      established: '1215-1644',
      color: 'bg-union-jack-red'
    },
    {
      id: 'rule-of-law',
      name: 'Rule of Law',
      description: 'No one is above the law, from peasant to monarch',
      icon: Scale,
      importance: 'Constitutional',
      established: '1215',
      color: 'bg-british-racing-green'
    },
    {
      id: 'parliamentary-sovereignty',
      name: 'Parliamentary Sovereignty',
      description: 'Parliament as the supreme legal authority in the UK',
      icon: Users,
      importance: 'Governmental',
      established: '1689',
      color: 'bg-union-jack-blue'
    },
    {
      id: 'fair-play',
      name: 'Fair Play',
      description: 'Playing by the rules and giving everyone a sporting chance',
      icon: BookOpen,
      importance: 'Cultural',
      established: 'Medieval',
      color: 'bg-purple-600'
    }
  ]

  const keyFigures = [
    {
      name: 'John Milton',
      period: '1608-1674',
      contribution: 'Areopagitica - first great defence of press freedom',
      quote: '"Give me the liberty to know, to utter, and to argue freely according to conscience, above all liberties"',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/John_Milton.jpg/150px-John_Milton.jpg'
    },
    {
      name: 'George Orwell',
      period: '1903-1950',
      contribution: 'Warned against threats to free thought and expression',
      quote: '"Freedom is the right to tell people what they do not want to hear"',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/George_Orwell_press_photo.jpg/150px-George_Orwell_press_photo.jpg'
    },
    {
      name: 'Magna Carta Barons',
      period: '1215',
      contribution: 'Established that even kings must follow the law',
      quote: '"To no one will we sell, to no one will we refuse or delay, right or justice"',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg/150px-Magna_Carta_%28British_Library_Cotton_MS_Augustus_II.106%29.jpg'
    }
  ]

  const milestones = [
    {
      year: '1215',
      event: 'Magna Carta',
      description: 'Established principle that power must be limited by law',
      significance: 'Laid foundation for constitutional monarchy and individual rights'
    },
    {
      year: '1644',
      event: 'Areopagitica',
      description: 'Milton\'s pamphlet against pre-publication censorship',
      significance: 'First systematic argument for press freedom and marketplace of ideas'
    },
    {
      year: '1689',
      event: 'Bill of Rights',
      description: 'Parliamentary privilege and freedom of speech in Parliament',
      significance: 'Protected MPs\' right to speak freely without fear of prosecution'
    },
    {
      year: '1695',
      event: 'Licensing Act Lapse',
      description: 'End of pre-publication censorship in England',
      significance: 'Practical establishment of press freedom'
    },
    {
      year: '1872',
      event: 'Speakers\' Corner',
      description: 'Official recognition of free speech area in Hyde Park',
      significance: 'Symbol of British commitment to public debate'
    },
    {
      year: '1948',
      event: 'Orwell\'s 1984',
      description: 'Warning about totalitarian threats to free thought',
      significance: 'Defined modern understanding of threats to freedom'
    }
  ]

  return (
    <div className="py-12">
      <div className="container-british">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-british-racing-green mb-6">
              🏛️ British Principles
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              The fundamental values that have shaped British society for over eight centuries, 
              from Magna Carta to the digital age. These principles didn't emerge overnight - 
              they were forged through struggle, defended through sacrifice, and refined through practice.
            </p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-british hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className={`${principle.color} p-3 rounded-lg`}>
                    <principle.icon className="text-white w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-british-racing-green mb-2">
                      {principle.name}
                    </h3>
                    <p className="text-gray-700 mb-3">{principle.description}</p>
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Importance: {principle.importance}</span>
                      <span>Established: {principle.established}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Freedom of Speech Deep Dive */}
          <div className="bg-gradient-to-br from-union-jack-red to-british-racing-green text-white rounded-xl p-8 mb-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-center mb-8">
                <Megaphone className="w-16 h-16 mx-auto mb-4 text-white" />
                <h2 className="text-3xl font-bold mb-4">Freedom of Speech</h2>
                <p className="text-lg text-red-100 max-w-3xl mx-auto">
                  "The cornerstone of democracy is not just the right to vote, but the right to speak freely about 
                  who deserves your vote and why. Without this freedom, all other freedoms are meaningless."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">Historical Foundation</h4>
                  <p className="text-sm text-red-100">
                    From Alfred's educational reforms through Milton's Areopagitica to Orwell's warnings, 
                    Britain developed unique approaches to protecting thought and expression.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">Cultural Expression</h4>
                  <p className="text-sm text-red-100">
                    Speakers' Corner, satirical press, parliamentary privilege, and BBC independence 
                    created a culture where dissent is not just tolerated but expected.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-2">Modern Challenges</h4>
                  <p className="text-sm text-red-100">
                    Digital platforms, hate speech laws, and online harassment present new challenges 
                    to ancient principles of free expression and open debate.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Key Figures */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-british-racing-green mb-8 text-center">
              Champions of Free Speech
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {keyFigures.map((figure, index) => (
                <motion.div
                  key={figure.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="card-british text-center"
                >
                  <img
                    src={figure.image}
                    alt={figure.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-british-racing-green"
                  />
                  <h3 className="text-xl font-semibold text-british-racing-green mb-1">
                    {figure.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">{figure.period}</p>
                  <p className="text-gray-700 text-sm mb-4">{figure.contribution}</p>
                  <blockquote className="text-xs text-gray-600 italic border-l-4 border-union-jack-blue pl-3">
                    {figure.quote}
                  </blockquote>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Historical Timeline */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-british-racing-green mb-8 text-center">
              Evolution of Freedom
            </h2>
            <div className="space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-6 card-british"
                >
                  <div className="bg-british-racing-green text-white px-4 py-2 rounded-lg font-bold min-w-[80px] text-center">
                    {milestone.year}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-british-racing-green mb-1">
                      {milestone.event}
                    </h3>
                    <p className="text-gray-700 text-sm mb-2">{milestone.description}</p>
                    <p className="text-gray-600 text-xs italic">{milestone.significance}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Modern Relevance */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-semibold text-british-racing-green mb-6 text-center">
              Why These Principles Matter Today
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-british-racing-green mb-4">Digital Age Challenges</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Quote className="text-union-jack-blue mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Social media platforms becoming arbiters of acceptable speech</span>
                  </li>
                  <li className="flex items-start">
                    <Quote className="text-union-jack-blue mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Online harassment threatening open participation in public debate</span>
                  </li>
                  <li className="flex items-start">
                    <Quote className="text-union-jack-blue mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Disinformation campaigns undermining informed democratic discourse</span>
                  </li>
                  <li className="flex items-start">
                    <Quote className="text-union-jack-blue mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Government surveillance capabilities Orwell could never have imagined</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-british-racing-green mb-4">Enduring British Approaches</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <Scale className="text-british-racing-green mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Balancing free speech with public order through common law evolution</span>
                  </li>
                  <li className="flex items-start">
                    <Scale className="text-british-racing-green mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Parliamentary privilege protecting democratic debate from legal interference</span>
                  </li>
                  <li className="flex items-start">
                    <Scale className="text-british-racing-green mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">BBC's editorial independence model influencing global media standards</span>
                  </li>
                  <li className="flex items-start">
                    <Scale className="text-british-racing-green mr-2 mt-1 w-4 h-4" />
                    <span className="text-sm">Speakers' Corner tradition adapting to digital public squares</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-british-racing-green mb-4">
              Explore the Network of Freedom
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              See how these principles connect with the people, institutions, and ideas that shaped British culture 
              in our interactive visualisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/visualisation"
                className="btn-british btn-primary px-6 py-3"
              >
                Explore Culture Graph
              </Link>
              <Link
                to="/contributors"
                className="btn-british btn-secondary px-6 py-3"
              >
                Meet the Contributors
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrinciplesPage 