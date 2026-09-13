import { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

function ManageBooks() {
  const { books, deleteBook, updateBook } = useContext(BookContext);

  const [editingBook, setEditingBook] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
  });

  // Open Edit Form
  const editBook = (book) => {
    setEditingBook(book);

    setFormData({
      title: book.title,
      author: book.author,
      genre: book.genre,
    });
  };

  // Handle Input Changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Updated Book
  const handleUpdate = (e) => {
    e.preventDefault();

    updateBook({
      ...editingBook,
      title: formData.title,
      author: formData.author,
      genre: formData.genre,
    });

    setEditingBook(null);

    setFormData({
      title: "",
      author: "",
      genre: "",
    });
  };

  // Cancel Editing
  const cancelEdit = () => {
    setEditingBook(null);

    setFormData({
      title: "",
      author: "",
      genre: "",
    });
  };

  // Delete Book
  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );

    if (confirmDelete) {
      deleteBook(id);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">

      {/* Main Content */}
      <main className="ml-[240px] min-h-screen flex-1 p-8">

        <h1 className="mb-8 text-3xl font-bold text-[#00391c]">
          Manage Books
        </h1>

        {/* Edit Form */}
        {editingBook && (
          <div className="mb-8 max-w-3xl rounded-xl bg-white p-8 shadow-md">

            <h2 className="mb-6 text-2xl font-bold text-[#00391c]">
              Edit Book
            </h2>

            <form onSubmit={handleUpdate} className="space-y-5">

              {/* Title */}
              <div>
                <label className="mb-2 block font-semibold">
                  Book Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
                />
              </div>

              {/* Author */}
              <div>
                <label className="mb-2 block font-semibold">
                  Author
                </label>

                <input
                  type="text"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
                />
              </div>

              {/* Genre */}
              <div>
                <label className="mb-2 block font-semibold">
                  Genre
                </label>

                <select
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
                >
                  <option value="">Select Genre</option>
                  <option value="Novel">Novel</option>
                  <option value="Poetry">Poetry</option>
                  <option value="Islamic">Islamic</option>
                  <option value="Educational">
                    Educational
                  </option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">

                <button
                  type="submit"
                  className="rounded-lg bg-[#004225] px-6 py-3 font-semibold text-white transition duration-300 hover:bg-[#006d3b]"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  onClick={cancelEdit}
                  className="rounded-lg bg-gray-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-gray-600"
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>
        )}

        {/* Books Table */}
        <div className="overflow-x-auto rounded-xl bg-white shadow-md">

          <table className="w-full min-w-[750px] border-collapse">

            <thead>
              <tr className="bg-[#004225] text-left text-white">

                <th className="px-5 py-4">
                  Cover
                </th>

                <th className="px-5 py-4">
                  Title
                </th>

                <th className="px-5 py-4">
                  Author
                </th>

                <th className="px-5 py-4">
                  Genre
                </th>

                <th className="px-5 py-4">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {books.map((book) => (
                <tr
                  key={book.id}
                  className="border-b border-gray-200"
                >

                  {/* Cover */}
                  <td className="px-5 py-4">

                    <img
                      src={book.image}
                      alt={book.title}
                      className="h-20 w-14 object-contain"
                    />

                  </td>

                  {/* Title */}
                  <td className="px-5 py-4 font-medium">
                    {book.title}
                  </td>

                  {/* Author */}
                  <td className="px-5 py-4">
                    {book.author}
                  </td>

                  {/* Genre */}
                  <td className="px-5 py-4">
                    {book.genre}
                  </td>

                  {/* Actions */}
                  <td className="px-5 py-4">

                    <div className="flex gap-2">

                      <button
                        onClick={() => editBook(book)}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm text-white transition hover:bg-blue-700"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(book.id)}
                        className="rounded-md bg-red-600 px-4 py-2 text-sm text-white transition hover:bg-red-700"
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

        {/* Empty State */}
        {books.length === 0 && (
          <p className="mt-6 text-center text-gray-600">
            No books available.
          </p>
        )}

      </main>

    </div>
  );
}

export default ManageBooks;