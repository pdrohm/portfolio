import Link from "next/link";
import React, { useEffect, useState } from "react";
import HomeIcon from "@heroicons/react/24/outline/HomeIcon";

export default function HomeButton() {
  return (
    <Link href="#banner">
      <div
        className="absolute cursor-pointer rounder-full xl:top-6 xl:left-10 md:bottom-0 md:right-10 bottom-0 right-10 w-16 h-16 
   text-gray-400 hover:text-gray-400/75"
      >
        <HomeIcon className=" h-6 w-6 " />
      </div>
    </Link>
  );
}
