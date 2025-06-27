# 🏡 Real Estate Platform – Backend

This is the **backend API** for the Real Estate Platform. It is built using **Node.js**, **TypeScript**, **Express**, and **MySQL**, and is deployed on **Railway**. It provides RESTful endpoints for managing and retrieving property listings.

---

## 🔧 Tech Stack

- **Node.js**
- **Express**
- **TypeScript**
- **MySQL**
- **mysql2** (Promise-based MySQL client)
- **Railway** (Deployment)
- **TablePlus** (MySQL GUI)

---

## 📁 Project Structure

backend/
├── src/
│ ├── config/
│ │ └── database.ts # MySQL connection pool
│ ├── controllers/
│ │ └── propertyController.ts
│ ├── models/
│ │ └── propertyModel.ts
│ ├── routes/
│ │ └── propertyRoutes.ts
│ ├── types/
│ │ └── Property.ts
│ └── server.ts # Entry point
├── public/
│ └── uploads/ # Hosted images
├── dist/ # Compiled JS output
├── seed.sql # SQL to populate properties
├── package.json
├── tsconfig.json
└── .env

---

## 🌐 API Endpoints

### Base URL (Railway production)

https://real-estate-app-production-691f.up.railway.app/api

---

### GET `/api/properties`

Returns a list of all property listings.

**Example Response:**

```json
[
  {
    "id": 1,
    "title": "Modern Duplex in Lekki",
    "description": "Spacious modern duplex with a private pool and parking.",
    "price": "75000000.00",
    "location": "Lekki, Lagos",
    "bedrooms": 4,
    "bathrooms": 3,
    "area": 280,
    "image_url": "https://real-estate-app-production-xxxx.up.railway.app/uploads/1.jpg",
    "created_at": "2025-06-26T18:00:00.000Z"
  },
  ...
]
GET /api/properties/:id
Returns a specific property by ID.

📦 Running Locally
1. Clone the Repository

git clone https://github.com/<your-username>/real-estate-app.git
cd real-estate-app/backend

2. Install Dependencies
npm install

3. Create .env File

4. Start the Server
npm run dev

🖼️ Images
All images are hosted on the backend in the /uploads folder and can be accessed via:

"scripts": {
  "dev": "ts-node-dev src/server.ts",
  "start": "tsc && node dist/server.js",
  "test": "jest",
  "resize-images": "ts-node src/scripts/resize-images.ts",
  "update-images": "ts-node src/scripts/update-image-urls.ts"
}

🧪 Database Setup
Use the provided seed.sql to create the properties table and seed data:


CREATE TABLE properties (
  id INT PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  price DECIMAL(15,2),
  location VARCHAR(255),
  bedrooms INT,
  bathrooms INT,
  area INT,
  image_url TEXT,
  created_at DATETIME
);
Then insert seed data:


✅ Features
Fetch all property listings

Fetch property by ID

Host and serve image files

Seed database with mock data

Deployed on Railway

📫 Contact
For support or feedback, feel free to open an issue or reach out to the author.


```
