"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm-mb-40'
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
    >
        <SectionHeading>About Me</SectionHeading>
        <p className='mb-3'>
            I'm currently on my third year studying Computer Science at{' '}
            <span className='font-bold'>Aalto University.</span> {' '}
            I'm interested in both {' '}
            <span className='font-bold'>Front-End</span> and{' '}
            <span className='font-bold'>Back-End</span> Development. My core stack in Web-Development is{' '}
            <span className='font-bold'>TypeScript</span>,{' '}
            <span className='font-bold'>React</span> and{' '}
            <span className='font-bold'>Node.js</span>.{' '}
            I have also used{' '}
            <span className='font-bold'>MongoDB</span>{' '}
            for databases,{' '}
            <span className='font-bold'>Robot FrameWork</span> for testing and right now I'm learning{' '}
            <span className='font-bold'>Next.js</span>. I'm currently looking for a summer job or an internship for the{' '}
            <span className='underline'>summer of 2024.</span>
        </p>
        <p>
            When I'm not coding, I like to play chess, football, tennis and padel. I enjoy learning new things both in the field of Computer Science and elsewhere and I'm always looking for new challenges.
        </p>
    </motion.section>
  )
}
