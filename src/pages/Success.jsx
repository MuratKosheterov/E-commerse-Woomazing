import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Success() {
    return (
        <div className='pt-44 container mx-auto'  >
            <h1 className=' uppercase text-5xl font-semibold ' >
                Заказ получен
            </h1>
            <div className='pt-44 grid grid-cols-1 lg:grid-cols-2 gap-10 py-28  ' >
                <div className=' flex items-center gap-x-10 ' >
                    <div className='border-womazing-blue border-2 inline-block p-1 rounded-lg ' >
                        <FaCheck className=' text-womazing-blue text-5xl  border-womazing-blue' />
                    </div>
                    <div className=' gap-y-16' >
                        <p className=' text-2xl font-medium' >Заказ успешно оформлен</p>
                        <p className=' text-base font-medium ' >Мы свяжемся с вами в ближайшее время!</p>
                    </div>
                </div>
                <Link to='/' >
                    <button className=' border border-womazing-blue px-5 py-3 text-womazing-blue hover:scale-110 ease-out duration-500  ' >Перейти на главную</button>
                </Link>
            </div>
        </div>
    )
}

export default Success