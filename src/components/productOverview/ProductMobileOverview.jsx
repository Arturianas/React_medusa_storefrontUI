import { RadioGroup } from '@headlessui/react'

const ProductMobileOverview = () => {


const product = {
    sizes: [
        { name: 'XXS', inStock: false },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: '2XL', inStock: true },
        { name: '3XL', inStock: true },
      ],
      description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
}




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  


  return (
    <div className='md:hidden'>
        <div className='mx-2   '>
            <div>
                <img className='w-full h-full object-cover' src='https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg' alt='image'/>
            </div>




            <div className='  '>
        <div className="mt-4 w-96/100 lg:mt-16    sticky  inset-x-0 top-24">
    <h2 className="sr-only">Product information</h2>
    <p className="text-3xl tracking-tight text-gray-900 mb-2">Product name</p>
    <p className="text-2xl tracking-tight text-gray-900">$98</p>

    {/* Reviews */}
    <div className="mt-6">
      <h3 className="sr-only">Reviews</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            // <StarIcon
            //   key={rating}
            //   className={classNames(
            //     reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
            //     'h-5 w-5 flex-shrink-0'
            //   )}
            //   aria-hidden="true"
            // />
            <span>#</span>
          ))}
        </div>
        {/* <p className="sr-only">{reviews.average} out of 5 stars</p> */}
        <a href='' className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
          5 reviews
        </a>
      </div>
    </div>

    <form className="mt-10">
      {/* Colors */}
      {/* <div>
        <h3 className="text-sm font-medium text-gray-900">Color</h3>

        <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
          <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
          <div className="flex items-center space-x-3">
            {product.colors.map((color) => (
              <RadioGroup.Option
                key={color.name}
                value={color}
                className={({ active, checked }) =>
                  classNames(
                    color.selectedClass,
                    active && checked ? 'ring ring-offset-1' : '',
                    !active && checked ? 'ring-2' : '',
                    '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                  )
                }
              >
                <RadioGroup.Label as="span" className="sr-only">
                  {' '}
                  {color.name}{' '}
                </RadioGroup.Label>
                <span
                  aria-hidden="true"
                  className={classNames(
                    color.class,
                    'h-8 w-8 border border-black border-opacity-10 rounded-full'
                  )}
                />
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div> */}

      {/* Sizes */}
      <div className="mt-10">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">Size</h3>
          <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
            Size guide
          </a>
        </div>

        <RadioGroup value='selectedValue' onChange={console.log('setSelectedSize')} className="mt-4">
          <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
          <div className="grid grid-cols-4 gap-4 sm:grid-cols-8 lg:grid-cols-4">
            {product.sizes.map((size) => (
              <RadioGroup.Option
                key={size.name}
                value={size}
                disabled={!size.inStock}
                className={({ active }) =>
                  classNames(
                    size.inStock
                      ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                      : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                    active ? 'ring-2 ring-indigo-500' : '',
                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6'
                  )
                }
              >
                {({ active, checked }) => (
                  <>
                    <RadioGroup.Label as="span">{size.name}</RadioGroup.Label>
                    {size.inStock ? (
                      <span
                        className={classNames(
                          active ? 'border' : 'border-2',
                          checked ? 'border-indigo-500' : 'border-transparent',
                          'pointer-events-none absolute -inset-px rounded-md'
                        )}
                        aria-hidden="true"
                      />
                    ) : (
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                      >
                        <svg
                          className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                          stroke="currentColor"
                        >
                          <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                        </svg>
                      </span>
                    )}
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>

      <button
        type="submit"
        className="mt-10 flex w-full items-center justify-center  border border-transparent bg-[#000] py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Add to bag
      </button>
    </form>
  </div>
        </div>






        <div className='py-6'>
            <span className='text-2xl font-medium tracking-wide text-gray-900'>Details</span>
            <p className='py-6 text-justify'>
                {product.description}
            </p>
        </div>







        </div>
    </div>
  )
}

export default ProductMobileOverview