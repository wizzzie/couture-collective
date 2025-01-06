import React, { useState } from "react";
import InputDesign from "./InputDesign";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { nextStage, prevStage } from "../redux/reducers/stage";

const StageTwo = () => {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    height: "",
    weight: "",
    chest: "",
    waist: "",
    hip: "",
    shoe: "",
    eye: "",
    hair: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const next = () => {
    if (
      !inputs.height ||
      !inputs.weight ||
      !inputs.chest ||
      !inputs.waist ||
      !inputs.hip ||
      !inputs.shoe ||
      !inputs.eye ||
      !inputs.hair
    ) {
      toast.error("Please Fill in all Data");
    } else {
      dispatch(nextStage());
    }
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full mb-[50px]">
      <InputDesign
        name={"height"}
        placeholder={"e.g 140cm"}
        inputvalue={inputs.height}
        handleChange={handleChange}
        inputName={"height"}
      />
      <InputDesign
        name={"weight"}
        placeholder={"e.g 65kg"}
        inputvalue={inputs.weight}
        handleChange={handleChange}
        inputName={"weight"}
      />
      <InputDesign
        name={"chest/bust"}
        placeholder={"e.g 50cm"}
        inputvalue={inputs.chest}
        handleChange={handleChange}
        inputName={"chest"}
      />
      <InputDesign
        name={"waist size"}
        placeholder={"e.g 150cm"}
        inputvalue={inputs.waist}
        handleChange={handleChange}
        inputName={"waist"}
      />
      <InputDesign
        name={"hip size"}
        placeholder={"e.g 150cm"}
        inputvalue={inputs.hip}
        handleChange={handleChange}
        inputName={"hip"}
      />
      <InputDesign
        name={"shoe size"}
        placeholder={"e.g 10"}
        inputvalue={inputs.shoe}
        handleChange={handleChange}
        inputName={"shoe"}
      />
      <InputDesign
        name={"eye color"}
        placeholder={"e.g brown"}
        inputvalue={inputs.eye}
        handleChange={handleChange}
        inputName={"eye"}
      />
      <InputDesign
        name={"hair color"}
        placeholder={"e.g blonde"}
        inputvalue={inputs.hair}
        handleChange={handleChange}
        inputName={"hair"}
      />{" "}
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

export default StageTwo;
