import Heading from '../Heading';
import groceryBagPic1 from '../../assets/groceryBagPic1.jpg';
import groceryBagPic2 from '../../assets/groceryBagPic2.jpg';
import Card3 from '../cards/Card3';

export default function Benefits() {
  return (
    <section className="mt-40 flex h-auto w-full flex-col p-10">
      <Heading className="mt-20 ml-32">
        <span>Benefits</span>
        <span>
          Get meal plans tailored to your unique dietary needs, preferences, and
          goals, ensuring a balanced and enjoyable diet.
        </span>
      </Heading>
      <div className="relative z-10 mt-10 flex h-[983px] w-11/12 flex-col self-center">
        <div className="flex w-full flex-row gap-10">
          <Card3
            title="Personalized Nutrition"
            subtitle="Get meal plans tailored to your unique dietary needs, preferences, and goals, ensuring a balanced and enjoyable diet."
            varient="secondary"
          ></Card3>
          <Card3 image={groceryBagPic1}></Card3>
          <Card3
            title="Time-Saving Convenience"
            subtitle="Say goodbye to meal planning stress. Our AI-driven platform simplifies your weekly meal preparation, saving you valuable time."
            varient="square"
          ></Card3>
          <Card3
            title="Healthier Eating Habits"
            subtitle="Easily adopt a healthier lifestyle with nutrient-rich meal plans and educational content on nutrition and wellness."
            varient="tertiary"
          ></Card3>
        </div>
        <div className="absolute -bottom-10 z-10 flex flex-row gap-10">
          <Card3
            title="Cost-Effective Shopping"
            subtitle="Reduce food waste and save money with efficient grocery shopping lists that align perfectly with your meal plans."
            varient="square"
            className="mt-40"
          ></Card3>
          <Card3
            title="Seamless Grocery Delivery"
            subtitle="Enjoy the convenience of having all your meal ingredients delivered right to your doorstep through our local grocery store partnerships."
            varient="square"
            className="mt-40"
          ></Card3>
          <Card3
            title="Community Support"
            subtitle="Join a community of like-minded individuals, share experiences, recipes, and tips, and get motivated on your journey to healthier eating."
            varient="primary"
            className=""
          ></Card3>
          <Card3 circle={true} image={groceryBagPic2} className="mt-30"></Card3>
        </div>
      </div>
    </section>
  );
}
