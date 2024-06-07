import React from 'react'

function Contacts() {
  return (
    <div className='pt-44 container mx-auto' >
      <h1 className=' uppercase text-5xl font-semibold ' >
        Контакты
      </h1>
      <div>

        <div className=' w-full py-20' >
          <iframe className=' w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d94174.2187290719!2d59.5214294445251!3d42.4714725633017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41dd9a36ea33d7cf%3A0x8454c68babd0b936!2z0J3Rg9C60YPRgSwg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrQsNGA0LDQutCw0LvQv9Cw0LrRgdGC0LDQvSwg0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1717664162285!5m2!1sru!2s" width={600} height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>

        <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-16 mx-auto px-10 ' >
          <div className=' py-3' >
            <p className=' text-lg font-medium ' >
              Телефон
            </p>
            <p className=' text-xl font-medium' >
              +7 (495) 823-54-12
            </p>
          </div>
          <div className=' py-3' > <p className=' text-lg font-medium ' >
            E-mail
          </p>
            <p className=' text-xl font-medium' >
              info@sitename.com
            </p></div>
          <div className=' py-3' > <p className=' text-lg font-medium ' >
            Адрес
          </p>
            <p className=' text-xl font-medium' >
              г. Москва, 3-я улица Строителей, 25
            </p></div>
        </div  >

        <form action="" className=' py-10  ' >
          <h1 className=' text-2xl font-medium py-16' >
            Напишите нам
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

          <button  className=' border-2 bg-womazing-blue text-white px-10 py-5 mt-10 hover:scale-110 duration-500 ease-out '  >Отправить</button>

        </form>

      </div>
    </div>
  )
}

export default Contacts