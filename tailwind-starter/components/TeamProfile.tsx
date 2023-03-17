import Image from "next/image"
import Alexa from "@/shared/Images/Alexa Kardi.jpeg";
import Tavell from "@/shared/Images/Tavell Monroe.webp";
import Adale from "@/shared/Images/Adale Smith.webp";
import Thomas from "@/shared/Images/Thomas Mason.webp";



const TeamProfile = () => {
  return (
    <>
    <div className="bg-white flex justify-around w-auto max-w-none m-14">
    <div className="px-6 py-4 text-center pb-48">
        <Image src={Alexa} alt="" className="rounded-full h-32 w-32 object-cover object-top flex items-center"></Image>
        <h3 className="font-bold text-xl">Alexa Kardi</h3>
        <p className="text-sm text-gray-600">Founder and CEO</p>
    </div>
    <div className="px-6 py-4 text-center">
        <Image src={Tavell} alt="" className="rounded-full h-32 w-32 object-cover object-top flex items-center"></Image>
        <h3 className="font-bold text-xl">Tavell Monroe</h3>
        <p className="text-sm text-gray-600">Web Developer</p>
    </div>
    <div className="px-6 py-4 text-center">
        <Image src={Adale} alt="" className="rounded-full h-32 w-32 object-cover object-top flex items-center"></Image>
        <h3 className="font-bold text-xl">Adale Smith</h3>
        <p className="text-sm text-gray-600">Marketing Specialist</p>
    </div>
    <div className="px-6 py-4 text-center">
        <Image src={Thomas} alt="" className="rounded-full h-32 w-32 object-cover object-top flex items-center"></Image>
        <h3 className="font-bold text-xl">Thomas Mason</h3>
        <p className="text-sm text-gray-600">UX Designe</p>
    </div>
    </div>

    </>

  )
}

export default TeamProfile