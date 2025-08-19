import TestimonialCard from '../cards/TestimonialCard';
import Heading from '../Heading';
import author1 from '../../assets/author/author1.jpg';
import author2 from '../../assets/author/author2.jpg';
import author3 from '../../assets/author/author3.jpg';
import author4 from '../../assets/author/author4.jpg';

export default function Testimonials() {
  return (
    <section className="mt-20 flex h-fit w-full flex-col p-10">
      <Heading className="mt-20 ml-32">
        <span>Testimonials</span>
        <span>
          Real stories from satisfied users: see how our platform changes lives
        </span>
      </Heading>
      <div className="my-20 flex h-fit flex-row gap-5">
        <TestimonialCard
          subTitle={`Since using AIChefMate, I've rediscovered my love for cooking! The meal plans are easy and delicious. It's been a game-changer for my busy lifestyle.`}
          authorName="Emily R."
          authorImage={author1}
          varient="tertiary"
        ></TestimonialCard>
        <TestimonialCard
          subTitle={`I never knew healthy eating could be this simple and satisfying. Thanks to AIChefMate, my family enjoys diverse, nutritious meals every day.`}
          authorName="Mark T."
          authorImage={author2}
          varient="primary"
        ></TestimonialCard>
        <TestimonialCard
          subTitle={`The grocery savings have been incredible! Plus, every meal feels tailored just for me. I'm eating better and feeling great. A big thumbs up!`}
          authorName="Sarah J."
          authorImage={author3}
          varient="tertiary"
        ></TestimonialCard>
        <TestimonialCard
          subTitle={`Switching to AIChefMate has been a revelation for my meal prep routine. The AI-generated plans are spot-on with my tastes and nutritional needs, making healthy eating effortless and enjoyable.`}
          authorName="Emily R."
          authorImage={author4}
          varient="tertiary"
        ></TestimonialCard>
      </div>
    </section>
  );
}
