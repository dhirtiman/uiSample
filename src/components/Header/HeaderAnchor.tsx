
export default function HeaderAnchor({children,href}:{children: React.ReactNode,href: string}){
    return (
        <a href={href} className=" text-primary font-work-sans font-medium hover:text-primary/80 transition-all duration-300 cursor-pointer" >{children}</a>
    )   
}