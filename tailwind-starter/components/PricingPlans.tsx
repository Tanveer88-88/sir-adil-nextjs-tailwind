import Link from "next/link";
import Image from "next/image";

const PricingPlans = () => {
  return (
    // basis-0 flex-grow flex-shrink
     <div className="my-12 mx-auto p-4 max-w-6xl min-w-min flex flex-col md:flex-row bg-pink-100 rounded-lg shadow-lg gap-4">
      <div className="bg-white rounded-xl p-4 shadow-lg flex-1">
        <h2 className="font-bold text-2xl">Standard</h2>
        <span className="text-sm opacity-80">Monthly Plan</span>
        <p className="font-bold text-4xl mt-5">$25</p>
      </div>
      <div className="bg-pink-600 rounded-xl p-4 text-white shadow-lg flex-1">
        <h2 className="font-bold text-2xl">plan plan-highlight</h2>
        <span className="text-sm opacity-80">Popular</span>
        <p className="font-bold text-4xl mt-5">$40</p>
      </div>
      <div className="bg-white rounded-xl p-4 shadow-lg flex-1">
        <h2 className="font-bold text-2xl">Premium</h2>
        <span className="text-sm opacity-80">Monthly Plan</span>
        <p className="font-bold text-4xl mt-5">$55</p>
      </div>
     </div>

  );
};

export default PricingPlans;
