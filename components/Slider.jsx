import React, { Component } from "react";
import Slider from "react-slick";
// import '../styles/Home.module.css';
import { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "next/image";
const SliderComponent = () => {
    const slider = React.useRef(null);

    const settings = {
        prevArrow: null,
        nextArrow: null,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 1500,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            }, {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,

                }
            }],

    }
    return (
        <div className="my-20" id='projects' >

            <div className="flex gap-16 relative justify-between max-md:justify-center text-center flex-wrap items-center">
                <h1 className="ml-20 max-lg:ml-10 text-white max-md:text-left  text-4xl font-bold mb-10 font-sans">Our Awesome Portofolio</h1>
                <img src={"/add.png"} className="absolute top-[-80%] left-[5%]" alt="" />
                <img src={"/circle.png"} className="absolute top-8 max-sm:top-14 right-[10%]" alt="" />

            </div>
           
            <div className="flex  justify-center " >


                <div className="w-11/12 relative py-14 ">
                    <Slider ref={slider} {...settings}>
                        <div >
                            <h3 className="ml-[10%] max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg1.png'} alt="slider wali img" /></h3>

                        </div >
                        <div className="mt-[30%] max-lg:mt-0 ">
                            <h3 className="ml-[10%] max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg2.png'} alt="slider wali img" /></h3>

                        </div>
                        <div className="mt-[60%] max-lg:mt-0">
                            <h3 className="ml-[10%] max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg3.png'} alt="slider wali img" /></h3>

                        </div>
                        <div >
                            <h3 className="ml-[10%] max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg1.png'} alt="slider wali img" /></h3>

                        </div>
                        <div className="mt-[30%] max-lg:mt-0 " >
                            <h3 className="ml-[10%]  max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg2.png'} alt="slider wali img" /></h3>

                        </div>
                        <div className="mt-[60%] max-lg:mt-0" >
                            <h3 className="ml-[10%]  max-sm:ml-10"><img className="w-[100%]" src={'/sliderImg3.png'} alt="slider wali img" /></h3>

                        </div>
                    </Slider>
                    <img src={'/graph.png'} className='absolute bottom-0 max-sm:bottom-[-20%]' alt="" />
                </div>
            </div>

            <div className="flex gap-4 justify-center lg:hidden mr-20 max-md:mr-0 mb-8 ">
                <button onClick={() => slider?.current?.slickNext()}><img src={'/sliderPrevIcon.png'} alt="slider wali img" /></button>
                <button className="text-right" onClick={() => slider?.current?.slickPrev()}> <img src={'/sliderNextIcon.png'} alt="slider wali img" /></button>
            </div>

        </div>
    );

}
export default SliderComponent