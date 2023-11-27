'use client'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'
import Point from './components/Point'
import { useState } from 'react'
export default function Home() {
  const [show, setShow] = useState(true)
  return show ? (
    <main className="flex flex-col bg-main-bg font-lora overflow-x-hidden">
      <NavBar setShow={setShow}/>
      <section className='px-32 bg-black flex flex-col' id='hero'>
        <div className="h-screen flex flex-col justify-center text-white w-3/4 space-y-6">
          <h1 className='font-quattrocento text-8xl leading-[7rem]'>Creating Real Business Value.</h1>
          <p className='w-1/2'>J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises eager to establish an online presence and monetize traffic from diverse channels.</p>
          <Link href={""} className='flex flex-row space-x-2 text-sm'>
            <p>GET TO KNOW US</p>
            <Image
            src={"/arrow-right.svg"}
            alt='arrow'
            width={20}
            height={20}
            className='aspect-auto'
            />
          </Link>
        </div>
      </section>


      <section className='flex flex-col h-fit w-screen px-32 py-12 items-center space-y-24'>
        <div className='flex flex-col space-y-2 items-center'>
          <h2 className='font-quattrocento font-medium text-6xl '>Featured Work</h2>
          <p>Explore some of our latest website projects</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-1.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Anon</h3>
              <p className='text-2xl'>Ecommerce website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
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
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-2.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Homeverse</h3>
              <p className='text-2xl'>Real Estate website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
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
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-3.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Grilli</h3>
              <p className='text-2xl'>Restuarant website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
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
          <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
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
      <section className='flex flex-row w-full justify-center items-center -space-x-4 bg-alt-bg px-32 py-44'>
        <h2 className='text-6xl font-quattrocento font-medium w-1/2'>Full Service Digital Consultancy</h2>
        <div className='flex flex-col w-1/2 space-y-6'>
          <p className='border-l-[3px] text-start h-full border-black w-full pl-4 font-medium font-lato'>We are committed to launching businesses, elevating their enterprise value, and redefining their market penetration strategies. Through innovation and dedicated effort, we aim to bring joy and success to our clients.</p>
          <Link href={''}>
            <button className='flex flex-row space-x-2'>
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

      <section className='flex flex-col px-32 py-20 items-center justify- space-y-8'>
        <h2 className='font-quattrocento font-medium text-4xl tracking-wide'>Our Services</h2>
        <div className='flex flex-col space-y-6'>
          <h3 className='font-lora text-2xl w-full py-4 border-b-4 border-black'>Digital Design Services</h3>
          <div className="flex flex-row items-start justify-between">
            <p className='font-lora w-1/2'>Elevate your brand with our cutting-edge digital design services. Crafted for impact, our designs captivate and engage.</p>
            <div className="flex flex-col space-y-4 px-6 w-1/2 pl-28">
              <p className=''>How we help</p>
              <div className="flex flex-col space-y-1">
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
          <div className="flex flex-row items-start justify-between">
            <p className='font-lora w-1/2'>Boost your brand's growth with our strategic marketing solutions. Maximize ROI through data-driven campaigns and creative strategies.</p>
            <div className="flex flex-col space-y-4 px-6 w-1/2 pl-28">
              <p className=''>How we help</p>
              <div className="flex flex-col space-y-1">
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
      <footer className='bg-alt-bg px-32 flex flex-col py-28 space-y-4 justify-center'>
        <p>Like what you see?</p>
        <Link href={''}>
          <button className='flex flex-row space-x-3 items-center'>
            <p className='font-medium text-5xl py-3 border-b-4 border-black'>Say Hello</p>
            <Image 
                  src={'arrow-right-dark.svg'}
                  alt='right arrow'
                  width={36}
                  height={20}
                  className='aspect-auto stroke-black'
                  />
          </button>
        </Link>
        <div className='flex flex-row items-center justify-between pt-4'>
          <div className="flex flex-row items-center justify-start space-x-4">
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/tiny-map.svg'}
                alt='map icon'
                width={20}
                height={10}
                className='aspect-auto'
              />
              <p>Nairobi, Kenya</p>
            </div>
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/call-icon.svg'}
                alt='icon'
                width={16}
                height={10}
                className='aspect-auto'
              />
              <p>+254 700 000 000</p>
            </div>
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/email-icon.svg'}
                alt='icon'
                width={20}
                height={10}
                className='aspect-auto'
              />
              <p>info@jsweb.com</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-end space-x-6'>
            <a href={'https://www.instagram.com'} target='_blank'>
              <button>
                <Image 
                  src={'/insta-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />
              </button>
            </a>
            <a href={'https://www.facebook.com'} target='_blank'>
              <button>
                <Image 
                  src={'/facebook-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />    
              </button>
            </a>
            <a href={'https://www.linkedin.com/'} target='_blank'>
              <button>
                <Image 
                  src={'/linked-in-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />    
              </button>
            </a>
            <a href={'https://www.github.com/'} target='_blank'>
              <button>
                <Image 
                  src={'/github-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />
              </button>
            </a>
          </div>
        </div>
      </footer>
    </main>
  ) : (
  <main className='flex flex-col bg-alt-bg w-screen h-screen justify-between pb-32'>
    <div className='w-full py-4 flex flex-row justify-between px-16 items-center text-alt-fg text-sm'>
      <Link href={''} className='px-2'>
          <button>
              <Image
                  src={"/dark-logo.svg"}
                  alt={'logo'}
                  width={80}
                  height={64}
                  className='aspect-auto'
              />
          </button>
      </Link>
      <div className="flex flex-row items-center space-x-12">
          <Link href={''}>
              <button>
                  <p>LET'S TALK</p>
              </button>
          </Link>
          <button onClick={e => setShow(true)}>
              <Image
                  src={'/dark-menu.svg'}
                  alt='menu'
                  width={32}
                  height={40}
                  className='aspect-auto'
              />
          </button>
      </div>
    </div>
    <div className='flex flex-row pl-48 items-start'>
      <i className='font-quattrocento text-2xl -rotate-90'>MENU</i>
      <div className='flex flex-col font-lora text-6xl space-y-8'>
        <Link href={''}>Work</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </div>
    </div>
    <div className='flex flex-row items-center justify-between pt-4 px-32'>
          <div className="flex flex-row items-center justify-start space-x-4">
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/tiny-map.svg'}
                alt='map icon'
                width={20}
                height={10}
                className='aspect-auto'
              />
              <p>Nairobi, Kenya</p>
            </div>
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/call-icon.svg'}
                alt='icon'
                width={16}
                height={10}
                className='aspect-auto'
              />
              <p>+254 700 000 000</p>
            </div>
            <div className="flex flex-row items-center justify-center text-sm space-x-2">
              <Image 
                src={'/email-icon.svg'}
                alt='icon'
                width={20}
                height={10}
                className='aspect-auto'
              />
              <p>info@jsweb.com</p>
            </div>
          </div>
          <div className='flex flex-row items-center justify-end space-x-10'>
            <a href={'https://www.instagram.com'} target='_blank'>
              <button>
                <Image 
                  src={'/insta-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />
              </button>
            </a>
            <a href={'https://www.facebook.com'} target='_blank'>
              <button>
                <Image 
                  src={'/facebook-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />    
              </button>
            </a>
            <a href={'https://www.linkedin.com/'} target='_blank'>
              <button>
                <Image 
                  src={'/linked-in-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />    
              </button>
            </a>
            <a href={'https://www.github.com/'} target='_blank'>
              <button>
                <Image 
                  src={'/github-icon.svg'}
                  alt='icon'
                  width={20}
                  height={10}
                  className='aspect-auto'
                />
              </button>
            </a>
          </div>
        </div>
  </main>
  )
}
