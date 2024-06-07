import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Checkout() {


  const { data } = useSelector((state) => state.productReducer)
  const { total } = useSelector((state) => state.productReducer)


  return (
    <div className='pt-44 container mx-auto' >
      <h1 className=' uppercase text-5xl font-semibold ' >
        Оформление заказа
      </h1>
      <div className=' grid grid-cols-1 lg:grid-cols-2 gap-10' >

        <form action="" className=' py-10   ' >
          <h1 className=' text-2xl font-medium py-16' >
            Данные покупателья
          </h1>
          <div className=' border-b-2 max-w-80 mb-10 ' >
            <input className=' outline-none' type="text" placeholder="Имя" />
          </div>
          <div className=' border-b-2 max-w-80  mb-10 ' >
            <input className=' outline-none' type="email" placeholder="Email" />
          </div>
          <div className=' border-b-2 max-w-80  mb-10 ' >
            <input className=' outline-none' type="phone" placeholder="Телефон" />
          </div>
          <div className='border-b-2 max-w-80' >
            <textarea className=' outline-none' name="" id="" cols="40" rows="5"></textarea>
          </div>
        </form>
        <div className='  p-28' >
          <h2 className=' mb-16 text-2xl font-medium px-5' >
            Ваш заказ
          </h2>
          <div className=' max-w-80 ' >
            <ul>
              {
                data.map((item, index) => {
                  return (
                    <div>
                      <li className=' flex items-center justify-between p-5 ' >
                        <p className=' text-lg font-medium' >Товарь</p>
                        <p className=' text-lg font-medium' >Всего</p>
                      </li>
                      <li className=' flex items-center justify-between p-5' >
                        <p className=' text-lg font-medium' >{item.title}</p>
                        <p className=' text-lg font-medium' >${item.price}</p>
                      </li>
                      
                    </div>
                  )
                })
              }
              <li className=' flex items-center justify-between py-5 bg-yellow-200 px-5  ' >
                        <p className=' text-lg font-semibold' >Итого</p>
                        <p className=' text-lg font-semibold' >${total}</p>
                      </li>
              <li className=' flex flex-col  justify-between py-5  px-5  ' >
                <h3 className=' font-medium text-2xl py-5 mt-16  ' >
                  Способы оплаты
                </h3>
                <Link to='/succecc' >
                  <button className=' bg-womazing-blue px-5 py-3 text-white hover:scale-105 duration-300 ease-in ' >Разместить заказ</button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout