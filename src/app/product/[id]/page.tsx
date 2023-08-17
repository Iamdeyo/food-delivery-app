import Price from '@/components/Price';
import { singleProduct } from '@/data';
import Image from 'next/image';

const SingleProductPage = () => {
  return (
    <div className=" px-4 py-10 lg:px-20 xl:px-40 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)] gap-10 flex flex-col md:flex-row md:items-center">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full aspect-square min-h-[250] max-h-[350px] md:max-h-[400px] lg:max-h-[500px]">
        <Image
          src={singleProduct.img}
          alt="product"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col text-green-500">
        <h2 className="font-bold text-3xl uppercase">{singleProduct.title}</h2>
        <p className="my-4"> {singleProduct && singleProduct.desc} </p>
        <Price
          id={singleProduct.id}
          options={singleProduct.options}
          price={singleProduct.price}
        />
      </div>
    </div>
  );
};
export default SingleProductPage;
