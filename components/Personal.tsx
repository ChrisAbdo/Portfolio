import Link from "next/link";
import React from "react";

export default function Personal() {
  return (
    <div className="flex space-x-24">
      <Link href="/" className="text-xl text-[#999] pt-2 mb-2 ml-2">
        Chris Abdo
      </Link>
      <h2 className="text-xl text-[#999] pt-2 mb-2 ml-2 hidden lg:flex">
        Full Stack Developer
      </h2>
    </div>
  );
}
