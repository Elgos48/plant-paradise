import React, { useState } from 'react';
import CursorSubmarine from './components/CursorSubmarine';
import HeroSection from './components/HeroSection';
import MediaSection from './components/MediaSection';
import PlantTypes from './components/PlantTypes';
import CareGuide from './components/CareGuide';
import Footer from './components/Footer';
import StartupAnimation from './components/StartupAnimation';

function App() {
  const [startupComplete, setStartupComplete] = useState(false);

  return (
    <>
      <StartupAnimation onComplete={() => setStartupComplete(true)} />
      <div className={`hide-cursor ${!startupComplete ? 'h-screen overflow-hidden' : ''}`}>
        <CursorSubmarine />
        <HeroSection />
        <PlantTypes />
        <MediaSection />
        <CareGuide />
        <Footer />
      </div>
    </>
  );
}

export default App;
