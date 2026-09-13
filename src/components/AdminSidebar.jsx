import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 flex h-screen w-[240px] flex-col bg-[#004225] text-white">
      
      <h2 className="border-b border-white/20 px-6 py-6 text-2xl font-bold">
        Urdu Adab
      </h2>

      <nav className="mt-5">
        <ul className="space-y-2 px-3">

          <li>
            <Link
              to="/admin"
              className={`block rounded-lg px-4 py-3 font-medium transition ${
                isActive("/admin")
                  ? "bg-[#006d3b]"
                  : "hover:bg-[#006d3b]"
              }`}
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/admin/add-book"
              className={`block rounded-lg px-4 py-3 font-medium transition ${
                isActive("/admin/add-book")
                  ? "bg-[#006d3b]"
                  : "hover:bg-[#006d3b]"
              }`}
            >
              Add Book
            </Link>
          </li>

          <li>
            <Link
              to="/admin/manage-books"
              className={`block rounded-lg px-4 py-3 font-medium transition ${
                isActive("/admin/manage-books")
                  ? "bg-[#006d3b]"
                  : "hover:bg-[#006d3b]"
              }`}
            >
              Manage Books
            </Link>
          </li>

          <li>
            <Link
              to="/admin/logout"
              className={`block rounded-lg px-4 py-3 font-medium transition ${
                isActive("/admin/logout")
                  ? "bg-[#006d3b]"
                  : "hover:bg-[#006d3b]"
              }`}
            >
              Logout
            </Link>
          </li>

        </ul>
      </nav>

    </aside>
  );
}

export default AdminSidebar;