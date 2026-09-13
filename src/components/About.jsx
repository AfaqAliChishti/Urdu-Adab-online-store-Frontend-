import chishtiSab from "../assets/images/Chishti Sab.jpg";

function AboutSection() {
  return (
    <section className="w-full bg-[#fdf6e3]">
      
      {/* Section Heading */}
      <h2 className="bg-[#006d3b] py-1 text-center text-2xl font-bold text-white">
        About Urdu Adab
      </h2>

      {/* Content */}
      <div className="flex min-h-[350px] w-full items-center justify-around gap-8 px-[5%] py-8 max-[480px]:flex-col">

        {/* Text */}
        <div className="w-[60%] max-[480px]:w-full">
          <p className="text-justify leading-7">
            Urdu Adab is more than just an online bookstore — it's a
            vibrant book exchange community built around the love for
            Urdu literature.

            Our platform connects readers, students, and literary
            enthusiasts to share, exchange, and explore a wide range of
            Urdu books, both classical and modern.

            Whether you're looking to give your books a new home or
            discover rare gems in Urdu literature, Urdu Adab offers a
            space where knowledge truly becomes light —

            <strong>
              {" "}علم نور ہے تلوار سے طاقتوت اور عقل سے بلاتر
            </strong>.
          </p>
        </div>

        {/* Image */}
        <div className="flex w-[35%] items-center justify-center max-[480px]:w-full">
          <img
            src={chishtiSab}
            alt="Urdu Adab"
            className="w-[50%] object-contain max-[480px]:w-[40%]"
          />
        </div>

      </div>
    </section>
  );
}

export default AboutSection;