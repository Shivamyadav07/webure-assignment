import React from 'react'

export const ServicesSection2 = () => {
  return (
    <div className="w-[1440] h-[622px] pl-[135px] grid grid-cols-4">
        <div className='h-[273px] w-[273px] border-2 bg-[#3f0598] rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./design.png" alt="design" />
            <p className='mt-[20px] text-[#ffffff] text-[26px] font-semibold text-center'>Design</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./setting.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Front End Development</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./backend.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Back End Development</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./application.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Application Development</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./clouds.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Cloud Services</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./analytics.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Analytics</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./testing.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Q-A And Testing</p>
        </div>
        <div className='h-[273px] w-[273px] border-2 rounded-lg shadow-md'>
            <img className='mt-[40px] m-auto' src="./support.png" alt="design" />
            <p className='mt-[20px] text-[#040404] text-[26px] font-semibold text-center'>Back Office Support</p>
        </div>
    </div>
  )
}
