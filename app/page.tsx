import React from "react";
import dynamic from "next/dynamic";

const Layout = dynamic(() => import("@/components/Layout"), { ssr: false });

export default function page() {
  return <Layout />;
}
