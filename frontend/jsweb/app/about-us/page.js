'use client'
import React from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../Images/Image.png'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import DarkNavBar from '../components/DarkNavBar'
import arrow from '@/public/arrow-right-dark.svg'
import JsWebLogo from '@/public/Logo-removebg 1.png'
import { useState } from 'react'
const aboutUs = () => {
  const [show, setShow] = useState(true)
  return show ? (
    <>
    <DarkNavBar/>

    {/* --------------------hero section--------------------- */}
    <div className='heroText-wrapper'>
     <h2>We believe in technology's<br/>transformative power, driving digital<br/>growth for our clients.</h2>
     <div className='CTA-btt'>
        <button>
          <Link href={""} className='link'>OUR COMPANY PROFILE</Link>
          < Image className='' src={arrow} width={0} height={0}/>
        </button>

     </div>
    </div>
    < Image className='two-men-image' src={image1} width={0} height={0}/>

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
          src={JsWebLogo}
          width={500}
          height={450}
          className='jsweblogo'
        />
        <p>J's Web drives traffic to your site through a comprehensive approach, utilizing Social Media Marketing (SMM), Omni-channeling, and effective SEO. We optimize your online presence for visibility, making it easy for potential customers to discover and engage with your website.</p>
      </div>
    </div>
    <Footer/>
    </>
    )  : (
      <NavBarPage setShow={setShow} />
      )
}

export default aboutUs