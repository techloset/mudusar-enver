import React from 'react'
import styles from '../../styles/Home.module.css'
const Home = () => {
  return (
    <div className={styles.Home} id='home'>
      <section className='text-white mt-10  flex justify-around items-center max-lg:flex-wrap'>
        <div className='w-[40%] max-md:w-[60%] max-sm:w-[80%]'>
          <h1 className='font-bold text-5xl'>Build Your <br /> Awesome <br /> Platform</h1>
          <h1 className='py-6 text-[#D9D9D9] text-xl'>Enver studio is a digital studio that offers several services such as UI/UX Design to developers, we will provide the best service for those of you who use our services.</h1>
          <button className=' flex gap-2 items-center px-4 py-2 font-bold bg-[#5454D4]'><h1>Our Services</h1> <img src="/icon.png" alt="/icon.png" /></button>
        </div>
        <div className='relative'>
          <img src="/homeSide-img.png" alt="" />
       <img src={'/graph.png'} className='absolute top-20 '  alt="" />
       <img src={'/circle.png'} className='absolute top-20 right-0' alt="" />
       <img src={'/triangle.png'} className='absolute bottom-0' alt="" />
       <img src={'/add.png'} className='absolute bottom-0 right-0' alt="" />
          
          </div>
      </section>
      <section className='mt-20'>
        <div className='text-white mx-[7%]'>
          <div className='flex justify-between flex-wrap gap-10'><h1 className='font-bold text-4xl'>Why Enver Is The <br /> Best Choice?</h1><h1 className='text-[#D9D9D9]'>Watch this one minute video so you understand why you should <br /> use our services!</h1></div>
          <div>
            
          <iframe className='w-[100%] mt-10'  height="480" src="https://www.youtube.com/embed/JzyU36sHctk" title="Conference Table of the Future by Ideum"  allow="accelerometer; autoplay; clipboard-write; ; gyroscope; picture-in-picture; " ></iframe>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home