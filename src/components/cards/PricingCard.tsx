import React from 'react';
import Button from '../Button';

type CardVariant = 'left' | 'middle' | 'right';

type PricingCardProps = {
  planTitle: string;
  price?: string;
  features: string[];
  bestText: string;
  buttonText: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  varient: CardVariant;
  className?: string;
};

const PricingCard: React.FC<PricingCardProps> = ({
  planTitle,
  price = 0,
  features,
  bestText,
  buttonText,
  onClick,
  varient,
  className,
}) => {
  const varientClasses = {
    left: 'h-220 w-113 rounded-tl-[43px] rounded-bl-[43px] border-2 border-r-0 ',
    middle: 'bg-secondary w-120 rounded-[43px] border-2 h-245',
    right:
      'h-220  w-113 border-2 border-l-0 rounded-tr-[43px] rounded-br-[43px]',
  };

  return (
    <div
      className={` ${varientClasses[varient]} flex flex-col items-center gap-[10px] px-[50px] py-[70px] ${className}`}
    >
      <h3 className="text-primary font-syne text-4xl">{planTitle}</h3>
      <p className="font-work-sans text-center text-[45px] font-semibold">
        ${price}
      </p>
      <p className="font-work-sans mb-10 text-center text-[22px]">per month</p>
      <ul
        role="list"
        className="font-work-sans marker:text-primary ml-10 list-disc space-y-3 self-start text-[22px]"
      >
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <div className="border-primary my-10 w-[350px] border-2"></div>
      <p className="font-work-sans text-left text-[22px]">
        <span className="font-bold">Best For: </span>
        {bestText}
      </p>
      <Button
        varient={varient === 'middle' ? `primary` : 'tertiary'}
        size="normal"
        onClick={onClick}
        className={`${(varient==='right')? `mt-10`:'mt-24'}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;
