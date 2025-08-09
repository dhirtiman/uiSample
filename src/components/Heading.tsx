import React from 'react';
import Line13 from '../assets/line13.svg';

export default function Heading({ children }: { children: React.ReactNode }) {
  const childrenArray = React.Children.toArray(children);

  return (
    <div className="flex items-start gap-3">
      {/* Left: Title */}
      <span className="text-primary font-syne mt-7 text-[55px] leading-[1.1] font-medium">
        {childrenArray[0]}
      </span>

      {/* Middle: Slanted line */}
      <img src={Line13} className="mt-4 h-auto w-12" alt="Line13" />

      {/* Right: Subtitle */}
      <span className="text-primary font-work-sans mt-7 max-w-sm text-xl">
        {childrenArray[1]}
      </span>
    </div>
  );
}
