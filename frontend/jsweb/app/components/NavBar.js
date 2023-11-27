'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NavBar({setShow}) {
    
  return (
    <div className='w-full py-4 absolute flex flex-row justify-between px-16 items-center text-white text-sm'>
    <Link href={''} className='px-2'>
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
        <Link href={''}>
            <button>
                <p>LET'S TALK</p>
            </button>
        </Link>
        <button onClick={e => setShow(false)}>
            <Image
                src={'/menu.svg'}
                alt='menu'
                width={32}
                height={40}
                className='aspect-auto'
            />
        </button>
    </div>
</div>
  )
}

export default NavBar