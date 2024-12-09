import React from 'react'
import { home, home2 } from '../assets/images'

const Home = () => {
    return (
        <div className='h-full w-full absolute top-0 left-0 right-0 bottom-0 z-[-3] overflow-hidden'>
            <div className='h-full w-full bg-gradient-to-b relative z-[-2]'></div>
            <img className='absolute right-[-2vw] w-3/5 bottom-[-10vw] z-[-1]' src={home} alt='Home Background' />
            <div className="h-full w-10/12 absolute top-[8vw] left-1/2 transform -translate-x-1/2 flex flex-col z-[-2]">
                <h1 className='text-[7vw] text-primary drop-shadow-custom'>CONSTRUCTO</h1>
                <p className='text-[1.2vw] relative top-[-1.4vw] mt-[0.2vw]'>CONSTRUCTION COMPANY</p>
                <p className='w-2/5 mt-[1vw]'>At UrbanNest, we bring visions to life through innovative design and superior craftsmanship. Our projects are more than just buildings, they are the foundations of thriving communities where dreams take root families thrive, and new lives begin. Discover how we blend tradition with modernitu to create spaces where peole truly live.</p>
                <div className='border mt-[2.2vw] flex'>
                    <p className='text-white text-[1vw] uppercase font-semibold px-[1.2vw] py-[0.6vw] bg-primary rounded-lg'>Get Started</p>
                </div>
            </div>
        </div>
    )
}

export default Home