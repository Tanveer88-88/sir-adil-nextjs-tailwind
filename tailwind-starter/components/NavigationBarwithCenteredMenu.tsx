import Link from "next/link";
import Image from "next/image";
import CIRCLEAI from "@/shared/Images/circleai_dm9slt.png"

const NavigationBarwithCenteredMenu = () => {
  return (

      <div className="bg-slate-100 max-w-5xl my-8 mx-auto">
        <div>
          <Image src={CIRCLEAI} alt=""></Image>
        </div>
        <div className="">
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About Us</Link>
          <Link href={"#"}>Pricing</Link>
          <Link href={"#"}>Products</Link>
        </div>

      </div>

  );
};

export default NavigationBarwithCenteredMenu;
