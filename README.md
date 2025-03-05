# Blog Platform

## 📌 Overview
A simple blog platform built using **React.js, TypeScript, and Tailwind CSS** for the frontend, along with a **Node.js (NestJS) backend** and **MongoDB** as the database. The platform allows users to create, view, and manage blog posts.

## 🚀 Features
-  **Create, Read, and View Blog Posts**
-  **Beautiful UI with Tailwind CSS & Framer Motion**
-  **Real-time updates & smooth transitions**
-  **Secure API integration with Axios**
-  **Interactive animations using Framer Motion**
-  **Toast notifications for feedback (React-Toastify)**

## 🛠️ Tech Stack
### Frontend
- **React.js** with **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React-Toastify** for notifications
- **React Router** for navigation

### Backend
- **Node.js** with **NestJS**
- **PostgreSQL** database
- **Mongoose (if MongoDB is used)**
- **Express.js** (if required)

## 📦 Installation
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/AngeloEsam/Task-Nest-React.git

```

2️⃣ Run the Frontend
```sh
cd frontend
npm install
npm run dev
```
The React app will run on http://localhost:5173 (default Vite port).
3️⃣ Run the Backend
```sh
cd backend
npm install
npm start
```
The NestJS server will start on http://localhost:3000.

📌 API Endpoints (Backend)
Method	Endpoint	Description
- **GET	/posts	Fetch all blog posts**
- **GET	/posts/:id	Get a single post**
- **POST	/posts	Create a new post**


## 🔥 Usage
- **Create a post**: Fill in the title, author, and content.
- **View a post**: Click on any post to see details.
- **Navigate back**: Use the "Back" button to return.
