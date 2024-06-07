import React from 'react'
import { products, waitings } from '../data/data'
import { useDispatch, useSelector } from 'react-redux'
import { setShowMore } from '../redux/slices/productSlice'
import { Link } from 'react-router-dom';

function Products() {

    const dispatch = useDispatch()
    const { showMore } = useSelector((state) => state.productReducer)
    const lenght = products.length

    return (
        <div className=' container mx-auto' >
            <div>

                <h1 className=' text-4xl  font-medium py-16 ' >
                    Новая коллекция
                </h1>
                <div className=' grid grid-cols-2 lg:grid-cols-3 gap-5 ' >
                    {
                        products.slice(0, showMore).map((product) => {
                            return (
                                <Link key={product.id} to={`/${product.id}`} >
                                    <div  className=' mx-auto text-start mb-16 hover:scale-110 duration-300 ease-out cursor-pointer ' >
                                        <img src={product.image} alt="" />
                                        <h3 className=' py-2  font-medium' >
                                            {product.title}
                                        </h3>
                                        <p className=' text-gray-500' >
                                            $  {product.price}
                                        </p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                <div className='  flex items-center justify-center ' >
                    <button onClick={() => dispatch(setShowMore(products.length))} className=' px-5 py-3 border border-womazing-blue hover:scale-105 duration-500 ease-out '  >Еще товаров</button>
                </div>
            </div>
            <div>
                <h1 className=' text-4xl  font-medium py-16 ' >
                    Новая коллекция
                </h1>
                <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mx-auto gap-20 ' >
                    {
                        waitings.map((item, index) => {
                            return (
                                <div key={index} className=' flex flex-col  items-start justify-between ' >
                                    <img src={item.icon} alt="" />
                                    <h3 className=' py-5  font-medium text-2xl   ' >
                                        {item.name}
                                    </h3>
                                    <p className=' text-gray-500 text-lg font-medium   ' >
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Products