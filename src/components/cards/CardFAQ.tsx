import React, { useState } from 'react';
import Button from '../Button';

type FAQType = {
  question: string;
  answer: string;
};

type CardFAQProps = {
  faq: FAQType;
  key: number;
  className?: string;
};

const CardFAQ: React.FC<CardFAQProps> = ({ faq,  className }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleFAQ = () => {
    setIsOpen((value) => !value);
  };

  return (
    <div
      className={` transition-all duration-200 flex ${isOpen ? `bg-tertiary h-78 p-[50px] pt-0` : `ml-12 h-fit`} w-fit flex-row items-center gap-10 rounded-3xl ${className}`}
    >
      <Button
        varient={isOpen ? 'secondary' : 'tertiary'}
        size="small"
        className={`h-fit ${isOpen ? `rotate-90` : `-rotate-90`}`}
        onClick={() => {
          toggleFAQ();
        }}
      ></Button>
      <div className="flex w-full flex-col gap-[30px]">
        <p className="font-work-sans text-size-[22px] font-semibold">
          {faq.question}
        </p>
        {isOpen ? <p className="">{faq.answer}</p> : null}
      </div>
    </div>
  );
};

export default CardFAQ;
