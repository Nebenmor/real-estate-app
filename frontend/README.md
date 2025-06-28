# 🎨 Real Estate App - Frontend

A modern React frontend application for browsing real estate properties with a beautiful, responsive interface built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 4+ (fast development & building)
- **Styling**: Tailwind CSS v4 + Material UI
- **State Management**: React Hooks (useState, useEffect)
- **HTTP Client**: Fetch API
- **Deployment**: Vercel
- **Package Manager**: npm

## 📁 Project Structure

```
frontend/
├── public/
│   ├── vite.svg                 # Vite default icon
│   └── favicon.ico              # App favicon
├── src/
│   ├── components/
│   │   └── PropertyCard.tsx     # Property display component
│   ├── types/
│   │   └── Property.ts          # TypeScript type definitions
│   ├── styles/
│   │   └── index.css            # Global styles and Tailwind imports
│   ├── utils/
│   │   └── api.ts               # API utility functions
│   ├── App.tsx                  # Main application component
│   ├── main.tsx                 # React DOM entry point
│   └── vite-env.d.ts            # Vite type definitions
├── .env.example                 # Environment variables template
├── .gitignore
├── index.html                   # HTML template
├── package.json
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── tsconfig.node.json           # TypeScript config for Vite
├── vite.config.ts               # Vite configuration
└── README.md
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- Modern web browser

### Installation

1. **Clone and navigate to frontend directory**

   ```bash
   git clone https://github.com/nebenmor/real-estate-app.git
   cd real-estate-app/frontend
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

4. **Configure your `.env` file**

   ```env
   # API Configuration
   VITE_API_URL=http://localhost:3001
   VITE_API_BASE_URL=http://localhost:3001/api

   # App Configuration
   VITE_APP_TITLE=Real Estate App
   VITE_APP_VERSION=1.0.0

   # Development
   VITE_DEV_MODE=true
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## 📝 Environment Variables

| Variable            | Description                 | Required | Default           | Example                     |
| ------------------- | --------------------------- | -------- | ----------------- | --------------------------- |
| `VITE_API_URL`      | Backend API base URL        | ✅       | -                 | `http://localhost:3001`     |
| `VITE_API_BASE_URL` | API endpoints base path     | ✅       | -                 | `http://localhost:3001/api` |
| `VITE_APP_TITLE`    | Application title           | ❌       | `Real Estate App` | `My Real Estate`            |
| `VITE_APP_VERSION`  | App version display         | ❌       | `1.0.0`           | `2.1.3`                     |
| `VITE_DEV_MODE`     | Enable development features | ❌       | `false`           | `true`                      |

### Production Environment (Vercel)

```env
VITE_API_URL=https://your-backend-url.railway.app
VITE_API_BASE_URL=https://your-backend-url.railway.app/api
VITE_APP_TITLE=Real Estate App
VITE_DEV_MODE=false
```

## 🎨 UI Components

### PropertyCard Component

The main component for displaying property information:

```typescript
interface PropertyCardProps {
  property: Property;
  onClick?: (property: Property) => void;
  className?: string;
}
```

**Features:**

- Responsive image display
- Price formatting
- Property details (bedrooms, bathrooms, area)
- Location information
- Hover effects and animations

### Property Type Definition

```typescript
interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  image_url: string;
  description: string;
  created_at: string;
}
```

## 🎯 Features

### Core Features

- **Property Listings**: Grid view of all available properties
- **Responsive Design**: Mobile-first approach with breakpoint optimization
- **Image Loading**: Lazy loading with fallback handling
- **Error Handling**: User-friendly error states and loading indicators
- **Type Safety**: Full TypeScript implementation

### UI/UX Features

- **Modern Design**: Clean, professional interface
- **Hover Effects**: Interactive property cards
- **Loading States**: Skeleton loaders and spinners
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Accessibility**: ARIA labels and keyboard navigation

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors automatically
npm run type-check   # Run TypeScript type checking

# Testing
npm run test         # Run unit tests
npm run test:ui      # Run tests with UI
npm run coverage     # Generate test coverage report

# Utilities
npm run clean        # Clean build artifacts
npm run analyze      # Analyze bundle size
```

## 🎨 Styling & Design

### Tailwind CSS Configuration

```typescript
// tailwind.config.ts
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          700: "#1d4ed8",
        },
        secondary: {
          500: "#6b7280",
          700: "#374151",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
      },
    },
  },
  plugins: [],
};
```

### Material UI Integration

```typescript
// Custom theme integration
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b82f6",
    },
    secondary: {
      main: "#6b7280",
    },
  },
});
```

### Responsive Breakpoints

```css
/* Tailwind CSS responsive utilities */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

