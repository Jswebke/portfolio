import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavBar from './NavBar'

function NavBarPage({show, setShow}) {
  return (
    <main className='flex flex-col bg-alt-bg w-screen h-screen text-white justify-between pb-32'>
    <NavBar setShow={setShow} show={show} />
    <div className='flex flex-row items-start justify-center pt-36
    md:pl-48 md:justify-normal'>
      <i className='font-quattrocento text-2xl -rotate-90'>MENU</i>
      <div className='flex flex-col font-lora text-6xl space-y-8'>
        <Link href={''}>Work</Link>
        <Link href={''}>About</Link>
        <Link href={''}>Contact</Link>
      </div>
    </div>
    <div className='flex flex-col items-center justify-between pt-4 space-y-4
    md:flex-row md:space-y-0 md:px-12
    lg:px-28
    xl:px-32 '>
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

export default NavBarPage