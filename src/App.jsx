import { Routes, Route } from "react-router-dom";

import Home from "./pages/user/Home";
import About from "./pages/user/About";
import Books from "./pages/user/Books";
import Contact from "./pages/user/Contact";
import Login from "./pages/user/Login";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddBook from "./pages/admin/AddBook";
import ManageBooks from "./pages/admin/ManageBooks";
import Logout from "./pages/admin/Logout";
import BuyBook from "./pages/user/BuyBook";
import AdminLayout from "./Layouts/AdminLayout";
import UserLayout from "./Layouts/UserLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<UserLayout/>}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="books" element={<Books />} />
        <Route path="contact" element={<Contact />} />
        <Route path="buy-book/:id" element={<BuyBook />} />
      </Route>
        <Route path="/login" element={<Login />} />

      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<AdminDashboard />} />
        <Route path="add-book" element={<AddBook />} />
        <Route path="manage-books" element={<ManageBooks />} />
        <Route path="logout" element={<Logout />} />
      </Route>
    </Routes>
  );
}

export default App;
