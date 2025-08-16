import React from 'react';

type CardVariant = 'primary' | 'secondary' | 'tertiary' | 'square' ;

type Card3Props = {
  title?: string;
  subtitle?: string;
  image?: string;
  circle?: boolean;
  alt?: string;
  varient?: CardVariant;
  className?: string;

};

const Card3: React.FC<Card3Props> = ({
  title,
  subtitle,
  image,
  circle = false,
  varient = 'primary',
  alt,
  className,
}) => {
  const varientClasses = {
    primary: 'bg-primary ',
    secondary: 'bg-secondary',
    tertiary: 'bg-tertiary',
    square: '',
  };

  const textTitleClasses = {
    primary: 'text-secondary ',
    secondary: 'text-primary',
    tertiary: 'text-primary',
    square: 'text-primary',
  };

  const textSubTitleClassses = {
    primary: 'text-tertiary ',
    secondary: 'text-primary',
    tertiary: 'text-primary',
    square: 'text-primary',
  };

  if (varient === 'square') {
    return (
      <div
        className={` ${varientClasses[varient]} mb-10 flex h-98 w-[437px] flex-col items-center gap-10 self-center pl-5 ${className}`}
      >
        <h3 className={` ${textTitleClasses[varient]} font-syne text-[40px]`}>{title}</h3>
        <p className={` ${textSubTitleClassses[varient]} font-work-sans text-[22px]`}>{subtitle}</p>
      </div>
    );
  } else
    return image ? (
      <img
        src={image}
        alt={alt}
        className={circle ? ` size-98 rounded-[240px] self-center ${className}` : ` h-137 w-1/4 rounded-[240px] ${className}` }
      ></img>
    ) : (
      <div
        className={` ${varientClasses[varient]} flex h-137 w-1/4 flex-col gap-10 rounded-[240px] px-13 py-22 ${className}`}
      >
        <h3 className={` ${textTitleClasses[varient]} font-syne text-[40px]`}>{title}</h3>
        <p className={` ${textSubTitleClassses[varient]} font-work-sans text-[22px]`}>{subtitle}</p>
      </div>
    );
};

export default Card3;
