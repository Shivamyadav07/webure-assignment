import React from 'react'
import { Navbar } from './Navbar'
import { HeroContentSection } from './HeroContentSection'
import { HeroImageSection } from './HeroImageSection'
import { Partners } from './Partners'
import { Services } from './Services'
import { WhyUs } from './WhyUs'

export const Hero = () => {
    return (
        <div className="m-auto  w-[1440px] min-h-[780px] relative bg-[#FFFFFF]">
            <Navbar />
            <HeroContentSection />
            <Partners />
            <Services />
            <WhyUs />
            <img className='w-[1440px] h-[630px]' src='./page2.png' />
            <img className='w-[1440px] h-[400px]' src='./page1.png' />
        </div>
    )
}
