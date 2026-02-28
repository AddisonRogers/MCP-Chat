# FSP MCP Client React App

A modern React application built with TypeScript, Vite, and Tailwind CSS, featuring AI integration and Model Context Protocol (MCP) support.

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm package manager

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
    - Copy `.env` file and configure your environment variables
```dotenv
VITE_AZURE_RESOURCE_NAME=
VITE_AZURE_API_KEY=
VITE_AZURE_MODEL_NAME=
VITE_AZURE_MCP_ENDPOINT=
```


4. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📦 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run lint` - Run Biome to check code quality and format
- `npm run preview` - Preview the production build locally

## 🛠 Tech Stack

### Core Framework
- **React** (v19.1.1) - UI library
- **TypeScript** (v5.8.3) - Type-safe JavaScript
- **Vite** (v7.1.7) - Fast build tool and development server

### Styling & UI
- **Tailwind CSS** (v4.1.13) - Utility-first CSS framework
- **Shadcn / Radix UI** - Accessible UI components
    - Dialog, Label, Slot components
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variant utilities

### AI & Data Fetching
- **AI SDK** (v5.0.59) - AI integration toolkit
- **Azure AI SDK** (v2.0.42) - Azure AI services
- **Model Context Protocol SDK** (v1.18.2) - MCP integration
- **TanStack Query** (v5.90.2) - Data fetching and caching
- **Ky** (v1.11.0) - HTTP client

### Content & Documentation
- **React Markdown** (v10.1.0) - Markdown rendering
- **Rehype Highlight** (v7.0.2) - Syntax highlighting

### Development Tools
- **Biome** (v2.4.4) - Fast all-in-one toolchain for web projects
- **Vite Plugin React SWC** - Fast React refresh

## 📁 Project Structure
```

src/
├── assets/          # Static assets (images, icons, etc.)
├── components/      # Reusable React components
│   ├── chat/        # Chat-related components
│   └── ui/          # UI components (likely shadcn/ui)
├── contexts/        # React context providers
├── lib/             # Utility functions and configurations
├── pages/           # Page components
├── providers/       # Provider components
├── queries/         # TanStack Query hooks
├── types/           # TypeScript type definitions
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── index.css        # Global styles
```
## ⚙️ Configuration

### Vite Configuration
- Uses SWC for fast React refresh
- Tailwind CSS integration
- Path aliasing (`@` → `src/`)

### Biome Configuration
- Fast linting and formatting
- TypeScript support
- JSX/React support

### Tailwind CSS
- Configured with shadcn/ui compatibility
- CSS variables for theming
- Lucide icons integration

### TypeScript
- Strict type checking
- Multiple tsconfig files for different environments
- Modern ES2020 target

## 🎨 UI Components

This project uses shadcn/ui components with the following configuration:
- **Style**: New York
- **Base Color**: Neutral
- **CSS Variables**: Enabled
- **Icons**: Lucide React

## 🔧 Environment Setup

The application requires environment variables to be configured in the `.env` file. Make sure to set up the necessary variables for:
- AI service configurations
- API endpoints
- Authentication tokens

## 🏗 Build & Deployment

### Production Build
```bash
npm run build
```
```


This creates an optimized build in the `dist/` directory.

### Preview Production Build
```shell script
npm run preview
```


## 📝 Code Quality

The project maintains code quality through:
- **Biome** for code linting and formatting
- **TypeScript** for type safety

Run linting:
```shell script
npm run lint
```


## 🤝 Development

### Adding New Components
- Place reusable components in `src/components/`
- Use TypeScript for all components
- Follow the existing naming conventions
- Utilize Tailwind CSS for styling

### State Management
- Use React Context for global state (see `src/contexts/`)
- TanStack Query for server state management
- Local component state with React hooks

### Styling Guidelines
- Use Tailwind CSS utility classes
- Leverage CSS variables for theming
- Follow the shadcn/ui component patterns

## 📚 Key Dependencies

| Package | Purpose |
|---------|---------|
| `@ai-sdk/azure` | Azure AI services integration |
| `@modelcontextprotocol/sdk` | Model Context Protocol support |
| `@tanstack/react-query` | Server state management |
| `react-markdown` | Markdown content rendering |
| `tailwindcss` | Utility-first CSS framework |
| `lucide-react` | Icon library |

## 🚀 Getting Started with Development

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Open browser**: Navigate to `http://localhost:5173`
4. **Start coding**: The app will hot-reload as you make changes

---

For more information about the technologies used:
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [shadcn/ui Documentation](https://ui.shadcn.com)