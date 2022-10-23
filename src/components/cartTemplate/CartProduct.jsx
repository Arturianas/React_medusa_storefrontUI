import React from 'react'

const CartProduct = () => {
  return (
    <tr className='border-b border-[#dedede] border-solid  '>

    <td className='  flex py-8'>
      <div className='h-32 w-32'>
        <img
          src="https://medusa-public-images.s3.eu-west-1.amazonaws.com/black_hoodie_front.png"
          layout="fill"
          objectFit="cover"
          alt=""
          className='w-full h-full object-cover'
        />
      </div>

      <div className=' flex justify-center items-start flex-col  ml-6  '>
        <h2 className='mb-2'>Hoodie</h2>
        <p>Product Description</p>
      </div>
    </td>

    <td className='   content-center   text-center'>
      <div className='border border-[#dedede] border-solid mx-auto  w-14 h-14 flex justify-center items-center'>
        L
      </div>
    </td>

    <td className=''>
      <div className='flex     justify-center items-center'>
        <div className='border border-[#001c34] bg-[#06223b] text-white border-solid  cursor-pointer  w-14 h-14 flex justify-center items-center'>
          +
        </div>

        <div className='border border-[#c7c7c7] border-solid   w-14 h-14 flex justify-center items-center'>
          1
        </div>

        <div className='border border-[#c7c7c7] bg-[#e5e5e5] border-solid   w-14 h-14 flex cursor-pointer justify-center items-center'>
          -
        </div>
      </div>
    </td>

    <td className=''>
        <div className='border border-[#c7c7c7] border-solid mx-auto  w-14 h-14 flex justify-center cursor-pointer items-center'>
          x
        </div>
    </td>

    <td className=''>
      <span >$120</span>
    </td>

  </tr>
  )
}

export default CartProduct