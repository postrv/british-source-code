import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PrinciplesPage from './pages/PrinciplesPage'
import ContributorsPage from './pages/ContributorsPage'
import ModulesPage from './pages/ModulesPage'
import VisualisationPage from './pages/VisualisationPage'
import ContributorDetailPage from './pages/ContributorDetailPage'
import ModuleDetailPage from './pages/ModuleDetailPage'
import DependenciesPage from './pages/DependenciesPage'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Layout>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/principles" element={<PrinciplesPage />} />
            <Route path="/contributors" element={<ContributorsPage />} />
            <Route path="/contributors/:id" element={<ContributorDetailPage />} />
            <Route path="/modules" element={<ModulesPage />} />
            <Route path="/modules/:id" element={<ModuleDetailPage />} />
            <Route path="/dependencies" element={<DependenciesPage />} />
            <Route path="/visualisation" element={<VisualisationPage />} />
            <Route path="/visualization" element={<VisualisationPage />} />
            <Route path="*" element={<div className="text-center py-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
              <p className="text-xl text-gray-600">Rather like looking for a decent cup of tea in America</p>
            </div>} />
          </Routes>
        </motion.div>
      </Layout>
    </div>
  )
}

export default App
