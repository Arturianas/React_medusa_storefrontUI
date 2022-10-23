import { Fragment, useState } from 'react'


// import { useSelector, useDispatch } from 'react-redux'
// import {cartState} from '../../redux/cart/cartSlice'
import Announcement from '../../components/anouncement/Announcement'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'
import CartTemplate from '../../components/cartTemplate/CartTemplate'
import MobileCartTemplate from '../../components/cartTemplate/MobileCartTemplate'




const products = [
    {
      id: 1,
      name: 'Throwback Hip Bag',
      href: '#',
      color: 'Salmon',
      price: '$90.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
      imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
    },
    {
      id: 2,
      name: 'Medium Stuff Satchel',
      href: '#',
      color: 'Blue',
      price: '$32.00',
      quantity: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
      imageAlt:
        'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
    },
    // More products...
  ]



const Cart = () => {
// If you want to use redux for cart state management:
    // const [open, setOpen] = useState(true)

    // const { quantity, open } = useSelector((state) => state.cart)
    // const dispatch = useDispatch()

    // const openCloseCart = () => {
    //     // dispatch(logout())
       
    //     dispatch(cartState())
    //     // Logout(dispatch)
    //     // navigate('/')
    //   }
    
    
  return (
    <>
      <Announcement/>
      <Navbar/>
      <h1 className='py-8 mx-2 md:mx-16    text-3xl font-medium tracking-wide text-gray-900'>Cart</h1>
        <CartTemplate/>
        <MobileCartTemplate/>
      <Footer/>
    </>
  )
}

export default Cart
