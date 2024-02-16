import React from 'react';
import { motion } from "framer-motion";
import {styles} from '../styles';
import ComputersCanvas from './canvas/Computers'
function Hero() {
  return (
    <section className=' relative w-full h-screen  mx-auto '>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] mx-auto flex flex-row max-w-7xl items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className=' w-5 h-5 rounded-full bg-[#915eff]'/>
          <div className='w-1 sm:h-80 h-40 violet-gradient'/>
        </div>
        <div className=''>
            <h1 className={`${styles.heroHeadText}`}>Hi, I'm <span className=' text-[#915eff]'>anis</span></h1>
            <p className={`${styles.heroSubText}`}>
              I am <span>a fron end developer using react and tailwind still a beginner</span>
            </p>
          </div>
      </div>
      <ComputersCanvas />    
      
    </section>
    )
}

export default Hero