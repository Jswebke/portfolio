import React from 'react'
import './style.css'
import Link from 'next/link'
import Image from 'next/image'
import image1 from '../Images/Image.png'
const aboutUs = () => {
  return (
    <>
    <div className='heroText-wrapper'>
     <h2>We believe in technology's<br/>transformative power, driving digital<br/>growth for our clients.</h2>
     <div className='CTA-btt'>
        <button>
          <Link href={""} className='link'>OUR COMPANY PROFILE</Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4.16666 10H15.8333" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="black" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>

     </div>
    </div>
    < Image className='two-men-image' src={image1} width={0} height={0}/>
    </>
    )
}

export default aboutUs
