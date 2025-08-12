import React from 'react';

type Card1Props = {
  title: string;
  subtitle: string;
  className?: string;
};

const Card1: React.FC<Card1Props> = ({ title, subtitle, className }) => {
  return (
    <div className={` bg-primary h-52 w-96 rounded-4xl text-center flex flex-col justify-top ${className}`}>
      <h1 className="text-secondary font-syne text-6xl my-7">{title}</h1>
      <p className="text-secondary font-work-sans text-[26px]">{subtitle}</p>
    </div>
  );
};

export default Card1;
