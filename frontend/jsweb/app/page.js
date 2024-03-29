'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Point from './components/Point'
import { useState } from 'react'
import Footer from './components/Footer'
import NavBarPage from './components/NavBarPage'
import Reveal from './components/Reveal'
import Typewriter from 'typewriter-effect'
import {motion} from 'framer-motion'

export default function Home() {
  const [show, setShow] = useState(true)

  return show ? (
    
    <main className="flex flex-col bg-main-bg font-roboto overflow-x-hidden scroll-smooth">
      <title>Creating Real Business Value</title>
      <meta name="description" content="An web design agency that creates real business value"></meta>
      {/* ----------blob video------------- */}
      <video src='/hero-video.mp4' webkit-playsinlin={1} playsinline={1} loop autoPlay muted
      className='absolute hidden md:block w-screen h-screen object-fit z-10 bg-black pl-10 ' />
      {/*----------Navbar---------*/} 
      <NavBar setShow={setShow} show={show}/>  
      {/* --------------Hero Section--------------------- */}
      <section className='lg:px-32 w-screen h-screen z-20 sm:px-24 bg-black py-20 px-12 md:bg-opacity-0 flex flex-col' id='hero'>
        <div className="h-screen flex flex-col items-start justify-center text-white md:w-3/4 w-full space-y-12">
          {/* --------------------creating real value h1 --------------------- */}
          <Reveal duration={0.5}>  
          <h1 className='font-poppins lg:text-5xl lg:leading-[5rem] text-5xl w-full -mb-12 md:-mb-24'>
              Creating Real Business <Typewriter // Added animation of the words "value" and "brands" using typewriter effect (Change the margin bottom to fit the text well and the size*)
              options={{
                strings: [
                  "Value.",
                  "Brands."
                ],
                autoStart: true,
                loop: true,
                }}
                />
           </h1>
          </Reveal>
          {/* --------------------------------------about jsweb---------------------- */}
          <Reveal delay={0.1}>
            <p className='xl:w-2/2 lg:3/4 md:w-5/6'>J’s Web is a Web Design Agency dedicated drive traffic into tangible business results.</p>
          </Reveal>
          {/* ---------------------------------contact us call to action------------------------------ */}
          <Reveal delay={0.2}>
            <Link href={"/contact"} className='flex flex-row space-x-2 text-sm btn-light group '>
              <p className='text-n'>CONTACT US</p>
              <Image
              src={"/arrow-right.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow'
              />
              <Image
              src={"/arrow-right-dark.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow-alt'
              />
            
            </Link>
          </Reveal>
        </div>
        <div className='w-full text-white z-50 flex items-end justify-end'>
          <motion.button className='flex justify-center space-y-4' onClick={() => {
            window.scrollTo({top: document.getElementById('work').offsetTop, behavior: 'smooth'})
          }}
            variants={{
              initial: {
                translateY: 0
              },          
              last: {
                translateY: [0,30,0,30,0],
                transition: {
                  yoyo: Infinity,
                  duration: 2,
                  delay: 0.5
                }
              }
            }}
            transition={{}}
            whileInView='last'
            whileHover='last'
          >
            <Image
              src={"/downArrow.svg"}
              alt='image'
              width={20}
              height={8}
              className='aspect-auto z-20	absolute'
            />
            <Image
              src={"/circle.svg"}
              alt='image'
              width={40}
              height={8}
              className='aspect-auto'
            />
          </motion.button>
        </div>
      </section>
        {/* -------------------Featured work section-------------------------- */}

      <section className='flex flex-col h-fit w-screen xl:px-32 px-16 py-12 items-center lg:space-y-24 space-y-12' id='work'>
        {/* --------------------featured work h2---------------------------- */}
        <div className='flex flex-col space-y-2 items-center justify-center'>
          <Reveal>
            <h2 className='font-poppins font-medium md:text-6xl text-5xl text-center w-full'>Featured Work</h2>
            <p className='text-center w-full'>Explore some of our latest website projects</p>
          </Reveal>
        </div>
        {/* --------------------anon website------------------- */}
        <Reveal>
        <div className='flex flex-col items-start space-y-6 w-full
        lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
            <Image
              src={"/feat-1.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto xl:w-[560px] lg:w-[440px] w-full'
              />
            <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
              <h3 className='text-3xl font-poppins font-semibold'>Anon</h3>
              <i className='text-2xl font-poppinslight'>Ecommerce website</i>
              <p>Transform your dreams into a successful online store with our customized e-commerce websites.</p>
              <Link href={'https://anon-eight.vercel.app/'} className='group' target='_blank'>
                <button className='flex flex-row space-x-2 items-center btn'>
                  <p>Visit Anon</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow'
                    />
                  <Image 
                    src={'arrow-right.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow-alt'
                    />
                </button>
              </Link>
            </div>
          </div>
        </Reveal>
        {/* ----------------------grilli website------------------------ */}
        <Reveal>
        <div className='flex flex-col items-start space-y-6 w-full
        lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
            <Image
              src={"/feat-3.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto xl:w-[560px] lg:w-[440px] w-full'
              />
            <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
              <h3 className='text-3xl font-poppins font-semibold'>Grilli</h3>
              <i className='text-2xl font-poppinslight'>Restaurant website</i>
              <p>Establish a digital home for your restaurant, where potential customers can learn all about you with just a click.</p>
              <Link href={'https://grilli-lovat.vercel.app/'} target='_blank'>
                <button className='flex flex-row space-x-2 items-center btn group'>
                  <p>Visit Grilli</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow'
                    />
                  <Image 
                    src={'arrow-right.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow-alt'
                    />
                </button>
              </Link>
            </div>
          </div>  
        </Reveal>     
        {/* -------------------homeverse website-----------------------  */}
        <Reveal>
          <div className='flex flex-col items-start space-y-6 w-full
          lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
              <Image
                src={"/feat-2.png"}
                alt='image'
                width={500}
                height={300}
              className='aspect-auto xl:w-[560px] lg:w-[440px] w-full'
                />
              <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
                <h3 className='text-3xl font-poppins font-semibold'>Homeverse</h3>
                <i className='text-2xl font-poppinslight'>Real Estate website</i>
                <p>Make it easier for your clients to explore properties with our comprehensive real estate website. </p>
                <Link href={'https://homeverse-seven.vercel.app/'} target='_blank'>
                  <button className='flex flex-row space-x-2 items-center btn group'>
                    <p>Visit Homeverse</p>
                    <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow'
                    />
                  <Image 
                    src={'arrow-right.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow-alt'
                    />
                  </button>
                </Link>
              </div>
          </div>
        </Reveal>
        {/* -----------------more work btt---------------------- */}
        <Reveal>
          <Link href={'/portfolio'}>
                <button className='flex flex-row space-x-2 items-center btn group'>
                  <p>VIEW MORE WORK</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow'
                    />
                  <Image 
                    src={'arrow-right.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black arrow-alt'
                    />
                </button>
              </Link>
        </Reveal>
      </section>
      {/* -------------------Full Service Digital Consultancy section------------------ */}
      <section className='flex flex-col w-full justify-between items-start space-y-6 text-white bg-alt-bg px-16 py-28
      md:flex-row md:items-center md:space-y-0
      lg:py-36 xl:px-32 
      xl:py-44 '>
        <Reveal>
          <h2 className='lg:text-5xl text-4xl font-poppins font-medium md:w-3/4'>Full Service Digital Consultancy</h2>
        </Reveal>
        <div className='flex flex-col md:w-3/4 space-y-6'>
          <Reveal delay={0.3}>
            <p className='md:border-l-[3px] text-start h-full border-alt-white w-full md:pl-4 font-medium font-lato'>We are committed to launching businesses, elevating their enterprise value, and redefining their market penetration strategies. Through innovation and dedicated effort, we aim to bring joy and success to our clients.</p>
          </Reveal>
          <Reveal delay={0.3}>
            <Link href={'/about-us'}>
              <button className='flex flex-row space-x-2 btn-light group'>
              <p>FIND OUT MORE ABOUT US</p>
                    <Image 
                      src={'arrow-right.svg'}
                      alt='right arrow'
                      width={20}
                      height={20}
                      className='aspect-auto stroke-black arrow'
                      />
                    <Image 
                      src={'arrow-right-dark.svg'}
                      alt='right arrow'
                      width={20}
                      height={20}
                      className='aspect-auto stroke-black arrow-alt'
                      />
              </button>
            </Link>
          </Reveal>
        </div>
      </section>
    {/* -------------------------------our services section --------------------------------- */}
      <section className='flex flex-col px-16 py-20 items-start md:items-center justify-start space-y-8
      xl:px-32'>
        <Reveal>
          <h2 className='font-poppins font-medium text-6xl tracking-wide'>Our Services</h2>
        </Reveal>
        <div className='flex flex-col space-y-6'>
          <Reveal>
            <h3 className='font-roboto text-2xl w-full py-4 border-b-4 border-black'>Digital Design Services</h3>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col items-start  space-y-4
            md:justify-between md:flex-row md:space-y-0">
                <p className='font-roboto lg:w-1/2 w-full'>Elevate your brand with our cutting-edge digital design services. Crafted for impact, our designs captivate and engage.</p>
              <div className="flex flex-col space-y-2 lg:w-1/2 w-full items-start md:pl-14">
                <p className='text-lg'>How we help</p>
                <div className="flex flex-col space-y-1 pl-4">
                  <Point>Web design</Point> 
                  <Point>Digital Strategy</Point> 
                  <Point>Brand Strategy</Point> 
                  <Point>Content and Marketing Strategy</Point> 
                  <Point>UI/UX Design</Point>
                  <Point>Omni-Channeling</Point>
                  <Point>Copywriting</Point>
                  <Point>Web Hosting Service</Point>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className='flex flex-col space-y-6'>
          <Reveal>
            <h3 className='font-roboto text-2xl w-full py-4 border-b-4 border-black'>Growth Marketing</h3>
          </Reveal>
          <Reveal>
            <div className="flex flex-col items-start space-y-4
            md:space-y-0 md:justify-between md:flex-row">
              <p className='font-roboto lg:w-1/2 w-full'>Boost your brand's growth with our strategic marketing solutions. Maximize ROI through data-driven campaigns and creative strategies.</p>
              <div className="flex flex-col space-y-2 lg:w-1/2 w-full items-start md:pl-14">
                <p className='text-lg'>How we help</p>
                <div className="flex flex-col space-y-1 pl-4">
                  <Point>Search Engine Optimization</Point> 
                  <Point>Media Strategy</Point> 
                  <Point>Social Media Marketing Strategy</Point> 
                  <Point>Paid Search</Point> 
                  <Point>Paid Social</Point>
                  <Point>Audience Planning</Point>
                  <Point>Media Analytics</Point>
                  <Point>Sales and Media Copy</Point>
                  <Point>Content Marketing</Point>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      {/* -----------------------footer--------------------------- */}
      <Footer />
    </main>
  ) : (
  <NavBarPage setShow={setShow} page={'Home'} show={show}/>
  )
}
