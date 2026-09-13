import Navbar from "../../components/Navbar";
import Hero from "../../components/Hero";
import SectionHeading from "../../components/SectionHeading";
import BookGrid from "../../components/BookGrid";
import Footer from "../../components/Footer";
import AboutSection from "../../components/About";

import pirEKamil from "../../assets/images/Pir-e-Kamil.jpg";
import cover2 from "../../assets/images/Cover 2.png";
import cover3 from "../../assets/images/Cover 3.png";

import book1 from "../../assets/images/Book1.png";
import book2 from "../../assets/images/Book2.png";
import book3 from "../../assets/images/Book3.png";
import book4 from "../../assets/images/book4.png";
import book5 from "../../assets/images/book5.png";

import poetry1 from "../../assets/images/Box2 Book1.jpg";
import poetry2 from "../../assets/images/box2 book2.jpg";
import poetry3 from "../../assets/images/box2 book3.jpg";
import poetry4 from "../../assets/images/box2 book4.jpg";
import poetry5 from "../../assets/images/box2 book5.jpg";

import islamic1 from "../../assets/images/box3 Book1.png";
import islamic2 from "../../assets/images/box3 Book2.png";
import islamic3 from "../../assets/images/box3 Book3.jpg";
import islamic4 from "../../assets/images/box3 Book4.png";
import islamic5 from "../../assets/images/box3 Book5.jpg";



// ================================
// Best Selling Novels
// ================================
const novels = [
  {
    id: 1,
    name: "Raja Ghid",
    image: book1,
  },
  {
    id: 2,
    name: "Namal",
    image: book2,
  },
  {
    id: 3,
    name: "Mushaf",
    image: book3,
  },
  {
    id: 4,
    name: "Janat k Patty",
    image: book4,
  },
  {
    id: 5,
    name: "Atish Ishq",
    image: book5,
  },
];


// ================================
// Best Poetry
// ================================

const poetry = [
  {
    id: 1,
    name: "Yani",
    image: poetry1,
  },
  {
    id: 2,
    name: "Baly Jibreel",
    image: poetry2,
  },
  {
    id: 3,
    name: "Kalam-e-Faiz",
    image: poetry3,
  },
  {
    id: 4,
    name: "Tanha Tanha",
    image: poetry4,
  },
  {
    id: 5,
    name: "Asrary Khudi",
    image: poetry5,
  },
];


// ================================
// Islamic Books
// ================================

const islamicBooks = [
  {
    id: 1,
    name: "Sahi-ul-Muslim",
    image: islamic1,
  },
  {
    id: 2,
    name: "Suna-al-Nesai",
    image: islamic2,
  },
  {
    id: 3,
    name: "Seert-ul-Ambia",
    image: islamic3,
  },
  {
    id: 4,
    name: "Suna Abu Dowood",
    image: islamic4,
  },
  {
    id: 5,
    name: "Seert-ul-Nabi s.a.w",
    image: islamic5,
  },
];


function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main className="pt-[72px]">

        {/* =================================
            Hero 1 - Pir-e-Kamil
        ================================== */}

        <Hero
          title="Pir-e-Kamil S.A.W"
          subtitle="Best selling novel of all time"
          image={pirEKamil}
        />


        {/* =================================
            Best Selling Novels
        ================================== */}

        <SectionHeading title="Best Selling Novels" />

        <BookGrid books={novels} />


        {/* =================================
            Hero 2 - Shayed
        ================================== */}

        <Hero
          title="Shayed"
          subtitle="Poetry by Joun Elia"
          image={cover2}
          reverse={true}
        />


        {/* =================================
            Best Poetry
        ================================== */}

        <SectionHeading title="Best Poetry Ever" />

        <BookGrid books={poetry} />


        {/* =================================
            Hero 3 - Sahi-ul-Bukhari
        ================================== */}

        <Hero
          title="Sahi-uL-Bukhari"
          subtitle="By Imam Bukhar"
          image={cover3}
        />


        {/* =================================
            Islamic Books
        ================================== */}

        <SectionHeading title="Islamic Book Center" />

        <BookGrid books={islamicBooks} />


        <AboutSection/>

      </main>
      <Footer/>
    </>
  );
}

export default Home;