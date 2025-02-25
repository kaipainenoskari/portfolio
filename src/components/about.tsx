"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {
	const { ref } = useSectionInView('About')

	return (
		<motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm-mb-40 scroll-mt-28'
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.3 }}
			id='about'
		>
			<SectionHeading>About Me</SectionHeading>
			<p className='mb-3'>
				I'm currently doing my Masters (Software & Service Engineering) at{' '}
				<span className='font-bold'>Aalto University.</span> {' '}
				I'm interested in{' '}
				<span className='font-bold'>Front-End</span>,{' '}
				<span className='font-bold'>Back-End</span> and{' '}
				<span className='font-bold'>Mobile</span> Development. My core stack in Web-& Mobile-Development is{' '}
				<span className='font-bold'>TypeScript</span>,{' '}
				<span className='font-bold'>React</span>,{' '}
				<span className='font-bold'>React Native</span> and{' '}
				<span className='font-bold'>Node.js</span>.{' '}
				I have also used{' '}
				<span className='font-bold'>MongoDB</span> and{' '}
				<span className='font-bold'>PostgreSQL</span>{' '}
				for databases,{' '}
				<span className='font-bold'>Robot FrameWork</span> for testing and right now I'm learning{' '}
				<span className='font-bold'>Next.js</span>. I'm currently looking for exciting challenges for the{' '}
				<span className='underline'>summer of 2025.</span>
			</p>
			<p>
				When I'm not coding, I enjoy playing football, chess, tennis, and padel. I have a passion for learning, whether it's in the field of Computer Science or beyond, and I'm always on the lookout for new challenges.
			</p>
		</motion.section>
	)
}
