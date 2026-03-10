import React from "react";

function RadioButton({ value, onChange }) {
  return (
    <div className="flex flex-row gap-8 mt-2">
      <label className="flex flex-row gap-3 items-center cursor-pointer">
        <input
          type="radio"
          name="agency"
          checked={value === "yes"}
          onChange={() => onChange("yes")}
          className="w-[22px] h-[22px] appearance-none rounded-full border border-[#919191] checked:border-[#6C25FF] relative checked:before:content-[''] checked:before:w-[12px] checked:before:h-[12px] checked:before:bg-[#6C25FF] checked:before:rounded-full checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
        />
        <span className="text-[16px]">Yes</span>
      </label>

      <label className="flex flex-row gap-3 items-center cursor-pointer">
        <input
          type="radio"
          name="agency"
          checked={value === "no"}
          onChange={() => onChange("no")}
          className="w-[22px] h-[22px] appearance-none rounded-full border border-[#919191] checked:border-[#6C25FF] relative checked:before:content-[''] checked:before:w-[12px] checked:before:h-[12px] checked:before:bg-[#6C25FF] checked:before:rounded-full checked:before:absolute checked:before:top-1/2 checked:before:left-1/2 checked:before:-translate-x-1/2 checked:before:-translate-y-1/2"
        />
        <span className="text-[16px]">No</span>
      </label>
    </div>
  );
}

export default RadioButton;