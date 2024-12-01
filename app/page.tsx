import React from 'react'
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Herosection from './components/Herosection/Herosection';
import { Roboto } from 'next/font/google';
import Image from 'next/image';
import Hero from "./components/Hero/Hero";
import Showcase from "./components/Showcase/Showcasesection";
import Herotest from "./components/HeroTest/HeroTestimonial";
import HeroCategory from './components/HeroCat/HeroCategory';
import Footer from './components/Footer/Footer';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Herosection />

      <div className={`${roboto.className} flex flex-col sm:flex-row bg-[#F7F7F7] w-[100%] h-[140px] overflow-hidden`}>
        <div className={`${roboto.className} flex sm:w-[30%] mt-10 text-2xl font-extrabold pl-1`}>
          <h1>Trusted by 2000+ companies worldwide.</h1>
        </div>
        <div className='flex  sm:h-[56px] sm:w-[900px]  sm:mt-10 sm:gap-8 sm:ml-20 overflow-hidden'>
          <Image src="/logo ispum.png" alt='Logo1' width={124} height={39}  ></Image>
          <Image src="/Logo.png" alt='Logo2' width={124} height={39}  ></Image>
          <Image src="/logo ipsum.png" alt='Logo3' width={124} height={39}  ></Image>
          <Image src="/Logo5.png" alt='Logo4' width={124} height={39}  ></Image>
          <Image src="/Logo 5.png" alt='Logo5' width={124} height={39}  ></Image>
          <Image src="/Logo6.png" alt='Logo6' width={124} height={39}  ></Image>

        </div>
      </div>


      <HeroCategory />

      <div className='w-[90%]  flex flex-col  items-center m-auto'>
        <div className='w-[100%]'>
          <h1 className={`${roboto.className} text-2xl md:text-5xl font-bold text-center`}> Our Achievements</h1>
          <p className={`${roboto.className}  text-center  pt-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 py-[60px] gap-x-20 md:gap-x-32 gap-y-12 lg:gap-52 items-center justify-center'>
          <div>
            <h1 className='text-4xl font-bold'>+200</h1>
            <p className=''>Courses</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>50K</h1>
            <p className=''>Mentors</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>370k</h1>
            <p className=''>Students</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>100+</h1>
            <p className=''>Recognition</p>
          </div>
        </div>

      </div>



      <div className='w-[90%]  sm:flex flex-col  items-center m-auto hidden mt-52'>
        <div className='w-[100%]'>
          <h1 className={`${roboto.className} text-2xl md:text-5xl font-bold text-center`}> Our Achievements</h1>
          <p className={`${roboto.className}  text-center  pt-10`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
        </div>
        <div className='grid grid-cols-2 lg:grid-cols-4 py-[60px] gap-x-20 md:gap-x-32 gap-y-12 lg:gap-52 items-center justify-center'>
          <div>
            <h1 className='text-4xl font-bold'>+200</h1>
            <p className=''>Courses</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>50K</h1>
            <p className=''>Mentors</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>370k</h1>
            <p className=''>Students</p>
          </div>
          <div>
            <h1 className='text-4xl font-bold'>100+</h1>
            <p className=''>Recognition</p>
          </div>
        </div>

      </div>




      <div className=' my-[150px]'>
        <div className='w-[100%] h-[88px]'>
          <h1 className={`${roboto.className} text-5xl font-bold text-center`}> Courses</h1>
          <p className={`${roboto.className}  text-center pt-10`}>Your Ultimate Guide to learning</p>
          <Hero />
          <Showcase />
          <Herotest />
          <Footer />
        </div>
      </div>


    </div>
  )
}

export default Home