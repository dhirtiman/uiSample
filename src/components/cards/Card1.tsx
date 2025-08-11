import React from 'react';

type Card1Props = {
  title: string;
  subtitle: string;
  className?: string;
};

const Card1: React.FC<Card1Props> = ({ title, subtitle, className }) => {
  return (
    <div className={`${className} bg-primary h-52 w-96 rounded-4xl text-center flex flex-col justify-center`}>
      <h1 className="text-secondary font-syne text-6xl">{title}</h1>
      <p className="text-secondary font-work-sans">{subtitle}</p>
    </div>
  );
};

export default Card1;
