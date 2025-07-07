import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export const Header = () => {

  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline your workflow and boost your productivity
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
            <Image src={Logo} alt="Saas Logo" height={40} width={40} />
            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>

              <Dialog>
  <DialogTrigger asChild>
    <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight">
      Get a Free Trial
    </button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Request a Free Trial</DialogTitle>
      <DialogDescription>
        Fill in your details and we’ll get in touch shortly.
      </DialogDescription>
    </DialogHeader>
    <form className="space-y-4 mt-4">
      <div className="flex flex-col space-y-1">
        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="business" className="text-sm font-medium">Business Name</label>
        <input
          id="business"
          type="text"
          placeholder="Acme Inc."
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="email" className="text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          placeholder="john@acme.com"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <div className="flex flex-col space-y-1">
        <label htmlFor="contact" className="text-sm font-medium">Contact Number</label>
        <input
          id="contact"
          type="tel"
          placeholder="+1 555 123 4567"
          className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-900 transition-colors"
      >
        Submit
      </button>
    </form>
  </DialogContent>
</Dialog>

              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
