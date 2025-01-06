import React from "react";
import { useSelector } from "react-redux";
import { CheckIcon } from "@heroicons/react/24/solid";

const StageCounter = () => {
  const stage = useSelector((state) => state.stage.stage);
  return (
    <div className="my-10 w-full">
      <div>
        {stage === 1 || stage === 2 || stage === 3 ? (
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 1
                    ? "bg-primary"
                    : stage > 1
                    ? "bg-green-500"
                    : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage > 1 ? <CheckIcon className="h-3" /> : "1"}
              </div>
              <p
                className={`${
                  stage === 1
                    ? "text-primary"
                    : stage > 1
                    ? "text-green-500"
                    : "text-gray-400"
                } md:block hidden`}
              >
                personal information
              </p>
            </div>
            <div className="h-[3px] rounded-full bg-black w-[100px]"></div>
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 2
                    ? "bg-primary"
                    : stage > 2
                    ? "bg-green-500"
                    : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage > 2 ? <CheckIcon className="h-3" /> : "2"}
              </div>
              <p
                className={`${
                  stage === 2
                    ? "text-primary"
                    : stage > 2
                    ? "text-green-500"
                    : "text-gray-400"
                } md:block hidden`}
              >
                Physical Attributes
              </p>
            </div>
            <div className="h-[3px] rounded-full bg-black w-[100px]"></div>
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 3
                    ? "bg-primary"
                    : stage > 3
                    ? "bg-green-500"
                    : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage > 3 ? <CheckIcon className="h-3" /> : "3"}
              </div>
              <p
                className={`${
                  stage === 3
                    ? "text-primary"
                    : stage > 3
                    ? "text-green-500"
                    : "text-gray-400"
                } md:block hidden`}
              >
                Professional Details
              </p>
            </div>
          </div>
        ) : stage === 4 || stage === 5 || stage === 6 ? (
          <div className="flex items-center justify-between">
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 4
                    ? "bg-primary"
                    : stage > 4
                    ? "bg-green-500"
                    : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage > 4 ? <CheckIcon className="h-3" /> : "4"}
              </div>
              <p
                className={`${
                  stage === 4
                    ? "text-primary"
                    : stage > 4
                    ? "text-green-500"
                    : "text-gray-400"
                } md:block hidden`}
              >
                Emergency Contact Information
              </p>
            </div>
            <div className="h-[3px] rounded-full bg-black w-[100px]"></div>
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 5
                    ? "bg-primary"
                    : stage > 5
                    ? "bg-green-500"
                    : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage > 5 ? <CheckIcon className="h-3" /> : "5"}
              </div>
              <p
                className={`${
                  stage === 5
                    ? "text-primary"
                    : stage > 5
                    ? "text-green-500"
                    : "text-gray-400"
                } md:block hidden`}
              >
                Attachments
              </p>
            </div>
            <div className="h-[3px] rounded-full bg-black w-[100px]"></div>
            <div className={`flex items-center gap-3 font-semibold capitalize`}>
              <div
                className={`w-[30px] h-[30px] ${
                  stage === 6 ? "bg-green-500" : "bg-gray-400"
                }  text-white flex items-center justify-center rounded-full`}
              >
                {stage === 6 ? <CheckIcon className="h-3" /> : 6}
              </div>
              <p
                className={`${
                  stage === 6 ? "text-green-500" : "text-gray-400"
                } md:block hidden`}
              >
                Submission Confirmation
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default StageCounter;
