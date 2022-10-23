import React from 'react'
import Announcement from '../../components/anouncement/Announcement'
import Footer from '../../components/footer/Footer'
import Navbar from '../../components/navbar/Navbar'
import StoreList from '../../components/storeList/StoreList'

const Store = () => {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <StoreList/>
        <Footer/>
    </div>
  )
}

export default Store