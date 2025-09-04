import React from "react";
import CustomButton from "../CustomButton";

function Home() {

  return (
    <div className="w-screen max-h-screen">
      <div className="w-screen h-screen flex flex-col justify-end items-start md:items-center bg-[#F7F8F9] p-6">
        <h1 className="text-[28px] leading-[34px] font-medium font-[Rubik] text-[#1D2226] mb-2 ">
          Welcome to PopX
        </h1>

        <p className="text-[18px] leading-[26px] font-normal font-[Rubik] text-[#1D2226] opacity-60 mb-6 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <CustomButton text=" Create Account" bgColor="bg-[#6C25FF]" textColor="text-white" to="/sign-up" />

        <CustomButton text=" Already Registered? Login" bgColor="bg-[#6C25FF4B]" textColor="text-[#1D2226]" to="/sign-in" />
        </div>
      
    </div>
  );
}

export default Home;
