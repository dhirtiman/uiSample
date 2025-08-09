import './App.css';
// import Button from "./components/Button";
// import Test from "./Test";
// import Tag from './components/Tag'
// import Heading from "./components/Heading";
// import Card from "./components/Card";
import Header from './components/Header/Header';
function App() {
  return (
    <div className="flex h-lvh min-h-screen w-full flex-col items-center border">
      <div className="bg-tertiary flex h-11/12 w-full flex-col border">
        <Header />
        <div className="bg-tertiary flex h-3/5 w-4/5 flex-col self-center border"></div>
      </div>
    </div>
  );
}

export default App;
