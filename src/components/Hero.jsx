import React from 'react'
import { Navbar } from './Navbar'
import { HeroContentSection } from './HeroContentSection'
import { HeroImageSection } from './HeroImageSection'

export const Hero = () => {
    return (
        <div className="m-auto max-w-[1440px] min-h-[780px] bg-[#FFFFFF]">
            <Navbar />
            <HeroContentSection />
            {/* <HeroImageSection /> */}
        </div>
    )
}
