import React from "react";
import CustomButton from "../component/CustomButton";


function Home() {
  return (
    <div className="fixed inset-0 min-h-screen bg-[#E5E7EB] flex justify-center items-center p-2">
      <div className="w-full max-w-[375px] h-[812px] bg-[#F7F8F9] rounded-[40px] shadow-2xl overflow-hidden relative border-[0px] border-[#1D2226] fade-in">
        <div className="h-full overflow-y-auto custom-scrollbar flex flex-col p-1 pt-12">
          <div className="min-h-screen bg-[#F7F8F9] flex flex-col justify-center items-center">
            {/* Mobile-sized container for all screens */}
            <div className="w-full max-w-md h-screen flex flex-col justify-end p-6 pb-12">
              <h1 className="text-[28px] leading-[34px] font-medium font-[Rubik] text-[#1D2226] mb-2">
                Welcome to PopX
              </h1>
              <p className="text-[18px] leading-[26px] font-normal font-[Rubik] text-[#1D2226] opacity-60 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              </p>
              <CustomButton text="Create Account" bgColor="bg-[#6C25FF]" textColor="text-white" to="/sign-up" />
              <CustomButton text="Already Registered? Login" bgColor="bg-[#6C25FF4B]" textColor="text-[#1D2226]" to="/sign-in" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;