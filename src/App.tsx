import "./App.css";
// import Button from "./components/Button";
// import Test from "./Test";
// import Tag from './components/Tag'
// import Heading from "./components/Heading";
// import Card from "./components/Card";
import Header from "./components/Header/Header";
function App() {
  return (
      <div className=" flex flex-col w-full h-auto min-h-screen items-center">
        <div className="flex flex-col w-full h-4/5 bg-tertiary" ></div>
        <Header/>
      </div>
  );
}

export default App;
