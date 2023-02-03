import React from 'react'

export const Services = () => {
    return (
        <div className='border-2 py-[50px] px-[135px] max-w-[1440px] h-[441px]'>
            <p className='text-left  text-[#F17216] text-[16px] font-normal'>Services</p>
            <div className='flex'>
                <div className='h-[250px] w-[335px] text-left'>
                    <p className='text-[36px] font-bold my-[10px]'>Our Capabilities</p>
                    <p className='text-[20px] font-normal text-[#747582] '>
                        We will bring the breath or oue experience and
                        industry knowladge to help in your success
                    </p>
                </div>
                <div className='ml-[200px] h-[250px] w-[287px] text-left'>
                    <img src='./shop.png' />
                    <p className='text-[#14183E] font-medium text-[20px] mt-[20px]'>Consult</p>
                    <p className='text-[15px] font-normal text-[#747582] mt-[20px]' >
                        Leverage agile framework to provide a robust high level
                        synopsys overviews
                    </p>
                </div>
                <div className='h-[250px] w-[287px] text-left'>
                    <img src='./cards.png' />
                    <p className='text-[#14183E] font-medium text-[20px] mt-[20px]'>Create</p>
                    <p className='text-[15px] font-normal text-[#747582] mt-[20px]'>
                        Bring to the table survival strategies to ensure proactive
                        domination
                    </p>
                </div>
                <div className='h-[250px] w-[287px] text-left'>
                    <img src='./favorite-chart.png' />
                    <p className='text-[#14183E] font-medium text-[20px] mt-[20px]'>Collaborate</p>
                    <p className='text-[15px] font-normal text-[#747582] mt-[20px]'>
                        Grow the holistic world view of disruptive
                        innovation workspace
                    </p>
                </div>
            </div>
        </div>
    )
}
