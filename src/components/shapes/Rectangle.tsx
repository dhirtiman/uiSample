type RectangleProps = {
  className?: string;
  right?: boolean;
};

export default function Rectangle({ className, right = true }: RectangleProps) {
  return (
    <div
      className={`bg-tertiary h-52 w-2xl ${right ? 'rounded-tl-[968px] rounded-bl-[968px]' : 'rounded-tr-[968px] rounded-br-[968px]'} ${className}`}
    ></div>
  );
}
