import React from 'react'
import logo from '../../public/logo.png'
import { useState } from 'react'
import img from 'next/image'
const Navbar = () => {
  function handleLinkClick(e:string) {
    
    // e.preventDefault();
    const Element:any = document.getElementById(e);
    console.log(Element,'element form navbar');
    
    const scrollOptions:any = {
      top: Element.offsetTop-10,
      behavior: 'smooth',
      duration: 1000, 
    };
    window.scroll(scrollOptions);
  }
  const [loader, setLoader] = useState(false);

  const menuFunction = () => {
    setLoader(!loader);
  };
  return (
    <div className='text-white'>
      <nav className='flex justify-between mx-[7%] items-center max-md:items-start py-5 '>
        <div className='flex items-center gap-[8px] '><img src={'/logo.svg'} className='w-[40px] h-[40px] max-md:w-[28px]'  alt="nav logo" /> <h1 className='logoText text-[28px] font-bold leading-[39px] max-sm:leading-[34px]'>Enver</h1></div>
        <div>
          <div>
          <ul className={`  max-md:${loader ? 'block' : 'hidden'
          } max-md:flex max-md:flex-col max-md:mt-10 flex gap-[26px]  text-[#D9D9D9] font-semibold  pt-1 `}>
          <li className='hover:text-[#5454D4] font-sans'><button onClick={()=>handleLinkClick('home')}>Home</button>  </li>
          <li className='hover:text-[#5454D4] font-sans'><button onClick={()=>handleLinkClick('services')}>Services</button></li>
          <li className='hover:text-[#5454D4] font-sans'><button onClick={()=>handleLinkClick('projects')}>Our Project</button></li>
          <li className='hover:text-[#5454D4] font-sans'><button onClick={()=>handleLinkClick('about')}>About us</button></li></ul>
          </div>
          </div>
        <div className='md:block max-md:hidden'>
          <button className='rounded-md border-gray-600 border px-8 py-2 bg-transparent text-[#D9D9D9]'>Contact us</button></div>
        <div className='md:hidden max-md:block ml-4 mt-3'>
          <button onClick={menuFunction}>
            <img src={"/menuIcon.png"} alt="" /></button></div>

      </nav>
    </div>
  )
}

export default Navbar