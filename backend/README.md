# 🔧 Real Estate App - Backend API

A robust Node.js/Express API backend for the Real Estate application, providing RESTful endpoints for property management with MySQL database integration.

## 🚀 Tech Stack

- **Runtime**: Node.js 18+
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MySQL 8.0+ with mysql2 driver
- **Development**: ts-node-dev for hot reload
- **Deployment**: Railway

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── database.ts          # MySQL connection pool configuration
│   ├── controllers/
│   │   └── propertyController.ts # Business logic for property endpoints
│   ├── models/
│   │   └── propertyModel.ts     # Database queries and data access layer
│   ├── routes/
│   │   └── propertyRoutes.ts    # Express route definitions
│   ├── scripts/
│   │   ├── resize-images.ts     # Image optimization utility
│   │   └── update-image-urls.ts # Database image URL updater
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   └── server.ts                # Express app entry point
├── .env.example                 # Environment variables template
├── .gitignore
├── package.json
├── seed.sql                     # Database schema and sample data
├── tsconfig.json                # TypeScript configuration
└── README.md
```

## 🛠️ Quick Start

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn
- MySQL 8.0 or higher

### Installation

1. **Clone and navigate to backend directory**

   ```bash
   git clone https://github.com/nebenmor/real-estate-app.git
   cd real-estate-app/backend
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
   # Database Configuration
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=real_estate

   # Server Configuration
   PORT=3001
   NODE_ENV=development

   # CORS Configuration
   FRONTEND_URL=http://localhost:5173
   ```

5. **Set up the database**

   ```bash
   # Connect to MySQL
   mysql -u root -p

   # Create database and import schema
   CREATE DATABASE real_estate;
   USE real_estate;
   SOURCE seed.sql;
   ```

6. **Start the development server**
   ```bash
   npm run dev
   ```

The API will be available at `http://localhost:3001`

## 📝 Environment Variables

| Variable       | Description           | Required | Default       | Example                 |
| -------------- | --------------------- | -------- | ------------- | ----------------------- |
| `DB_HOST`      | MySQL database host   | ✅       | -             | `localhost`             |
| `DB_PORT`      | MySQL database port   | ✅       | -             | `3306`                  |
| `DB_USER`      | MySQL username        | ✅       | -             | `root`                  |
| `DB_PASSWORD`  | MySQL password        | ✅       | -             | `your_password`         |
| `DB_NAME`      | Database name         | ✅       | -             | `real_estate`           |
| `PORT`         | Server port           | ❌       | `3001`        | `3001`                  |
| `NODE_ENV`     | Environment mode      | ❌       | `development` | `production`            |
| `FRONTEND_URL` | Frontend URL for CORS | ❌       | `*`           | `http://localhost:5173` |

### Production Environment (Railway)

```env
DB_HOST=shuttle.proxy.rlwy.net
DB_PORT=50553
DB_USER=root
DB_PASSWORD=your_railway_generated_password
DB_NAME=railway
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.vercel.app
```

## 🛣️ API Endpoints

### Properties

| Method   | Endpoint              | Description         | Response                  |
| -------- | --------------------- | ------------------- | ------------------------- |
| `GET`    | `/api/properties`     | Get all properties  | Array of property objects |
| `GET`    | `/api/properties/:id` | Get property by ID  | Single property object    |
| `POST`   | `/api/properties`     | Create new property | Created property object   |
| `PUT`    | `/api/properties/:id` | Update property     | Updated property object   |
| `DELETE` | `/api/properties/:id` | Delete property     | Success message           |

### Health Check

| Method | Endpoint  | Description          | Response                             |
| ------ | --------- | -------------------- | ------------------------------------ |
| `GET`  | `/health` | Server health status | `{ status: "OK", timestamp: "..." }` |

## 📋 API Documentation

### Get All Properties

```http
GET /api/properties
```

**Response:**

```json
[
  {
    "id": 1,
    "title": "Modern Downtown Apartment",
    "price": 450000,
    "location": "Downtown, NY",
    "bedrooms": 2,
    "bathrooms": 2,
    "area": 1200,
    "image_url": "/uploads/property1.jpg",
    "description": "Beautiful modern apartment...",
    "created_at": "2024-01-15T10:30:00.000Z"
  }
]
```

### Get Property by ID

```http
GET /api/properties/:id
```

**Parameters:**

- `id` (number): Property ID

**Response:**

```json
{
  "id": 1,
  "title": "Modern Downtown Apartment",
  "price": 450000,
  "location": "Downtown, NY",
  "bedrooms": 2,
  "bathrooms": 2,
  "area": 1200,
  "image_url": "/uploads/property1.jpg",
  "description": "Beautiful modern apartment...",
  "created_at": "2024-01-15T10:30:00.000Z"
}
```

### Create Property

```http
POST /api/properties
Content-Type: application/json
```

**Request Body:**

```json
{
  "title": "New Property",
  "price": 350000,
  "location": "Suburbs, NY",
  "bedrooms": 3,
  "bathrooms": 2,
  "area": 1500,
  "image_url": "/uploads/new-property.jpg",
  "description": "Spacious family home..."
}
```

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Compile TypeScript to JavaScript
npm start            # Start production server

# Database
npm run seed         # Run database seeding script
npm run migrate      # Run database migrations

# Utilities
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run type-check   # Run TypeScript type checking

# Image Processing
npm run resize-images    # Optimize property images
npm run update-urls      # Update image URLs in database
```

## 🗄️ Database Schema

### Properties Table

```sql
CREATE TABLE properties (
  id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  price DECIMAL(10, 2) NOT NULL,
  location VARCHAR(255) NOT NULL,
  bedrooms INT NOT NULL,
  bathrooms INT NOT NULL,
  area INT NOT NULL,
  image_url VARCHAR(500),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## 🔧 Configuration

### TypeScript Configuration

The project uses strict TypeScript configuration with the following key settings:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### Database Connection

The application uses connection pooling for optimal performance:

```typescript
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
```

## 🚀 Deployment

### Railway Deployment

1. **Connect Repository**

   - Link your GitHub repository to Railway
   - Set the root directory to `backend`

2. **Environment Variables**

   - Configure all required environment variables in Railway dashboard
   - Use Railway's provided MySQL database credentials

3. **Build Configuration**
   ```json
   {
     "build": {
       "builder": "NIXPACKS"
     },
     "deploy": {
       "startCommand": "npm start",
       "restartPolicyType": "ON_FAILURE"
     }
   }
   ```

### Manual Deployment

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🛡️ Security Considerations

- **Environment Variables**: Never commit `.env` files
- **Database**: Use strong passwords and limit database access
- **CORS**: Configure appropriate origins for production
- **Input Validation**: Validate all incoming data
- **Error Handling**: Don't expose sensitive information in error messages

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch
```

## 🔍 Troubleshooting

### Common Issues

**Database Connection Failed**

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

- Verify MySQL is running
- Check database credentials in `.env`
- Ensure database exists

**Port Already in Use**

```
Error: listen EADDRINUSE: address already in use :::3001
```

- Change `PORT` in `.env` file
- Kill existing process: `lsof -ti:3001 | xargs kill`

**TypeScript Compilation Errors**

- Run `npm run type-check` to identify issues
- Ensure all dependencies are installed
- Check `tsconfig.json` configuration

### Debug Mode

Enable debug logging:

```bash
DEBUG=* npm run dev
```

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Add tests for new features
3. Update documentation for API changes
4. Use TypeScript strictly
5. Follow the established naming conventions

## 📄 License

This project is licensed under the MIT License.
