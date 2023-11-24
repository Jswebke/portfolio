import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/NavBar'

export default function Home() {
  return (
    <main className="flex flex-col bg-main-bg font-lato">
      <NavBar />
      <section className='px-32 bg-black flex flex-col' id='hero'>
        <div className="h-screen flex flex-col justify-center text-white w-3/4 space-y-6">
          <h1 className='font-quattrocento text-8xl leading-[7rem]'>Creating Real Business Value.</h1>
          <p className='w-1/2'>J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises eager to establish an online presence and monetize traffic from diverse channels.</p>
          <Link href={""} className='flex flex-row space-x-2 text-sm'>
            <p>GET TO KNOW US</p>
            <Image
            src={"/arrow-right.svg"}
            alt='arrow'
            width={20}
            height={20}
            className='aspect-auto'
            />
          </Link>
        </div>
      </section>


      <section className='flex flex-col h-fit w-screen px-32 py-12 items-center space-y-24'>
        <div className='flex flex-col space-y-2 items-center'>
          <h2 className='font-quattrocento font-medium text-6xl '>Featured Work</h2>
          <p>Explore some of our latest website projects</p>
        </div>
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-1.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Anon</h3>
              <p className='text-2xl'>Ecommerce website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
                  <p>Visit Anon</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-2.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Homeverse</h3>
              <p className='text-2xl'>Real Estate website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
                  <p>Visit Anon</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
        <div className='flex flex-row items-center justify-between'>
            <Image
              src={"/feat-3.png"}
              alt='image'
              width={500}
              height={300}
              className='aspect-auto'
              />
            <div className="flex flex-col space-y-4 w-2/4">
              <h3 className='text-3xl font-quattrocento font-semibold'>Grilli</h3>
              <p className='text-2xl'>Restuarant website</p>
              <p>This is a template text that is just meant to be used as a place holder text . J’s Web is a team of creatives and seasoned sales experts dedicated to deliver tangible business benefits to enterprises.</p>
              <Link href={''}>
                <button className='flex flex-row space-x-2 items-center'>
                  <p>Visit Anon</p>
                  <Image 
                    src={'arrow-right-dark.svg'}
                    alt='right arrow'
                    width={20}
                    height={20}
                    className='aspect-auto stroke-black'
                    />
                </button>
              </Link>
            </div>
          </div>
      </section>
    </main>
  )
}
