import React from 'react';
type CardVariant = 'primary' | 'tertiary';
import quotePrimary from '../../assets/quote/quotePrimary.svg';
import quoteSecondary from '../../assets/quote/quoteSecondary.svg';

type TestimonialCardProps = {
  subTitle: string;
  authorName: string;
  authorImage?: string;
  alt?: string;
  varient?: CardVariant;
  className?: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  subTitle,
  authorName,
  authorImage,
  alt = authorName + ' image',
  varient = 'primary',
  className,
}) => {
  const varientClasses = {
    primary: 'bg-primary ',
    tertiary: 'bg-tertiary ',
  };

  return (
    <div
      className={` ${varientClasses[varient]} flex h-110 w-1/4 flex-col items-center py-15 px-[50px] gap-4 rounded-3xl ${className}`}
    >
      <p
        className={` ${varient === 'primary' ? `text-tertiary` : 'text-primary'} font-work-sans text-[22px] ` }
      >
        {subTitle}
      </p>
      <img
        src={varient === 'primary' ? `${quoteSecondary}` : `${quotePrimary}`}
        alt="quote mark"
        className=' self-end'
      />
      <div className="flex flex-row items-center gap-5 self-start">
        <img src={authorImage} alt={alt} className="size-15 rounded-4xl" />
        <p
          className={` ${varient === 'primary' ? `text-tertiary` : 'text-primary'} font-work-sans`}
        >
          {authorName}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
