function SectionHeading({ title, onSeeMore }) {
  return (
    <div className="my-3 flex h-[30px] items-center justify-between px-[5%]">
      <h2 className="text-[2rem] font-bold font-sans">
        {title}
      </h2>

      <button
        onClick={onSeeMore}
        className="rounded-[20px] border-2 border-transparent bg-[#00391c] px-3 py-0.5 text-sm text-white transition duration-300 hover:cursor-pointer hover:border-black hover:bg-[#006d3b]"
      >
        See More
      </button>
    </div>
  );
}

export default SectionHeading;