import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import AboutSection from "../../components/About";

function About() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fdf6e3] pt-[72px]">

        {/* Page Heading */}
        <section className="bg-[#006d3b] py-8 text-center text-white">
          <h1 className="text-4xl font-bold">
            About Urdu Adab
          </h1>

          <p className="mt-2 text-lg">
            Discover, Read & Share Urdu Literature
          </p>
        </section>

        {/* About Content */}
        <AboutSection />

        {/* Our Mission */}
        <section className="px-[8%] py-12 text-center">

          <h2 className="mb-6 text-3xl font-bold text-[#00391c]">
            Our Mission
          </h2>

          <p className="mx-auto max-w-4xl text-justify leading-8">
            Our mission is to promote Urdu literature and make books
            accessible to everyone. Urdu Adab provides a platform where
            readers can discover classical and modern literature and
            connect with other people who share the same passion for
            books and knowledge.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default About;