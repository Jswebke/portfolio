'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar({show, setShow}) {
    
  return show ? (
    <nav className='w-full py-4 absolute flex flex-row justify-between z-50 px-16 items-center text-white text-sm'>
    <Link href={'/'} className='px-2'>
        <button>
            <Image
                src={"/logo.svg"}
                alt={'logo'}
                width={80}
                height={64}
                className='aspect-auto'
            
            />
        </button>
    </Link>
    <div className="flex flex-row items-center space-x-12">
        <Link href={'/contact'} className='hidden md:block'>
            <button>
                <i>LET'S TALK</i>
            </button>
        </Link>
        <button onClick={e => setShow(!show)}>
            <Image
                src={'/menu.svg'}
                alt='menu'
                width={32}
                height={40}
                className='aspect-auto'
            />
        </button>
    </div>
</nav>
  ) : (
    <nav className='w-full py-4 absolute flex flex-row justify-between z-50 px-16 items-center text-white text-sm'>
    <Link href={'/'} className='px-2'>
        <button>
            <Image
                src={"/logo.svg"}
                alt={'logo'}
                width={80}
                height={64}
                className='aspect-auto'
            
            />
        </button>
    </Link>
    <div className="flex flex-row items-center space-x-12">
        <Link href={'/contact'} className='hidden md:block'>
            <button>
                <i>LET'S TALK</i>
            </button>
        </Link>
        <button onClick={e => setShow(!show)}>
            <Image
                src={'/close.svg'}
                alt='menu'
                width={32}
                height={40}
                className='aspect-auto'
            />
        </button>
    </div>
</nav>
  )
}

export default NavBar