import React from "react";

function Profile() {
  return (
    <div className="w-screen max-h-screen ">
      <div className="w-screen bg-[#F7F8F9]">
        <div className="w-screen h-15 flex flex-col justify-start items-start md:items-center bg-white p-6 pt-5">
          <h1 className="text-left text-[18px] font-normal font-[Rubik] text-[#1D2226] w-[146px] h-[22px]">
            Account Settings
          </h1>
        </div>
        <div className="w-screen h-[calc(100vh-20px)] flex flex-col justify-start items-start md:items-center bg-[#F7F8F9]">
          <div className="flex flex-row gap-5 p-6 pb-0">
            <div className="relative w-20 h-20">
              <img
                src="/profile.png"
                alt="profile-image"
                className="w-full h-full rounded-full object-cover"
              />

              <img
                src="/camera-icon.png"
                alt="camera-icon"
                className="absolute bottom-1 right-0 w-5 h-5 bg-white rounded-full  shadow-md cursor-pointer"
              />
            </div>

            <div className="text-start">
              <h1 className="font-medium text-[15px]">Marry Doe</h1>
              <p className="font-normal text-[14px]">marry@gmail.com</p>
            </div>
          </div>

          <div className="text-left text-[13px] font-normal font-[Rubik] text-[#1D2226]/80  sm:w-120">
            <p className="p-6">
              {" "}
              Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
              Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
              Erat, Sed Diam
            </p>
            <hr className="border-t border-dashed border-gray-400" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
