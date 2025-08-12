import React from 'react';

type Card2Props = {
  title?: string;
  subtitle?: string;
  image?: string;
  alt?: string;
  bottom?: boolean;
  className?: string;
};

const Card2: React.FC<Card2Props> = ({
  title,
  subtitle,
  image,
  alt,
  bottom = false,
  className,
}) => {
  return (
    <>
      {!title && !subtitle && image ? (
        // Case: Only image
        <img
          src={image}
          alt={alt}
          className={`h-[461px] w-72 rounded-[42px] ${className}`}
        />
      ) : (
        // Case: Card layout
        <div
          className={`${className} justify-top flex w-72 flex-col rounded-4xl bg-white ${image && bottom ? 'h-[461px]' : 'h-[491px]'}`}
        >
          {image && bottom && (
            <img
              className="mt-4 h-72 w-64 self-center rounded-2xl"
              src={image}
              alt={alt}
            />
          )}
          {title && (
            <h1 className="text-primary font-syne mt-4 ml-3 text-[61px] font-medium">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-primary font-work-sans ml-4 text-left text-[26px]">
              {subtitle}
            </p>
          )}
          {image && !bottom && (
            <img
              className="h-72 w-64 self-center rounded-2xl"
              src={image}
              alt={alt}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Card2;
