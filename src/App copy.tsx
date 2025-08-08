import "./App.css";
import Button from "./components/Button";
import Test from "./Test";
import Tag from './components/Tag'
import Heading from "./components/Heading";
import Card from "./components/Card";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="flex flex-col  p-8">
      <Header/>
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
      <div className="flex">
        <Tag border={true} link="https://www.google.com">Tag</Tag>
        <Tag border={false} link="https://www.google.com">Tag</Tag>
      </div>
      <Test />
        <Heading>
          <span>How it works</span>
          <span>Step into the world of hassle-free meal planning with our easy 3-step process</span>
        </Heading>
        <Heading>
          <span>Demo</span>
          <span>See how it works: your personalized meal planning journey</span>
        </Heading>
        <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      <Card
        title="Simple Card"
        subtitle="No image, default style"
        bgColor="bg-blue-50"
      />

      <Card
        title="Outlined Variant"
        subtitle="This card has a border"
        variant="outlined"
        bgColor="bg-yellow-50"
      />

      <Card
        title="Card with Image"
        subtitle="Beautiful visuals!"
        imageUrl="https://source.unsplash.com/random/400x300"
        variant="shadow"
        bgColor="bg-white"
      />
    </div>
    </div>
  );
}

export default App;
