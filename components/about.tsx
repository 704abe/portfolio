"use client";

import React from 'react';
import { motion } from 'framer-motion'
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
    const { ref } = useSectionInView("About");

  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28'
        ref={ref}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.175 }}
        id="about"
    >
        <SectionHeading>About me</SectionHeading>
        <p className='mb-3'>
            After a trip to{" "}
            <span className="font-medium">San Francisco</span>, I decided to pursue my
            passion for programming. I enrolled in a coding bootcamp and learned{" "}
            <span className="font-medium">full-stack web development</span>.{" "}
            <span className="italic">My favorite part of programming</span> is the
            problem-solving aspect. I <span className="underline">love</span> the
            feeling of finally figuring out a solution to a problem. My core stack
            is{" "}
            <span className="font-medium">
            React, Node.js, Express.js, and SQL
            </span>
            . I am also familiar with TypeScript and Python. I am always looking to
            learn new technologies and have dived headfirst into AI-assisted development.
        </p>
        <p>
            <span className="italic">When I'm not coding</span>, I enjoy playing
            video games, reading books, and hanging out with friends.
        </p>
    </motion.section>
  )
}
