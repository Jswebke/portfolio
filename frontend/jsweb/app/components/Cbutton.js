import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './style.css'
// import '../about-us/style.css'
const Cbutton = ({text,link}) => {
  return (
    <>
              <div className='Button'>
              <Link href={link} className='button text-white hover:bg-white  hover:text-black hover:bg-opacity-100 ease-in duration-200 group ' target='_blank'>
              {text}
              <Image
              src={"/arrow-right-dark.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow-alt'
              />
              <Image
              src={"/arrow-right.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow'
              />
              </Link>
        </div>
    </>
  )
}

export default Cbutton
