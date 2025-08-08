export default function Button({
  children,
  border,
  link,
}: {
  children: React.ReactNode;
  border: boolean;
  link: string;
}) {
  return (
    <a
      href={link}
      className={`${
        border ? "border-primary border-2" : "border-none bg-slate-100"
      } font-work-sans text-primary my-5 mx-5 rounded-[100px] py-[9px] px-[17px] w-auto`}
    >
      {children}
    </a>
  );
}
