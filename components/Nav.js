import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/router";

function Nav() {
  const router = useRouter();

  return (
    <nav className="relative">
      <div className="flex px-10 text-2xl whitespace-nowrap space-x-10 overflow-x-scroll scrollbar-hide sm:px-20 sm:space-x-20">
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              key={key}
              onClick={() => router.push(`/?genre=${key}`)}
              className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500"
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 h-10 w-1/12 bg-gradient-to-l from-[#06202A] to-transparent"></div>
    </nav>
  );
}

export default Nav;
