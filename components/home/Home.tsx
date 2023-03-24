import React from 'react'
import styles from '../../styles/Home.module.css'
import img from 'next/image'
import { url } from 'inspector'
const Home = () => {
  return (  
    <div className={styles.Home} id='home'>
      <section className= 'text-white mt-10 mx-[7%] flex justify-between items-center max-lg:flex-wrap' >
        <div className='w-[40%] max-md:w-[60%] max-sm:w-[80%] ' 
        >
          <h1 className={`${styles.customClass} font-bold text-[53px] leading-[53px] customClass`} >Build Your <br /> Awesome <br /> Platform</h1>
          <h1 className='py-6 text-[#D9D9D9] text-[13px] max-md:text-[16px]'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</h1>
          <button className=' flex gap-2 items-center px-[22px] py-[12px] font-normal bg-[#5454D4]'><h1 className=''>Our Services</h1> <img src={'/arrow-top-left.png'} alt="icon" /></button>
        </div>
        <div className='relative'>
          <img src="/homeSide-img.png" alt="" />
       <img src={'/graph.png'} className='absolute top-20 max-sm:left-4 '  alt="" />
       <img src={'/circle.png'} className='absolute top-20 right-0 max-sm:right-4' alt="" />
       <img src={'/triangle.png'} className='absolute bottom-0 max-sm:left-4 max-sm:bottom-[-8%]' alt="" />
       <img src={'/add.png'} className='absolute bottom-0 right-0 max-sm:right-4 ' alt="" />
          
          </div>
      </section>
      <section className='mt-20'>
        <div className='text-white mx-[7%]'>
          <div className='flex justify-between flex-wrap gap-10'><h1 className={`${styles.customClass} font-bold text-[39px] leading-[54px]`}>Why Enver Is The <br /> Best Choice?</h1><h1 className='text-[#D9D9D9] text-[13px] max-md:text-[16px]'>Watch this one minute video so you understand why you should <br /> use our services!</h1></div>
          <div>
            
          <iframe className='w-[100%] mt-10'  height="480" src="https://www.youtube.com/embed/JzyU36sHctk" title="Conference Table of the Future by Ideum"  allow="accelerometer; autoplay; clipboard-write; ; gyroscope; picture-in-picture; " ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home