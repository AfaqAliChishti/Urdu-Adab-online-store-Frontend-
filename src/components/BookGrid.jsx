import BookCard from "./BookCard";

function BookGrid({ books }) {
  return (
    <div className="my-5 mx-2 grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-2 max-[480px]:grid-cols-[repeat(auto-fill,minmax(170px,1fr))]">
      {books.map((book) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          image={book.image}
        />
      ))}
    </div>
  );
}

export default BookGrid;