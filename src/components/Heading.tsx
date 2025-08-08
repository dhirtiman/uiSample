import React from "react";
import Line13 from "../assets/line13.svg";

export default function Heading({ children }: { children: React.ReactNode }) {
    const childrenArray = React.Children.toArray(children);
  
    return (
      <div className="flex items-start gap-3">
        {/* Left: Title */}
        <span className="text-primary font-syne font-medium text-[55px] mt-7 leading-[1.1]">
          {childrenArray[0]}
        </span>
  
        {/* Middle: Slanted line */}
        <img src={Line13} className=" w-12 h-auto mt-4" alt="Line13" />
  
        {/* Right: Subtitle */}
        <span className="text-primary font-work-sans text-xl mt-7 max-w-sm">
          {childrenArray[1]}
        </span>
      </div>
    );
  }
  