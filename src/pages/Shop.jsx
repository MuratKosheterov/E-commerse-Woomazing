import React from 'react'
import { filterButtons, products } from '../data/data'
import { useDispatch, useSelector } from 'react-redux'
import { setShowMore, setFiltered } from '../redux/slices/productSlice';
import { Link } from 'react-router-dom';

function Shop() {

  const dispatch = useDispatch()
  const { showMore } = useSelector((state) => state.productReducer)
  const lenght = products.length
  const value = products.map((item) => item.category)
  console.log(value);
  const { filtered } = useSelector((state) => state.productReducer)


  return (
    <div className='pt-44 container mx-auto'>
      <h1 className=' uppercase text-5xl font-semibold ' >
        Магазин
      </h1>
      <p className=' py-10' >
        Показано: {showMore} из {lenght} товаров
      </p>
      <div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 py-24' >

          <button onClick={() => dispatch(setFiltered('all'))} className='px-24 py-3 border-2 hover:scale-105 duration-500 ease-out   text-[17px]  font-medium  ' >Все</button>
          <button onClick={() => dispatch(setFiltered('t-shirt'))} className='px-24 py-3 border-2 hover:scale-105 duration-500 ease-out   text-[17px]  font-medium  ' >t-shirt</button>
          <button onClick={() => dispatch(setFiltered('sweetshot'))} className='px-24 py-3 border-2 hover:scale-105 duration-500 ease-out   text-[17px]  font-medium  ' >sweetshot</button>
          <button onClick={() => dispatch(setFiltered('swimsuit'))} className='px-24 py-3 border-2 hover:scale-105 duration-500 ease-out   text-[17px]  font-medium  ' >swimsuit</button>

        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10' >
          {
            products.filter((item) => {
              if (filtered === "all") {
                return item;
              }
              else {
                return filtered === item.category;
              }
            }).slice(0, showMore).map((product, index) => {
              return (
                <Link key={product.id} to={`/${product.id}`} >
                <div key={index} className=' mx-auto text-start mb-16 hover:scale-110 duration-300 ease-out cursor-pointer ' >
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
      </div>
      <div className='  flex items-center justify-center ' >
        <button onClick={() => dispatch(setShowMore(products.length))} className=' px-5 py-3 border border-womazing-blue hover:scale-105 duration-500 ease-out '  >Показано: {showMore} из {lenght} товаров</button>
      </div>
    </div>
  )
}

export default Shop