## 🔧 Configuration

### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  },
});
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  }
}
```

## 🚀 Deployment

### Vercel Deployment

1. **Connect Repository**

   - Link your GitHub repository to Vercel
   - Set the root directory to `frontend`

2. **Build Configuration**

   ```json
   {
     "buildCommand": "npm run build",
     "outputDirectory": "dist",
     "installCommand": "npm install"
   }
   ```

3. **Environment Variables**
   - Add production environment variables in Vercel dashboard
   - Ensure all `VITE_` prefixed variables are configured

### Manual Deployment

```bash
# Build the application
npm run build

# Preview the build locally
npm run preview

# Deploy dist/ folder to your hosting provider
```

### Build Optimization

The production build includes:

- **Code Splitting**: Automatic route-based splitting
- **Tree Shaking**: Remove unused code
- **Minification**: CSS and JavaScript compression
- **Asset Optimization**: Image and font optimization
- **Bundle Analysis**: Size analysis and recommendations

## 🔍 API Integration

### API Service Layer

```typescript
// src/utils/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const propertyService = {
  async getAllProperties(): Promise<Property[]> {
    const response = await fetch(`${API_BASE_URL}/properties`);
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    return response.json();
  },

  async getPropertyById(id: number): Promise<Property> {
    const response = await fetch(`${API_BASE_URL}/properties/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch property");
    }
    return response.json();
  },
};
```

### Error Handling

```typescript
// Error boundary implementation
const [properties, setProperties] = useState<Property[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchProperties = async () => {
    try {
      setLoading(true);
      const data = await propertyService.getAllProperties();
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, []);
```

## 🧪 Testing

### Testing Setup

```bash
# Install testing dependencies
npm install -D @testing-library/react @testing-library/jest-dom vitest jsdom
```

### Example Tests

```typescript
// PropertyCard.test.tsx
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./PropertyCard";

const mockProperty: Property = {
  id: 1,
  title: "Test Property",
  price: 450000,
  location: "Test Location",
  bedrooms: 2,
  bathrooms: 2,
  area: 1200,
  image_url: "/test-image.jpg",
  description: "Test description",
  created_at: "2024-01-01T00:00:00.000Z",
};

test("renders property card with correct information", () => {
  render(<PropertyCard property={mockProperty} />);

  expect(screen.getByText("Test Property")).toBeInTheDocument();
  expect(screen.getByText("$450,000")).toBeInTheDocument();
  expect(screen.getByText("Test Location")).toBeInTheDocument();
});
```

## 🔍 Troubleshooting

### Common Issues

**Build Errors**

```
Error: Failed to resolve import
```

- Check import paths are correct
- Ensure all dependencies are installed
- Verify TypeScript configuration

**Environment Variables Not Working**

```
Cannot read properties of undefined
```

- Ensure variables are prefixed with `VITE_`
- Restart development server after adding new variables
- Check `.env` file is in the correct location

**API Connection Issues**

```
TypeError: Failed to fetch
```

- Verify backend server is running
- Check `VITE_API_URL` configuration
- Ensure CORS is properly configured on backend

**Styling Issues**

```
Tailwind classes not applying
```

- Check `tailwind.config.ts` content paths
- Ensure PostCSS is configured correctly
- Verify CSS imports in `main.tsx`

### Debug Mode

Enable debug features:

```env
VITE_DEV_MODE=true
```

This enables:

- Console logging for API calls
- Component render debugging
- Performance monitoring

## 🔒 Security Best Practices

- **Environment Variables**: Never expose sensitive data in frontend
- **API Calls**: Always validate and sanitize user inputs
- **Dependencies**: Keep packages updated and audit regularly
- **Content Security**: Implement proper CSP headers
- **HTTPS**: Always use HTTPS in production

## 📱 Progressive Web App (PWA)

Add PWA capabilities:

```bash
npm install -D vite-plugin-pwa
```

```typescript
// vite.config.ts
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg}"],
      },
    }),
  ],
});
```

## 🤝 Contributing

1. Follow React best practices and hooks patterns
2. Use TypeScript strictly with proper type definitions
3. Follow the established component structure
4. Add tests for new components
5. Use Tailwind CSS for styling consistency
6. Ensure responsive design across all breakpoints

## 📄 License

This project is licensed under the MIT License.
