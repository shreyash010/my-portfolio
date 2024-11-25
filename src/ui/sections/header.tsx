"use client"

import Link from "next/link";
import * as React from "react";
import { GithubIcon, LinkedInIcon, TwitterIcon } from "@/ui/components/badges";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => {
  const currentPath = usePathname();
  return (
  <Link
    href={href}
    className="mr-6 rounded relative group lg:text-light lg:dark:text-dark"
  >
    {children}
    <span
      className={`
        inline-block h-[1px] bg-black absolute left-0 -bottom-0.5 
        group-hover:w-full transition-[width] ease duration-300 
        dark:bg-white w-0 lg:bg-black lg:dark:bg-white
        ${ currentPath === href ? 'w-full' : 'w-0'}
      `}
    />
  </Link>
)};

export default function Header(){
  const MotionLink = motion.create(Link);
  return (
    <div className="w-full flex items-center justify-between px-32 py-[1.5rem] font-medium z-10 dark:text-light lg:px-16 relative z-1 md:px-12 sm:px-8">
      {/* Hamburger button for the mobile view */}
      <button type="button" className="flex-col items-center justify-center lg:hidden" aria-controls="mobile-menu" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <span className="bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out -translate-y-0.5"></span>
        <span className="bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out opacity-100 my-0.5"></span>
        <span className="bg-black dark:bg-white block h-0.5 w-6 rounded-sm transition-all duration-300 ease-out translate-y-0.5"></span>
      </button>
      {/* Header navbar with route section and social icons */}
      <div className="w-full justify-between items-center hidden lg:flex">
        <nav className="flex items-center justify-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#">Experience</NavLink>
          <NavLink href="#">Projects</NavLink>
          <NavLink href="#">Blogs</NavLink>
          <NavLink href="#">Contact</NavLink>
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <MotionLink 
          target={"_blank"} 
          className="w-6 mx-3" 
          href="/" 
          aria-label="Checkout my Github Profile" 
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={0}>
            <GithubIcon className=""></GithubIcon>
          </MotionLink>
          <MotionLink 
          target={"_blank"} 
          className="w-6 mx-3" 
          href="/" 
          aria-label="Checkout my Github Profile" 
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={0}>
            <TwitterIcon className=""></TwitterIcon>
          </MotionLink> 
          <MotionLink 
          target={"_blank"} 
          className="w-6 mx-3" 
          href="/" 
          aria-label="Checkout my Github Profile" 
          whileHover={{ scale: 1.2, y: -5 }}
          whileTap={{ scale: 0.9 }}
          tabIndex={0}>
            <LinkedInIcon className=""></LinkedInIcon>
          </MotionLink> 
        </nav>
      </div>
    </div>
  )
}