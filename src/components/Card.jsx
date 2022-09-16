import React from 'react'
import phoneCardImg from '../assets/card_phone.png'
import appleIcon from '../assets/apple-icon.svg'
import androidIcon from '../assets/android-icon.svg'

const Card = () => {
    return (
        <div className='relative xl:h-[1010px] h-[1120px] xl:w-[1081px] lg:w-[920px] w-[390px] mt-20 xl:bg-bgXlCard lg:bg-bgLgCard bg-bgSmCard bg-no-repeat'>
            {/* <img src={phoneCardImg} alt="/" /> */}

            <div className='xl:h-[1010px] h-[1120px]'>
                <div className='absolute xl:left-[600px] lg:left-[320px] xl:top-[330px] lg:top-[360px] top-[500px] xl:w-[390px] lg:w-[522px] w-[390px] xl:h-[591px] lg:h-[744px] h-[571px] bg-primeOrange rounded-2xl xl:px-12 lg:px-16 px-12 xl:pt-12 lg:pt-14 pt-12 text-bgColor'>
                    <h2 className='xl:text-[35px] lg:text-[45px] text-[40px] font-bold'>Premium EQ</h2>
                    <p className='xl:my-4 lg:my-6 my-4 xl:leading-8 lg:leading-9 xl:text-[18px] lg:text-2xl xl:w-[295px] lg:w-[393px] w-[262px]'>
                        Get expert-level control with a robust
                        equilizer, volume mixer, and spatial
                        audio. Take your listening experience
                        to a whole new level and access all
                        our incredible features!
                    </p>
                    <div className='flex items-center lg:ml-5 ml-3'>
                        <span className='xl:text-[50px] lg:text-[75px] text-[60px] font-heading font-bold'>$4 </span>
                        <span className='xl:text-lg lg:text-2xl pl-5'>/ month</span>
                    </div>
                    <button className='xl:w-[295px] lg:w-[390px] w-[300px] xl:h-[62px] lg:h-[85px] h-[65px] bg-primePurple xl:rounded-[15px] lg:rounded-[20px] rounded-xl xl:text-lg text-2xl font-bold flex justify-center items-center mt-8 mb-5'>
                        <img className='mr-2 mb-1' src={appleIcon} alt="/" />
                        iOS Download
                    </button>
                    <button className='xl:w-[295px] lg:w-[390px] w-[300px] xl:h-[62px] lg:h-[85px] h-[65px] bg-bgColor text-primePurple xl:rounded-[15px] lg:rounded-[20px] rounded-xl xl:text-lg text-2xl font-bold flex justify-center items-center'>
                        <img className='mr-2' src={androidIcon} alt="/" />
                        Android Download
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Card