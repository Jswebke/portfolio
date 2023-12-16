import React from 'react'
import DarkNavBar from '../components/DarkNavBar'
import style from '../portfolio/style.css'
import Image from 'next/image'
import Footer from '../components/Footer'
const portfolio = () => {
  return (
    <>
      <DarkNavBar/>

      <div className='hero-text'>
        <h2>Portfolio Projects</h2>
        <p>We are good at building web apps that are use by millions of people and platforms that serve blossoming businesses.</p>
      </div>
      <div className='sites'>
        {/* ----------------site-wrapper-right-1---------------- */}
      <div className='site-wrapper'>
        <div className='site-mockup'>
          <Image 
            src={"/anon.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle'>
          <h3>Anon</h3>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Anon 
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>
    
    {/* ---------------------grilli-site-wrapper-left-2---------------- */}
      <div className='site-wrapper-left'>
        <div className='site-mockup-left'>
          <Image 
            src={"/gericht.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle-left'>
          <h2>Grilli</h2>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Grilli
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>
              {/* ----------------homeverse-site-wrapper-right-3---------------- */}
              <div className='site-wrapper'>
        <div className='site-mockup'>
          <Image 
            src={"/homeverse.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle'>
          <h3>Homeverse</h3>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Homeverse
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>
    {/* ---------------------grilli-site-wrapper-left-4---------------- */}
    <div className='site-wrapper-left'>
        <div className='site-mockup-left'>
          <Image 
            src={"/grilli.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle-left'>
          <h2>Gericht</h2>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Gericht
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>

      {/* ----------------yukio-site-wrapper-right-5---------------- */}
    <div className='site-wrapper'>
        <div className='site-mockup'>
          <Image 
            src={"/yukio.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle'>
          <h3>Yukio's Booking</h3>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Yukio's
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>
    {/* ---------------------sedo-site-wrapper-left-6---------------- */}
    <div className='site-wrapper-left' id='last-site'>
        <div className='site-mockup-left'>
          <Image 
            src={"/sedo.png"}
            width={500}
            height={500}
            className='mockup'

          />
        </div>
        <div className='site-rectangle-left'>
          <h2>Sedo Logistics Limited</h2>
          <p>Your online fashion haven, celebrates the essence of women with a curated collection, empowering choices, easy browsing, secure transactions and timely deliveries.</p>
          <button>
            Visit Sedo
            <Image 
            src={"/arrow-right-dark.svg"}
            width={20}
            height={20}
            className='btt'
            />
          </button>
        </div>
      </div>
      </div>
      <Footer/>
      
      

    </>
  )
}

export default portfolio
