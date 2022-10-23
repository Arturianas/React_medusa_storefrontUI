import React from 'react'
import Announcement from '../../components/anouncement/Announcement'
// import Featured from '../../components/featured/Featured'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/hero/Hero'
import Navbar from '../../components/navbar/Navbar'
import Products from '../../components/featured/Products'
import Collection from '../../components/collection/Collection'
import Carouselle from '../../components/collection/carousel/Carouselle'
import NewsLeter from '../../components/NewsLeter'

const Home = () => {
  return (
    <div className='relative'>
        <Announcement/>
        <Navbar/>
        <Hero/>
        <Products/>
        {/* Collection Component displays Collection for medium and large devices*/}
        <Collection/>
        {/* Carouselle Component displays Collection for mobile devices*/}
        <Carouselle/>
        <NewsLeter/>
        <Footer/>
    </div>
  )
}

export default Home