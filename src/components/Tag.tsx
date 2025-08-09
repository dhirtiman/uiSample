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
        border ? 'border-primary border-2' : 'border-none bg-slate-100'
      } font-work-sans text-primary mx-5 my-5 w-auto rounded-[100px] px-[17px] py-[9px]`}
    >
      {children}
    </a>
  );
}
