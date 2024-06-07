import React from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/data'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/productSlice'


function Review() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const product = products.find((item) => {
        return item.id === parseInt(id);
    });

    return (
        <div className='pt-44 container mx-auto' >
            <h1 className=' uppercase text-5xl font-semibold ' >
                Магазин
            </h1>
            <section className="pt-8 bg-white md:pt-16 dark:bg-gray-900 antialiased">
                <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
                        <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
                            <img className="w-full dark:hidden" src={product.image} alt />
                        </div>
                        <div className="mt-6 sm:mt-8 lg:mt-0">
                            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">
                                {product.title}
                            </h1>
                            <div className="mt-4 sm:items-center sm:gap-4 sm:flex">
                                <p className="text-2xl font-extrabold text-gray-900 sm:text-3xl dark:text-white">
                                    $ {(product.price).toFixed(2)}
                                </p>
                                
                            </div>
                            <div className="mt-6 sm:gap-4 sm:items-center sm:flex sm:mt-8">
                                
                                <button onClick={()=> dispatch(addToCart(product))} className='  border rounded-md px-5 py-2 hover:scale-110 duration-300 ease-out' >Покупать</button>
                            </div>
                            <hr className="my-6 md:my-8 border-gray-200 dark:border-gray-800" />
                            <p className="mb-6 text-gray-500 dark:text-gray-400">
                                Studio quality three mic array for crystal clear calls and voice
                                recordings. Six-speaker sound system for a remarkably robust and
                                high-quality audio experience. Up to 256GB of ultrafast SSD storage.
                            </p>
                            <p className="text-gray-500 dark:text-gray-400">
                                Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
                                Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
                                Magic Keyboard or Magic Keyboard with Touch ID.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default Review