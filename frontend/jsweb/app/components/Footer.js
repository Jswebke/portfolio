import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-alt-bg px-32 flex flex-col py-28 space-y-6 justify-center'>
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
  )
}

export default Footer