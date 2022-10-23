import React from 'react'

const Checkout = () => {
  return (
    <div className="bg-white my-8 hidden md:block    sticky  inset-x-0
    // bottom-0">
      <div className=" max-w-2xl md:max-w-full lg:max-w-full    mx-2 ">

        <div className='mt-6 grid grid-cols-2 gap-y-2  sm:grid-cols-2 lg:grid-cols-4 gap-x-4  '>
            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center col-span-3'>
              <div className='flex-2   h-full flex justify-start items-center  '>
                <input className='w-full h-full ml-6 appearance-none outline-none' placeholder='Promo code'/>
              </div>
              <div className='bg-[#00152b] text-white h-full flex justify-start items-center flex-1  '>
                <span className='ml-6'>Apply discount</span>
              </div>
            </div>

            <div className='border border-[#dedede] border-solid  flex justify-around h-16 items-center  cursor-pointer  bg-[#00152b] text-white'>
              <span className='flex-3  ml-6'>Checkout</span>
              <span className='border-l-2 border-[#dedede] border-solid h-full flex justify-center items-center flex-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>

              </span>
            </div>

            
        </div>


      </div>
    </div>
  )
}

export default Checkout