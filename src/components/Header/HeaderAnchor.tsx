export default function HeaderAnchor({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="text-primary font-work-sans hover:text-primary/80 cursor-pointer font-medium transition-all duration-300"
    >
      {children}
    </a>
  );
}
