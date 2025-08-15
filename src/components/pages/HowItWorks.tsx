import { useRef } from 'react';

import Heading from '../Heading';
import Rectangle from '../shapes/Rectangle';
import Button from '../Button';
import SlidingImages from '../cards/SlidingImages';

import type { SlidingImagesHandle } from '../cards/SlidingImages';

import image1 from '../../assets/HowWorks1.jpg';
import image2 from '../../assets/HowWorks2.jpg';
import image3 from '../../assets/HowWorks3.jpg';

export default function HowItWorks() {
  const stackRef = useRef<SlidingImagesHandle>(null);
  return (
    <section className="bg-tertiary relative flex h-screen w-full flex-col p-20">
      <Heading className="ml-32">
        <span>How it works</span>
        <span>
          Step into the world of hassle-free meal planning with our easy 3-step
          process
        </span>
      </Heading>
      <div className="z-10 mt-20 flex h-full w-6/7 flex-row self-center">
        <div className="flex w-4/9 flex-col gap-5">
          <h1 className="text-primary font-syne text-6xl">01</h1>
          <h3 className="text-primary font-syne text-[40px]">
            Personalize Your Profile
          </h3>
          <p className="text-primary font-work-sans text-[22px]">
            Begin by creating your profile. Tell us about your dietary
            preferences, nutritional goals, and budget. Our AI technology
            tailors every meal plan to fit your unique needs.
          </p>
          <div className="flex flex-row">
            <Button
              varient="tertiary"
              className='rotate-180'
              size="small"
              onClick={() => stackRef.current?.backwardsImage()}
            >
              Button
            </Button>
            <Button
              onClick={() => stackRef.current?.forwardsImage()}
              varient="secondary"
              size="small"
            >
              Button
            </Button>
          </div>
          <h2 className="text-primary font-syne mt-54 text-4xl">01/03</h2>
        </div>
        <SlidingImages
          ref={stackRef}
          images={[image1, image2, image3]}
        ></SlidingImages>
      </div>
      <Rectangle right={false} className="absolute top-6/7 left-0" />
    </section>
  );
}
