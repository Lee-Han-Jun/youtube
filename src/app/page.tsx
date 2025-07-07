import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Image src = "/logo.svg" height={50} width={50} alt="Logo" />
      <p>NewTube</p>
    </div>
  );
}