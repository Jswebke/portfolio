'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const DarkNavBar = ({setShow}) => {
    return (
        <>
            <div className='w-full py-4 flex flex-row justify-between px-16 items-center text-alt-fg text-sm bg-alt-bg'>
                <Link href={'/'} className='px-2'>
                    <button>
                        <Image
                            src={"/Logo.svg"}
                            alt={'logo'}
                            width={80}
                            height={64}
                            className='aspect-auto'
                        />
                    </button>
                </Link>
                <div className="flex flex-row items-center space-x-12 text-white">
                    <Link href={''}>
                        <button>
                            <p>LET'S TALK</p>
                        </button>
                    </Link>
                    <button onClick={e => setShow(true)}>
                        <Image
                            src={'/dark-menu.svg'}
                            alt='menu'
                            width={32}
                            height={40}
                            className='aspect-auto'
                        />
                    </button>
                </div>
            </div>
        </>
    )
}

export default DarkNavBar
