import React from 'react'
import img from 'next/image'
const Services = () => {
    return (
        <div className='text-white relative mt-28' id='services'>
            <img src={'/triangle.png'} className='absolute max-md:top-[-5%] top-[-2%] left-[20%] max-sm:top-[-4%] max-sm:left-[10%]' alt="" />
            <img src={'/add.png'} className='absolute top-16 max-sm:top-24 right-[10%]' alt="" />
            <h1 className='text-4xl font-bold text-center whitespace-pre-wrap'>
  The Service We Provide<span className='max-md:hidden'><br /></span> For You
</h1>
            {/* <h1 className='text-4xl font-bold text-center whitespace-pre-wrap '>The Service We Provide  For You</h1> */}
            <section>

                <div className='' >

                    <div className='flex justify-center flex-wrap gap-10'>
                        <div className='flex flex-col items-center w-[28%] max-xl:w-[48%]  max-md:w-[70%] p-10'>
                            <img src={'/cardIcon1.png'} alt="" />
                            <h1 className='font-sans text-xl font-semibold py-4'>Development</h1>
                            <h1 className=' text-center'>Create a platform with the best and coolest quality from us.</h1>
                        </div>
                        <div className='flex flex-col items-center w-[28%] max-xl:w-[48%] max-md:w-[70%] p-10'>
                            <img src={'/cardIcon2.png'} alt="" />
                            <h1 className='font-sans text-xl py-4'>UI/UX Designer</h1>
                            <h1 className=' text-center'>We provide UI/UX Design services, and of course with the best quality</h1>
                        </div> <div className='flex flex-col items-center w-[28%] max-xl:w-[48%] max-md:w-[70%] p-10'>
                            <img src={'/cardIcon3.png'} alt="" />
                            <h1 className='font-sans text-xl text-center py-4'>Graphik Designer</h1>
                            <h1 className=' text-center'>We provide Graphic Design services, with the best designers</h1>
                        </div> <div className=' flex flex-col items-center w-[28%] max-xl:w-[48%] max-md:w-[70%] p-10'>
                            <img src={'/cardIcon4.png'} alt="" />
                            <h1 className='font-sans text-xl py-4'>Motion Graphik</h1>
                            <h1 className=' text-center'>Create a platform with the best and coolest quality from us.</h1>
                        </div> <div className='flex flex-col items-center w-[28%] max-xl:w-[48%] max-md:w-[70%] p-10'>
                            <img src={'/cardIcon5.png'} alt="" />
                            <h1 className='font-sans text-xl py-4'>Photography</h1>
                            <h1 className=' text-center'>We provide Photography services, and of course with the best quality</h1>
                        </div>
                        <div className=' flex flex-col items-center w-[28%] max-xl:w-[48%] max-md:w-[70%] p-10'>
                            <img src={'/cardIcon6.png'} alt="" />
                            <h1 className='font-serif text-xl py-4'>Videography</h1>
                            <h1 className=' text-center'>Create a platform with the best and coolest quality from us.</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services