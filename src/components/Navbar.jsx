import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo-for-website.png";

function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 z-50 w-full">
        <nav className="flex h-[72px] w-full items-center bg-[#004225] text-white">

          {/* Logo */}
          <div className="flex h-full w-[15%] items-center justify-center">
            <Link
              to="/"
              className="mt-1 h-[90%] cursor-pointer"
            >
              <img
                src={logo}
                alt="Urdu Adab"
                className="h-full w-full"
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full w-[70%] items-center justify-center">
            <ul className="flex w-full list-none justify-around">
              <li>
                <Link
                  to="/"
                  className="text-[1.2rem] font-medium text-white hover:underline hover:underline-offset-4"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-[1.2rem] font-medium text-white hover:underline hover:underline-offset-4"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/books"
                  className="text-[1.2rem] font-medium text-white hover:underline hover:underline-offset-4"
                >
                  Books
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-[1.2rem] font-medium text-white hover:underline hover:underline-offset-4"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Icons */}
          <div className="flex h-[60px] w-[15%] items-center justify-center gap-5">

            {/* Search Icon */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="cursor-pointer"
              aria-label="Search"
            >
              <svg
                className="h-7 w-7 fill-white transition-colors duration-300 hover:fill-[#d4af37]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 0 0 0 288z" />
              </svg>
            </button>

            {/* User Icon */}
            <Link to="/login">
              <svg
                className="h-7 w-7 fill-white transition-colors duration-300 hover:fill-[#d4af37]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
              </svg>
            </Link>
          </div>
        </nav>
      </header>

      {/* Search Bar */}
      {searchOpen && (
        <div className="fixed top-[72px] left-0 z-40 flex w-full justify-end bg-transparent px-[10%] py-2">
          <input
            type="text"
            placeholder="Search your book"
            className="rounded-[15px] border-2 border-black px-3 py-2 outline-none"
          />
        </div>
      )}
    </>
  );
}

export default Navbar;