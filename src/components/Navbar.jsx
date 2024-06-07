import React from 'react'
import { PiDressThin } from "react-icons/pi";
import { links } from '../data/data';
import { Link } from 'react-router-dom';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { LuShoppingCart } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { toggleNavbar } from '../redux/slices/navbarSlice';
import { toggleCart } from '../redux/slices/cartSlice';

function Navbar() {

    const dispatch = useDispatch()
    const { isNavbarOpen } = useSelector((state) => state.navbarReducer)
    const { cartOpen } = useSelector((state) => state.cartReducer)
    const { amount } = useSelector((state) => state.productReducer)

    return (
        <div className='fixed w-full z-50  py-5 lg:py-0  bg-white shadow-lg' >
            <div className='container flex items-center justify-between mx-auto z-40  ' >
                <div className=' flex items-center gap-5' >
                    <div onClick={() => dispatch(toggleNavbar())} className=' cursor-pointer  block lg:hidden ' >
                        {isNavbarOpen ? <IoMdClose /> : <RxHamburgerMenu />}
                    </div>
                    <Link to='/' className=' flex items-center  gap-x-3' >
                        <PiDressThin className='text-xl' />
                        <p className=' text-base font-semibold uppercase  ' >
                            Womazing
                        </p>
                    </Link>
                </div>
                <ul className={`absolute lg:static left-0 bg-white  w-full lg:w-auto  flex flex-col lg:flex-row items-start lg:items-center  gap-5 md:gap-5 lg:gap-5 duration-500 ease-out py-5  ${isNavbarOpen ? 'top-16' : 'top-[-490px]'}`} >
                    {
                        links.map((link, index) => {
                            return (
                                <Link key={index} className={`text-base mx-auto font-medium tracking-widest   z-30  hover:text-womazing-blue duration-500 ease-out`} to={link.url} >
                                    {link.title}
                                </Link>
                            )
                        })
                    }
                </ul>
                <div className=' flex items-center gap-9' >
                    <div className=' flex items-center gap-3' >
                        <MdOutlinePhoneEnabled />
                        <p>
                            +7 (495) 823-54-12
                        </p>
                    </div>
                    <Link to='/cart' className='  relative' >
                        <LuShoppingCart onClick={() => dispatch(toggleCart(cartOpen))} size={21} className=' cursor-pointer' />
                        <sup className=' absolute  -right-1 -top-5  text-lg ' >{amount > 0 ? amount : ''}</sup>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;