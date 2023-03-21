import Image from "next/image";
import Thomas from "@/shared/Images/Thomas Mason.webp";

const TestimonialCard = () => {
  return (
    <div className="flex flex-col bg-white w-72 h-80 rounded-xl mt-20 mx-auto justify-between p-8 items-start">
      <img
        src="https://res.cloudinary.com/thirus/image/upload/v1629308145/logos/quote-left_tsopjj_zviayy.svg"
        alt=""
        className="h-8 w-8"
      />
      <p>
        I just finished my trial period and was so amazed with the support and
        good results that I purchased the Pro version for my business.
      </p>
      <span className="font-bold text-lg">John Doe</span>
    </div>
  );
};

export default TestimonialCard;
