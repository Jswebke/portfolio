import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import '../globals.css'
import '../about-us/style.css'
const Cbutton = ({text}) => {
  return (
    <>
              <div className='Button'>
              <Link href={""} className='button hover:bg-black hover:text-white hover:bg-opacity-100 ease-in duration-200 group '>
              {text}
              <Image
              src={"/arrow-right-dark.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow'
              />
              <Image
              src={"/arrow-right.svg"}
              alt='arrow'
              width={20}
              height={20}
              className='aspect-auto arrow-alt'
              />
              </Link>
        </div>
    </>
  )
}

export default Cbutton
