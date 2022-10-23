import React from 'react'
import MobileProduct from './MobileProduct'

const MobileCartTemplate = () => {
  return (
    <div className='md:hidden mx-2     relative'>
        <MobileProduct/>
        <MobileProduct/>
        <MobileProduct/>


        <div>
            <h2 className='text-2xl font-bold tracking-wide text-gray-900  py-4'>Cart Details</h2>
            <div className='text-lg font-semibold tracking-wider text-gray-900  py-1'>
                <span>Subtotal: </span>
                <span>$82</span>
            </div>

            <div className='text-lg font-semibold tracking-wider text-gray-900  py-1'>
                <span>Discount: </span>
                <span>- $5</span>
            </div>

            <div className='text-lg font-semibold tracking-wider text-gray-900  py-1'>
                <span>Total: </span>
                <span>$77</span>
            </div>
        </div>


        <div className='my-4 h-16 text-white bg-[#000000]   flex justify-center items-center'>
            <span>Checkout</span>
        </div>
    </div>
  )
}

export default MobileCartTemplate