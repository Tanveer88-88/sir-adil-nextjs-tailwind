import Link from "next/link";
import Image from "next/image";
import Pizza from "@/shared/Images/pizza.jpeg"

const BlogPost = () => {
  return (

     <div className="flex items-center m-8 max-w-sm">
      <div className="mr-4 basis-20 shrink-0">
      <Image src={Pizza} alt="Pizza" className="rounded-lg"></Image>
      </div>
        <div>
        <h2 className="font-bold text-xl">Make the Best Pizza at Home</h2>
        <p className="mt-1">The secret to baking the best pizza at home lies in the preparation of the...</p>
        </div>
     </div>

  );
};

export default BlogPost;
