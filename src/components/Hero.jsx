import React from 'react'

const Hero = () => {
    const style = {
        heading: `2xl:mr-[200px]
            xl:mr-[0px] xl:text-[85px]
            lg:mr-[300px] lg:text-[80px] lg:leading-[94px]
            text-[40px] font-bold pr-5 leading-[47px] mb-7`,
        paragraph: `xl:text-xl
            lg:text-2xl lg:mr-[212px] lg:mt-10
            leading-6 pr-[20px]`
    }
    return (
        <div>
            <h2 className={style.heading}>We make your music sound extraordinary.</h2>
            <p className={style.paragraph}>
                A system audio equalizer specifically
                designed for Android and iOS. Freely tune the
                way your music sounds with a professional
                grade parametric EQ & volume mixer. Control
                bass, mids, treble, gain control, reverb, and
                more!
            </p>
        </div>
    )
}

export default Hero