import Image from "next/image";
import Link from "next/link";

const CardWithHeaderFooter = () => {
  return (
    <div className="bg-white w-80 rounded-md m-8 p-8 flex flex-col">
      <h2 className="font-bold text-2xl">The Power of CSS Flexbox</h2>
      <p className="flex-grow mt-4">
        Phasellus ultrices nulla quis nibh. Quisque a lectus. Donec consectetuer
        ligula vulputate sem tristique cursus. Nam nulla quam, gravida non,
        commodo a, sodales sit amet, nisi.
      </p>
      <Link
        href="#"
        className="block bg-teal-700 text-white px-4 py-2 rounded-md text-center text-sm"
      >
        Read more
      </Link>
    </div>
  );
};

export default CardWithHeaderFooter;
