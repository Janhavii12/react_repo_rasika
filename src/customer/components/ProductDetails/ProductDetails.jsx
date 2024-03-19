// import { useState } from "react";
// import { StarIcon } from "@heroicons/react/20/solid";
// import { RadioGroup } from "@headlessui/react";
// import { Rating } from '@mui/material';
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
const product = {
  name: "Callisia Navicularis",
  price: "50rs",
  href: "#",
  breadcrumbs: [
    { id: 1, name: "Herb", href: "#" },
    { id: 2, name: "Plants", href: "#" },
  ],
  images: [
    {
      src:
        "https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg",
      alt: "",
    },
    {
      src:
        "https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg",
      alt: "",
    },
    {
      src:
        "https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg",
      alt: "",
    },
    {
      src:
        "https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg",
      alt: "",
    },
  ],
  sizes: [
    { name: "20cm", inStock: false },
  ],
  description:
    'creeping show plant',
  highlights: [

  ],
  details:
    '',
};
// const reviews = { href: "#", average: 4, totalCount: 117 };

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

export default function ProductDetails() {
  // const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  // const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const navigate= useNavigate()
const handleAddtoCart = ()=>{
  navigate("/cart")
}
  return (
    <div className="bg-white">
      <div className="pt-6">
        <nav aria-label="Breadcrumb">
          <ol
            
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            {product.breadcrumbs.map((breadcrumb) => (
              <li key={breadcrumb.id}>
                <div className="flex items-center">
                  <a
                    href={breadcrumb.href}
                    className="mr-2 text-sm font-medium text-gray-900"
                  >
                    {breadcrumb.name}
                  </a>
                  <svg
                    width={16}
                    height={20}
                    viewBox="0 0 16 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-5 w-4 text-gray-300"
                  >
                    <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                  </svg>
                </div>
              </li>
            ))}
            <li className="text-sm">
              <a
                href={product.href}
                aria-current="page"
                className="font-medium text-gray-500 hover:text-gray-600"
              >
                {product.name}
              </a>
            </li>
          </ol>
        </nav>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-10 px-4 pt-10">
          {/* Image gallery */}
          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h[35rem]">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex flex-wrap space-x-5 justify-center">
              {product.images.map((item) => (
                <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg max-w-[5rem] max-h-[5rem] mt-4">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-xl font-semibold text-gray-900">
                Brand
              </h1>
              <h1 className="text-lg lg:text-xl text-gray-900 opacity-60 pt-1">
                Title
              </h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>

              <div className="flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6">
                <p className="font-semibold">price</p>
                <p className="opacity-50 line-through">actual price</p>
                <p className="text=green-600 font-semibold">discount</p>
              </div>

              {/* Reviews
              <div className="mt-6">
                <div className="flex items-center space-x-3 space-y-1">
                <Rating name="read-only" value={33.5} readOnly />
                <p className="opacity-50 text-sm">56540 Ratings</p>
                <p className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">3870 Reviews</p>
                </div> 
              </div> */}

              <form className="mt-10">
                {/* Colors */}
                

                {/* Sizes */}
                

                <Button onClick={handleAddtoCart} color = "secondary" variant="contained" sx={{px:"2rem",py:"1rem"}}>
                  Add to Cart
                </Button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">
                    {product.description}
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">
                  Highlights
                </h3>

                <div className="mt-4">
                  <ul className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
{
  /* rating and reviews */
}
        <section>

        </section>

      </div>

    </div>
  );
}
