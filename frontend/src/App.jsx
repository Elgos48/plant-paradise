import CursorSubmarine from './components/CursorSubmarine';
import HeroSection from './components/HeroSection';
import PlantTypes from './components/PlantTypes';
import CareGuide from './components/CareGuide';
import Footer from './components/Footer';

function App() {
  return (
    <div className="hide-cursor">
      <CursorSubmarine />
      <HeroSection />
      <PlantTypes />
      <CareGuide />
      <Footer />
    </div>
  );
}

export default App;
