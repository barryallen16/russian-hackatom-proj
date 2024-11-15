import { useState } from 'react';
import Maps from './assets/components/maps.jsx';
import nuclear from './assets/images/nuclearbg.png';
import nuclearsvg from './assets/images/AdobeStock_248506837 [Converted].svg';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Predict from './assets/components/Predict.jsx';
import Hero from './assets/pages/hero.jsx';

function App() {
  const [isloading, setIsLoading] = useState(false);

  if (isloading) {
    return (
      <div className='flex bg-hero1 h-screen w-screen items-center justify-center'>
        <l-quantum size="45" speed="1.75" color="white"></l-quantum>
      </div>
    );
  }

  return (
    <div className='min-h-screen flex flex-col'>
      <Hero />
      <div className='flex-grow overflow-y-auto'>
        <Predict />
      </div>
    </div>
  );
}

export default App;
