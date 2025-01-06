import React from "react";

const InputDesign = ({
  name,
  type,
  isSelect,
  placeholder,
  options,
  inputValue,
  handleChange,
  inputName
}) => {
  return (
    <div className="border-2 px-2 flex items-center gap-2 rounded-lg focus-within:border-primary">
      <label className="uppercase font-semibold text-[14px]">{name}:</label>
      {isSelect ? (
        <select onChange={handleChange} name={inputName} className="py-3 flex-1 outline-none uppercase font-semibold text-[14px]">
          <option value="" className="uppercase font-semibold text-[14px]">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="font-normal capitalize">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          className="py-3 flex-1 outline-none"
          onChange={(e) => handleChange(e)}
          name={inputName}
          value={inputValue}
        />
      )}
    </div>
  );
};

export default InputDesign;
