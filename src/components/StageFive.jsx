import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { nextStage, prevStage } from "../redux/reducers/stage";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import axios from "axios";

const StageFive = () => {
  const [id, setId] = useState(null);
  const [ssn, setSsn] = useState(null);
  const [cv, setCV] = useState(null);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const uploadMultiple = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "ml_default");
    const { data } = await axios.post(
      "https://api.cloudinary.com/v1_1/dnxzi4yqj/image/upload",
      formData
    );
    console.log(data);
    return { publicId: data?.public_id, url: data?.secure_url };
  };

  const next = async () => {
    if (!id || !ssn || !cv) {
      toast.error("Please Attach All Documents");
    } else {
      setLoading(true);
      await uploadMultiple(ssn[0]);
      await uploadMultiple(id[0]);
      setLoading(false);
      dispatch(nextStage());
    }
  };
  return (
    <div className="grid grid-cols-1 gap-5 w-full mb-[50px]">
      <div>
        <p className="uppercase font-semibold text-[14px] mb-3">
          Upload ID Card (Driver's License, Passport, e.t.c)
        </p>
        <label
          htmlFor="next"
          className="w-full border-2 border-dotted border-gray-400 rounded-xl p-5 flex items-center justify-center flex-col gap-3 cursor-pointer"
        >
          {id === null ? (
            <>
              <CloudArrowUpIcon className="h-14" />
              <span className="text-[14px] capitalize underline font-semibold block text-center">
                click to upload ID
              </span>
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(id[0])}
                alt="*"
                className="h-[300px] w-full object-contain"
              />
            </>
          )}
        </label>
        <input
          type="file"
          onChange={(e) => setId(e.target.files)}
          id="next"
          className="hidden"
          accept="image/*"
        />
      </div>
      <div>
        <p className="uppercase font-semibold text-[14px] mb-3">Upload CV</p>
        <label
          htmlFor="next2"
          className="w-full border-2 border-dotted border-gray-400 rounded-xl p-5 flex items-center justify-center flex-col gap-3 cursor-pointer"
        >
          {cv === null ? (
            <>
              <CloudArrowUpIcon className="h-14" />
              <span className="text-[14px] capitalize underline font-semibold block text-center">
                click to upload CV
              </span>
            </>
          ) : (
            <p>{cv[0].name}</p>
          )}
        </label>
        <input
          type="file"
          onChange={(e) => setCV(e.target.files)}
          id="next2"
          className="hidden"
          ccept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.txt"
        />
      </div>
      <div>
        <p className="uppercase font-semibold text-[14px] mb-3">Upload SSN</p>
        <label
          htmlFor="next3"
          className="w-full border-2 border-dotted border-gray-400 rounded-xl p-5 flex items-center justify-center flex-col gap-3 cursor-pointer"
        >
          {ssn === null ? (
            <>
              <CloudArrowUpIcon className="h-14" />
              <span className="text-[14px] capitalize underline font-semibold block text-center">
                click to upload SSN
              </span>
            </>
          ) : (
            <>
              <img
                src={URL.createObjectURL(ssn[0])}
                alt="*"
                className="h-[300px] w-full object-contain"
              />
            </>
          )}
        </label>
        <input
          type="file"
          onChange={(e) => setSsn(e.target.files)}
          id="next3"
          className="hidden"
          accept="image/*"
        />
      </div>
      {loading ? (
        <div className="flex items-center gap-4 mt-[30px] md:w-[50%]">
          <button
            className="bg-primary w-full py-3 text-white uppercase text-[14px] rounded-xl hover:bg-primary/75 transition-all ease-in-out duration-300  cursor-not-allowed"
            disabled
          >
            loading....
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-4 mt-[30px] md:w-[50%]">
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
            submit
          </button>
        </div>
      )}
    </div>
  );
};

export default StageFive;
