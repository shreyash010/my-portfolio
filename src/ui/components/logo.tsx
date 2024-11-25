import * as React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const MotionLink = motion.create(Link);

export const Logo = () => {
    return(
      <div className='flex items-center justify-center mt-2'>
        <MotionLink
        href="/"
        className='w-16 h-16 font-mont bg-black text-light flex items-center justify-center
        rounded-full text-lg font-bold border-2 border-transparent dark:border-white'
        >SW</MotionLink>
      </div>
    )
}