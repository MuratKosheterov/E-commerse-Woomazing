import React from 'react'
import bannerImage01 from '../images/banner/banner01.png'
import bannerImage02 from '../images/banner/banner02.png'
import bannerImage03 from '../images/banner/banner03.png'


function Banner() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 py-16 lg:p-0 '>
      <div className=' p-3 xl:p-5  flex flex-col items-end text-center justify-center    ' >
        <h1 className=' text-4xl md:text-5xl lg:text-6xl xl:text-7xl  text-center  font-medium tracking-wider  lg:text-start ' >
          Новые поступления
          <br /> в этом сезоне
        </h1>
        <p className='text-xl font-semibold py-16  max-w-[385px] text-end lg:mr-16 ' >
          Утонченные сочетания и бархатные   оттенки - вот то, что вы искали   в этом   сезоне. Время исследовать.
        </p>
      
      </div>
      <div className='  bg-[#F1EADC] relative h-screen p-10 ' >
        <img className=' absolute top-28    '  src={bannerImage01} alt="" />
        <img className=' absolute top-56 left-96 '  src={bannerImage02} alt="" />
        <img className=' absolute bottom-20 -left-16 '  src={bannerImage03} alt="" />
      </div>
    </div>
  )
}

export default Banner