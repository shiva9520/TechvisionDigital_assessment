# FresherKit MERN Project

This project is a 24-hour assessment solution. It's a full-stack MERN application for freshers, showcasing a simple "FresherKit" e-commerce platform.

## Features
- **Clean UI**: Built with React, Vite, Tailwind CSS v4, and Lucide React.
- **Backend API**: Built with Node.js, Express, and MongoDB.
- **Database Tracking**: Orders are saved to MongoDB.
- **Simulated Payments**: Razorpay integration simulated for standard checkout flow.
- **Clean Architecture**: No TypeScript, no Axios (Fetch used instead).

## Folder Structure
```
assessment/
├── backend/                # Node.js + Express + Mongoose Backend
│   ├── index.js            # Main application server & routes
│   ├── package.json        # Backend dependencies
│   └── vercel.json         # Deployment configuration for Vercel Serverless
└── frontend/               # React + Vite + Tailwind Frontend
    ├── src/
    │   ├── components/     # Reusable UI components (Navbar, Footer)
    │   ├── pages/          # Application views (Home, Checkout, Success)
    │   ├── App.jsx         # Main router and layout
    │   ├── config.js       # App configuration (API URL)
    │   ├── index.css       # Global styles & Tailwind config
    │   └── main.jsx        # React entry point
    ├── vite.config.js      # Vite configuration
    └── package.json        # Frontend dependencies
```

## How to Run Locally

### 1. Backend
```bash
cd backend
npm install
# Set your MONGODB_URI in a .env file or rely on the default local string
npm run dev
```

### 2. Frontend
```bash
cd frontend
npm install
npm run dev
```

## Deployment
Both frontend and backend are ready to be deployed on **Vercel**.
1. Create a new project on Vercel for the `frontend` folder (Framework preset: Vite).
2. Create a new project on Vercel for the `backend` folder (Vercel will use `vercel.json` to deploy as Serverless Functions). Set `MONGODB_URI` environment variable in Vercel settings.
3. Update the `VITE_API_URL` environment variable in the frontend Vercel project to point to your deployed backend URL.
