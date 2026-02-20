# 🔐 Login System - JSON Server + LocalStorage

A simple authentication system built using HTML, JavaScript, json-server, and localStorage.

This project demonstrates how login authentication works using a mock REST API and client-side session handling.

---

## 🚀 Features

- ✅ Login validation
- ✅ Fetch API integration
- ✅ json-server as mock backend
- ✅ LocalStorage session handling
- ✅ Protected dashboard page
- ✅ Logout functionality
- ✅ Basic error handling

---

## 🛠️ Tech Stack

- HTML5
- Vanilla JavaScript (ES6)
- Fetch API
- json-server
- LocalStorage

---

## 📂 Project Structure
Latihan-Login-JSON-LocalStorage/
│
├── login.html
├── dashboard.html
├── script.js
├── db.json


---

## ⚙️ How It Works

1. User enters username & password.
2. App sends request to:

http://localhost:3000/users?username=USERNAME&password=PASSWORD


3. If user exists:
   - Save user data to localStorage
   - Redirect to dashboard
4. If not:
   - Show error message

Dashboard page checks:

localStorage.getItem("loggedInUser")


If not found → redirect to login page.

---

## 🧪 How To Run This Project

### 1️⃣ Install json-server

bash
npm install -g json-server

2️⃣ Run Server

Inside project folder:

json-server --watch db.json --port 3000

Server will run at:

http://localhost:3000
3️⃣ Open login.html in browser
🔑 Sample Login Accounts

From db.json:

Username	Password
Adi76	allright
Darmawan76	notright
⚠️ Important Notes

This project is for learning purposes only.

Authentication is not secure (no hashing, no real backend).

Data is stored in localStorage.

json-server is used only for simulation.

📚 Learning Goals

This project helps understand:

Basic authentication flow

REST API request with fetch

Query parameters

Session management

Redirect protection

Error handling

🌐 Deployment Note

If deployed to GitHub Pages:

json-server will NOT work

Only frontend will be visible

Backend must be deployed separately

---

👨‍💻 Author

Adi Darmawan


---

# 🔥 Cara Upload README

1. Buat file baru → `README.md`
2. Paste isi di atas
3. Simpan
4. Jalankan:

bash
git add .
git commit -m "add README"
git push
