type RectangleProps = {
    className? : string
}


export default function Rectangle({className}: RectangleProps) {

    return (
        <div className = {`bg-tertiary w-2xl h-52 rounded-tl-[968px] rounded-bl-[968px] ${className}`}></div>
    )
}