'use client'
import React from 'react'
import './style.css'
import'../globals.css'
import Link from 'next/link'
import Image from 'next/image'
import Cbutton from '../components/Cbutton'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DarkNavBar from '../components/DarkNavBar'
import { useState } from 'react'
import NavBarPage from '../components/NavBarPage'
import {motion, useAnimation, useInView} from "framer-motion"
const aboutUs = () => {
  const [show, setShow] = useState(true)
  const Imagevariants ={
    initial:{
      x:20,
      opacity:0,

  },
    visible:{
      x:0,
      opacity:1,
      transition:{
        type:"spring",
        delay:0.5,
        yoyo:100
        
      }
    },
    hover:{
      scale:[1.1,1,1.1],
      transition:{
        yoyo:Infinity
      }

    }
  }
  return show ? (
    <>
    <title>About Us - J's Web: Our Story</title>
    <meta name="description" content="Discover J's story, team crafting exceptional web experiences."></meta>
    <DarkNavBar show={show} setShow={setShow}/>

    {/* --------------------hero section--------------------- */}
    <div className='hero-vid'>
      <video src='/abtpage.webm' className='bg-vid'loop autoPlay muted></video>
    </div>
    <div className='hero-bg'>
      
      <div className='heroText-wrapper'>
        <h1>ABOUT US</h1>
        <p>J’s Web is a web development agency <br/>that believes in transformative power of digital growth to create real business value for our clients.</p>
        <Cbutton  text="COMPANY PROFILE" link={"https://drive.google.com/file/d/1j57mqzj9lAmOBnMxG6WJB4jOFPGNpW6h/view?usp=drivesdk"}></Cbutton>
      </div>
    </div>

    {/* ------------------------our story section--------------- */}
    <div className='ourStory-wrapper'>
      <div className='right-wrapper'>
          <div className='title'>
          <h2 className='ourStory'>Our Story</h2>
          <hr className='underline'/>
          <div className='paragraphs'>
            <p>J's Web, a pioneering web design agency, was born from the fusion of sales experts and skilled developers with a shared vision to address the pressing need for websites that translate traffic into tangible business revenue. With a profound understanding of the importance of web presence and conversion, this dynamic team harnessed their collective expertise to craft a company that specializes in creating compelling, user-centric websites. J's Web has since become a powerhouse in the digital marketing realm, offering businesses a key resource to transform online visitors into valuable revenue streams.</p>

            <p>J's Web places your needs at the heart of our approach. We actively listen to your goals, engage with you throughout the project, and ensure that every concern is addressed. Our focus is on delivering websites that not only meet but exceed your expectations, helping you achieve your business objectives effectively.</p>
          </div>
        </div>
      </div>
      <div className='left-wrapper'>

        <Image 
          src="/Logo-removebg 1.png"
          width={500}
          height={450}
          className='jsweblogo '
          alt='jsweb logo'
        />
  
        <p>J's Web drives traffic to your site through a comprehensive approach, utilizing Social Media Marketing (SMM), Omni-channeling, and effective SEO. We optimize your online presence for visibility, making it easy for potential customers to discover and engage with your website.</p>
      </div>
    </div>
    <Footer/>
    </>
    )  : <NavBarPage setShow={setShow} page={'About'} show={show}/>
}

export default aboutUs
