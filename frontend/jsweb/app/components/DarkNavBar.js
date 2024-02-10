'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const DarkNavBar = ({show, setShow}) => {
    return (
        <nav className='w-full py-1 flex flex-row justify-between z-50 px-8 items-center text-white text-sm bg-black'>
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
                    <p>LET'S TALK</p>
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
    )
}

export default DarkNavBar
