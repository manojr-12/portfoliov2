"use client";
import { CiCoffeeCup } from "react-icons/ci";

export default function FooterSection() {
  return (
    <div className="footer mt-50">
      <p className="mt-5">
        Copyright © Manoj Ravichandran 2025 - designed and developed by me
      </p>
      <button
        onClick={handleClick}
        className="mt-3 mb-5 flex items-center gap-1 coffee-text flex flex-row text-[#6F4D37] text-md"
      >
        <span>Buy Me a Coffee</span>
        <CiCoffeeCup className="h-6 w-6" />
      </button>
    </div>
  );
}

const handleClick = () => {
  window.open("https://buymeacoffee.com/manojr__12", "_blank");
};
