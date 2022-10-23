import React from 'react'

const CarouseleItem = ({item}) => {
  return (
    <div class="flex w-96/100 justify-center mx-1 h-[60vh]   ">
      <img class="rounded h-full w-full object-cover" src={item.imageSrc} alt=""/>
    </div>
  )
}

export default CarouseleItem