import { useContext, useEffect } from "react";
import { BookContext } from "../../context/BookContext";

function AdminDashboard() {
  const { books } = useContext(BookContext);
  const resentAddBooks = [...books]
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);
  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">
      {/* Main Content */}
      <main className="ml-[240px] min-h-screen flex-1 p-8">
        {/* Heading */}
        <h1 className="mb-8 text-3xl font-bold text-[#00391c]">Dashboard</h1>

        {/* Dashboard Cards */}
        <div className="mb-10 grid grid-cols-4 gap-5">
          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">
              {books.length}
            </h2>
            <p className="mt-2 text-gray-600">Total Books</p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">91</h2>
            <p className="mt-2 text-gray-600">Users</p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">43</h2>
            <p className="mt-2 text-gray-600">Exchange Requests</p>
          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow-md">
            <h2 className="text-3xl font-bold text-[#004225]">12</h2>
            <p className="mt-2 text-gray-600">Pending Approval</p>
          </div>
        </div>

        {/* Recent Books */}
        <section>
          <h2 className="mb-5 text-2xl font-bold text-[#00391c]">
            Recent Books
          </h2>
          <div className="overflow-x-auto rounded-xl bg-white shadow-md">
            <table className="w-full min-w-[750px] border-collapse">
              <thead>
                <tr className="bg-[#004225] text-left text-white">
                  <th className="px-5 py-4">Cover</th>

                  <th className="px-5 py-4">Title</th>

                  <th className="px-5 py-4">Author</th>

                  <th className="px-5 py-4">Genre</th>

                  <th className="px-5 py-4">Price</th>
                </tr>
              </thead>

              <tbody>
                {resentAddBooks.map((book) => (
                  <tr key={book._id} className="border-b border-gray-200">
                    {/* Cover */}
                    <td className="px-5 py-4">
                      <img
                        src={book.image}
                        alt={book.Title}
                        className="h-20 w-14 object-contain"
                      />
                    </td>

                    {/* Title */}
                    <td className="px-5 py-4 font-medium">{book.Title}</td>

                    {/* Author */}
                    <td className="px-5 py-4">{book.Author}</td>

                    {/* Genre */}
                    <td className="px-5 py-4">{book.Genre}</td>

                    {/* Price */}
                    <td className="px-5 py-4">{book.Price}</td>

                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {resentAddBooks.length === 0 && (
            <p className="mt-6 text-center text-gray-600">
              No books available.
            </p>
          )}
        </section>
      </main>
    </div>
  );
}

export default AdminDashboard;
