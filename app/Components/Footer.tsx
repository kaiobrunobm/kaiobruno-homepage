"use client";
import { Copyright } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="h-[5vh] relative w-full p-2 flex justify-center items-end text-text">
      <p className="flex text-sm font-semibold">
        <Copyright size={18} weight="bold" className="mr-1" /> Created and
        design by <span className="text-accent ml-1">@kaiobrunobm</span>
      </p>
    </footer>
  );
};

export default Footer;
