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
    <section className="flex flex-wrap text-green-500 lg:px-20 xl:px-40">
      {product.data?.map((pizza) => (
        <Link
          key={pizza.id}
          href={`/product/${pizza.id}`}
          className="w-full border-b-2 border-green-500 px-4 py-2 md:w-1/2 md:border-r md:border-l lg:w-1/3 hover:bg-lime-100"
        >
          {/* IMAGE CONTAINER */}
          <div className="relative w-full aspect-square ">
            <Image
              src={pizza.img}
              alt="product"
              fill
              sizes="100%"
              className="object-contain p-4"
            />
          </div>
          {/* TEXT CONTAINER */}
          <div className="flex items-center justify-between gap-4 py-4">
            <h2 className="font-bold flex-1 truncate text-xl">
              {' '}
              {pizza.title}{' '}
            </h2>
            <p className="flex-1 text-lg"> ${pizza.price}0 </p>
            <button className="bg-green-500 text-white p-2 rounded-md font-semibold flex-1">
              {' '}
              Add To Cart{' '}
            </button>
          </div>
        </Link>
      ))}
    </section>
  );
};
export default CategoryPage;
