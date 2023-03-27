import Link from "next/link";
import Image from "next/image";
import CIRCLEAI from "@/shared/Images/circleai_dm9slt.png";

const NavigationBarwithCenteredMenu = () => {
  return (
    <div className="bg-gray-200 max-w-5xl my-8 mx-auto h-60 rounded-md shadow-md">
      <div className="bg-white max-w-5xl my-8 mx-auto flex justify-between p-4 items-center border-2">
        <div className="flex-1">
          <Image
            src={CIRCLEAI}
            alt=""
            className="h-15 w-40 object-contain"
          ></Image>
        </div>
        <ul className="flex flex-1 gap-x-4">
          <li>
            <Link href={"#"}>Home</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
          <li>
            <Link href={"#"}>Products</Link>
          </li>
        </ul>
        <button className="border rounded-full bg-blue-500 text-white py-1 px-5">
          Click Me
        </button>
      </div>
    </div>
  );
};

export default NavigationBarwithCenteredMenu;
