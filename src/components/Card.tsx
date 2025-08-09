import React from 'react';
import clsx from 'clsx';

type CardVariant = 'default' | 'outlined' | 'shadow';

type CardProps = {
  title: string;
  subtitle?: string;
  imageUrl?: string;
  bgColor?: string; // Tailwind-compatible bg (e.g., "bg-white", "bg-green-100")
  variant?: CardVariant;
  className?: string;
};

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  imageUrl,
  bgColor = 'bg-white',
  variant = 'default',
  className = '',
}) => {
  const baseClasses = 'rounded-xl p-6 transition-all duration-300';
  const variantClasses = {
    default: '',
    outlined: 'border border-gray-200',
    shadow: 'shadow-md hover:shadow-lg',
  };

  return (
    <div
      className={clsx(baseClasses, bgColor, variantClasses[variant], className)}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Card Image"
          className="mb-4 h-40 w-full rounded-md object-cover"
        />
      )}
      <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      {subtitle && <p className="mt-1 text-sm text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default Card;
