import React from 'react';
import { motion } from "framer-motion";
import {styles} from '../styles';
import ComputersCanvas from './canvas/Computers'
function Hero() {
  return (
    <section className=' relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] mx-auto flex flex-row max-w-7xl items-start gap-5`}>
        <div className='flex flex-col justify-center items-center '>
          <div className=' w-5 h-5 rounded-full bg-[#915eff]' />
          <div className=' w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div className=''>
          <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className='text-[#915eff]'>Anis</span></h1>
          <p className={`${styles.heroSubText}`}> i am a frontend developer using react and tailwind still beginner</p>
        </div>
      </div>
      <ComputersCanvas />
      <div className=' absolute xs:bottom-10 bottom-32 w-full flex justify-center items-start'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] border-4 border-secondary rounded-3xl flex justify-center items-center '>
            <motion.dev 
            animate={{y:[0,24,0]}}
            transition={{
              duration:1.5,
              repeat:Infinity,
              reapetType: 'loop'
            }}
            className=" w-3 h-3 rounded-full bg-secondary mb-6"
            />
          </div>
        </a>
      </div>
    </section>
    )
}

export default Hero