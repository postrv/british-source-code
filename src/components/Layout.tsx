import { ReactNode, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X, Github, ExternalLink } from 'lucide-react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Contributors', href: '/contributors' },
    { name: 'Modules', href: '/modules' },
    { name: 'Visualisation', href: '/visualisation' },
  ]

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container-british">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <span className="text-2xl">🇬🇧</span>
              <div>
                <h1 className="text-xl font-bold text-british-racing-green">
                  British Source Code
                </h1>
                <p className="text-sm text-gray-600 hidden sm:block">
                  A cultural repository documenting British society
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'bg-union-jack-blue text-white'
                      : 'text-gray-700 hover:text-union-jack-blue hover:bg-gray-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://github.com/postrv/british-source-code"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-union-jack-blue hover:bg-gray-100 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ExternalLink size={12} />
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-union-jack-blue hover:bg-gray-100"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-gray-200 py-4"
            >
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-union-jack-blue text-white'
                        : 'text-gray-700 hover:text-union-jack-blue hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="https://github.com/postrv/british-source-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-union-jack-blue hover:bg-gray-100 transition-colors"
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container-british py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-british-racing-green mb-4">
                British Source Code
              </h3>
              <p className="text-gray-600 text-sm">
                A living document of British culture, constantly being debugged, 
                occasionally breaking in unexpected ways, and featuring comments 
                more entertaining than the implementation.
              </p>
            </div>
            
            <div>
              <h4 className="text-md font-semibold text-british-racing-green mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="text-gray-600 hover:text-union-jack-blue transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold text-british-racing-green mb-4">
                Acknowledgments
              </h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• The countless unnamed contributors to British culture</li>
                <li>• Everyone who has ever formed an orderly queue</li>
                <li>• The inventors of the Full English Breakfast</li>
                <li>• Whoever first thought to put milk in tea</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-gray-600">
              © 2025 British Source Code. Licensed under CC BY 4.0
            </p>
            <p className="text-sm text-gray-600 mt-2 sm:mt-0">
              Version 1.0.0 - Still fixing that rain-on-bank-holiday bug
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 