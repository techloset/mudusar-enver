import React from 'react'
import img from 'next/image'
import styles from '../../styles/Home.module.css'

const About = () => {
    return (
        <div className='' id='about'>
            <div className='flex justify-between flex-wrap relative gap-16 px-[7%] items-center py-32 bg-[#1E1E20]'>
                <h1 className={`${styles.customClass} text-white text-[60px] leading-[66px] max-sm:text-[36px] max-sm:leading-[54px] font-bold`}>Contact us for the service
                    <br />
                    you want to use</h1>
                    <img src={'/add.png'} className='absolute top-10 right-16 xl:right-[7%]' alt="" />
                    <img src={'/circle.png'} className='absolute bottom-10 ' alt="" />
                <button className='rounded-md bg-[#5454D4] border-gray-600 border px-8 py-2  text-white font-semibold'>Contact us</button>
            </div>
            <footer className='flex justify-between max-lg:flex-col text-[12px] max-lg:gap-10 mx-[7%] items-center pt-10 pb-16 '>
                <div><img src={'/logo.png'} width={100} height={100} alt="nav logo" /></div>
                <div><ul className='flex  gap-6 max-sm:flex-col items-center text-[#D9D9D9] '>
                    <li className='hover:text-[#5454D4] text-[#D9D9D9]'><button>Support</button>  </li>
                    <li className='hover:text-[#5454D4] text-[#D9D9D9]'><button>Privacy Policy</button></li>
                    <li className='hover:text-[#5454D4] text-[#D9D9D9]'><button>Terms and Conditions</button></li>
                </ul></div>
                <div>
                    <li className='list-none text-[#D9D9D9]'>© 2020 Enver, All Rights Reserved</li>
                </div>
            </footer>
        </div>
    )
}

export default About