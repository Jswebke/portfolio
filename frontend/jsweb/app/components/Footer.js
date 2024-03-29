import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-alt-bg xl:px-32 sm:px-16 px-6 flex flex-col py-28 space-y-6 justify-center text-alt-fg'>
        <p>Like what you see?</p>
        <Link href={'/contact#Form'}>
          <button className='flex flex-row space-x-3 items-center group'>
            <p className='font-medium font-poppins text-5xl py-3 border-b-4 border-alt-fg group-hover:mr-6 group-hover:text-[2.76rem] ease-in duration-200'>Say Hello</p>
            <Image
                  src={'/arrow-right-alt.svg'}
                  alt='right arrow'
                  width={36}
                  height={20}
                  className='aspect-auto stroke-blackz'
                  />
          </button>
        </Link>
        <div className='flex flex-col pt-4 items-start space-y-4
        md:flex-row md:items-center md:justify-between md:space-y-0 '>
          <div className="flex flex-col space-y-2 items-start md:flex-row md:items-center justify-start md:space-x-10">
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
              <p>+254 112 700 035</p>
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
          <div className='flex flex-row items-center justify-between w-3/4 md:w-fit md:justify-end md:space-x-10'>
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
          </div>
        </div>
      </footer>
  )
}

export default Footer