import React, { useState } from "react";
import InputDesign from "./InputDesign";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { nextStage } from "../redux/reducers/stage";

const StageOne = () => {
  const genderOptions = ["Male", "Female"];
  const [inputs, setInputs] = useState({
    name: "",
    dateOfBirth: "",
    gender: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    nationality: "",
  });

  const dispatch = useDispatch();
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const next = () => {
    if (
      !inputs.name ||
      !inputs.dateOfBirth ||
      !inputs.gender ||
      !inputs.email ||
      !inputs.phone ||
      !inputs.city ||
      !inputs.state ||
      !inputs.nationality
    ) {
      toast.error("Please Fill in all Data");
    } else {
      dispatch(nextStage());
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-[50px]">
      <InputDesign
        name={"name"}
        placeholder={"e.g John Smith"}
        inputvalue={inputs.name}
        handleChange={handleChange}
        inputName={"name"}
      />
      <InputDesign
        name={"date of birth"}
        placeholder={"Enter your fullname"}
        type={"date"}
        inputvalue={inputs.dateOfBirth}
        handleChange={handleChange}
        inputName={"dateOfBirth"}
      />
      <InputDesign
        name={"gender"}
        placeholder={"Select Gender"}
        isSelect={true}
        options={genderOptions}
        inputvalue={inputs.gender}
        handleChange={handleChange}
        inputName={"gender"}
      />
      <InputDesign
        name={"email"}
        placeholder={"e.g john@email.com"}
        type={"email"}
        inputvalue={inputs.email}
        handleChange={handleChange}
        inputName={"email"}
      />
      <InputDesign
        name={"phone"}
        placeholder={"e.g 07991 123 456"}
        inputvalue={inputs.phone}
        handleChange={handleChange}
        inputName={"phone"}
      />
      <InputDesign
        name={"city"}
        placeholder={"e.g California"}
        inputvalue={inputs.city}
        handleChange={handleChange}
        inputName={"city"}
      />
      <InputDesign
        name={"state"}
        placeholder={"e.g Los Angeles"}
        inputvalue={inputs.state}
        handleChange={handleChange}
        inputName={"state"}
      />
      <InputDesign
        name={"nationality"}
        placeholder={"e.g American"}
        inputvalue={inputs.nationality}
        handleChange={handleChange}
        inputName={"nationality"}
      />
      <button
        className="md:col-span-2 bg-primary w-full py-3 text-white uppercase text-[14px] rounded-xl hover:bg-primary/75 transition-all ease-in-out duration-300"
        onClick={next}
      >
        next
      </button>
    </div>
  );
};

export default StageOne;
