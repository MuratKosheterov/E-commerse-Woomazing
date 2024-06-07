import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MdClose } from "react-icons/md";
import { decreament, increament, removeFromCart,  } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';



function Cart() {

    const dispatch = useDispatch()
    const { data } = useSelector((state) => state.productReducer)
    const { total } = useSelector((state) => state.productReducer)
    const tax = total * 0.12;

    return (
        <div className='pt-44 container mx-auto' >
            <h1 className=' uppercase text-5xl font-semibold ' >
                Корзина
            </h1>
            <div className="font-sans">
                <div className="grid lg:grid-cols-3 gap-4 max-lg:max-w-3xl mx-auto py-20 ">
                    <div className="lg:col-span-2 bg-white divide-y divide-gray-600 px-4   ">
                        {
                            data.map((item) => {
                                return (
                                    <div key={item.id}  className="grid md:grid-cols-4 items-center gap-4 py-4">
                                        <div className="col-span-2 flex items-center gap-4">
                                            <div className="w-32 h-32 shrink-0">
                                                <img src={item.image} alt='' className="w-full h-full object-contain" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-800">{item.title}</h3>
                                                <h6 className="text-sm text-gray-600 mt-1">Color: <span className="ml-2 font-semibold">Black</span></h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <button onClick={()=>dispatch(decreament(item))}  type="button" className="flex items-center justify-center w-5 h-5 bg-gray-300 outline-none rounded-full">
                                                -
                                            </button>
                                            <span className="font-bold text-sm leading-[18px]">{item.count}</span>
                                            <button onClick={()=> dispatch(increament(item))}  type="button" className="flex items-center justify-center w-5 h-5 bg-gray-300 outline-none rounded-full">
                                                +
                                            </button>
                                        </div>
                                        <div className="flex items-center gap-10">
                                            <h4 className="text-lg font-bold text-gray-800">$ {(item.price * item.count).toFixed(2)}</h4>
                                            <MdClose onClick={()=> dispatch(removeFromCart(item))}  className=' text-2xl' />
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                    <div className=" bg-gray-100 p-6 lg:sticky top-0">
                        <ul className="text-gray-800 divide-y divide-gray-300">
                            <li className="flex flex-wrap gap-4 text-sm pb-4 font-semibold">Subtotal <span className="ml-auto">${total.toFixed(2)}</span></li>
                            <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">Shipping <span className="ml-auto">$4.00</span></li>
                            <li className="flex flex-wrap gap-4 text-sm py-4 font-semibold">Tax <span className="ml-auto">${(tax).toFixed(2)}</span></li>
                            <li className="flex flex-wrap gap-4 text-sm pt-4 font-bold">Total <span className="ml-auto">${(total+tax).toFixed(2)}</span></li>
                        </ul>
                        <div className="mt-6">
                            <h3 className="text-lg font-bold text-gray-800">Apply promo code</h3>
                            <div className="flex border border-gray-800 overflow-hidden max-w-md rounded-lg mt-3">
                                <input type="email" placeholder="Promo code" className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3" />
                                <button type="button" className="flex items-center justify-center bg-gray-800 hover:bg-gray-900 px-6 py-3 font-semibold text-sm text-white outline-none">
                                    Apply
                                </button>
                            </div>
                        </div>
                        <Link to='/checkout' >
                        <button type="button" className="mt-6 text-sm px-6 py-3 w-full bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg">Pay Now</button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Cart