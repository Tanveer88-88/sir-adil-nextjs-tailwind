import Image from "next/image";

const SubscribeForm = () => {
  return (
    <div className="max-w-2xl my-12 mx-auto p-8 bg-gray-100">
      <div className="flex flex-grow w-auto max-w-none">
        <input
          type="text"
          placeholder="Email Address"
          className="rounded-l-md py-3 px-6 border border-gray-400 flex-grow"
        />
        <button className="bg-teal-700 py-3 px-6 rounded-r-md text-white flex-grow">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
