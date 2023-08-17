'use client';
import { useState, useEffect } from 'react';

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [totalPrice, setTotalPrice] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotalPrice(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, price, options]);

  return (
    <div className="flex flex-col gap-5">
      <p className="text-2xl font-bold"> ${totalPrice.toFixed(2)} </p>
      <div className="flex gap-4">
        {options?.map((item, index) => (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`p-2 border rounded-md ${
              index === selected
                ? 'bg-green-500 text-white border-green-500'
                : 'border-green-700 hover:bg-lime-100'
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
      <div className="flex items-center   border border-green-500">
        <span className="pl-2 truncate"> Quantity </span>
        <div className="ml-auto flex-none">
          <button
            className="p-1  sm:p-2 font-bold text-2xl"
            onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
          >
            {'<'}
          </button>
          <span> {quantity} </span>
          <button
            className="p-1 sm:p-2 font-bold text-2xl"
            onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
          >
            {'>'}
          </button>
        </div>
        <button className="bg-green-500 flex-none px-2 sm:px-3 py-3 text-white">
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default Price;
