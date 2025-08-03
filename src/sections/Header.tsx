import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import DialogBox from "./DialogBox";

export const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          
          
    <a
      href="https://app.solamailer.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
    >
      Get started for free
    </a>
  
          
          
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <a href="/"><Image src={Logo} alt="Saas Logo" height={40} width={40} /></a>
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="/">Home</a>
              <a href="/features">Features</a>
              <a href="/blog">Blog</a>
              <a href="/about">About</a>
              <a href="/contact">Contact</a>

           <DialogBox
  trigger={
    <a
      href="https://app.solamailer.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight"
    >
      Log In
    </a>
  }
/>

  

              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
