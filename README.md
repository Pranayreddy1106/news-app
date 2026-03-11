# newsApp - Professional News Aggregation Platform
A modern, production-ready web application for tracking and managing global news with professional AI insights, built with Node.js, React, and MongoDB.

## Overview
**newsApp** is a comprehensive news management system designed for professionals and individuals looking to stay informed with minimal effort. The application provides intuitive news discovery, detailed AI-powered summaries, and professional insights into global trends.

### Key Highlights:
*   **Professional, modern UI** with dark mode support
*   **Real-time news tracking** and live feed aggregation
*   **AI-Powered Insights** with Google Gemini integration
*   **Responsive design** for all devices (Mobile, Tablet, Desktop)
*   **Secure JWT-based authentication** for personal dashboards
*   **RESTful API architecture** for high-performance data delivery

---

## Features

### User Management
*   **User registration** with secure credential handling
*   **Secure login** with JWT authentication
*   **Persistent sessions** with local token management
*   **Profile integration** (Saved summaries and personalized feed)

### News Discovery & Management
*   **Live News Feed**: Real-time headlines from global sources via GNews API.
*   **Dynamic Filtering**: 6+ news categories including Technology, Business, Sports, and Science.
*   **Keyword search functionality** for deep-dive research.
*   **Trending section** for immediate awareness of breaking stories.

### AI Powered Summarization
*   **Instant AI Summaries**: Condense long articles into bullet points using Gemini 1.5 Flash.
*   **Multiple Perspectives**: Generate summaries, ELI5 explanations, or social-media-ready tweets.
*   **Save & Archive**: Store AI-generated insights to your personal collection for later reading.

### Data Visualization & UI
*   **Interactive Article Cards**: Clean, grid-based layout with hover effects.
*   **Detailed Modals**: Immersive reading experience without leaving the page.
*   **Professional Dashboard**: Access saved summaries in an organized list view.
*   **Dark/Light theme toggle** for eye-comfort in all environments.
<img width="1900" height="912" alt="image" src="https://github.com/user-attachments/assets/b5af27ff-3529-4885-9662-1c3322939c07" />



---

## Technology Stack

### Frontend
*   **React**: UI library and component framework.
*   **Tailwind CSS**: Utility-first CSS framework for premium styling.
*   **Poppin Typography**: Modern, clean font system for readability.
*   **Lucide React**: Professional icon library.

### Backend
*   **Node.js**: JavaScript runtime for scalable server logic.
*   **Express.js**: High-performance web framework.
*   **Google Gemini AI**: Advanced generative model for summarization.
*   **MongoDB & Mongoose**: NoSQL database for secure data persistence.
*   **JSON Web Tokens**: Industry-standard authentication.

---

## Deployment

### Frontend Deployment
#### Vercel (Recommended)
```bash
npm install -g vercel
cd client
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
cd client
npm run build
netlify deploy --prod --dir build
```

### Backend Deployment
#### Render / Heroku
1. Create a new Web Service.
2. Set Environment Variables (`GNEWS_API_KEY`, `GEMINI_API_KEY`, `MONGO_URI`, `JWT_SECRET`).
3. Set Build Command: `npm install`.
4. Set Start Command: `node server.js`.

### Database Deployment
1. Go to **MongoDB Atlas**.
2. Create a free M0 cluster.
3. Get connection string and set as `MONGO_URI` in environment variables.

---

> Built with passion for information accessibility and professional growth. Start staying informed better today!

---

### About
No description, website, or topics provided.

### Resources
*   [Readme](file:///c:/Users/shank/Downloads/News-Dash-main/News-Dash-main/README.md)
*   Activity

### Stats
*   **0 stars**
*   **0 watching**
*   **0 forks**

### Releases
No releases published.

### Packages
No packages published.

### Languages
*   **JavaScript**: 98.0%
*   **CSS**: 1.8%
*   **HTML**: 0.2%

---
© 2026 newsApp, Inc.
