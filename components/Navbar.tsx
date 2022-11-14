import Image from "next/image";
import React from "react";
import {
  CalendarDaysIcon,
  EnvelopeIcon,
  HomeIcon,
  QuestionMarkCircleIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import { useSession, signIn, signOut } from "next-auth/react";

type Props = {};

const Navbar = (props: Props) => {
  const { data: session } = useSession();

  return (
    <div className="flex flex-col bg-violet-100/50 w-1/5 h-screen text-black items-start overflow-y-scroll">
      <h1 className="h-10 m-10">Vipschedulux</h1>

      <div
        className="flex ml-8 items-center"
        title={session ? "Sign Out" : "Sign In"}
      >
        <img
          src={session?.user?.image}
          alt="User Img"
          className="h-14 w-14 rounded-full"
        />
        <div className="flex flex-col p-2">
          <h2>{session?.user?.name}</h2>
          <h3 className="text-xs">{session?.user?.email}</h3>
        </div>
      </div>

      {/* Page Links */}
      <div className="flex flex-col ">
        <div className="flex ml-8 mt-16 items-center space-x-6 cursor-pointer  px-10 py-4 rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
          <HomeIcon className="h-7 text-violet-300 active:text-white hover:text-white" />
          <h2>Home</h2>
        </div>{" "}
        {/*  */}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer  px-10 py-4 rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
          <UsersIcon className="h-7 text-violet-300 active:text-white hover:text-white" />
          <h2>Employees</h2>
        </div>{" "}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer  px-10 py-4 rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
          <CalendarDaysIcon className="h-7 text-violet-300 active:text-white hover:text-white" />
          <h2>Calendar</h2>
        </div>{" "}
        <div className="flex items-center ml-8 space-x-4 cursor-pointer px-10 py-4 rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
          <EnvelopeIcon className="h-7 text-violet-300 active:text-white hover:text-white" />
          <h2>Messages</h2>
          <span className="text-xs space-x-14 bg-red-500 px-2 py-1 rounded-full text-white">
            8
          </span>
        </div>
        <div className="flex items-center ml-8 space-x-4 cursor-pointer px-10 py-4 rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
          <UserCircleIcon
            className="h-7 text-violet-300 active:text-white hover:text-white"
            onClick={session ? signOut : signIn}
          />
          <h2>Log In</h2>
        </div>{" "}
      </div>

      <hr className=" w-full" />

      <div>
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/presentation-3428083-2930636.png"
          alt="Presentation SVG"
          className=""
        />
      </div>
      {/* <div>
        <h1>Support</h1>
      </div> */}

      <div className="flex items-center ml-8 space-x-2 px-10 py-4 mb-8 cursor-pointer rounded-lg hover:bg-violet-500 hover:text-white/90 text-gray-500">
        <QuestionMarkCircleIcon className="h-8 text-violet-300 active:text-white hover:text-white" />
        <h1>Need Help?</h1>
      </div>
    </div>
  );
};

export default Navbar;
