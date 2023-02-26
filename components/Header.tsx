import React from "react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative w-screen">
      <div className="absolute inset-1 animate-gradient opacity-100"></div>
      <div className="relative">
        <Image
          src="/header.svg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </div>
  );
}
