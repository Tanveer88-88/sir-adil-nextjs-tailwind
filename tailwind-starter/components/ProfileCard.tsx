import Image from "next/image"
import Thomas from "@/shared/Images/Thomas Mason.webp"

const ProfileCard = () => {
  return (
    <div className="bg-white flex items-center max-x-auto boder rounded-md m-14">
     <Image src={Thomas} alt="profile image" className="rounded-full h-20 w-20 m-4 object-cover shrink-0"></Image>
     <div>
      <h3 className="font-bold text-lg">Matt Cooper</h3>
      {/* <p className="text-sm">Designer - CircleAI</p> */}
      <p>A front end web developer from New York, USA. Currently working as a freelancer. Drop a mail or say hello 👋</p>
      </div> 
      
    </div>
  )
}

export default ProfileCard