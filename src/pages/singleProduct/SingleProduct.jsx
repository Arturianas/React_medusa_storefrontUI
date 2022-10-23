import React from 'react'
import Announcement from '../../components/anouncement/Announcement'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import ProductMobileOverview from '../../components/productOverview/ProductMobileOverview'
import ProductOverview from '../../components/productOverview/ProductOverview'

const SingleProduct = () => {
  return (
    <>
        <Announcement/>
        <Navbar/>
            {/* medium and larger screens */}
            <ProductOverview/>
            {/* For mobile  */}
            <ProductMobileOverview/>
        <Footer/>
    </>
  )
}

export default SingleProduct