import Heading from '../Heading';
import pricingSplashImage from '../../assets/pricingSplashImage.jpg';
import PricingCard from '../cards/PricingCard';

export default function Testimonials() {
  const freeFeatures = [
    'Basic AI meal planning',
    'Limited recipe access',
    'Manual grocery list creation',
  ];
  const standardFeatures = [
    'Comprehensive AI meal planning',
    'Full recipe library access',
    'Automated grocery lists',
    'Grocery delivery integration',
  ];
  const premiumFeatures = [
    'All Standard features',
    'Exclusive gourmet recipes',
    'Nutritional consultations',
    'Advanced customization options',
  ];

  return (
    <section className="flex h-screen w-full flex-col mb-120">
      <Heading className=" ml-32">
        <span>Pricing</span>
        <span>Find your perfect plan: tailored pricing for every need</span>
      </Heading>
      <div className="mt-20 flex h-fit w-4/5 self-center mr-30 flex-row items-center ">
        <img
          src={pricingSplashImage}
          alt="pricing splash image"
          className="h-195 w-33 rounded-tl-[43px] rounded-bl-[43px] object-cover"
        ></img>
        <PricingCard
          planTitle="Free Plan"
          price="0"
          features={freeFeatures}
          bestText={`Those who want to explore the platform's basic functionalities.`}
          buttonText="Get Started For Free"
          varient="left"
        ></PricingCard>
        <PricingCard
          planTitle="Standard Plan"
          price="9.99"
          features={standardFeatures}
          bestText={`Individuals or families looking for full meal planning support and convenience.`}
          buttonText="Subscribe Now"
          varient="middle"
        ></PricingCard>
        <PricingCard
          planTitle="Premium Plan"
          price="19.99"
          features={premiumFeatures}
          bestText={`Users seeking a premium culinary experience with added personalization and expert guidance.`}
          buttonText="Go Premium"
          varient="right"
        ></PricingCard>
        <img
          src={pricingSplashImage}
          alt="pricing splash image"
          className="h-195 w-33 rotate-180 rounded-tl-[43px] rounded-bl-[43px] object-cover"
        ></img>
      </div>
    </section>
  );
}
