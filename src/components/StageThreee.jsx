import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { nextStage, prevStage } from "../redux/reducers/stage";
import InputDesign from "./InputDesign";

const StageThreee = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    instagram: "",
    employment: "",
    availability: "",
    role: "",
    travel: "",
    skills: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const next = () => {
    if (
      !inputs.instagram ||
      !inputs.employment ||
      !inputs.availability ||
      !inputs.role ||
      !inputs.travel ||
      !inputs.skills
    ) {
      toast.error("Please Fill in all Data");
    } else {
      dispatch(nextStage());
    }
  };
  const employmentOptions = ["Employed", "Unemployed"];
  const availableOptions = ["Full-time", "Part-time", "Freelance"];
  const roleOptions = [
    "Makeup Artist",
    "Photographer",
    "Booking Agent",
    "Model",
    "Stylist",
    "Creative Director",
    "Social Media Manager",
    "IT",
    "Security",
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-[50px]">
      <InputDesign
        name={"instagram handle"}
        placeholder={"e.g user_name"}
        inputvalue={inputs.instagram}
        handleChange={handleChange}
        inputName={"instagram"}
      />
      <InputDesign
        name={"Employment Status"}
        placeholder={"Select Employment Status"}
        isSelect={true}
        options={employmentOptions}
        handleChange={handleChange}
        inputvalue={inputs.employment}
        inputName={"employment"}
      />
      <InputDesign
        name={"availability"}
        placeholder={"Select Availability"}
        isSelect={true}
        options={availableOptions}
        inputvalue={inputs.availability}
        handleChange={handleChange}
        inputName={"availability"}
      />
      <InputDesign
        name={"role"}
        placeholder={"Select Role"}
        isSelect={true}
        options={roleOptions}
        inputvalue={inputs.role}
        handleChange={handleChange}
        inputName={"role"}
      />
      <InputDesign
        name={"Are you available for travel"}
        placeholder={"Yes / No"}
        inputvalue={inputs.travel}
        handleChange={handleChange}
        inputName={"travel"}
      />
      <InputDesign
        name={"special skills"}
        placeholder={"e.g Dancing, Singing"}
        inputvalue={inputs.skills}
        handleChange={handleChange}
        inputName={"skills"}
      />
      <div className="flex items-center gap-4 mt-[30px]">
        <button
          onClick={() => dispatch(prevStage())}
          className="bg-primary w-full py-3 text-white uppercase text-[14px] rounded-xl hover:bg-primary/75 transition-all ease-in-out duration-300"
        >
          back
        </button>
        <button
          onClick={next}
          className="bg-primary w-full py-3 text-white uppercase text-[14px] rounded-xl hover:bg-primary/75 transition-all ease-in-out duration-300"
        >
          next
        </button>
      </div>
    </div>
  );
};

export default StageThreee;
