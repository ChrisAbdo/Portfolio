"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import NavLinks from "@/components/NavLinks";
import Header from "@/components/Header";
import Personal from "@/components/Personal";
import Hero from "@/components/Hero";

export default function page() {
  return (
    <div className="h-screen ">
      <div className="flex justify-between">
        <Personal />
        <div className="space-x-2 mb-2 pt-2 mr-2">
          {/* @ts-ignore */}
          <NavLinks />
        </div>
      </div>

      <div className="sticky top-0 -z-10 -p-6">
        <Header />
      </div>

      <div className="p-2">
        <Hero />
      </div>
    </div>
  );
}
