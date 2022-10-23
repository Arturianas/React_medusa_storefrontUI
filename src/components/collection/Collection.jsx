import React from 'react'
import CollectionItem from './CollectionItem'
import headlessImg from '../../images/headless.jpg'
import commerceImg from '../../images/commerce.jpg'
import hackatonImg from '../../images/hackaton.jpg'
import medusaImg from '../../images/medusa.jpg'

const Collection = () => {

  const colItem = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: headlessImg,
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
    // More products...
    {
        id: 2,
        name: 'Basic Tee',
        href: '#',
        imageSrc: commerceImg,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 3,
        name: 'Basic Tee',
        href: '#',
        imageSrc: hackatonImg,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
      {
        id: 4,
        name: 'Basic Tee',
        href: '#',
        imageSrc: medusaImg,
        imageAlt: "Front of men's Basic Tee in black.",
        price: '$35',
        color: 'Black',
      },
  ]

  return (
    <div className="bg-white my-8 hidden md:block  ">
      <div className=" max-w-2xl md:max-w-full lg:max-w-full    mx-2 ">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 ">Collections</h2>
        <div className='mt-6 grid grid-cols-2 gap-y-2  sm:grid-cols-2 lg:grid-cols-4 gap-x-2  '>
          {colItem.map((item) => (
            <CollectionItem key={item.id} item={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection