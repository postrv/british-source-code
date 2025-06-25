# 🇬🇧 British Source Code

> *A living document of British culture, constantly being debugged, occasionally breaking in unexpected ways, and featuring comments more entertaining than the implementation.*

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy%20with-Cloudflare%20Pages-orange)](https://developers.cloudflare.com/pages/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## 📖 About

British Source Code is a cultural repository that documents the fundamental building blocks of British society. Like any mature codebase, it contains legacy features, deprecated functions, hotly debated design patterns, and the occasional inexplicable quirk that everyone's too fond of to refactor.

This interactive platform explores over 2,000 years of British cultural development through:
- **Interactive Graph Visualization**: A dynamic network showing relationships between people, institutions, concepts, and practices
- **Comprehensive Contributor Profiles**: Detailed information about key figures who shaped British culture
- **Modular Architecture**: Core cultural "modules" that form the foundation of British society
- **Rich Historical Context**: From Roman Britain to the modern day

## 🚀 Features

### 🕸️ Interactive Culture Graph
- **Dynamic Network Visualization**: Powered by Cytoscape.js for smooth, interactive exploration
- **Multi-layered Relationships**: See how Shakespeare influenced British humour, how Parliament shaped common law, and how tea culture reinforced social order
- **Intelligent Search**: Find specific people, concepts, or institutions instantly
- **Type-based Filtering**: Focus on particular categories (people, institutions, concepts, practices, events, places, artifacts)
- **Detailed Node Inspection**: Click any element for comprehensive information including:
  - Historical context and significance
  - Key contributions and cultural impact
  - Modern relevance and legacy
  - Fun facts and notable quotes
  - Related concepts and connections

### 👥 Contributors Section
- **Historical Figures**: From William Shakespeare to Alan Turing
- **Detailed Biographies**: Period context, major contributions, cultural impact
- **Cross-references**: See how contributors influenced each other and British culture

### 🧩 Cultural Modules
- **Core Systems**: Humour, queuing, tea culture, class consciousness
- **Implementation Details**: How each cultural "module" works in practice
- **Dependencies**: Understanding how different aspects of British culture rely on each other

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom British-themed color palette
- **Visualization**: Cytoscape.js for graph rendering
- **Animation**: Framer Motion for smooth transitions
- **Routing**: React Router for navigation
- **Icons**: Lucide React
- **Deployment**: Cloudflare Pages
- **Build Tool**: Vite

## 🏃‍♂️ Quick Start

```bash
# Clone the repository
git clone https://github.com/british-source-code/british-source-code.git
cd british-source-code

# Install dependencies
npm install

# Set up environment (optional)
export WEATHER=disappointing
export STIFF_UPPER_LIP=true

# Start development server
npm run dev

# Build for production
npm run build

# Deploy to Cloudflare Pages
npm run deploy
```

Visit `http://localhost:3000` to explore British culture locally.

## 📊 Current Data Coverage

- **📍 Nodes**: 25+ cultural elements spanning 1,200+ years (Alfred the Great to Alan Turing)
- **🔗 Relationships**: 23+ documented connections with comprehensive evidence
- **👤 People**: Alfred the Great, Chaucer, Shakespeare, Elizabeth I, Newton, Austen, Dickens, Burns, Smith, Darwin, Churchill, Turing
- **🏛️ Institutions**: Parliament, BBC, Royal Society, Church of England
- **💭 Concepts**: Fair play, common law, British humour, understatement, class system
- **🎭 Practices**: Tea culture, queuing, pub culture, Sunday roast, cricket, parliamentary procedure
- **🏴󠁧󠁢󠁳󠁣󠁴󠁿 Regional Coverage**: Enhanced Scottish representation (Burns, Smith) with Welsh and Northern Irish additions planned

## 🎯 Project Structure

```
src/
├── components/
│   ├── CultureGraph.tsx      # Interactive graph visualization
│   └── Layout.tsx            # Site navigation and footer
├── data/
│   └── cultureGraph.ts       # Cultural data model and relationships
├── pages/
│   ├── HomePage.tsx          # Landing page
│   ├── VisualisationPage.tsx # Main graph interface
│   ├── ContributorsPage.tsx  # People who shaped Britain
│   └── ModulesPage.tsx       # Cultural building blocks
└── styles/
    └── index.css             # British-themed styling
```

## 🎨 Design Philosophy

### British Aesthetic
- **Color Palette**: Union Jack Red (#CF142B), Union Jack Blue (#00247D), British Racing Green (#004225)
- **Typography**: Classic serif fonts (Georgia) for readability and tradition
- **UI Patterns**: Understated elegance with subtle animations

### Cultural Authenticity
- Self-deprecating humor in copy and error messages
- Proper British spelling ("visualisation" not "visualization")
- Tea-time appropriate loading states
- Queue-respectful user interactions

## 🤝 Contributing

We welcome contributions to expand and improve the cultural dataset! See our [contribution guidelines](CONTRIBUTING.md) for details on:

- Adding new historical figures
- Documenting cultural practices
- Expanding relationship networks
- Improving data quality and sources

## 📚 Data Sources

All cultural information is researched and cross-referenced from:
- Academic historical sources
- Museum collections
- BBC archives
- Wikipedia (with verification)
- Primary historical documents

## 🔧 Development

### Environment Setup
```bash
# TypeScript checking
npm run typecheck

# Linting
npm run lint

# Local development with hot reload
npm run dev

# Build and preview
npm run build && npm run preview
```

### Adding New Cultural Data
1. Update `src/data/cultureGraph.ts` with new nodes and edges
2. Ensure all relationships have proper evidence
3. Add Wikipedia links where available
4. Test visualization with new data

## 🚀 Deployment

Deployed automatically to Cloudflare Pages on every push to main branch.

### Manual Deployment
```bash
npm run build
npm run deploy
```

## 📄 License

This project is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) - you are free to use, share, and adapt the content with attribution.

The code is available under MIT License for the technical implementation.

## 🙏 Acknowledgments

- The countless unnamed contributors to British culture
- Everyone who has ever formed an orderly queue
- The inventors of the Full English Breakfast
- Whoever first thought to put milk in tea
- All the brilliant minds who built the tools and libraries that make this possible

## 📞 Support

- 🐛 **Issues**: [GitHub Issues](https://github.com/british-source-code/british-source-code/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/british-source-code/british-source-code/discussions)
- 📧 **Contact**: hello@british-source-code.org

---

*"It is a truth universally acknowledged that a cultural repository in possession of good data must be in want of more contributors."* - Jane Austen (probably)
