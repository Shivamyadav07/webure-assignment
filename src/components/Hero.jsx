import React from 'react'
import { Navbar } from './Navbar'
import { HeroContentSection } from './HeroContentSection'
import { HeroImageSection } from './HeroImageSection'
import { Partners } from './Partners'

export const Hero = () => {
    return (
        <div className="m-auto max-w-[1440px] min-h-[780px] bg-[#FFFFFF]">
            <Navbar />
            <HeroContentSection />
            <Partners />
        </div>
    )
}
