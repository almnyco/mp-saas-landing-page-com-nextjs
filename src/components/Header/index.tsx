import { Button } from "../ui/button";
import logo from "/public/header/logo.svg";
import Image from "next/image";

// hover:font-semibold transition-all delay-75 ease-in-out
export function Header() {
  return (
    <nav className="foreground-text text-sm flex flex-row justify-between p-11">
      <a href="#">
        <Image src={logo} width={128} height={46} alt="logo" />
      </a>
      <ul className="flex flex-row gap-7 items-center">
        <li>
          <a className="cursor-pointer hover:underline" href="#funcionamento">
            Funcionamento
          </a>
        </li>
        <li>
          <a className="cursor-pointer hover:underline" href="#preco">
            Preço
          </a>
        </li>
        <li>
          <Button className="border-2 border-border-color!important bg-background text-black shadow-none hover:bg-border-color">
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
}
