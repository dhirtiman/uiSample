import Button from '../Button';
import Header from '../header/Header';
import CardGroupHome from '../cards/CardGroupHome';


export default function Home() {
  return (
    <section className="bg-tertiary flex h-screen w-full flex-col">
      <CardGroupHome />
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
      </div>
    </section>
  );
}
