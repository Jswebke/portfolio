import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './style.css'
// import '../about-us/style.css'
import {motion} from 'framer-motion'
// import '../about-us/style.css'
const Cbutton = ({text,link}) => {
  const tapvariant = {
    whileTap:{scale:1.2}
  }
  return (
    <>
              <div className='' variants={tapvariant}>
              <Link href={link} className='button font-poppinslight border-white text-white hover:bg-white  hover:text-black font-bold hover:bg-opacity-100 ease-in duration-200 group ' target='_blank'
              variants={tapvariant}
              >
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
