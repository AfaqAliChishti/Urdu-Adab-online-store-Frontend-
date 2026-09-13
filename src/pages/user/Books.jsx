import { useContext } from "react";

import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SectionHeading from "../../components/SectionHeading";
import BookGrid from "../../components/BookGrid";

import { BookContext } from "../../context/BookContext";

function Books() {
  const { books } = useContext(BookContext);

  const novels = books.filter(
    (book) => book.genre === "Novel"
  );

  const poetry = books.filter(
    (book) => book.genre === "Poetry"
  );

  const islamicBooks = books.filter(
    (book) => book.genre === "Islamic"
  );

  const educationalBooks = books.filter(
    (book) => book.genre === "Educational"
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fdf6e3] pt-[72px]">

        {/* Page Heading */}
        <div className="bg-[#004225] py-8 text-center text-white">
          <h1 className="text-4xl font-bold">
            All Books
          </h1>

          <p className="mt-2">
            Explore our collection of Urdu literature
          </p>
        </div>


        {/* Novels */}
        {novels.length > 0 && (
          <section className="py-6">

            <SectionHeading title="Novels" />

            <BookGrid books={novels} />

          </section>
        )}


        {/* Poetry */}
        {poetry.length > 0 && (
          <section className="py-6">

            <SectionHeading title="Poetry" />

            <BookGrid books={poetry} />

          </section>
        )}


        {/* Islamic Books */}
        {islamicBooks.length > 0 && (
          <section className="py-6">

            <SectionHeading title="Islamic Books" />

            <BookGrid books={islamicBooks} />

          </section>
        )}


        {/* Educational Books */}
        {educationalBooks.length > 0 && (
          <section className="py-6">

            <SectionHeading title="Educational Books" />

            <BookGrid books={educationalBooks} />

          </section>
        )}


        {/* No Books */}
        {books.length === 0 && (
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="text-xl text-gray-600">
              No books available.
            </p>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

export default Books;