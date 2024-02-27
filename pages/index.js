import Image from "next/image";
import { Inter } from "next/font/google";
import Lotery from "@/components/Lotery";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
        <Lotery />

  );
}
