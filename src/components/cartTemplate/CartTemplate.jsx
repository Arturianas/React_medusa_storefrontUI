import React from 'react'
import CartDetails from './CartDetails'
import CartProduct from './CartProduct'
import Checkout from './Checkout'

const CartTemplate = () => {
  return (
    <div className='hidden md:block'>
        <div className=' py-8  mx-16'>
          <div className='relative'>
          {/* <CartDetails/> */}
            <div className='mx-8'>
              <table  className='  w-full  border-spacing-2 text-center    '>
                <tr className='border-b border-[#c5c5c5] border-solid '>
                  <th className='w-1/3 py-6'>Description</th>
                  <th>Size</th>
                  <th>Quantity</th>
                  <th>Remove</th>
                  <th>Price</th>
                </tr>
              
                <CartProduct/>
                <CartProduct/>
                {/* <CartProduct/>
                <CartProduct/> */}
              </table>
            </div>

            <CartDetails/>
            <h2 className="text-md font-semibold tracking-tight text-gray-900 mt-6 mx-2">If you have a promotion code, please enter it here:</h2>
            <Checkout/>
          
          </div>
        </div>
    </div>
  )
}

export default CartTemplate