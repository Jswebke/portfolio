import React from 'react'
import Image from 'next/image'
import logo from '../Images/JS-web-logo.png'
const Navbar = () => {
  return (
            // creating nav bar
            <nav>
            {/* logo */}
            <div className='logo'>
              <Image src = {logo}width={70} height={70}/>
            </div>

            <div className='right-group'>
              <h3 className='letsTalk'>LET'S TALK</h3>
              {/* menu */}
              <div className='menu'>
                <svg className="dashes"xmlns="http://www.w3.org/2000/svg" width="25" height="19" viewBox="0 0 25 19" fill="none">
                <path d="M0.631409 0.954041H24.7114V3.89872H0.631409V0.954041ZM6.65141 8.31573H24.7114V11.2604H6.65141V8.31573ZM14.1764 15.6774H24.7114V18.6221H14.1764V15.6774Z" fill="black"/>
                </svg>
              </div>
            </div>
          </nav>
  )
}

export default Navbar
