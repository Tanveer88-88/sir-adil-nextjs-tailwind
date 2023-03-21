import Image from "next/image";
import Thomas from "@/shared/Images/Thomas Mason.webp";

const Service = () => {
  return (
    <div className="flex mt-4 justify-center">
      <div className="bg-white max-w-xs rounded-lg mx-5 px-8 py-10 text-center shadow-md">
      <span className=" bg-teal-600 rounded-full inline-block text-white p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
        <h3 className="mt-4 font-bold text-2xl">Photo Shoot</h3>
        <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </p>
    </div>
    <div className="bg-white max-w-xs rounded-lg mx-5 px-8 py-10 text-center shadow-md">
      <span className=" bg-teal-600 rounded-full inline-block text-white p-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-7"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
        <h3 className="mt-4 font-bold text-2xl">Video Production</h3>
        <p className="mt-4">
        Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci.
        </p>
    </div>
    <div className="bg-white max-w-xs rounded-lg mx-5 px-8 py-10 text-center shadow-md">
      <span className=" bg-teal-600 rounded-full inline-block text-white p-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="currentColor">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
      </svg>
      </span>
        <h3 className="mt-4 font-bold text-2xl">Digital Illustration</h3>
        <p className="mt-4">
        Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae.
        </p>
    </div>
    </div>
    
  );
};

export default Service;
