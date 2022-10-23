/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'


import MedusaHeroImg from '../../images/galaxy.png'
import { Link } from "react-router-dom";
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

// const navigation = [
//   { name: 'Product', href: '#' },
//   { name: 'Features', href: '#' },
//   { name: 'Marketplace', href: '#' },
//   { name: 'Company', href: '#' },
// ]

const Hero = () => {
  return (
    <div className="h-[80vh] 2xl:h-[70vh] max-w-full relative bg-lightBackground mx-2 ">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl mb-4 drop-shadow-md shadow-black  font-semibold">
          Medusa Storefront starter
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Build with React.js & Tailwind Css. It also has redux ready to use. Use this Storefront as a starter point to build your own Ecommerce website.
        </p>
        {/* <a  href="/store">Explore products</a> */}
        <Link to={'/store'}>
          <span className='rounded border border-[#ffffff] border-solid p-2  hover:bg-[#7a1dfa]'>Explore All Products</span>
        </Link>
      </div>
      <img
        // src="/hero.jpg"
        src={MedusaHeroImg}
        alt="Medusa hackaton"
        className="h-full w-full object-cover"
      />
    </div>
  )
}

export default Hero
