import { Link } from "react-router-dom";

function BookCard({ id, title, image }) {
  return (
    <Link
      to={`/buy-book/${id}`}
      className="flex min-h-[300px] flex-col items-center justify-center gap-3 border-2 border-black/20 bg-[#fdf6e3] p-3 text-[1.2rem] transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className="h-[250px] w-[90%] bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url("${image}")` }}
      ></div>

      <p>{title}</p>
    </Link>
  );
}

export default BookCard;