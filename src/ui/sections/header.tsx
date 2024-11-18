import Link from "next/link";
import * as React from "react";

export default function Header(){
  return (
    <div className="w-full flex items-center justify-between px-32 py-8 font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8">
      <div className="w-full flex justify-between items-center">
        <nav className="flex items-center justify-center">
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">Home</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">Experience</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">Projects</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">Skills</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">Contact</Link>
        </nav>
        <nav className="flex items-center justify-center flex-wrap lg:mt-2">
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">twitter</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">github</Link>
          <Link className="mr-4  rounded relative group lg:text-light lg:dark:text-dark" href="#">linkedin</Link>
        </nav>
      </div>
    </div>
  )
}