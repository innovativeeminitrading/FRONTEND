
# Innovative Emini Trading - Frontend

This is the frontend web application for **Innovative Emini Trading**, built using **React** and **Vite**.  
It provides users with authentication, a trading dashboard, chart views, and connection to the backend API.

---

## ✅ Features

- Firebase Authentication (Signup/Login/Logout)
- Admin Role Management
- Trading Dashboard UI
- Live Chart Data (S&P 500, Dow, Qualified Stocks)
- Protected Routes using Firebase Tokens
- Admin Dashboard with Refresh Controls and User List Access

---

## ✅ Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── Dashboard.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── Charts.jsx
│   ├── context/
│   │   └── AuthContext.js
│   ├── App.jsx
│   ├── main.jsx
│   ├── firebase.js
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## ✅ Installation & Setup

1. **Clone the Repository**

```bash
git clone https://github.com/yourusername/innovativeeminitrading-frontend.git
cd innovativeeminitrading-frontend
```

2. **Install Dependencies**

```bash
npm install
```

3. **Firebase Configuration**

- Set up a Firebase project.
- Enable Authentication (Email/Password).
- Create a Web App in Firebase.
- Add Firebase credentials to `src/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

4. **Create Environment File**

- Create a `.env` file for API routes and secrets:

```
VITE_BACKEND_URL=https://your-backend-url.com
```

---

## ✅ Running the App Locally

```bash
npm run dev
```

Default local URL:

```
http://localhost:5173
```

---

## ✅ Deployment Instructions

### Deploy to Firebase Hosting

1. **Install Firebase CLI**

```bash
npm install -g firebase-tools
firebase login
firebase init
firebase deploy
```

2. **Deploy URL**
- Your live frontend will be available at the Firebase Hosting URL provided after deployment.

---

## ✅ Backend Connection Setup

- Ensure your backend API has Firebase token protection.
- Update `VITE_BACKEND_URL` to point to your backend's live or local server.

---

## ✅ Usage Guide

- **Login:** Standard email/password.
- **Admin Dashboard:** Only accessible by admin role users defined in Firebase.
- **Chart Data:** Automatically pulls from backend APIs after login.

---

## ✅ Technologies Used

- React + Vite
- Firebase Authentication
- Express.js (Backend API)
- Chart.js (for graph components)
- Node.js
- CSS/HTML

---

## ✅ Contribution

If you'd like to contribute:

1. Fork the repository
2. Create a new branch
3. Submit a pull request

---

## ✅ License

This project is licensed under the MIT License.

---

## ✅ Contact Information

For questions or support, contact:

**Robert Fordham**  
📧 fordhamrobert733@gmail.com  
🌐 [www.innovativeeminitrading.com](http://www.innovativeeminitrading.com)  