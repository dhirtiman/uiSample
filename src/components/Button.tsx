type varientType = 'primary' | 'secondary' | 'tertiary';

type sizeType = 'wide' | 'small' | 'normal';
import rightArrow from '../assets/rightArrow.svg';

export default function Button({
  children,
  varient,
  size,
  className,
  onClick,
}: {
  children?: React.ReactNode;
  varient: varientType;
  size: sizeType;
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) {
  const commonClass =
    'flex flex-row  m-2.5 font-medium  text-[22px] rounded-[50px] font-work-sans  cursor-pointer';

  const varientClass = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
    tertiary: ' text-primary border-primary border-2',
  };

  if (size === 'wide') {
    return (
      <button
        onClick={onClick}
        className={`${commonClass} ${varientClass.secondary} py-[18px] px-10 border-primary w-fit border-2 ${className}`}
      >
        {children}
        <img
          src={rightArrow}
          className="mx-2 size-[22px] self-center"
          alt="rightArrow"
        />
      </button>
    );
  } else if (size === 'small') {
    return (
      <button
        onClick={onClick}
        className={`${varientClass[varient]} ${commonClass} py-4 px-4 border-primary border-2 ${className} `}
      >
        <img src={rightArrow} className="size-[22px]" alt="rightArrow" />
      </button>
    );
  } else
    return (
      <button
        onClick={onClick}
        className={`${commonClass} py-[18px] px-10 ${varientClass[varient]} ${className} `}
      >
        {children}
      </button>
    );
}
