import assistanceImage from '../../assets/assistanceImage.png';
import Button from '../Button';
import Heading from '../Heading';

export default function Assistance() {
  return (
    <section className="mt-20 flex h-fit w-full flex-col ">
      <Heading className="ml-32">
        <span>Need Assistance?</span>
        <span>{`We’re here to help!`}</span>
      </Heading>
      <div className="my-32 flex h-[748px] w-19/20 flex-row items-center gap-20 self-end rounded-tl-[1000px] rounded-bl-[1000px] border-2 px-10">
        <div className="relative h-[678px] w-[1129px] items-center rounded-[1000px] border-2">
          <img
            src={assistanceImage}
            className="mt-8 ml-10 h-[610px] w-[1045px] rounded-[1000px] object-fill"
            alt="assistance image"
          ></img>
        </div>
        <div className="flex h-fit flex-col gap-10">
          <h1 className="text-primary font-work-sans h-[432px] w-[468px] text-left text-[40px]">
            Have questions or need help with AIChefMate? Our dedicated support
            team is ready to assist you. Get the answers and assistance you need
            to make the most of your meal planning experience.
          </h1>
          <Button
            varient="secondary"
            size="normal"
            className="mt-20 self-start"
          >
            Get Support
          </Button>
        </div>
      </div>
    </section>
  );
}
