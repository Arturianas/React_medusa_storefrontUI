import React from 'react'

const MobileProduct = () => {
  return (
    <div className='border-b border-[#c8c8c8] border-solid   flex  justify-between items-center py-4'>
        <div className='    flex-1'>
            <div className='w-28 h-28   '>
                <img className='w-full h-full object-cover' src='https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg' alt='mobileImage'/>
            </div>
          
        </div>

        <div className='flex-2  h-28     '>
            <div className='h-full max-w-full     ml-2     flex  flex-col justify-between'>
                <div className='flex justify-between'>
                    <div>
                        Item name
                    </div>
                    <div>
                        $300
                    </div>
                </div>


                <div className=' flex justify-start'>
                        <span>Size L</span>
                    </div>

                <div className='flex justify-between'>
                    <div className='flex-1  flex     justify-start items-center'>
                        <div className='border border-[#001c34] bg-[#06223b] text-white border-solid  cursor-pointer  w-8 h-8 flex justify-center items-center'>
                        +
                        </div>

                        <div className='border border-[#c7c7c7] border-solid   w-8 h-8 flex justify-center items-center'>
                        1
                        </div>

                        <div className='border border-[#c7c7c7] bg-[#e5e5e5] border-solid   w-8 h-8 flex cursor-pointer justify-center items-center'>
                        -
                        </div>
                    </div>

                    

                    <div className='flex-1 flex justify-end'>
                        <span>Remove</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileProduct