import HerbPic2 from '../../assets/HerbPic2.jpg';
import playButton from '../../assets/playButton.svg';
import Heading from '../Heading';

export default function Demo() {
  return (
    <section className="mt-40 flex h-full w-full flex-col ">
      <Heading className="ml-32">
        <span>Demo</span>
        <span>See how it works: your personalized meal planning journey</span>
      </Heading>
      <div className="my-32 flex h-[748px] w-19/20 flex-row items-center gap-20 self-end rounded-tl-[1000px] rounded-bl-[1000px] border-2 px-10">
        <div className="relative h-[678px] w-[1129px] items-center rounded-[1000px] border-2">
          <img
            src={HerbPic2}
            className="mt-8 ml-10 h-[610px] w-[1045px] rounded-[1000px]"
            alt="Herbs"
          ></img>
          <img
            src={playButton}
            alt="play button"
            className="absolute top-1/2 left-1/2 -translate-x-15 -translate-y-9 z-20 self-center"
          />
        </div>
        <h1 className="text-primary font-syne mb-35 h-[553px] w-[427px] text-right text-[66px] font-medium">
          Every meal is a chance to nourish your body, inspire your mind, and
          feed your soul.
        </h1>
      </div>
    </section>
  );
}
