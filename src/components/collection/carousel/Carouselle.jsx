import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CollectionItem from "../CollectionItem";
import Product from "../../featured/Product";
import CarouseleItem from "./CarouseleItem";

import headlessImg from '../../../images/headless.jpg'
import commerceImg from '../../../images/commerce.jpg'
import hackatonImg from '../../../images/hackaton.jpg'
import medusaImg from '../../../images/medusa.jpg'



const Carouselle = () => {


  const products = [
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



    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



  return (
    <div className="mx-2 md:hidden mt-16 mb-4 overflow-hidden">
      <h1 className="mx-2 my-4 text-2xl font-bold tracking-tight text-gray-900">Collections</h1>
      <Carousel
    additionalTransfrom={0}
    arrows={false}
    autoPlaySpeed={3000}
    centerMode={false}
    className=""
    containerClass="container"
    dotListClass=""
    draggable
    focusOnSelect={false}
    infinite
    itemClass=""
    keyBoardControl
    minimumTouchDrag={80}
    partialVisible
    pauseOnHover
    renderArrowsWhenDisabled={false}
    renderButtonGroupOutside={false}
    renderDotsOutside={false}
    responsive={{
      desktop: {
        breakpoint: {
          max: 3000,
          min: 1024
        },
        items: 3,
        partialVisibilityGutter: 40
      },
      mobile: {
        breakpoint: {
          max: 464,
          min: 0
        },
        items: 1,
        partialVisibilityGutter: 30
      },
      tablet: {
        breakpoint: {
          max: 1024,
          min: 464
        },
        items: 1,
        partialVisibilityGutter: 30
      }
    }}
    rewind={false}
    rewindWithAnimation={false}
    rtl={false}
    shouldResetAutoplay
    showDots={false}
    sliderClass=""
    slidesToSlide={1}
    swipeable
>
 {products.map((item) => (

    <CarouseleItem key={item.id} item={item}/>
 ))}
</Carousel>


<div className="my-4 rounded h-24  bg-lightBackground  flex justify-center items-center">
  <span className="text-gray-900 text-2xl font-semibold underline tracking-tight ">See All</span>
</div>

    </div>
  )
}

export default Carouselle