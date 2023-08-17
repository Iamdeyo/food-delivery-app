import { featuredProducts } from '@/data';
import Image from 'next/image';

const Featured = () => {
  return (
    <div className="w-screen overflow-x-auto text-green-500 flex snap-x snap-mandatory">
      {/* WRAPPER */}

      {/* SINGLE ITEM */}
      {featuredProducts.map((product) => (
        <div
          key={product.id}
          className="snap-start w-screen h-[450px] flex-none flex flex-col items-center text-center pt-2 pb-4 px-4 hover:bg-lime-100 transition-all duration-300 md:w-[50vw] lg:w-1/3 lg:h-[550px]"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative flex-1 w-full hover:rotate-45 transition-all duration-500">
            <Image
              src={product.img}
              alt="product"
              fill
              sizes="100%"
              className="object-contain"
            />
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex flex-col items-center justify-center pt-2">
            <h2 className="text-xl font-bold uppercase lg:text-2xl">
              {product.title}
            </h2>
            <p className="text-sm p-4 lg:p-6"> {product.desc} </p>
            <span className="text-xl font-bold lg:text-2xl">
              ${product.price}
            </span>
            <button className="rounded-md p-2 bg-green-500 text-white hover:bg-green-400">
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Featured;
