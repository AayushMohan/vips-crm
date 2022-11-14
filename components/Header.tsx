import { useSession } from "next-auth/react";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  const { data: session } = useSession();
  return (
    <div className="flex mt-3">
      <h1 className="text-lg font-semibold">Hi, {session?.user?.name}</h1>
      <div className="flex justify-between">
        <input
          type="search"
          name="Search"
          id=""
          className="h-4 px-4 py-3 rounded-2xl"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default Header;
