
import React from "react";
import { Link } from "react-router-dom";

function CustomButton({ text, bgColor = "bg-blue-500", textColor = "text-white", to = "/" }) {
  return (
    <Link
      to={to}
      className={`w-full h-[46px] ${bgColor} rounded-[6px] flex justify-center items-center text-[16px] leading-[17px] font-normal font-[Rubik] ${textColor} cursor-pointer mb-3 transition-transform active:scale-95`}
    >
      {text}
    </Link>
  );
}

export default CustomButton;