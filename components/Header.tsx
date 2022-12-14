import {
  BellIcon,
  MagnifyingGlassIcon,
  Cog8ToothIcon,
  Cog6ToothIcon,
} from "@heroicons/react/20/solid";
import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();
  return (
    <div className="flex mt-3 relative p-5 flex-row justify-evenly items-center space-x-96 ">
      <div>
        <h1 className="text-lg font-semibold">Hi, {session?.user?.name}</h1>
      </div>
      <div className="relative items-center">
        <MagnifyingGlassIcon className="h-6 top-2 mx-4 decoration  absolute text-gray-500/70" />
        <input
          type="search"
          name="Search"
          id=""
          className="h-4 px-14 w-96 py-5 rounded-xl outline-none shadow-sm "
          placeholder="Search"
        />
      </div>
      <BellIcon className="h-8 absolute cursor-pointer -right-8 text-violet-600/60" />
      <Cog6ToothIcon className="h-8 cursor-pointer absolute -right-24  text-violet-600/60" />
    </div>
  );
};

export default Header;
