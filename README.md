# Multi-Agent Debate Arena

## 📖 Professional Summary
The Multi-Agent Debate Arena is a comprehensive, microservices-based platform designed to facilitate real-time, AI-driven debates. Leveraging a robust monorepo structure, the application integrates a high-performance Python-based AI service, a scalable Node.js API gateway, and a modern, responsive React frontend. It utilizes LangGraph and Gemini for advanced agentic interactions, MongoDB for persistent storage, and WebSocket communication (Socket.io) for seamless, real-time data flow between the AI agents and the user interface.

## 🏗️ Software Development Architecture
The system follows a modern three-tier microservices architecture:

1. **Frontend Presentation Layer (React + TypeScript + Vite)**
   - Delivers a fast, interactive user interface.
   - Communicates with the backend gateway via REST APIs and WebSockets for real-time debate visualization.

2. **API Gateway Layer (Node.js + Express + Socket.io)**
   - Acts as the central orchestrator and proxy.
   - Manages user authentication (JWT), database operations (MongoDB Atlas), and maintains persistent WebSocket connections with clients.
   - Routes debate-specific tasks and AI logic to the dedicated AI Service.

3. **AI Core Service Layer (Python + FastAPI + LangGraph)**
   - Dedicated engine for running complex, multi-agent debate simulations.
   - Integrates with Large Language Models (Gemini API) using LangGraph to manage agent state and debate flow.
   - Exposes a high-speed, asynchronous API via FastAPI for communication with the API Gateway.

## 🚀 Quick Start

### Prerequisites
- Python 3.11+
- Node.js 18+
- pip / npm

### 1. AI Service (Terminal 1)
```bash
cd backend/ai-service
pip install -r requirements.txt
python main.py
# Runs on http://localhost:8000
```

### 2. Gateway (Terminal 2)
```bash
cd backend/gateway
npm install
npm run dev
# Runs on http://localhost:3001
```

### 3. Frontend (Terminal 3)
```bash
cd frontend
npm install
npm run dev
# Runs on http://localhost:5173
```

## 📁 Project Structure
```text
multiagent1/
├── backend/
│   ├── ai-service/     # Python FastAPI + LangGraph
│   └── gateway/        # Node.js Express + Socket.io
└── frontend/           # React TypeScript + Vite
```

## 🔧 Environment Variables
- `backend/ai-service/.env` — `GEMINI_API_KEY`
- `backend/gateway/.env` — `MONGO_ATLAS_URI`, `JWT_SECRET`, `AI_SERVICE_URL`
