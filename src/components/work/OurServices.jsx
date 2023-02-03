import React from 'react'

export const OurServices = () => {
    return (
        <div className='w-[1440px] pl-[135px] h-[358px]'>
            <img className='absolute left-[525px] z-[0]' src="./circle.png" alt="circle" />
            <p className=' relative z-[10] text-[#000000] text-[70px] font-medium '>What We Do</p>
            <div className='flex mt-[50px] gap-[100px]'>
                <p className='text-[#000000] text-[36px] font-semibold'>Our Services</p>
                <p className='text-[#A9A9A9] text-[23px] font-medium text-left '>
                    It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia,
                    looked up one of the more obscure Latin words, consectetur,
                    from a Lorem Ipsum passage, and going through the cites of
                    the word in classical literature
                </p>
            </div>
        </div>
    )
}
