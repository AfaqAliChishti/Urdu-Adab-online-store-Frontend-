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
      setBooks(data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const updatebook = async (formData) => {
    try {
        await fetch(`http://localhost:3000/api/books/${formData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Title: formData.title,
            Author: formData.author,
            Genre: formData.genre,
            Price: formData.price,
          })
        });
        await getBooks();
    } catch (error) {
        console.log("error while updating book", error)
    }
  };

    const deleteBook=async (id)=>{
        try {
            await fetch(`http://localhost:3000/api/books/${id}`,{
              method: "delete"
            })
            await getBooks();
        } catch (error) {
          console.log("error while updating book", error)  
        }
  }

  useEffect(() => {
    getBooks();
  }, [books]);

  return (
    <BookContext.Provider value={{ books, setBooks, updatebook, deleteBook }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
