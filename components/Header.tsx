import React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const { scrollY } = useScroll();

  return (
    <motion.div
      className="relative w-screen"
      style={{ y: useTransform(scrollY, [0, 900], [0, 100], { clamp: false }) }}
      //   the style should be y, however it should have a little delay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
      //   make it a little slower
      onScroll={(e) => console.log(e)}
    >
      <div className="absolute inset-0 animate-gradient opacity-75"></div>
      <div className="relative">
        <Image
          src="/header.svg"
          alt="Picture of the author"
          width={500}
          height={500}
          className="w-full"
        />
      </div>
    </motion.div>
  );
}
