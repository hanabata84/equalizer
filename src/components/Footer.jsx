import React from 'react'
import fbIcon from '../assets/facebook.svg'
import iGIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'

const Footer = () => {
    return (
        <div className='xl:flex xl:w-[1081px] xl:items-center lg:w-[920px] mx-5 xl:py-[50px] lg:py-[120px] py-5'>
            <h2 className="xl:mr-[176px] font-heading xl:pb-6 lg:pb-12 xl:text-4xl lg:text-5xl text-3xl font-bold">equalizer</h2>
            <div className='lg:flex lg:items-center lg:justify-between'>
                <p className='xl:w-[367px] lg:w-[540px] xl:mr-[223px] lg:mr-[0px] lg:mb-[0px] lg:mt-0 xl:text-[18px] lg:text-2xl mt-8 mb-[100px] mr-[60px]'>
                    All rights reserved &copy; Equalizer 2021
                    Have any problems? Contact us via social
                    media or email us at <span className='font-bold'>equalizer@example.com</span>
                </p>
                <div className='flex justify-between lg:h-[33px] lg:w-[150px] w-[100px]'>
                    <img src={fbIcon} alt="/" />
                    <img src={iGIcon} alt="/" />
                    <img src={twitterIcon} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Footer