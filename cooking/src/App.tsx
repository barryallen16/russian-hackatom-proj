import React from "react";
import { SparklingGrid } from "./assets/components/sparking";
const App = () => {
  return <div className="relative h-80 w-full">
  <SparklingGrid theme="dark" gridSize={30} sparkleFrequency={0.2} />
  <div className="absolute inset-0 flex items-center justify-center text-lg md:text-2xl font-semibold text-white">
    Sparkling Grid Background
  </div>
</div>

};

export default App;
