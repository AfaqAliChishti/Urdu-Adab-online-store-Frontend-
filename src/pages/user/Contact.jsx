import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fdf6e3] pt-[72px]">

        {/* Page Heading */}
        <section className="bg-[#006d3b] py-8 text-center text-white">
          <h1 className="text-4xl font-bold">
            Contact Us
          </h1>

          <p className="mt-2 text-lg">
            We would love to hear from you
          </p>
        </section>


        {/* Contact Section */}
        <section className="flex min-h-[550px] items-center justify-center px-[5%] py-12">

          <div className="flex w-full max-w-5xl gap-10 max-[768px]:flex-col">

            {/* Contact Information */}
            <div className="flex w-1/2 flex-col justify-center max-[768px]:w-full">

              <h2 className="mb-5 text-3xl font-bold text-[#00391c]">
                Get In Touch
              </h2>

              <p className="mb-6 leading-7">
                Do you have any queries, suggestions, or questions
                regarding our books? Feel free to contact us.
              </p>

              <div className="space-y-4">

                <div>
                  <h3 className="font-bold text-[#006d3b]">
                    Email
                  </h3>

                  <a
                    href="mailto:mianafqalichishti@gmail.com"
                    className="text-gray-700 hover:underline"
                  >
                    mianafqalichishti@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="font-bold text-[#006d3b]">
                    Website
                  </h3>

                  <p className="text-gray-700">
                    Urdu Adab
                  </p>
                </div>

              </div>
            </div>


            {/* Contact Form */}
            <div className="w-1/2 rounded-lg bg-white p-8 shadow-md max-[768px]:w-full">

              <h2 className="mb-6 text-2xl font-bold text-[#00391c]">
                Send Us a Message
              </h2>

              <form className="flex flex-col gap-4">

                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-medium">
                    Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#006d3b]"
                  />
                </div>


                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-medium">
                    Email
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#006d3b]"
                  />
                </div>


                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-medium">
                    Message
                  </label>

                  <textarea
                    id="message"
                    rows="5"
                    placeholder="Write your message..."
                    className="resize-none rounded-md border border-gray-300 px-3 py-2 outline-none focus:border-[#006d3b]"
                  ></textarea>
                </div>


                {/* Submit */}
                <button
                  type="submit"
                  className="mt-2 rounded-md bg-[#004225] px-5 py-2 font-medium text-white transition duration-300 hover:bg-[#006d3b]"
                >
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default Contact;