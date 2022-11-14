import { PlusIcon } from "@heroicons/react/20/solid";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="m-5">
      <div className="flex justify-between">
        <h1>Home</h1>

        <button className="flex items-center bg-purple-500/90 shadow-sm animation px-4 py-2 text-white absolute right-10 rounded-lg">
          <PlusIcon className="h-4" />
          Add an employee
        </button>
      </div>
    </div>
  );
};

export default Hero;
