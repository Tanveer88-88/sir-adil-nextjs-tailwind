import Link from "next/link";
import Image from "next/image";
const NavigationBarwithCenteredMenu = () => {
  return (

      <div className="bg-slate-100 max-w-5xl my-8 mx-auto">
        <div>
          <Image src={""} alt=""></Image>
          <span></span>
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
