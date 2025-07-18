# real-estate-app

# 🏡 Real Estate App - Fullstack

A modern, fullstack real estate web application for browsing property listings with rich images, pricing, and location details.

## 🚀 Tech Stack

**Frontend**

- React 18 + TypeScript
- Vite (build tool)
- Tailwind CSS v4
- Material UI components
- Deployed on Vercel

**Backend**

- Node.js + Express
- TypeScript
- MySQL with mysql2 driver
- Deployed on Railway

**Database**

- MySQL (hosted on Railway)

## 📁 Project Structure

```
real-estate-app/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.ts
│   │   ├── controllers/
│   │   │   └── propertyController.ts
│   │   ├── models/
│   │   │   └── propertyModel.ts
│   │   ├── routes/
│   │   │   └── propertyRoutes.ts
│   │   ├── scripts/
│   │   │   ├── resize-images.ts
│   │   │   └── update-image-urls.ts
│   │   ├── types/
│   │   │   └── index.ts
│   │   └── server.ts
│   ├── .env.example
│   ├── package.json
│   ├── tsconfig.json
│   └── seed.sql
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── PropertyCard.tsx
│   │   ├── types/
│   │   │   └── Property.ts
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tailwind.config.ts
│   └── vite.config.ts
├── README.md
└── .gitignore
```

## 🌐 Live Demo

- **Frontend**: [https://real-estate-app-frontend.vercel.app](https://real-estate-app-frontend.vercel.app)
- **API**: [https://real-estate-app-production-691f.up.railway.app/api/properties](https://real-estate-app-production-691f.up.railway.app/api/properties)

## 🛠️ Local Development Setup

### Prerequisites

- Node.js 18+ and npm
- MySQL 8.0+ (for local development)
- Git

### 1. Clone Repository

```bash
git clone https://github.com/nebenmor/real-estate-app.git
cd real-estate-app
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create environment file:

```bash
cp .env.example .env
```

Configure your `.env` file:

```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=real_estate

# Server Configuration
PORT=3001
NODE_ENV=development

# CORS Configuration (optional)
FRONTEND_URL=http://localhost:5173
```

**For Production (Railway):**

```env
DB_HOST=shuttle.proxy.rlwy.net
DB_PORT=50553
DB_USER=root
DB_PASSWORD=your_railway_password
DB_NAME=railway
PORT=3001
NODE_ENV=production
```

Start the backend server:

```bash
npm run dev
```

Backend will be available at `http://localhost:3001`

### 3. Database Setup

Import the sample data using one of these methods:

**Option A: MySQL CLI**

```bash
mysql -u root -p
CREATE DATABASE real_estate;
USE real_estate;
SOURCE seed.sql;
```

**Option B: Database GUI (TablePlus, phpMyAdmin, etc.)**

- Connect to your MySQL instance
- Create database `real_estate`
- Import and execute `seed.sql`

### 4. Frontend Setup

```bash
cd ../frontend
npm install
```

Update API endpoint in `src/App.tsx` if needed:

```typescript
// For local development
const API_URL = "http://localhost:3001/api/properties";

// For production
const API_URL = "https://your-backend-url.railway.app/api/properties";
```

Start the frontend server:

```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

## 📝 Environment Variables

### Backend (.env)

| Variable      | Description    | Example         |
| ------------- | -------------- | --------------- |
| `DB_HOST`     | MySQL host     | `localhost`     |
| `DB_PORT`     | MySQL port     | `3306`          |
| `DB_USER`     | MySQL username | `root`          |
| `DB_PASSWORD` | MySQL password | `your_password` |
| `DB_NAME`     | Database name  | `real_estate`   |
| `PORT`        | Server port    | `3001`          |
| `NODE_ENV`    | Environment    | `development`   |

### Security Notes

- Never commit `.env` files to version control
- Use strong, unique passwords for production
- Consider using environment-specific configurations
- Regularly rotate database credentials in production

## 🚀 Deployment

### Frontend (Vercel)

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Root Directory: `frontend`

### Backend (Railway)

1. Connect GitHub repository to Railway
2. Set root directory to `backend`
3. Configure environment variables in Railway dashboard
4. Railway will automatically deploy on push to main branch

## 📋 Available Scripts

### Backend

```bash
npm run dev          # Start development server with hot reload
npm run build        # Compile TypeScript to JavaScript
npm start            # Start production server
npm run lint         # Run ESLint
```

### Frontend

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## ✨ Features

- **Property Listings**: Browse properties with images, prices, and details
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **RESTful API**: Clean API architecture with proper error handling
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Material UI components with custom styling
- **Image Optimization**: Automatic image resizing and optimization
- **Production Ready**: Deployed with proper CI/CD pipeline

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Troubleshooting

### Common Issues

**Database Connection Error**

- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists and is accessible

**CORS Error**

- Update `FRONTEND_URL` in backend `.env`
- Check API endpoint URL in frontend

**Build Errors**

- Clear node_modules and reinstall dependencies
- Check Node.js version compatibility
- Verify all environment variables are set

### Getting Help

- Check the [Issues](https://github.com/nebenmor/real-estate-app/issues) page
- Review deployment logs on Railway/Vercel
- Ensure all dependencies are up to date
