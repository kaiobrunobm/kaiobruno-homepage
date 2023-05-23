"use client";
import { Copyright } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="p-2 flex justify-center items-end">
      <p className="flex text-sm font-semibold">
        <Copyright size={18} weight="bold" className="mr-1" /> Created and
        design by @kaiobrunobm
      </p>
    </footer>
  );
};

export default Footer;
