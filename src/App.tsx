import './App.css';
import Rectangle from './components/shapes/Rectangle';
import Home from './components/pages/Home';
import Demo from './components/pages/Demo';
import HowItWorks from './components/pages/HowItWorks';
import Benefits from './components/pages/Benefits';
import Recipes from './components/pages/Recipes';
import Testimonials from './components/pages/Testimonials';
// import Tag from './components/Tag'
// import Test from "./Test";
// import Card from "./components/Card";


function App() {
  return (
    <div className="flex h-auto min-h-screen w-full flex-col items-center">
      <Home />
      <Rectangle className="absolute top-6/7 right-0" />
      <Demo/>
      <HowItWorks/>
      <Benefits/>
      <Recipes/>
      <Testimonials/>

    </div>
  );
}

export default App;
