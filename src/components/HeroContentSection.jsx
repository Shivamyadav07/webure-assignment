import React from 'react'
import { HeroImageSection } from './HeroImageSection'

export const HeroContentSection = () => {
    return (
        <div className='flex relative z-{0}'>
            <div className="ml-[135px] mt-[50px] h-[481px] w-[646px]">
                <div className='h-[30px] w-[359px] flex'>
                    <img src='./verify.png' />
                    <p className="font-normal text-[16px] text-[#F17216]">Best Business Platform - World Record 2021</p>
                </div>
                <p className="text-[#282C4B] text-[58px] font-bold text-left">Reach Your Business Goal In Record Time</p>
                <p className="text-[#747582] text-[20px] font-normal text-left my-[25px]">
                    Support small Business and join the nationwide movement
                    to encourage commercial support for the millians of
                    minority owned businesses helping world economy.
                </p>
                <div className='flex justify-between my-[70px]'>
                    <button className='text-[18px] font-bold text-[#FFFFFF] h-[68px] w-[210px] border border-[#ffffffcc] rounded-full bg-[#FF698D]'>Get Started</button>
                    <div className='flex items-center'>
                        <img className='h-[24px] w-[24px]' src='./video-circle.png' />
                        <p className='text-[18px] font-medium mx-[4px] '>Best Business Platform - World Record 2021</p>
                    </div>
                </div>
            </div>
            <HeroImageSection />
        </div>
    )
}
