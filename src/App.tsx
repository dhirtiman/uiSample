import "./App.css";
import Button from "./components/Button";
import Test from "./Test";
function App() {
  return (
    <div className="flex  ">
      <div>
        <Button varient="primary" size="normal">
          Button
        </Button>
        <Button varient="secondary" size="normal">
          Button
        </Button>
        <Button varient="tertiary" size="normal">
          Button
        </Button>
        <Button varient="tertiary" size="wide">
          Button
        </Button>
        <Button varient="secondary" size="small">
          Button
        </Button>
        <Button varient="tertiary" size="small">
          Button
        </Button>
      </div>
      <Test />
    </div>
  );
}

export default App;
