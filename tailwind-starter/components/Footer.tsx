import Link from "next/link";
import Image from "next/image";
import CIRCLEAI from "@/shared/Images/circleai_dm9slt.png";

const Footer = () => {
  return (
    <div className="bg-gray-200 max-w-5xl my-8 mx-auto h-80 rounded-md shadow-md">
      <div className=" bg-sky-50 my-4 p-10 shadow-sm flex">
        <div className="">
          <Image src={CIRCLEAI} alt="logo" className="w-32 h-8"></Image>
          <p className="mt-2 text-gray-500 text-sm">The Company Tagline</p>
        </div>
        <div className="flex ml-auto">
          <div className="mr-20">
            <h3 className="font-bold text-sky-800 text-2xl">Quick Links</h3>
            <ul className="">
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
          <div className="mr-20">
            <h3 className="font-bold text-sky-800 text-2xl">Contact Us</h3>
            <ul className="">
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
          <div className="">
            <h3 className="font-bold text-sky-800 text-2xl">Social</h3>
            <ul className="">
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
              <li className="w-20 h-1 bg-gray-300 mt-6"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
