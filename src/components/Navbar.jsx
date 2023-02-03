import React from 'react'

export const Navbar = () => {
  return (
    <div className="sticky top-0 bg-[#FFFFFF] font-Ubuntu items-center max-w-[1170px] h-[55px] mx-[135px] my-[50px] flex justify-between">
        <p className="text-[26px] italic font-bold text-rose-600">Webure Technologies</p>
        <div className="flex gap-5 text-[16px] font-normal text-[#747582]">
            <p>About Us</p>
            <p>Services</p>
            <p>Careers</p>
            <p>ROI Stories</p>
            <p>Blog</p>
            <p>Contact Us</p>
        </div>
        <button className="h-[55px] w-[143px] border rounded-full font-bold text-[14px]  border-[#894dea7f]">Let's Talk</button>
    </div>
  )
}
