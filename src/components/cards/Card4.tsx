import React from 'react';
import Button from '../Button';
type CardVariant = 'default' | 'secondary' | 'tertiary';

type Card4Props = {
  title: string;
  buttonTitle?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  image?: string;
  alt?: string;
  varient?: CardVariant;
  className?: string;
};

const Card4: React.FC<Card4Props> = ({
  title,
  buttonTitle,
  onClick,
  image,
  varient = 'default',
  alt,
  className,
}) => {
  const varientClasses = {
    default: 'rounded-[50px]  px-15 py-10 border-2',
    secondary: 'bg-secondary rounded-full p-10',
    tertiary: 'bg-tertiary rounded-[50px]  px-15 py-10',
  };

  const innerVarientClasses = {
    default: '',
    secondary: '',
    tertiary: '',
  };

  return (
    <div
      className={`${varientClasses[varient]} flex flex-row items-center gap-9 ${className}`}
    >
      {varient === 'secondary' ? (
        <img src={image} alt={alt} className="size-55"></img>
      ) : null}
      <div className={` ${innerVarientClasses[varient]} flex flex-col gap-8`}>
        <h4 className={`text-primary font-syne text-[34px]`}>{title}</h4>
        <Button onClick={onClick} varient="tertiary" size="wide">
          {buttonTitle}
        </Button>
      </div>
      {varient === 'secondary' ? null : (
        <img src={image} alt={alt} className="size-55"></img>
      )}
    </div>
  );
};

export default Card4;
