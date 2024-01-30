import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'
import Reveal from './Reveal'

function NavBarPage({show, setShow, page}) {
  return (
    <main className='flex flex-col bg-alt-bg w-screen h-screen text-white justify-between pb-32'>
    <Reveal>
      <NavBar setShow={setShow} show={show} />
    </Reveal>
    <Reveal delay={0.2}>
      <div className='flex flex-row items-start justify-center pt-36
      md:pl-48 md:justify-normal'>
          <i className='font-quattrocento text-2xl -rotate-90'>MENU</i>
        <div className='flex flex-col font-lora text-6xl space-y-8'>
          <Reveal delay={0.4}>
            <Link href={'/'} onClick={() => {
              if (page === "Home"){
                setShow(true)
              }
            }}>Home</Link>
          </Reveal>
          <Reveal delay={0.4}>
            <Link href={'/portfolio'} onClick={() => {
              if (page === "Portfolio"){
                setShow(!show)
              }
            }}>Work</Link>
          </Reveal>
          <Reveal delay={0.6}>
            <Link href={'/about-us'} onClick={() => {
              if (page === "About"){
                setShow(!show)
              }
            }}>About</Link>
          </Reveal>
          <Reveal delay={0.8}>
            <Link href={'/contact'} onClick={() => {
              if (page === "Contact"){
                setShow(!show)
              }
            }}>Contact</Link>
          </Reveal>
        </div>
      </div>
    </Reveal>
    <Reveal delay={1}>
      <div className='flex flex-col items-center justify-between pt-4 space-y-4
      md:flex-row md:space-y-0 md:px-12
      lg:px-28
      xl:px-32 '>
            <div className="flex flex-col px-16 space-y-4 md:px-0 md:space-y-0 self-start md:self-auto md:flex-row md:items-center md:justify-start md:space-x-4">
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
              <Reveal delay={1.2}>
                <div className="flex flex-row items-center justify-center text-sm space-x-2">
                  <Image 
                    src={'/call-icon.svg'}
                    alt='icon'
                    width={16}
                    height={10}
                    className='aspect-auto ml-2'
                  />
                  <p>+254 112 700 035</p>
                </div>
              </Reveal>
              <Reveal delay={1.4}>
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
              </Reveal>
            </div>
            <div className='flex flex-row items-center justify-between px-16 w-full md:px-0 md:w-fit md:justify-end md:space-x-10'>
              <Reveal delay={1.4}>
                <a href={'https://www.instagram.com/jswebke/'} target='_blank'>
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
              </Reveal>
              <Reveal delay={1.3}>
                <a href={'https://www.facebook.com/profile.php?id=61555893321375'} target='_blank'>
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
              </Reveal>
              <Reveal delay={1.2}>
                <a href={'https://www.linkedin.com/company/101399999/admin/feed/posts/'} target='_blank'>
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
              </Reveal>
              <Reveal>
                <a href={'https://github.com/Jswebke'} target='_blank'>
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
              </Reveal>
            </div>
          </div>
    </Reveal>
  </main>
  )
}

export default NavBarPage