import { ProductsType } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';

const getData = async (category: string) => {
  const res = await fetch(
    `http://localhost:3000/api/products?category=${category}`,
    {
      cache: 'no-store',
    }
  );

  if (!res.ok) {
    console.log(res);
    const dumb: ProductsType = {
      message: 'Error',
      data: [
        {
          id: '1',
          title: 'Sicilian',
          desc: 'Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.',
          img: '/temporary/p1.png',
          price: 24.9,
          options: [
            {
              title: 'Small',
              additionalPrice: 0,
            },
            {
              title: 'Medium',
              additionalPrice: 4,
            },
            {
              title: 'Large',
              additionalPrice: 6,
            },
          ],
        },
      ],
    };
    return dumb;
  }
  return res.json();
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const product: ProductsType = await getData(params.category);

  return (
    <section className=" px-4 py-10 lg:px-20 xl:px-40 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)]">
      <div className="flex flex-col sm:flex-row sm:flex-wrap items-center md:justify-center sm:items-start gap-[18px] text-green-500">
        {product?.data?.map((pizza) => (
          <Link
            key={pizza.id}
            href={`/product/${pizza.id}`}
            className="w-full max-w-sm sm:max-w-none flex flex-col border-green-500 border shadow-xl transition-all duration-300 sm:w-[calc(50%-10px)] md:border-r md:border-l lg:w-[calc(33.33333%-20px)] hover:bg-lime-100 group h-fit"
          >
            {/* IMAGE CONTAINER */}
            <div className="relative w-full aspect-square overflow-hidden">
              <Image
                src={pizza.img}
                alt="product"
                fill
                sizes="100%"
                className="object-cover group-hover:scale-110 transition-all duration-300"
              />
            </div>
            {/* TEXT CONTAINER */}
            <div className="flex items-center text-white bg-green-500 justify-between gap-4 px-4 py-4 pb-6">
              <h2 className="font-bold flex-1 truncate w-full text-xl">
                {pizza.title}
              </h2>
              <p className="flex-1 text-lg text-end group-hover:hidden transition-all duration-300">
                ${pizza.price}
              </p>
              <button className="text-green-500 bg-white  px-0 rounded-md font-semibold flex-1 hidden group-hover:block transition-all duration-300">
                Add To Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
export default CategoryPage;
