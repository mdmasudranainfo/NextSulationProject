import { useEffect } from 'react'
import { useState } from 'react'

import { AiFillStar } from 'react-icons/ai'

const Product = () => {
  const [products, setProduct] = useState()

  useEffect(() => {
    fetch('/Product.json')
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container mx-auto mt-32 px-5  ">
      <h1 className="text-2xl my-4 p-3">Just For You</h1>

      {/* product card */}

      <div className=" grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
        {products?.map(Product => (
          <div
            className="p-3 shadow-xl hover:shadow-2xl ease-in duration-300 rounded-lg"
            key={Product?.id}
          >
            <div className="">
              <img src={Product?.image} alt="" />
            </div>
            {/* card Content */}
            <div className="py-3">
              <h1 className="text-xl font-semibold">{Product?.title}</h1>
              <div className=" flex items-center gap-2">
                <h2 className="text-2xl">{Product?.price}</h2>
                <span className="bg-green-500 text-white text-sm px-1 rounded-full">
                  Offer Price
                </span>
              </div>
              <div className="flex items-center gap-1">
                <AiFillStar className="text-yellow-500 text-xl" />{' '}
                <span className="text-lg font-bold"> {Product?.Rating}</span>
              </div>
              <div className="flex justify-end items-end">
                <button className="btn bg-primary text-white hover:text-primary duration-300 ease-in font-semibold rounded-full mt-5 ">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
