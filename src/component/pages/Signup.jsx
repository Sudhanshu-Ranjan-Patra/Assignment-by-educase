import React from "react";
import FloatingInput from "../FloatingInput";
import CustomButton from "../CustomButton";
import RadioButton from "../RadioButton";
function Signup() {
  return (
    <div className="w-screen max-h-screen bg">
      <div className="w-screen h-screen flex flex-col justify-start items-start md:items-center bg-[#F7F8F9] p-6 pt-10">
        <h1 className="text-left text-[28px] leading-[36px] font-medium font-[Rubik] text-[#1D2226] w-[188px] h-[69px]">
          Create your PopX account
        </h1>

        <div className="mt-8">
          <FloatingInput label="Full Name*" type="email" name="name" />
          <FloatingInput label="Phone Number*" type="number" name="name" />
          <FloatingInput label="Email Address*" type="email" name="name" />
          <FloatingInput label="Password*" type="text" name="name" />
          <FloatingInput label="Company Name" type="email" name="name" />
        </div>
        <div className="w-[130px] h-[15px] text-left text-[13px] leading-[17px] font-normal font-[Rubik] text-[#1D2226] ">
          <p>Are you an Agency?*</p>
          <RadioButton />
        </div>
      </div>

      <div className="flex flex-col justify-start items-start md:items-center bg-[#F7F8F9] p-6">
        <CustomButton
          text=" Create Account"
          bgColor="bg-[#6C25FF]"
          textColor="text-white"
          to="/profile"
        />
      </div>
    </div>
  );
}

export default Signup;
