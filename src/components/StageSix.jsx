import { HandThumbUpIcon } from "@heroicons/react/24/outline";
import React from "react";

const StageSix = () => {
  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full mb-[50px] ">
      <HandThumbUpIcon className="h-20" />
      <p className="text-center font-semibold">
        We’ll review your application and reach out if there’s a fit
      </p>
    </div>
  );
};

export default StageSix;
