import React from 'react'
import logo from '../../public/logo.png'
import { useState } from 'react'
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
        <div><img src={'/logo.png'} width={100} height={100} alt="nav logo" /></div>
        <div>
          <div>
          <ul className={`  max-md:${loader ? 'block' : 'hidden'
          } max-md:flex max-md:flex-col max-md:mt-10 flex gap-6  text-[#D9D9D9] font-semibold  pt-1 `}>
          <li className='hover:text-[#5454D4]'><button onClick={()=>handleLinkClick('home')}>Home</button>  </li>
          <li className='hover:text-[#5454D4]'><button onClick={()=>handleLinkClick('services')}>Services</button></li>
          <li className='hover:text-[#5454D4]'><button onClick={()=>handleLinkClick('projects')}>Our Project</button></li>
          <li className='hover:text-[#5454D4] '><button onClick={()=>handleLinkClick('about')}>About us</button></li></ul>
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