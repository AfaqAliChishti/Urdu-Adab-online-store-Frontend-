import logo from "../assets/images/Logo-for-website.png";

function Footer() {
  return (
    <>
      {/* Copyright Footer */}
      <footer className="h-[30px] bg-[#006d3b] pt-2 text-center font-sans text-sm font-bold text-white">
        Created By: Afaq Ali Chishti
      </footer>

      {/* Main Footer */}
      <footer className="flex w-full justify-around bg-[#00391c] p-[2%] font-sans text-white max-[480px]:flex-wrap max-[480px]:gap-8">

        {/* About */}
        <div className="flex w-[20%] flex-col max-[480px]:w-full">

          <div className="w-1/2">
            <img
              src={logo}
              alt="Urdu Adab"
              className="w-full"
            />
          </div>

          <p className="pt-[12%] text-justify leading-6 max-[480px]:pt-0">
            <strong>Urdu Adab</strong> is an online bookstore dedicated to
            preserving and promoting the beauty of Urdu literature.
            Discover a wide range of classical, modern, and educational
            books — all in the language of elegance and expression.
          </p>

        </div>


        {/* Quick Links */}
        <div className="flex w-[20%] flex-col max-[480px]:w-full">

          <h3 className="text-[1.8rem]">
            Quick Links
          </h3>

          <ul className="list-none pt-[12%] leading-7 max-[480px]:pt-0">

            <li>
              <a
                href="/"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="/books"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Books
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Contact
              </a>
            </li>

          </ul>

        </div>


        {/* Help & Info */}
        <div className="flex w-[20%] flex-col max-[480px]:w-full">

          <h3 className="text-[1.8rem]">
            Help & INFO
          </h3>

          <ul className="list-none pt-[12%] leading-7 max-[480px]:pt-0">

            <li>
              <a
                href="#"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Track Your Order
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Return Policy
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                Contact Us
              </a>
            </li>

            <li>
              <a
                href="#"
                className="text-white no-underline hover:underline hover:underline-offset-4"
              >
                FAQs
              </a>
            </li>

          </ul>

        </div>


        {/* Contact */}
        <div className="flex w-[20%] flex-col max-[480px]:w-full">

          <h3 className="text-[1.8rem]">
            Contact Us
          </h3>

          <p className="pt-[12%] text-justify leading-6 max-[480px]:pt-0">
            Do you have any Queries or Suggestions?
            Contact us on{" "}

            <a
              href="mailto:mianafqalichishti@gmail.com"
              className="text-white no-underline"
            >
              mianafqalichishti@gmail.com
            </a>
          </p>

        </div>

      </footer>
    </>
  );
}

export default Footer;