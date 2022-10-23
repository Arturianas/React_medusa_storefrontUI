import { Link } from "react-router-dom";

const CollectionItem = ({item}) => {
  return (
    <Link to={`/product/${item.id}`}>
      <div class="border border-[#000000] border-solid    h-118  lg:w-full  justify-self-stretch self-stretch shadow-sm cursor-pointer bg-gray-200 group-hover:opacity-75 border border-[#ffffff] border-solid">
        <img class="w-full h-full object-cover" src={item.imageSrc}/>
        {/* <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p class="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
        </div> */}
        {/* <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div> */}
        </div>
      </Link>
  )
}

export default CollectionItem