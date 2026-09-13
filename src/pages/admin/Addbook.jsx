// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { BookContext } from "../../context/BookContext";

// function AddBook() {
//   const { addBook } = useContext(BookContext);

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     title: "",
//     author: "",
//     genre: "",
//     image: "",
//   });

//   // Handle Input Changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   // Handle Image
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];

//     if (!file) return;

//     const imageURL = URL.createObjectURL(file);

//     setFormData({
//       ...formData,
//       image: imageURL,
//     });
//   };

//   // Submit Form
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.image) {
//       alert("Please select a book cover.");
//       return;
//     }

//     addBook({
//       title: formData.title,
//       author: formData.author,
//       genre: formData.genre,
//       price: formData.price,
//       image: formData.image,
//       image: formData.description,
//     });

//     // Reset Form
//     setFormData({
//       title: "",
//       author: "",
//       genre: "",
//       price: "",
//       image: "",
//       description: "",
//     });

//     // Go to Manage Books
//     navigate("/admin/manage-books");
//   };

//   return (
//     <div className="flex min-h-screen bg-[#fdf6e3]">

//       {/* Main Content */}
//       <main className="ml-[240px] min-h-screen flex-1 p-8">

//         <h1 className="mb-8 text-3xl font-bold text-[#00391c]">
//           Add Book
//         </h1>

//         <div className="max-w-3xl rounded-xl bg-white p-8 shadow-md">

//           <form
//             onSubmit={handleSubmit}
//             className="space-y-6"
//           >

//             {/* Book Title */}
//             <div>
//               <label className="mb-2 block font-semibold">
//                 Book Title
//               </label>

//               <input
//                 type="text"
//                 name="title"
//                 value={formData.title}
//                 onChange={handleChange}
//                 placeholder="Enter book title"
//                 required
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
//               />
//             </div>

//             {/* Author */}
//             <div>
//               <label className="mb-2 block font-semibold">
//                 Author
//               </label>

//               <input
//                 type="text"
//                 name="author"
//                 value={formData.author}
//                 onChange={handleChange}
//                 placeholder="Enter author name"
//                 required
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
//               />
//             </div>

//             {/* Genre */}
//             <div>
//               <label className="mb-2 block font-semibold">
//                 Genre
//               </label>

//               <select
//                 name="genre"
//                 value={formData.genre}
//                 onChange={handleChange}
//                 required
//                 className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
//               >
//                 <option value="">
//                   Select Genre
//                 </option>

//                 <option value="Novel">
//                   Novel
//                 </option>

//                 <option value="Poetry">
//                   Poetry
//                 </option>

//                 <option value="Islamic">
//                   Islamic
//                 </option>

//                 <option value="Educational">
//                   Educational
//                 </option>

//               </select>
//             </div>

//             {/* Price */}
//               <div>
//               <label className="mb-2 block font-semibold">
//                 Price
//               </label>

//               <input
//                 type="number"
//                 name="price"
//                 value={formData.price}
//                 onChange={handleChange}
//                 placeholder="Enter book price"
//                 required
//                 className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
//               />
//             </div>

//             {/* Description */}
//             <div>
//               <label className="mb-2 block font-semibold">
//                 Description
//               </label>

//               <textarea
//                 name="description"
//                 rows="5"
//                 value={formData.description}
//                 onChange={handleChange}
//                 placeholder="Enter book description"
//                 className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
//               ></textarea>
//             </div>

//             {/* Book Cover */}
//             <div>
//               <label className="mb-2 block font-semibold">
//                 Book Cover
//               </label>

//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={handleImageChange}
//                 required
//                 className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
//               />
//             </div>

//             {/* Image Preview */}
//             {formData.image && (
//               <div>
//                 <p className="mb-2 font-semibold">
//                   Preview
//                 </p>

//                 <img
//                   src={formData.image}
//                   alt="Book preview"
//                   className="h-40 w-28 rounded-md object-contain shadow"
//                 />
//               </div>
//             )}

//             {/* Submit */}
//             <button
//               type="submit"
//               className="rounded-lg bg-[#004225] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#006d3b]"
//             >
//               Add Book
//             </button>

//           </form>

//         </div>

//       </main>

//     </div>
//   );
// }

// export default AddBook;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    price: "",
    description: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState("");

  const [loading, setLoading] = useState(false);

  // Handle text/select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    // Store actual File object
    setFormData((prev) => ({
      ...prev,
      image: file,
    }));

    // Only for preview
    const imageURL = URL.createObjectURL(file);
    setImagePreview(imageURL);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.image) {
      alert("Please select a book cover.");
      return;
    }

    try {
      setLoading(true);

      const data = new FormData();

      data.append("Title", formData.title);
      data.append("Author", formData.author);
      data.append("Genre", formData.genre);
      data.append("price", formData.price);
      data.append("Description", formData.description);

      // IMPORTANT:
      // This name must match upload.single("image")
      data.append("image", formData.image);

      const response = await fetch(
        "http://localhost:3000/api/books",
        {
          method: "POST",
          body: data,
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to add book");
      }

      console.log("Book added:", result);

      alert("Book added successfully!");

      // Reset form
      setFormData({
        title: "",
        author: "",
        genre: "",
        price: "",
        description: "",
        image: null,
      });

      setImagePreview("");

      navigate("/admin/manage-books");

    } catch (error) {
      console.log("Error adding book:", error);
      alert(error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#fdf6e3]">

      <main className="ml-[240px] min-h-screen flex-1 p-8">

        <h1 className="mb-8 text-3xl font-bold text-[#00391c]">
          Add Book
        </h1>

        <div className="max-w-3xl rounded-xl bg-white p-8 shadow-md">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* Book Title */}
            <div>
              <label className="mb-2 block font-semibold">
                Book Title
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
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
                placeholder="Enter author name"
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
                <option value="Educational">Educational</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="mb-2 block font-semibold">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Enter book price"
                required
                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
              />
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block font-semibold">
                Description
              </label>

              <textarea
                name="description"
                rows="5"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter book description"
                required
                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-[#004225] focus:ring-1 focus:ring-[#004225]"
              />
            </div>

            {/* Book Cover */}
            <div>
              <label className="mb-2 block font-semibold">
                Book Cover
              </label>

              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div>
                <p className="mb-2 font-semibold">
                  Preview
                </p>

                <img
                  src={imagePreview}
                  alt="Book preview"
                  className="h-40 w-28 rounded-md object-contain shadow"
                />
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-[#004225] px-8 py-3 font-semibold text-white transition duration-300 hover:bg-[#006d3b] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Adding Book..." : "Add Book"}
            </button>

          </form>

        </div>

      </main>

    </div>
  );
}

export default AddBook;