import React from "react";
import FloatingInput from "../FloatingInput";
import CustomButton from "../CustomButton";

function Signin() {
  return (
    <div className="w-screen max-h-screen">
      <div className="w-screen h-screen flex flex-col justify-start items-start md:items-center bg-[#F7F8F9] p-6 pt-10">
        <h1 className="text-left text-[28px] leading-[36px] font-medium font-[Rubik] text-[#1D2226] w-[188px] h-[69px]">
          Signin to your PopX account
        </h1>

        <p className="text-left text-[18px] leading-[26px] font-normal font-[Rubik] text-[#1D2226] opacity-60 w-[232px] h-[48px] pt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <div className="mt-12">
          <FloatingInput label="Email Address" type="email" name="name" />
          <FloatingInput label="Password" type="email" name="name" />
        </div>

        <CustomButton text=" Login" bgColor="bg-[#CBCBCB]" textColor="text-white" to="/profile" />
      </div>
    </div>
  );
}

export default Signin;
