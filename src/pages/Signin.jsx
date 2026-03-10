
import React, { useState } from "react";
import FloatingInput from "../component/FloatingInput";
import CustomButton from "../component/CustomButton";
import { useNavigate } from "react-router-dom";

function Signin() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.password) {
      tempErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (validate()) {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        navigate("/profile");
      }, 2000);
    }
  };

  return (
    <div className="fixed inset-0 min-h-screen bg-[#E5E7EB] flex justify-center items-center p-2">
      <div className="w-full max-w-[375px] h-[812px] bg-[#F7F8F9] rounded-[40px] shadow-2xl overflow-hidden relative border-[0px] border-[#1D2226] fade-in">
        <div className="h-full overflow-y-auto custom-scrollbar flex flex-col p-1 pt-12">
          <div className="min-h-screen bg-[#F7F8F9] flex justify-center fade-in relative overflow-hidden">
            
            {/*Success Modal */}
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm">
                <div className="w-full max-w-xs bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center scale-in-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-bold text-[#1D2226] mb-2">Welcome Back!</h2>
                  <p className="text-gray-500 text-sm">Signing you in...</p>
                </div>
              </div>
            )}

            <div className="w-full max-w-md p-6 pt-10 flex flex-col ">
              <div className="flex-none">
                <h1 className="text-[28px] leading-[36px] font-medium font-[Rubik] text-[#1D2226] mb-4">
                  Signin to your PopX account
                </h1>

                <p className="text-[18px] leading-[26px] font-normal font-[Rubik] text-[#1D2226] opacity-60 mb-10">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </p>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <FloatingInput
                      label="Email Address"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      hasError={!!errors.email}
                    />
                    {errors.email && <span className="text-red-500 text-[10px] pl-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <FloatingInput
                      label="Password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      hasError={!!errors.password}
                    />
                    {errors.password && <span className="text-red-500 text-[10px] pl-1">{errors.password}</span>}
                  </div>
                </div>
              </div>



              <div className="w-full pb-[10px] pt-6" onClick={handleSubmit}>
                <CustomButton
                  text="Login"
                  bgColor={formData.email && formData.password ? "bg-[#6C25FF]" : "bg-[#CBCBCB]"}
                  textColor="text-white"
                  to="#"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;