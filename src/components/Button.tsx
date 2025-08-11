type varientType = 'primary' | 'secondary' | 'tertiary';

type sizeType = 'wide' | 'small' | 'normal';
import rightArrow from '../assets/rightArrow.svg';

export default function Button({
  children,
  varient,
  size,
  className,
}: {
  children: React.ReactNode;
  varient: varientType;
  size: sizeType;
  className?: string;
}) {
  const commonClass =
    'flex flex-row px-10 m-2.5  font-medium py-[18px] text-[22px] rounded-[50px] font-work-sans  cursor-pointer';

  const varientClass = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-primary',
    tertiary: ' text-primary border-primary border-2',
  };

  if (size === 'wide') {
    return (
      <button
        className={`${commonClass} ${varientClass.secondary}   border-primary border-2 ${className}`}
      >
        {children}
        <img src={rightArrow} className="size-[22px]" alt="rightArrow" />
      </button>
    );
  } else if (size === 'small') {
    return (
      <button
        className={`${varientClass[varient]} ${commonClass} border-primary border-2 ${className} `}
      >
        <img src={rightArrow} className="size-[22px]" alt="rightArrow" />
      </button>
    );
  } else
    return (
      <button
        className={`${commonClass} ${varientClass[varient]} ${className} `}
      >
        {children}
      </button>
    );
}
