// import { createContext, useState } from "react";

// import book1 from "../assets/images/Book1.png";
// import book2 from "../assets/images/Book2.png";
// import book3 from "../assets/images/Book3.png";
// import book4 from "../assets/images/book4.png";
// import book5 from "../assets/images/book5.png";

// export const BookContext = createContext();

// function BookProvider({ children }) {
//   const [books, setBooks] = useState([
//     {
//       id: 1,
//       title: "Raja Gidh",
//       author: "Bano Qudsia",
//       genre: "Novel",
//       image: book1,
//     },
//     {
//       id: 2,
//       title: "Namal",
//       author: "Nimra Ahmed",
//       genre: "Novel",
//       image: book2,
//     },
//     {
//       id: 3,
//       title: "Mushaf",
//       author: "Nimra Ahmed",
//       genre: "Novel",
//       image: book3,
//     },
//     {
//       id: 4,
//       title: "Janat k Patty",
//       author: "Nimra Ahmed",
//       genre: "Novel",
//       image: book4,
//     },
//     {
//       id: 5,
//       title: "Atish Ishq",
//       author: "Unknown",
//       genre: "Novel",
//       image: book5,
//     },
//   ]);

//   const addBook = (book) => {
//     setBooks((prevBooks) => [
//       ...prevBooks,
//       {
//         ...book,
//         id: Date.now(),
//       },
//     ]);
//   };

//   const deleteBook = (id) => {
//     setBooks((prevBooks) =>
//       prevBooks.filter((book) => book.id !== id)
//     );
//   };

//   const updateBook = (updatedBook) => {
//     setBooks((prevBooks) =>
//       prevBooks.map((book) =>
//         book.id === updatedBook.id ? updatedBook : book
//       )
//     );
//   };

//   return (
//     <BookContext.Provider
//       value={{
//         books,
//         addBook,
//         deleteBook,
//         updateBook,
//       }}
//     >
//       {children}
//     </BookContext.Provider>
//   );
// }

// export default BookProvider;

import { createContext, useEffect, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
    const [books, setBooks] = useState([]);

    const getBooks = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/books");
            if (!response.ok) {
            throw new Error("Failed to fetch books");
        }

            const data = await response.json();
            console.log("Data is comming from backend", data);
            


            setBooks(data);
        } catch (error) {
            console.log("Error:", error);
        }
    };

    useEffect(() => {
        getBooks();
    }, []);

    return (
        <BookContext.Provider value={{ books, setBooks }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;