import React from 'react'

export const WhyUs = () => {
    return (
        <div className='h-[592px] text-left w-[1440px] p-[20px] border-2 bg-[#282C4B] m-auto flex'>
            <div>
                <img src='./girl2.png' />
            </div>
            <div className='p-[40px]'>
                <p className='text-[#F17216] text-[16px] font-normal'>WHY CHOOS US</p>
                <p className='text-[#FFFFFF] text-[36px] font-bold w-[495px] mt-[40px] mb-[40px]'>Take on any challange of digital World</p>
                <div className='flex mt-[20px] gap-[15px]'>
                    <img src='./Checklist-Circle.png' />
                    <p className='text-[#CED1E6] text-[20px] font-normal'>Coorprate Finential Advisory</p>
                </div>
                <div className='flex mt-[20px] gap-[15px]'>
                    <img src='./Checklist-Circle.png' />
                    <p className='text-[#CED1E6] text-[20px] font-normal'>Development of Finential Model</p>
                </div>
                <div className='flex mt-[20px] gap-[15px]'>
                    <img src='./Checklist-Circle.png' />
                    <p className='text-[#CED1E6] text-[20px] font-normal'>Data Structuring</p>
                </div>
                <div>
                    <input className='text-[#FFFFFF] font-bold text-[20px] outline-0 mt-[50px] w-[360px] h-[65px] bg-[#282C4B] border-b-2' placeholder='Enter your email ID' />
                    <button className='text-[18px] font-bold text-[#FFFFFF] h-[68px] w-[210px] border border-[#ffffffcc] rounded-full bg-[#FF698D]'>Get Started</button>
                </div>

            </div>
        </div>
    )
}
