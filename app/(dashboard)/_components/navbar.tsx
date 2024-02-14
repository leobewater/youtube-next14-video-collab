"use client";

import { SearchInput } from "@/app/(dashboard)/_components/search-input";
import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
        <SearchInput />
      </div>
      <UserButton />
    </div>
  );
};
