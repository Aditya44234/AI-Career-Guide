# ✨ Resume-Driven Job Recommender MVP — _Adi’s Builds_

A stateless, modular backend paired with a glowing, premium UI that transforms resumes into tailored job recommendations using AI-powered skill extraction and real-time job feeds.

## 🚀 Overview

This MVP parses user resumes, extracts key skills using AI, and queries the JSearch API to deliver curated job listings. Designed for speed, modularity, and emotional resonance, it skips database persistence for now — but is architected to scale.

## 🧠 Features

- **Stateless Backend Architecture**  
  Clean separation of routes, controllers, services, and utils for maintainability and clarity.

- **AI-Powered Skill Extraction**  
  Uses OpenAI to intelligently extract relevant skills from user resumes.

- **Real-Time Job Feed Integration**  
  Connects to JSearch API to fetch jobs based on extracted skills and user preferences.

- **Glowing UI Cards**  
  Premium frontend with animated micro-interactions and modular card layouts for job results.

- **Rapid Prototyping & Debugging**  
  Minimalist npm stack with production-ready modules for speed and reliability.

## 🧱 Tech Stack

| Layer     | Tools & Frameworks                                |
| --------- | ------------------------------------------------- |
| Frontend  | React.js, TypeScript, Tailwind CSS, Framer Motion |
| Backend   | Node.js, Express.js, OpenAI API, JSearch API      |
| Utilities | Multer (resume upload), dotenv, axios             |
| Dev Tools | Postman, VSCode, GitHub                           |

## 📁 Project Structure

```
Adi’s Builds/
├── client/                # Glowing frontend
│   ├── components/        # Modular UI components
│   └── pages/             # Resume upload & job results
├── server/                # Stateless backend
│   ├── routes/            # API endpoints
│   ├── controllers/       # Request logic
│   ├── services/          # AI + job feed integration
│   └── utils/             # File parsing, error handling
```

## 🔐 API Integration

- **OpenAI API**  
  Extracts skills from uploaded resumes using GPT-based prompts.

- **JSearch API**  
  Queries job listings based on extracted skills and optional location filters.

## 🧪 How to Run Locally

```bash
# Backend
cd server
npm install
npm run dev

# Frontend
cd client
npm install
npm run dev
```

> Ensure `.env` contains valid API keys for OpenAI and JSearch.

## 📦 NPM Modules Used

- `express`, `cors`, `dotenv`, `multer`, `axios`
- `openai`, `nodemon` (dev), `framer-motion`, `tailwindcss`

## 🎯 Future Enhancements

- Add database for user history and job tracking
- OAuth login for personalization
- Resume feedback and skill gap analysis
- Job bookmarking and email alerts

## 💡 Philosophy

This build reflects Adi’s vision: blending tradition with technology to create intentional, alive digital experiences. Every interaction is designed to feel premium, purposeful, and emotionally resonant.
