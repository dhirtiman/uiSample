import React from 'react';
import Button from '../Button';

type CardArticleProps = {
  title: string;
  buttonTitle?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  image: string;
  alt: string;
  className?: string;
};

const CardArticle: React.FC<CardArticleProps> = ({
  title,
  buttonTitle = 'Read Article',
  onClick,
  image,
  alt,
  className,
}) => {
  return (
    <div className={`bg-white w-1/3 flex h-212 flex-col items-center p-8 rounded-[50px] gap-8 ${className}`}>
      <img src={image} alt={alt} className=" object-cover size-118 rounded-[28px]"></img>
      <h3 className="text-primary font-syne text-[40px] ">
        {title}
      </h3>
      <Button varient="secondary" size="wide" className=" self-start" onClick={onClick}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export default CardArticle;
