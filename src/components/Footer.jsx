import React from 'react'
import fbIcon from '../assets/facebook.svg'
import iGIcon from '../assets/instagram.svg'
import twitterIcon from '../assets/twitter.svg'

const Footer = () => {
    const style = {
        cont: `xl:flex xl:w-[1081px] xl:items-center xl:py-[50px]
            lg:w-[920px] lg:py-[120px]
            mx-5 py-5`,
        heading: `xl:mr-[176px] xl:pb-6 xl:text-4xl
            lg:pb-12 lg:text-5xl
            font-heading text-3xl font-bold`,
        largeCont: `lg:flex lg:items-center lg:justify-between`,
        text: `xl:w-[367px] xl:mr-[223px] xl:text-[18px]
            lg:w-[540px] lg:mr-[0px] lg:mb-[0px] lg:mt-0 lg:text-2xl
            mt-8 mb-[100px] mr-[60px]`,
        socialCont: `flex justify-between lg:h-[33px] lg:w-[150px] w-[100px]`
    }
    return (
        <div className={style.cont}>
            <h2 className={style.heading}>equalizer</h2>
            <div className={style.largeCont}>
                <p className={style.text}>
                    All rights reserved &copy; Equalizer 2021
                    Have any problems? Contact us via social
                    media or email us at <span className='font-bold'>equalizer@example.com</span>
                </p>
                <div className={style.socialCont}>
                    <img src={fbIcon} alt="/" />
                    <img src={iGIcon} alt="/" />
                    <img src={twitterIcon} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default Footer