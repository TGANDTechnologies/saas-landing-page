"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DialogBoxProps {
  trigger: React.ReactNode;
}

const DialogBox = ({ trigger }: DialogBoxProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
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
            <input id="name" type="text" placeholder="John Doe" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="business" className="text-sm font-medium">Business Name</label>
            <input id="business" type="text" placeholder="Acme Inc." className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input id="email" type="email" placeholder="john@acme.com" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
          </div>

          <div className="flex flex-col space-y-1">
            <label htmlFor="contact" className="text-sm font-medium">Contact Number</label>
            <input id="contact" type="tel" placeholder="+1 555 123 4567" className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black" />
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
  );
};

export default DialogBox;
