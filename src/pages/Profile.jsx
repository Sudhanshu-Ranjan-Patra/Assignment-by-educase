import React from "react";

function Profile() {
  return (
    <div className="fixed inset-0 min-h-screen bg-[#E5E7EB] flex justify-center items-center p-2">
      <div className="w-full max-w-[375px] h-[812px] bg-[#F7F8F9] rounded-[40px] shadow-2xl overflow-hidden relative border-[0px] border-[#1D2226] fade-in">
        <div className="h-full overflow-y-auto custom-scrollbar flex flex-col p-1 pt-12">
          <div className="min-h-screen bg-[#F7F8F9] flex flex-col items-center">
            {/* Header Container */}
            <div className="w-full bg-white border-b border-gray-100 flex justify-center">
              <div className="w-full max-w-md p-6 py-4">
                <h1 className="text-[18px] font-normal font-[Rubik] text-[#1D2226]">
                  Account Settings
                </h1>
              </div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-md p-6">
              <div className="flex flex-row gap-5 items-center mb-6">
                <div className="relative w-20 h-20 shrink-0">
                  <img src="/profile.png" alt="profile" className="w-full h-full rounded-full object-cover" />
                  <img src="/camera-icon.png" alt="camera" className="absolute bottom-0 right-0 w-6 h-6 bg-[#6C25FF] p-1 rounded-full shadow-md cursor-pointer" />
                </div>
                <div>
                  <h1 className="font-medium text-[15px] text-[#1D2226]">Marry Doe</h1>
                  <p className="font-normal text-[14px] text-[#1D2226]">marry@gmail.com</p>
                </div>
              </div>

              <p className="text-[13px] leading-[20px] font-normal font-[Rubik] text-[#1D2226]/80 pb-6 border-b border-dashed border-gray-300">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;