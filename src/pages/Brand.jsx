import React from 'react'
import img01 from '../images/brand/brandImage01.png'
import img02 from '../images/brand/brandImage02.png'

function Brand() {
    return (
        <div className='pt-44 container mx-auto' >
            <h1 className=' uppercase text-5xl font-semibold ' >
                O бренде
            </h1>

            <div className=' pt-8' >
                <div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2  py-28' >
                        <img className=' mx-auto lg:mx-0' src={img01} alt="img01" />
                        <div className=' p-16  ' >
                            <h1  className=' text-2xl font-semibold ' >
                                Идея для жещина
                            </h1>
                            <p className=' mt-16 tracking-widest ' >
                                Womazing была основана в 2010-ом и стала одной из самых успешных компаний нашей страны. Как и многие итальянские фирмы, Womazing остаётся семейной компанией, хотя ни один из членов семьи не является модельером. <br /> Мы действуем по успешной формуле, прибегая к услугам известных модельеров для создания своих коллекций. Этот метод был описан критиком моды Колином Макдауэллом как форма дизайнерского со-творчества, характерная для ряда итальянских prêt-a-porter компаний.
                            </p>
                        </div>
                    </div>
                    <div className=' grid grid-cols-1 lg:grid-cols-2  py-28' >
                        <div className=' p-16  order-2 md:order-1 ' >
                            <h1  className=' text-2xl font-semibold ' >
                            Магия в деталях
                            </h1>
                            <p className=' mt-16 tracking-widest ' >
                            Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей. <br />
                            Первый магазин Womazing был открыт в маленьком городке на севере страны в 2010-ом году. Первая коллекция состояла из двух пальто и костюма, которые были копиями парижских моделей.

Несмотря на то, что по образованию основательница была адвокатом, ее семья всегда была тесно связана с шитьём (прабабушка основательницы шила одежду для женщин, а мать основала профессиональную школу кроя и шитья). Стремление производить одежду для масс несло в себе большие перспективы, особенно в то время, когда высокая мода по-прежнему доминировала, а рынка качественного prêt-a-porter попросту не существовало. 
                            </p>
                        </div>
                        <img className=' mx-auto order-1 md:order-2 '  src={img02} alt="img01" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Brand