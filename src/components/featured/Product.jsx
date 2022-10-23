import { Link } from "react-router-dom";

const Product = ({product}) => {


  console.log(product)

  return (
    <Link to={`/product/${product.id}`}>
      <div key={product.id} className="group relative  ">
      {/* <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80"> */}
      <div className="h-48 aspect-w-1 aspect-h-1 w-full overflow-hidden -md  bg-gray-200  lg:aspect-none lg:h-80">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={product.href}>
              <span aria-hidden="true" className="absolute inset-0" />
              {product.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">{product.price}</p>
      </div>
    </div>
  </Link>
  )
}

export default Product