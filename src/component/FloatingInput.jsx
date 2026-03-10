import { useState } from "react";

function FloatingInput({ label, type = "text", name, onChange, value, hasError }) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        id={name}
        name={name}
        type={name === "phone" ? "text" : type}
        inputMode={name === "phone" ? "numeric" : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== "" ? true : false)}
        placeholder=" "
        className={`w-full px-3 py-4 border rounded-md bg-[#F7F8F9] focus:outline-none transition-all ${hasError ? "border-red-500" : "border-gray-300 focus:border-[#6C25FF]"
          }`}
      />
      <label
        htmlFor={name}
        className={`absolute left-3 transition-all duration-200 pointer-events-none p-1
        ${focused || value !== "" || hasError
            ? `text-[12px] -top-2.5 bg-[#F7F8F9] leading-none ${hasError ? "text-red-500" : "text-[#6C25FF]"}`
            : "text-gray-500 top-4"
          }`}
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingInput;