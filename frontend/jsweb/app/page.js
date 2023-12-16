'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Point from './components/Point'
import { useState } from 'react'
import Footer from './components/Footer'
import NavBarPage from './components/NavBarPage'
export default function Home() {
  const [show, setShow] = useState(true)
  return show ? (
    <main className="flex flex-col bg-main-bg font-lora overflow-x-hidden">
      <video src='/hero-video.mp4' loop autoPlay muted
      className='absolute hidden md:block w-screen h-screen object-fit z-10 bg-black' /> 
      <NavBar setShow={setShow} show={show}/>
      <section className='md:px-32 z-20 sm:px-24 bg-black px-12 md:bg-opacity-0 flex flex-col' id='hero'>
        <div className="h-screen flex flex-col justify-center text-white md:w-3/4 w-full space-y-12">
          <h1 className='font-quattrocento xl:text-8xl xl:leading-[7rem]
          lg:text-7xl lg:leading-[5rem]
          text-5xl'>Creating Real Business Value.</h1>
          <p className='xl:w-1/2 lg:w-3/4'>J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises eager to establish an online presence and monetize traffic from diverse channels.</p>
          <Link href={"/about-us"} className='flex flex-row space-x-2 text-sm btn'>
            <p className='text-n'>GET TO KNOW US</p>
            <Image
            src={"/arrow-right-dark.svg"}
            alt='arrow'
            width={20}
            height={20}
            className='aspect-auto'
            />
          </Link>
        </div>
      </section>

      <section className='flex flex-col h-fit w-screen xl:px-32 px-16 py-12 items-center lg:space-y-24 space-y-12'>
        <div className='flex flex-col space-y-2 items-center'>
          <h2 className='font-quattrocento font-medium md:text-6xl text-5xl '>Featured Work</h2>
          <p>Explore some of our latest website projects</p>
        </div>
        <div className='flex flex-col items-start space-y-6 w-full
        lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
            <Image
              src={"/feat-1.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto xl:w-auto lg:w-1/2 w-full'
              />
            <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
              <h3 className='text-3xl font-quattrocento font-semibold'>Anon</h3>
              <p className='text-2xl'>Ecommerce website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center btn'>
                  <p>Visit Anon</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
        <div className='flex flex-col items-start space-y-6 w-full
        lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
            <Image
              src={"/feat-2.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto xl:w-auto lg:w-1/2 w-full'
              />
            <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
              <h3 className='text-3xl font-quattrocento font-semibold'>Homeverse</h3>
              <p className='text-2xl'>Real Estate website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center btn'>
                  <p>Visit Homeverse</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
        <div className='flex flex-col items-start space-y-6 w-full
        lg:flex-row lg:items-center lg:justify-between lg:space-x-6'>
            <Image
              src={"/feat-3.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto xl:w-auto lg:w-1/2 w-full'
              />
            <div className="flex flex-col space-y-4 lg:w-2/4 w-full">
              <h3 className='text-3xl font-quattrocento font-semibold'>Grilli</h3>
              <p className='text-2xl'>Restuarant website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center btn'>
                  <p>Visit Grilli</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
          <Link href={'/portfolio'}>
                <button className='flex flex-row space-x-2 items-center btn'>
                  <p>VIEW MORE WORK</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
      </section>

      <section className='flex flex-col w-full justify-center items-start space-y-6 text-white bg-alt-bg px-16 py-28
      md:flex-row md:-space-x-4 md:items-center md:space-y-0
      lg:py-36 xl:px-32 
      xl:py-44 '>
        <h2 className='xl:text-6xl lg:text-5xl text-4xl font-quattrocento font-medium md:w-1/2 pr-8'>Full Service Digital Consultancy</h2>
        <div className='flex flex-col md:w-1/2 space-y-6'>
          <p className='md:border-l-[3px] text-start h-full border-alt-fg w-full md:pl-4 font-medium font-lato'>We are committed to launching businesses, elevating their enterprise value, and redefining their market penetration strategies. Through innovation and dedicated effort, we aim to bring joy and success to our clients.</p>
          <Link href={''}>
            <button className='flex flex-row space-x-2 btn'>
            <p>FIND OUT MORE ABOUT US</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
            </button>
          </Link>
        </div>
      </section>

      <section className='flex flex-col px-16 py-20 items-center justify- space-y-8
      xl:px-32'>
        <h2 className='font-quattrocento font-medium text-4xl tracking-wide'>Our Services</h2>
        <div className='flex flex-col space-y-6'>
          <h3 className='font-lora text-2xl w-full py-4 border-b-4 border-black'>Digital Design Services</h3>
          <div className="flex flex-col items-start  space-y-4
          md:justify-between md:flex-row md:space-y-0">
            <p className='font-lora lg:w-1/2 w-full'>Elevate your brand with our cutting-edge digital design services. Crafted for impact, our designs captivate and engage.</p>
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
        </div>
        <div className='flex flex-col space-y-6'>
          <h3 className='font-lora text-2xl w-full py-4 border-b-4 border-black'>Growth Marketing</h3>
          <div className="flex flex-col items-start space-y-4
          md:space-y-0 md:justify-between md:flex-row">
            <p className='font-lora lg:w-1/2 w-full'>Boost your brand's growth with our strategic marketing solutions. Maximize ROI through data-driven campaigns and creative strategies.</p>
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
        </div>
      </section>
      <Footer />
    </main>
  ) : (
  <NavBarPage setShow={setShow} />
  )
}
