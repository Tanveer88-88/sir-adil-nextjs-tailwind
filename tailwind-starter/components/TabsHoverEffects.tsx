import Image from "next/image";
import Link from "next/link";

const TabsHoverEffects = () => {
  return (
    <>
    <p className="text-center my-4">Hover over the links below 👇</p>
      <ul className="bg-white my-8 mx-auto max-w-3xl p-5 text-center cursor-pointer flex transition-all duration-200">
        <li className="flex-grow hover:flex-grow-[3] border-b-2  border-white hover:border-green-400">Description</li>
        <li className="flex-grow hover:flex-grow-[3] border-b-2  border-white hover:border-green-400">Care Instruction</li>
        <li className="flex-grow hover:flex-grow-[3] border-b-2  border-white hover:border-green-400">Retuen Policy</li>
      </ul>
    </>
    
  );
};

export default TabsHoverEffects;
