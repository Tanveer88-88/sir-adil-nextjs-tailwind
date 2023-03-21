import Link from "next/link";

const SplitScreen = () => {
  return (
    <div className="bg-white max-full h-screen justify-center flex flex-col md:flex-row">
      <div className="bg-orange-200 max-w-lg h-72">
        <h1 className="font-bold text-2xl text-center">Learn</h1>
        <p className="mt-2">Build your skillset with the hottest courses</p>
        <Link href={"#"} className="bg-white text-bold text-sm">Start Learning</Link>
      </div>
      <div className="bg-blue-200 max-w-lg h-72">
        <h1 className="font-bold text-2xl text-center">Teach</h1>
        <p className="mt-2">Share your knowledge and earn some income</p>
        <Link href={"#"} className="bg-white text-bold text-sm">Start Teaching</Link>
      </div>

    </div>
  );
};

export default SplitScreen;
