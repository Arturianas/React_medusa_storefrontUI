import { useState, useEffect } from "react";
import {
  
  MobileNav,
  Typography,

  IconButton,
} from "@material-tailwind/react";
// import Switcher from "./Switcher";



import { Link } from "react-router-dom";

import { useSelector, useDispatch } from 'react-redux'


import { Logout } from '../../redux/auth/authService'
import { useNavigate } from 'react-router-dom'

import {cartState} from '../../redux/cart/cartSlice'




import * as Scroll from 'react-scroll';
import {  Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Cart from "../../pages/cart/Cart";



const Navbar = () => {


  const [openNav, setOpenNav] = useState(false);
 
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);



  const { user } = useSelector((state) => state.auth)

  const { quantity, } = useSelector((state) => state.cart)


 
  const navList = (
    <ul className="text-xl   mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 text-black dark:text-[#fff]">
      
        {user? (
          <>
              {/* <Link to={'/cart'}>Cart</Link> */}
              <Link to={'/user/orders'}>My orders</Link>
          </>
        ) : (
          <>
            <a href="#" className="flex items-center">
              Check
            </a>
      
      
            <a href="#" className="flex items-center">
              This 
            </a>

            <Link to={'/store'}>Store!</Link>
          </>
        )}
      
    </ul>
  );


  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    Logout(dispatch)
    navigate('/')
  }


  // const openCloseCart = () => {
    
   
  //   dispatch(cartState())
   
  // }


  // const [open, setOpen] = useState(false)


  return (
    <div className={`mx-auto  py-1 px-4 lg:px-8 lg:py-2 shadow-md  sticky top-0 inset-x-0 z-50 group bg-[#fff]`}>
    <div className="container mx-auto flex items-center justify-between  text-black dark:text-[#fff]">
      <Typography
        as="a"
        href="#"
        variant="small"
        className="mr-4 cursor-pointer py-1.5 font-normal text-xl"
      >
        <span>
        <Link to={'/'}>
        <span className="font-medium tracking-wider">MEDUSA_HACKATON.</span>
          </Link>
        </span>
      </Typography>
      <div className="hidden lg:block">{navList}</div>
      <div className="flex">

        <Link to={'/cart'}>
        <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6  cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
          </Link>

        <span>{quantity}</span>

        <span className="px-4">|</span>
        {user ? (
          <button onClick={onLogout}>logout</button>
        ) : (
          <Link to={"/login"}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
        </svg>
          </Link>
        )}

      </div>

      <IconButton
        variant="text"
        className=" h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
        ripple={false}
        onClick={() => setOpenNav(!openNav)}
      >
        {openNav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="h-6 w-6"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </IconButton>
    </div>
    <MobileNav open={openNav}>
      {navList}
    </MobileNav>
  </div>
  )
}

export default Navbar