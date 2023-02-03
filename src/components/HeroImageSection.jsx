import React from 'react'

export const HeroImageSection = () => {
    return (
        <div className="h-[625px]  w-[596px] absolute z-{-20} right-0 ">
            <img className='absolute left-[25%]' src='./orange.png'/>
            <img className='absolute bottom-0 left-0 ' src='./blue.png'/>
            <img className='absolute bottom-[60px] left-[15%]' src='./girl.png'/>
            <img className='absolute right-0 bottom-[-70px]' src='./review.png'/>
        </div>
    )
}
