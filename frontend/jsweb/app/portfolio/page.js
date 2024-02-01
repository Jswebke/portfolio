'use client'
import React, { useEffect, useState } from 'react'
import DarkNavBar from '../components/DarkNavBar'
import style from '../portfolio/style.css'
import Image from 'next/image'
import Footer from '../components/Footer'
import Link from 'next/link'
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavBarPage from '../components/NavBarPage'
import Reveal from '../components/Reveal'
import Cbutton from '../components/Cbutton'
import Pbutton from '../components/Pbutton'

const portfolio = () => {
  const [show, setShow] = useState(true)
  useEffect(()=>{
    AOS.init({
      // duration: 800,
      once: true,
    },[])
  })
  return show ? (
    <>
    <title>Portfolio Projects</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Explore J's portfolio, elevate brand with creative solutions"></meta>
    <Link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>

      <DarkNavBar show={show} setShow={setShow}/>
      <div className='hero-text' >
        <h1>OUR PROJECTS</h1>
        <p>We are good at building web apps that are use by millions of people and platforms that serve blossoming businesses.</p>
      </div>
      <div className='sites'>
        {/* ----------------site-wrapper-right-1---------------- */}
      <div className='site-wrapper'>
        <div className='site-mockup'>

          <Image 
            src={"/anon.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'
            alt="anon-website"
          />
        </div>
       
        <div className='site-rectangle' data-aos="fade-up">
          <h3>Anon</h3>
          <p>Transform your dreams into a successful online store with our customized e-commerce websites.</p>

          <Pbutton text={"Visit Anon"} Class="Rbutton" link="https://anon-eight.vercel.app/"></Pbutton>
    

        </div>
      </div>
    
    {/* ---------------------grilli-site-wrapper-left-2---------------- */}
      <div className='site-wrapper-left'>
        <div className='site-mockup-left' dats-aos='fade-up-right'>
          <Image 
            src={"/gericht.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'
            alt='grilli-website'

          />
        </div>
        <div className='site-rectangle-left' >
          <h2>Grilli</h2>
          <p>Establish a digital home for your restaurant, where potential customers can learn all about you with just a click.</p>
          <Pbutton text={"Visit Grilli"} Class="Pbutton" link="https://grilli-lovat.vercel.app/"></Pbutton>
        </div>
      </div>
              {/* ----------------homeverse-site-wrapper-right-3---------------- */}
              <div className='site-wrapper'>
        <div className='site-mockup'>
          <Image 
            src={"/homeverse.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'
            alt='homeverse-website'
          />
        </div>
        <div className='site-rectangle'>
          <h3>Homeverse</h3>
          <p>Make it easier for your clients to explore properties with our comprehensive real estate website. </p>
          <Pbutton text={"Visit Homeverse"} Class="Rbutton" link="https://homeverse-seven.vercel.app/"></Pbutton>
        </div>
      </div>
    {/* ---------------------gericht-site-wrapper-left-4---------------- */}
    {/* <div className='site-wrapper-left'>
        <div className='site-mockup-left'>
          <Image 
            src={"/grilli.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'
            alt='gericht website'

          />
        </div>
        <div className='site-rectangle-left' >
          <h2>Gericht</h2>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <Pbutton text={"Visit Gericht"} Class="Pbutton" link="/"></Pbutton>
        </div>
      </div> */}

      {/* ----------------yukio-site-wrapper-right-5---------------- */}
    <div className='site-wrapper-left'>
        <div className='site-mockup-left'>
          <Image 
            src={"/yukio.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'
            alt="yukio-website"
          />
        </div>
        <div className='site-rectangle-left'>
          <h2>Yukio's Booking</h2>
          <p>We simplify things, whether it's an online booking platform or something more complex.</p>
          <Pbutton text={"Visit Yukio"} Class="Pbutton" link="https://yukio-tours.vercel.app/"></Pbutton>
        </div>
      </div>
    {/* ---------------------sedo-site-wrapper-left-6---------------- */}
    <div className='site-wrapper' id='last-site'>
        <div className='site-mockup'>
          <Image 
            src={"/sedo.png"}
            width={500}
            height={500}
            className='mockup'
            data-aos='flip-up'
            data-aos-duration = '1500'

            alt='sedo-website'

          />
        </div>
        <div className='site-rectangle'  >
          <h3>Sedo Logistics Limited</h3>
          <p>Looking for a versatile website? We've got you covered!</p>
          <Pbutton text={"Visit Sedo"} Class="Rbutton" link="https://sedologistics.co.ke/"></Pbutton>
        </div>
      </div>
      </div>
      <Footer/>
      
    <script>
      AOS.init();
    </script>
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    </>
  ) : <NavBarPage show={show} setShow={setShow} page={'Portfolio'}/>
}

export default portfolio