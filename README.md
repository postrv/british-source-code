# 🇬🇧 British Source Code

> *A living document of British culture, constantly being debugged, occasionally breaking in unexpected ways, and featuring comments more entertaining than the implementation.*

[![Deploy with Cloudflare Pages](https://img.shields.io/badge/Deploy%20with-Cloudflare%20Pages-orange)](https://developers.cloudflare.com/pages/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)

## 📖 About

British Source Code is a cultural repository that documents the fundamental building blocks of British society. Like any mature codebase, it contains legacy features, deprecated functions, hotly debated design patterns, and the occasional inexplicable quirk that everyone's too fond of to refactor.

This interactive platform explores over 2,000 years of British cultural development through:
- **British Principles**: Fundamental values like freedom of speech, rule of law, and fair play that define British democracy
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
git clone https://github.com/postrv/british-source-code.git
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

## 🚀 How to Deploy Your Own Britain

Ready to establish your own digital dominion of British culture? Here's your complete guide to deploying British Source Code:

### Prerequisites
- **Node.js** (v18+ recommended) - for running the modern React application
- **npm** or **yarn** - for dependency management  
- **Cloudflare account** - for hosting your cultural empire
- **Wrangler CLI** - Cloudflare's deployment tool (`npm install -g wrangler`)

### Deployment Options

#### Option 1: Cloudflare Pages (Recommended)
The crown jewel of deployment - automatic builds, global CDN, and proper British efficiency:

```bash
# Install Wrangler globally
npm install -g wrangler

# Authenticate with Cloudflare
wrangler auth login

# Deploy directly
npm run deploy

# Or create a Pages project first
wrangler pages project create british-source-code
wrangler pages deploy dist
```

#### Option 2: Manual Static Hosting
For those who prefer a more hands-on approach:

```bash
# Build the application
npm run build

# The `dist` folder contains your complete static site
# Upload to any static hosting provider:
# - Netlify: drag and drop the dist folder
# - Vercel: vercel --prod
# - GitHub Pages: push dist contents to gh-pages branch
```

#### Option 3: Self-Hosted with Docker
For the truly independent spirits:

```dockerfile
FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Custom Domain Setup
1. **Purchase your domain** (we recommend something quintessentially British)
2. **Configure DNS** - point your domain to Cloudflare Pages
3. **SSL Certificate** - automatically provided by Cloudflare
4. **Update configuration** - modify `wrangler.jsonc` if needed

### Environment Configuration
Create a `.env` file for local development:

```bash
# Optional: Customize your British experience
VITE_WEATHER_MOOD=perpetually_grey
VITE_TEA_PREFERENCE=builders_brew
VITE_QUEUE_TOLERANCE=infinite
```

### Customization Guide
Want to adapt this for your own culture? Here's how:

1. **Update the data** - modify `src/data/cultureGraph.ts`
2. **Change the theme** - edit `tailwind.config.js` colors
3. **Customize content** - update page components in `src/pages/`
4. **Add new features** - extend the graph visualization

### Maintenance & Updates
```bash
# Keep dependencies updated
npm update

# Check for security vulnerabilities  
npm audit

# Update cultural data
# Edit src/data/cultureGraph.ts with new contributors and relationships

# Deploy updates
npm run deploy
```

### Troubleshooting Common Issues

**Build fails?** 
- Check Node.js version (requires v18+)
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

**Deployment issues?**
- Verify Wrangler authentication: `wrangler auth whoami`
- Check Cloudflare account permissions

**Graph not loading?**
- Ensure all data relationships have valid source/target IDs
- Check browser console for JavaScript errors

**Domain not working?**
- Verify DNS settings point to Cloudflare
- Allow 24-48 hours for DNS propagation

### Contributing Your Own Culture
We welcome contributions to expand British cultural coverage:

1. **Fork the repository**
2. **Add new cultural nodes** to `src/data/cultureGraph.ts`
3. **Create relationships** between cultural elements
4. **Test your changes** locally
5. **Submit a pull request** with proper documentation

### Support & Community
- 🐛 Found a bug? [Report it on GitHub](https://github.com/postrv/british-source-code/issues)
- 💡 Have an idea? [Start a discussion](https://github.com/postrv/british-source-code/discussions)
- 📧 Need help? Contact us at hello@britishsourcecode.com

### License & Usage
This project is licensed under CC BY 4.0 - you're free to:
- ✅ Use commercially
- ✅ Modify and adapt
- ✅ Distribute copies
- ✅ Make your own cultural repository

Just remember to credit the original work and maintain the same license for derivatives.

---

*"The art of deploying one's culture lies not in the perfection of the code, but in the quality of the tea consumed during the process."* - Ancient British DevOps Proverb

## 📊 Current Data Coverage

- **📍 Nodes**: 37+ cultural elements spanning 1,200+ years (Alfred the Great to modern institutions)
- **🔗 Relationships**: 45+ documented connections with comprehensive evidence and primary sources
- **👤 People**: Alfred the Great, Chaucer, Shakespeare, Milton, Elizabeth I, Newton, Austen, Dickens, Burns, Smith, Darwin, Churchill, Orwell, Turing, Dylan Thomas, Aneurin Bevan, C.S. Lewis, Seamus Heaney
- **🏛️ Institutions**: Parliament, BBC, Royal Society, Oxford University, Cambridge University
- **💭 Concepts**: Freedom of speech, fair play, common law, British humour, understatement, class system
- **🎭 Practices**: Tea culture, queuing, pub culture, Sunday roast, cricket, parliamentary procedure
- **📸 Authentic Images**: Historical portraits from Wikimedia Commons (no more stock photos!)
- **🏛️ Principles Section**: Deep dive into Freedom of Speech featuring Milton, Orwell, and Magna Carta
- **🏴󠁧󠁢󠁷󠁬󠁳󠁿 Welsh Coverage**: Dylan Thomas (poetry), Aneurin Bevan (NHS founder)
- **🏴󠁧󠁢󠁮󠁩󠁲󠁿 Northern Irish Coverage**: C.S. Lewis (Narnia), Seamus Heaney (Nobel Prize poet)
- **🔗 Interactive Dependencies**: Clickable tags linking related modules and cultural elements

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

### Branch-Based Deployment Strategy

**Important**: This project uses separate branches for different environments:

- **`main` branch** → Preview deployments (`main.british-stuff.pages.dev`)
- **`production` branch** → Production deployments (`british-stuff.pages.dev`)

### Deployment Workflow

1. **Development**: Work on `main` branch as usual
2. **Testing**: Preview changes at `main.british-stuff.pages.dev` 
3. **Production Release**: Push changes to `production` branch

```bash
# After completing features on main branch
git checkout production
git merge main
git push origin production

# Or deploy manually to production
npm run build
npx wrangler pages deploy --branch production
```

### Manual Deployment
```bash
npm run build
npm run deploy
```

**Note**: If the root domain shows an older version whilst the main subdomain shows updates, you need to update the production branch as shown above.

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

- 🐛 **Issues**: [GitHub Issues](https://github.com/postrv/british-source-code/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/postrv/british-source-code/discussions)
- 📧 **Contact**: hello@britishsourcecode.com

---

*"It is a truth universally acknowledged that a cultural repository in possession of good data must be in want of more contributors."* - Jane Austen (probably)
