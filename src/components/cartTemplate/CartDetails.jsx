import React from 'react'

const CartDetails = () => {
  return (
    <div className="bg-white mt-20 my-8 hidden md:block    sticky  inset-x-0
    // bottom-0">
      <div className=" max-w-2xl md:max-w-full lg:max-w-full    mx-2 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 lg:hidden">Collections</h2>

     
        <div className='mt-6 grid grid-cols-2 gap-y-2  sm:grid-cols-2 lg:grid-cols-4 gap-x-4  '>
            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center'>
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center'>
              <span>Delivery</span>
              <span>$0.00</span>
            </div>

            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center'>
              <span>Subtotal</span>
              <span>$110.00</span>
            </div>

            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center'>
              <span>Total</span>
              <span>$110.00</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default CartDetails