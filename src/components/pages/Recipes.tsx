import Card4 from '../cards/Card4';
import Heading from '../Heading';
import Button from '../Button';
import foodPlate1 from '../../assets/foodPlate1.png';
import foodPlate2 from '../../assets/foodPlate2.png';
import foodPlate3 from '../../assets/foodPlate3.png';
import foodPlates from '../../assets/foodPlates.jpg';

export default function Recipes() {
  return (
    <section className="mt-1 flex w-full flex-col  px-10">
      <Heading className="mt-20 ml-32">
        <span>Recipes</span>
        <span>
          Recipes crafted by AI, personalized to perfectly align with your
          unique dietary needs and flavor preferences
        </span>
      </Heading>
      <div className="z-10 mt-10 flex h-[960px] w-11/12 flex-row gap-13 self-center">
        <div className="flex w-1/2 flex-col gap-10">
          <Card4
            title="Savory Quinoa and Roasted Vegetable Bowl"
            buttonTitle="Learn More"
            varient="default"
            image={foodPlate1}
          ></Card4>
          <Card4
            title="Herb-Infused Grilled Chicken with Seasonal Greens"
            buttonTitle="Learn More"
            varient="secondary"
            image={foodPlate2}
          ></Card4>
          <Card4
            title="Mediterranean Lentil and Kale Salad"
            buttonTitle="Learn More"
            varient="tertiary"
            image={foodPlate3}
          ></Card4>
        </div>
        <div className="w-1/2 gap-10  relative">
          <div className=" absolute z-10 flex w-fit flex-row gap-6 py-4 bg-white rounded-br-xl">
            <h3 className="text-primary font-syne h-21 w-50 text-[34px]">
              Explore more recipes
            </h3>
            <Button varient="tertiary" size="small"></Button>
          </div>
          <img className='[clip-path:polygon(0_40px,40px_0,100%_0,100%_100%,0_100%)] rounded-tr-2xl rounded-br-2xl rounded-bl-2xl w-195 h-[960px]' src={foodPlates} alt='food plates' ></img>
        </div>
      </div>
    </section>
  );
}
