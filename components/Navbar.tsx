import Image from "next/image";
import React from "react";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="flex flex-col p-3 bg-violet-100/50 dark:bg-black dark:text-white/80 w-1/4 h-screen text-black items-start">
      <h1 className="h-10 m-10">VIPS-CRM</h1>

      <div className="flex ml-8 items-center">
        <img
          src="https://avatars.githubusercontent.com/u/66319691?v=4"
          alt="User Img"
          className="h-14 w-14 rounded-full"
        />
        <div className="flex flex-col p-2">
          <h2 className="">Aayush Mohan</h2>
          <h3 className="text-xs">aayushmohan1702@gmail.com</h3>
        </div>
      </div>

      {/* Page Links */}
      <div className="flex flex-col items-center ">
        <div className="flex ml-8 mt-16 items-center space-x-6 cursor-pointer dark:hover:bg-slate-900 px-10 py-4 rounded-lg">
          <HomeIcon className="h-7" />
          <h2>Home</h2>
        </div>{" "}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer dark:hover:bg-slate-900 px-10 py-4 rounded-lg">
          <UsersIcon className="h-7" />
          <h2>Employees</h2>
        </div>{" "}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer dark:hover:bg-slate-900 px-10 py-4 rounded-lg">
          <CalendarDaysIcon className="h-7" />
          <h2>Calendar</h2>
        </div>{" "}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer dark:hover:bg-slate-900 px-10 py-4 rounded-lg">
          <EnvelopeIcon className="h-7" />
          <h2>Messages</h2>
          <span className="text-xs space-x-14 bg-red-500 px-2 py-1 rounded-full">
            8
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;