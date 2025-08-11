import './App.css';
import Button from './components/Button';
import Rectangle from './components/shapes/Rectangle';
// import Test from "./Test";
// import Tag from './components/Tag'
// import Heading from "./components/Heading";
// import Card from "./components/Card";
import Header from './components/header/Header';
import Card1 from './components/cards/Card1';
function App() {
  return (
    <div className="flex h-lvh min-h-screen w-full flex-col items-center">
      
      <div className="bg-tertiary flex h-full w-full flex-col">
        <Header />
        <div className="bg-tertiary flex h-5/7 w-5/6 flex-col items-center self-center ">
          <h1 className="text-primary font-syne w-1/2 text-6xl font-medium">
            Elevate Your Mealtime with AI-Powered Personalization 
          </h1>

          <p className="text-primary font-work-sans m-10 text-[26px]">
            Effortless Planning, Healthier Eating
          </p>

          <Button varient="tertiary" size="normal">
            Try Our Demo
          </Button>
          <Button varient="secondary" size="normal">
            Start For Free
          </Button>

          <Card1 title='30 000 +' subtitle='Happy Users'></Card1>
        </div>
      </div>
      <Rectangle className="absolute top-6/7 right-0" />
      
    </div>
  );
}

export default App;
