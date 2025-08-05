type varientType = "primary" | "secondary" | "tertiary";

type sizeType = "wide" | "small" | "normal";
import rightArrow from "../assets/rightArrow.svg";

export default function Button({
  children,
  varient,
  size,
}: {
  children: React.ReactNode;
  varient: varientType;
  size: sizeType;
}) {
  // continue here

  const varientClass = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-primary",
    tertiary: " text-primary border-primary border-2",
  };

  if (size === "wide") {
    return (
      <button
        className={`${varientClass.secondary} border-primary border-2 flex flex-row px-10 m-2.5  font-medium py-[18px] rounded-4xl font-work-sans`}
      >
        {children}
        <img src={rightArrow} className=" size-[22px]" alt="rightArrow" />
      </button>
    );
  } else if (size === "small") {
    return (
      <button
        className={`${varientClass[varient]} border-primary border-2 flex flex-row px-10 m-2.5  font-medium py-[18px] rounded-4xl font-work-sans`}
      >
        <img src={rightArrow} className=" size-[22px]" alt="rightArrow" />
      </button>
    );
  } else
    return (
      <button
        className={`${varientClass[varient]} flex flex-row px-10 m-2.5  font-medium py-[18px] rounded-4xl font-work-sans`}
      >
        {children}
      </button>
    );
}
