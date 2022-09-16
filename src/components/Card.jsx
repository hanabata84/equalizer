import React from 'react'
import appleIcon from '../assets/apple-icon.svg'
import androidIcon from '../assets/android-icon.svg'

const Card = () => {
    const style = {
        mainCont: `xl:h-[1010px] xl:w-[1081px] xl:bg-bgXlCard
            lg:w-[920px] lg:bg-bgLgCard
            relative h-[1120px] w-[390px] bg-bgSmCard bg-no-repeat mt-20`,
        cont: `xl:h-[1010px] h-[1120px]`,
        card: `xl:h-[591px] xl:w-[390px] xl:left-[600px] xl:top-[330px] xl:px-12 xl:pt-12
            lg:h-[744px] lg:w-[522px] lg:left-[320px] lg:top-[360px] lg:px-16 lg:pt-14
            absolute h-[571px] w-[390px] top-[500px] bg-primeOrange rounded-2xl px-12 pt-12 text-bgColor`,
        heading: `xl:text-[35px] lg:text-[45px] text-[40px] font-bold`,
        text: `xl:w-[295px] xl:my-4 xl:leading-8 xl:text-[18px]
            lg:my-6 lg:leading-9 lg:text-2xl lg:w-[393px]
            w-[262px] my-4`,
        priceCont: `lg:ml-5 flex items-center ml-3`,
        priceText: `xl:text-[50px] lg:text-[75px] text-[60px] font-heading font-bold`,
        monthText: `xl:text-lg lg:text-2xl pl-5`,
        button: `xl:h-[62px] xl:w-[295px] xl:rounded-[15px] xl:text-lg
            lg:h-[85px] lg:w-[390px] lg:rounded-[20px]
            h-[65px] w-[300px] flex justify-center items-center rounded-xl text-2xl font-bold`,
        ios: ` bg-primePurple mt-8 mb-5`,
        android: `bg-bgColor text-primePurple`
    }
    return (
        <div className={style.mainCont}>
            <div className={style.cont}>
                <div className={style.card}>
                    <h2 className={style.heading}>Premium EQ</h2>
                    <p className={style.text}>
                        Get expert-level control with a robust
                        equilizer, volume mixer, and spatial
                        audio. Take your listening experience
                        to a whole new level and access all
                        our incredible features!
                    </p>
                    <div className={style.priceCont}>
                        <span className={style.priceText}>$4 </span>
                        <span className={style.monthText}>/ month</span>
                    </div>
                    <button className={`${style.button} ${style.ios}`}>
                        <img className='mr-2 mb-1' src={appleIcon} alt="/" />
                        iOS Download
                    </button>
                    <button className={`${style.button} ${style.android}`}>
                        <img className='mr-2' src={androidIcon} alt="/" />
                        Android Download
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card