# Urdu Adab - Frontend

Urdu Adab is a modern book exchange community platform where users can explore books, view book details, and request to buy or exchange books.

This repository contains the **frontend** of the Urdu Adab project, built with React, React Router, and Tailwind CSS.

---

## 🚀 Features

- 🏠 Home page
- 📚 Browse available books
- 🔍 Book information and details
- 🛒 Buy/request book functionality
- 🔐 User login
- 👤 User pages
- 🛠️ Admin dashboard
- ➕ Add new books
- 📖 Manage books
- 🖼️ Book cover image support
- 🌐 Backend API integration
- 📦 Global book state using React Context API
- 📱 Responsive UI
- 🎨 Tailwind CSS styling
- 🧭 Client-side navigation with React Router

---

## 🛠️ Technologies Used

- **React.js**
- **Vite**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **React Router DOM**
- **Context API**
- **Fetch API**

---

## 📁 Project Structure

```text
Urdu Adab Frontend/
│
├── public/
│   └── icons/
│
├── src/
│   │
│   ├── assets/
│   │   └── images/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ...
│   │
│   ├── context/
│   │   └── BookContext.jsx
│   │
│   ├── layouts/
│   │   ├── UserLayout.jsx
│   │   └── AdminLayout.jsx
│   │
│   ├── pages/
│   │   │
│   │   ├── user/
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Books.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Login.jsx
│   │   │   └── BuyBook.jsx
│   │   │
│   │   └── admin/
│   │       ├── AdminDashboard.jsx
│   │       ├── AddBook.jsx
│   │       ├── ManageBooks.jsx
│   │       └── Logout.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md