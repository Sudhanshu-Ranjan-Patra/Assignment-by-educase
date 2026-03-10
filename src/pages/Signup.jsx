import React, { useState } from "react";
import FloatingInput from "../component/FloatingInput";
import CustomButton from "../component/CustomButton";
import RadioButton from "../component/RadioButton";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "no"
  });

  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Specific check for the phone field
    if (name === "phone") {
      // Only update if the value is 10 digits or less
      if (value.length > 10) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone) {
      tempErrors.phone = "Phone number is required";
    } else if (formData.phone.length !== 10) {
      tempErrors.phone = "Phone number must be exactly 10 digits";
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Please enter a valid email address";
    if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    // Prevent default if it's a form event
    if (e) e.preventDefault();

    if (validate()) {
      setShowPopup(true);
      // Wait for 2 seconds to show success, then navigate to profile
      setTimeout(() => {
        setShowPopup(false);
        navigate("/profile");
      }, 2000);
    }
  };

  return (

    <div className=" min-h-screen bg-[#E5E7EB] flex justify-center items-center p-0">
      <div className="w-full max-w-[375px] h-[812px] bg-[#F7F8F9] rounded-[40px] shadow-2xl overflow-hidden relative border-[0px] border-[#1D2226] fade-in">
        <div className="h-full overflow-y-auto custom-scrollbar flex flex-col p-1 pt-12">
          <div className="h-dvh bg-[#F7F8F9] flex justify-center fade-in relative overflow-hidden">
            {showPopup && (
              <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/20 backdrop-blur-sm animate-in fade-in duration-300">
                <div className="w-full max-w-xs bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center text-center scale-in-center">
                  {/* Animated Checkmark Circle */}
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  <h2 className="text-xl font-bold text-[#1D2226] mb-2">Success!</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Your account has been created successfully.
                  </p>
                </div>
              </div>
            )}

            <div className="w-full max-w-md p-6 pt-10 flex flex-col h-full">
              <div className="flex-none">
                <h1 className="text-[28px] leading-[36px] font-medium font-[Rubik] text-[#1D2226] mb-6">
                  Create your PopX account
                </h1>

                <div className="flex flex-col gap-4 mb-4">
                  <div className="flex flex-col gap-1">
                    <FloatingInput label="Full Name*" name="name" value={formData.name} onChange={handleChange} hasError={!!errors.name} />
                    {errors.name && <span className="text-red-500 text-[10px] pl-1">{errors.name}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <FloatingInput label="Phone Number*" type="number" name="phone" value={formData.phone} onChange={handleChange} hasError={!!errors.phone} />
                    {errors.phone && <span className="text-red-500 text-[10px] pl-1">{errors.phone}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <FloatingInput label="Email Address*" type="email" name="email" value={formData.email} onChange={handleChange} hasError={!!errors.email} />
                    {errors.email && <span className="text-red-500 text-[10px] pl-1">{errors.email}</span>}
                  </div>

                  <div className="flex flex-col gap-1">
                    <FloatingInput label="Password*" type="password" name="password" value={formData.password} onChange={handleChange} hasError={!!errors.password} />
                    {errors.password && <span className="text-red-500 text-[10px] pl-1">{errors.password}</span>}
                  </div>

                  <FloatingInput label="Company Name" name="company" value={formData.company} onChange={handleChange} />
                </div>

                <div className="mb-4">
                  <p className="text-[13px] font-normal font-[Rubik] text-[#3b3f43]">
                    Are you an Agency?*
                  </p>
                  <RadioButton
                    value={formData.isAgency}
                    onChange={(val) => setFormData(prev => ({ ...prev, isAgency: val }))}
                  />
                </div>
              </div>

              <div className="flex-grow"></div>

              <div className="w-full pb-[10px]" onClick={handleSubmit}>
                <CustomButton
                  text="Create Account"
                  bgColor="bg-[#6C25FF]"
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

export default Signup;