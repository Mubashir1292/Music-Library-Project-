"use client";
import React from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = React.useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl z-50 mx-auto dark",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/">
          <MenuItem
            active={active}
            setActive={setActive}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem active={active} setActive={setActive} item="Courses">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">All Courses</HoveredLink>
            <HoveredLink href="/courses">Music Specified Courses</HoveredLink>
            <HoveredLink href="/courses">Simple Language Courses</HoveredLink>
            <HoveredLink href="/courses">Coding Courses</HoveredLink>
            <HoveredLink href="/courses">Continue Courses</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/contact">
          <MenuItem
            active={active}
            setActive={setActive}
            item="Contact-Us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
