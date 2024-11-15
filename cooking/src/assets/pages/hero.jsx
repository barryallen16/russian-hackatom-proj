import React from "react";
import Navbar from "../components/Navbar";
import { SparklingGrid } from "../components/sparkinggrid";
import nuclear from "../images/nuclearbg.png";

const Hero = () => {
  return (
    <div id="hero" className="relative h-screen bg-gradient-to-r from-slate-800 to-zinc-900 backdrop-blur-sm">
      <Navbar />
      <div className="relative h-[80vh] w-screen">
        <SparklingGrid />
        <div className="absolute inset-0 flex items-center justify-center font-display text-7xl font-bold text-white">
          Terravision
        </div>
      </div>
      <img
        src={nuclear}
        className="absolute bottom-0 h-[540px] w-screen object-cover"
      />
    </div>
  );
};

export default Hero;
