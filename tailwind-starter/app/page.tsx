import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex justify-center bg-sky-700" >
      <div className="mx-4 order-last mt-2">
        <Image src="./next.svg" alt="logo" width={50} height={50} />
      </div>
      <div className="mx-4 text-center self-center">
        <h1 className="text-6lg font-bold text-zinc-300">Tanveer</h1>
        <h2 className="text-3lg font-semibold text-zinc-300">Learning Web3.o and metaverse</h2>
        <button className="my-4 px-4 py-2 border-2 border-color: rgb(228 228 231); rounded-lg text-white bg-blue-500">Learn More</button>
      </div>
    </div>
  );
}
