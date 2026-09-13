import { Link } from "react-router-dom";

function Logout() {
  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">

      {/* Main Content */}
      <main className="ml-[240px] flex min-h-screen flex-1 items-center justify-center p-8">

        <div className="w-full max-w-md rounded-xl bg-white p-8 text-center shadow-md">

          <h1 className="mb-4 text-3xl font-bold text-[#00391c]">
            Logout
          </h1>

          <p className="mb-8 text-gray-600">
            Are you sure you want to logout?
          </p>

          <div className="flex justify-center gap-4">

            <Link
              to="/admin"
              className="rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-gray-600"
            >
              Cancel
            </Link>

            <Link
              to="/login"
              className="rounded-lg bg-[#004225] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#006d3b]"
            >
              Logout
            </Link>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Logout;