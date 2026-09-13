import { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { BookContext } from "../../context/BookContext";

function BuyBook() {
  const { books } = useContext(BookContext);
  const { id } = useParams();

  const book = books.find((book) => book.id.toString() === id);

  if (!book) {
    return (
      <>
        <Navbar />

        <main className="flex min-h-screen items-center justify-center bg-[#fdf6e3] pt-[72px]">
          <div className="text-center">
            <h1 className="mb-4 text-3xl font-bold text-[#00391c]">
              Book Not Found
            </h1>

            <Link
              to="/books"
              className="rounded-lg bg-[#004225] px-6 py-3 font-semibold text-white"
            >
              Back to Books
            </Link>
          </div>
        </main>

        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fdf6e3] px-6 pb-12 pt-[110px]">
        <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-md">
          <div className="flex flex-col items-center gap-10 md:flex-row">
            
            {/* Book Cover */}
            <div className="flex w-full justify-center md:w-1/2">
              <img
                src={book.image}
                alt={book.title}
                className="h-[400px] w-[280px] object-contain"
              />
            </div>

            {/* Book Details */}
            <div className="w-full md:w-1/2">
              <p className="mb-2 text-sm font-semibold uppercase text-[#006d3b]">
                {book.genre}
              </p>

              <h1 className="mb-4 text-4xl font-bold text-[#00391c]">
                {book.title}
              </h1>

              <p className="mb-6 text-lg text-gray-600">
                <span className="font-semibold text-black">Author:</span>{" "}
                {book.author}
              </p>

              <p className="mb-8 leading-7 text-gray-600">
                Explore this book from our Urdu Adab collection. Read more
                about the book and place your order using the button below.
              </p>

              <button
                className="rounded-lg bg-[#004225] px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-[#006d3b]"
                onClick={() => alert(`You selected ${book.title}`)}
              >
                Buy Book
              </button>

              <Link
                to="/books"
                className="ml-4 inline-block rounded-lg bg-gray-200 px-8 py-3 font-semibold text-gray-800 transition duration-300 hover:bg-gray-300"
              >
                Back to Books
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default BuyBook;