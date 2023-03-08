import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar/Navbar'
import Homee from '../components/home/Home'
import Services from '../components/services/Services'
import About from '../components/about/About'
import styles from '../styles/Home.module.css'
// import Slider from '../components/Slider'
export default function Home() {
  
  return (
    
    <div className='bg-[#19191B]' >
      {/* <h3 className={`${styles['my-custom-class']} bg-blue-500 text-white p-4`}>hello word</h3> */}
      <Navbar />
      <Homee/>
      <Services/>
      {/* <Slider/> */}
      <About/>

    </div>
  )
}
