import Link from "next/link";

const SplitScreen = () => {
  return (

      <div className="flex flex-col md:flex-row justify-center align-middle text-center m-40">
        <div className="bg-orange-200 max-w-lg h-72 p-20 rounded-lg">
          <h1 className="font-bold text-2xl text-center basis-3/6">Learn</h1>
          <p className="mt-2 text-sm">Build your skillset with the hottest courses</p>
          <Link href={"#"} className="bg-white text-bold text-sm py-2 px-3 rounded-lg mt-12 inline-block mx-16 font-bold">
            Start Learning
          </Link>
        </div>
        <div className="bg-blue-200 max-w-lg h-72 p-20 rounded-lg basis-3/6">
          <h1 className="font-bold text-2xl text-center">Teach</h1>
          <p className="mt-2 text-sm">Share your knowledge and earn some income</p>
          <Link href={"#"} className="bg-white text-bold text-sm py-2 px-3 rounded-lg mt-12 inline-block mx-16 font-bold">
            Start Teaching
          </Link>
        </div>
      </div>

  );
};

export default SplitScreen;
