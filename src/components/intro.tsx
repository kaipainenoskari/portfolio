"use client"

import Image from 'next/image'
import React from 'react'
import CV_pic from '../../public/CV_pic.jpg'
import { motion } from 'framer-motion'
import { HiDownload } from 'react-icons/hi'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithubSquare } from 'react-icons/fa'
import { useSectionInView } from '@/lib/hooks'

export default function Intro() {
    const { ref } = useSectionInView('Home', 0.5)

    return (
        <section ref={ref} id='home' className='mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                    >
                        <Image
                            src={CV_pic}
                            alt='Oskari portrait'
                            width='192'
                            height='192'
                            quality='95'
                            priority={true}
                            className='h-24 w-24 rounded-full border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>
                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'spring', delay: 0.2, stiffness: 125, duration: 0.7 }}
                        className='absolute bottom-0 right-0 text-4xl'
                    >
                        ✌
                    </motion.span>
                </div>
            </div>

            <motion.h1 className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className='font-bold'>Hey, I'm Oskari.</span> I'm a Computer Science student at{" "}
                <span className='font-bold'>Aalto University.</span> I'm interested in{" "}
                <span className='font-bold'>Software Development</span> and{" "}
                <span className='font-bold'>Full-Stack Development.</span> I'm currently learning{" "}
                <span className='underline'>Next.js</span>.
            </motion.h1>
            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium'
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <a className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10'
                    href="/Oskari_Kaipainen_Resume.pdf"
                    download
                >
                    Download my CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' />{' '}
                </a>

                <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    href='https://www.linkedin.com/in/oskari-kaipainen-812b77208/'
                    target='_blank'
                >
                    <FaLinkedin />
                </a>

                <a className='bg-white p-4 flex text-gray-700 items-center gap-2 rounded-full text-[1.35rem] focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60'
                    href='https://github.com/kaipainenoskari'
                    target='_blank'
                >
                    <FaGithubSquare />
                </a>
            </motion.div>
        </section>
    )
}
