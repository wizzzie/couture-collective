import React, { useState } from "react";
import InputDesign from "./InputDesign";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { nextStage, prevStage } from "../redux/reducers/stage";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";

const StageFour = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  const [inputs, setInputs] = useState({
    name: "",
    relationship: "",
    email: "",
    phone: "",
  });
  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  const next = () => {
    if (
      !inputs.name ||
      !inputs.relationship ||
      !inputs.phone ||
      !inputs.email
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
        placeholder={"Emergency Contact Name"}
        inputvalue={inputs.name}
        handleChange={handleChange}
        inputName={"name"}
      />
      <InputDesign
        name={"email"}
        placeholder={"Emergency Contact Email"}
        type={"email"}
        inputvalue={inputs.email}
        handleChange={handleChange}
        inputName={"email"}
      />
      <InputDesign
        name={"relationship"}
        placeholder={"Emergency Contact Relationship e.g Brother"}
        inputvalue={inputs.relationship}
        handleChange={handleChange}
        inputName={"relationship"}
      />
      <InputDesign
        name={"phone"}
        placeholder={"Emergency Contact Phone"}
        inputvalue={inputs.phone}
        handleChange={handleChange}
        inputName={"phone"}
      />
      <div className="md:col-span-2">
        <p className="uppercase font-semibold text-[14px] mb-3">
          Upload Picture (optional)
        </p>
        <label
          htmlFor="next"
          className="w-full border-2 border-dotted border-gray-400 rounded-xl p-5 flex items-center justify-center flex-col gap-3 cursor-pointer"
        >
          {image === null ? (
            <>
              <CloudArrowUpIcon className="h-14" />
              <span className="text-[14px] capitalize underline font-semibold block text-center">
                click to upload Image of emergency contact
              </span>
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(image[0])}
                alt="*"
                className="h-[300px] w-full object-contain"
              />
            </>
          )}
        </label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files)}
          id="next"
          className="hidden"
          accept="image/*"
        />
      </div>
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

export default StageFour;
