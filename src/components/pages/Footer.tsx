import x from '../../assets/socials/x.svg';
import facebook from '../../assets/socials/facebook.svg';
import tiktok from '../../assets/socials/tiktok.svg';
import logoSecondary from '../../assets/logoSecondary.svg';

export default function Footer() {
  return (
    <footer className="bg-primary w-full px-[140px] py-[60px]">
      <div className="flex justify-between items-start">
        {/* Left side */}
        <div className="flex flex-col gap-12">
          {/* Logo + Links */}
          <div className="flex gap-20">
            <img src={logoSecondary} alt="logo green" />

            <div className="grid grid-cols-2 gap-x-8 gap-y-6">
              <a href="#" className="font-work-sans text-secondary text-[18px] underline">
                Recipes
              </a>
              <a href="#" className="font-work-sans text-secondary text-[18px] underline">
                Customer Support
              </a>
              <a href="#" className="font-work-sans text-secondary text-[18px] underline">
                Blog
              </a>
              <a href="#" className="font-work-sans text-secondary text-[18px] underline">
                Your Profile
              </a>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-work-sans text-white text-[16px]">
            © 2064 AIChefMate. All rights reserved. |{' '}
            <a href="#" className="underline">Privacy Policy</a> |{' '}
            <a href="#" className="underline">Terms of Use</a>
          </p>
        </div>

        {/* Middle text */}
        <p className="font-work-sans text-secondary text-[18px] max-w-[500px]">
          Join us on our journey to make meal planning simple and joyful.
          Connect with us on social media, explore our FAQs for quick answers,
          or drop us a line anytime.
        </p>

        {/* Socials */}
        <div className="flex flex-col gap-4">
          <a href="#"><img src={facebook} alt="facebook logo" /></a>
          <a href="#"><img src={x} alt="x logo" /></a>
          <a href="#"><img src={tiktok} alt="tiktok logo" /></a>
        </div>
      </div>
    </footer>
  );
}
