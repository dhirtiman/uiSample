import Logo from "../../assets/logo.png";
import Button from "../Button";
import HeaderAnchor from "./HeaderAnchor";

export default function Header() {
  return (
    <header className=" w-4/5 h-16 flex items-center justify-between  px-4 my-10 ">
      <div className=" flex items-center gap-2 ">
        <img src={Logo} alt="logo" className="w-10 h-10" />
      </div>
      <div className="flex items-center gap-14 ">
        <HeaderAnchor href="#" >Recipes</HeaderAnchor>
        <HeaderAnchor href="#">Blog</HeaderAnchor>
        <HeaderAnchor href="#">Customer Support</HeaderAnchor>
      </div>
      <div className="flex items-center gap-2 ">
        <Button varient="tertiary" size="normal" className="border-none">
          Log In
        </Button>
        <Button varient="primary" size="normal">
          Start For Free
        </Button>
      </div>
    </header>
  );
}
