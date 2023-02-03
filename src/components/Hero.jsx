import React from 'react'
import { Navbar } from './Navbar'
import { HeroContentSection } from './HeroContentSection'

export const Hero = () => {
    return (
        <div className="m-auto border-2 border-black max-w-[1440px] min-h-[780px] bg-[#FFFFFF]">
            <Navbar />
            <HeroContentSection />
        </div>
    )
}
