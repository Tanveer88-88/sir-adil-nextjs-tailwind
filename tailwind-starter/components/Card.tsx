const Card = () => {
  return (
    <div className="bg-white max-w-xs p-9 rounded-lg mx-10 m-8 text-gray-600">
      <h1 className="text-blue-600 text-3xl font-bold">CSS Flex & Grid</h1>
      <p className="mt-4">
        This book takes a completely different approach. I won't teach you the
        things flex and grid can do. Instead, I will first show you some
        components and layouts and make you think how to build them using the
        CSS concepts you already know. Now you have a problem, and you want a
        solution.
      </p>
      <div className="flex justify-between mt-4">
        <a href="#" className="bg-blue-200 rounded px-4 py-2">
          Prev
        </a>
        <a
          href="#"
          className="bg-blue-200 rounded px-4 py-2 text-gray-900 text-sm
        "
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Card;
