import Classes from "@/components/classes/Classes";
import Footer from "@/components/footer/Footer";

import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";

import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <main className="flow-root">
        <Hero />
        <Classes />
        <Footer />
      </main>
    </div>
  );
};

export default page;
