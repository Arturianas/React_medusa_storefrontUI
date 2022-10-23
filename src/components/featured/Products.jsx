import React from 'react'
import Product from './Product'

import Medusa from "@medusajs/medusa-js"
import { useState } from 'react'
import { useEffect } from 'react'
// const medusa = new Medusa({ baseUrl: 'http://localhost:9000/store/variants', maxRetries: 3 })
// medusa.products.list()
// .then(({ products, limit, offset, count }) => {
//   console.log(products.length);
// });


const Products = () => {


const [products, setProducts] = useState([])

// const medusa = new Medusa({ baseUrl: 'http://localhost:9000/', maxRetries: 3 })
// medusa.products.list()
// .then(({ products, limit, offset, count }) => {
//   console.log(products.length);
//   setProducts(products)
// });
// import Medusa from "@medusajs/medusa-js"
// const medusa = new Medusa({ baseUrl: 'http://localhost:9000/', maxRetries: 3 })
// medusa.products.search({
//   limit: 4
// })
// .then(({ hits }) => {
//   console.log(hits.length);
//   setProducts(hits)
// });



useEffect(() => {

const medusa = new Medusa({ baseUrl: 'http://localhost:9000/', maxRetries: 3 })
medusa.products.list(
  {
    limit: 4
  }
)
.then(({ products, limit, offset, count }) => {
  // console.log(products.length);
  setProducts(products)
});
},[])

console.log(products)

    // const productss = [
    //     {
    //       id: 1,
    //       name: 'Basic Tee',
    //       href: '#',
    //       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    //       imageAlt: "Front of men's Basic Tee in black.",
    //       price: '$35',
    //       color: 'Black',
    //     },
    //     // More products...
    //     {
    //         id: 2,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: 'https://barkbox-marketing-campaigns.s3.amazonaws.com/themes/Home%20Fur%20Holidays/HomeFurTheHolidays_SignUp.png',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //       },
    //       {
    //         id: 3,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: 'https://post.bark.co/wp-content/uploads/2021/09/BOX_11-2021_ISOMETRIC_STYLED-BASE-KIT_3016-1-e1632240858484.png',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //       },
    //       {
    //         id: 4,
    //         name: 'Basic Tee',
    //         href: '#',
    //         imageSrc: 'https://dp6mhagng1yw3.cloudfront.net/entries/ogS_Jf_HD3_0939.png',
    //         imageAlt: "Front of men's Basic Tee in black.",
    //         price: '$35',
    //         color: 'Black',
    //       },
    //   ]


  return (
    <div className="bg-white my-8">
      <div className="mx-auto max-w-2xl pt-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Products</h2>

        <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((item) => (
           <Product key={item.id} product={item}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products