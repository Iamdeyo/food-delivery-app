import { singleProduct } from '@/data';
import Image from 'next/image';

const CartPage = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between  min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)]">
      {/* PRODUCT CONTAINER */}
      <div className="w-full flex flex-col items-center justify-center">
        {/* SINGLE PRODUCT  */}
        <div className="text-green-500 w-full lg:w-3/4 flex justify-between px-4 py-2 items-center border-b border-b-green-500">
          <Image
            src={singleProduct.img}
            alt="product"
            width={100}
            height={100}
          />

          <div className="">
            <h2 className="font-bold text-xl uppercase">
              {singleProduct.title}
            </h2>
            <p className="text-sm">
              {singleProduct.options && singleProduct.options[0].title}
            </p>
          </div>
          <p className="font-bold"> ${singleProduct.price} </p>
          <button className="font-bold hover:text-red-600">X</button>
        </div>
        {/* <div className="text-green-500 w-full lg:w-3/4  flex justify-between px-4 py-2 items-center border-b border-b-green-500">
          <Image
            src={singleProduct.img}
            alt="product"
            width={100}
            height={100}
          />

          <div className="">
            <h2 className="font-bold text-xl uppercase">
              {' '}
              {singleProduct.title}{' '}
            </h2>
            <p className="text-sm">
              {singleProduct.options && singleProduct.options[0].title}
            </p>
          </div>
          <p className="font-bold"> ${singleProduct.price} </p>
          <button className="font-bold hover:text-red-600">X</button>
        </div> */}
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="bg-green-50 flex flex-col justify-center lg:items-center py-10 px-4 text-green-500 font-medium w-full md:w-2/5 md:flex-none">
        <div className="flex flex-col lg:w-3/4">
          <div className="flex justify-between mb-4">
            <p> Subtotal (3 items) </p>
            <span> $89.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <p> Service Cost </p>
            <span> $0.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <p> Deilvery Cost </p>
            <span> FREE! </span>
          </div>
          <div className="flex justify-between mb-4 font-semibold text-lg pt-4 border-t border-t-green-300">
            <p> TOTAL(INCL. VAT) </p>
            <span> $89.00 </span>
          </div>
          <button className="ml-auto rounded-md py-3 px-9 bg-green-500 text-white hover:bg-green-400">
            CHECKOUT
          </button>
        </div>
      </div>
    </section>
  );
};
export default CartPage;
