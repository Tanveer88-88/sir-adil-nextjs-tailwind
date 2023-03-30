import Image from "next/image";
import img from "@/public/thirteen.svg";
import { GoKebabHorizontal } from "react-icons/go";
import React from "react";

const Tweet = () => {
  return (
    <div className="max-w-xl mx-auto my-24 p-3 border bg-white flex">
      {/* <div className="bg-gray-300 rounded-full p-8 max-w-[10px]"> */}
      <Image
        src={img}
        alt="profile Img"
        className="h-12 w-12 rounded-full bg-gray-300 mr-3 object-none"
      ></Image>
      {/* </div> */}
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className="flex">
            <span className="font-bold mr-1">Tanveer Mobeen</span>
            <span className="text-gray-500 mr-1">@tanveer</span>
            <span>&middot;</span>
            <span className="text-gray-500 mr-1">30 March</span>
          </div>
          <div className="">
            <GoKebabHorizontal />
          </div>
        </div>

        <div>
          <p>
            You arer amazing if you take time to comment on a tweet or YouTube
            video or a blogpost that has helped you!
          </p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Tweet;
