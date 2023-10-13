import { ProductsType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const getData = async (category: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/products?category=${category}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    return null;
  }
};

type Props = {
  params: { category: string };
};

const CategoryPage = async ({ params }: Props) => {
  const product: ProductsType | null = await getData(params.category);

  return (
    <section className=" px-4 py-10 lg:px-20 xl:px-40 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)]">
      {product && product.data ? (
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center md:justify-center sm:items-start gap-[18px] text-green-500">
          {product?.data?.map((pizza) => (
            <Link
              key={pizza.id}
              href={`/product/${pizza.id}`}
              className="w-full max-w-sm sm:max-w-none flex flex-col border-green-500 border shadow-xl transition-all duration-300 sm:w-[calc(50%-10px)] md:border-r md:border-l lg:w-[calc(33.33333%-20px)] hover:bg-lime-100 group h-fit"
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={pizza.img}
                  alt="product"
                  fill
                  sizes="100%"
                  className="object-cover group-hover:scale-110 transition-all duration-300"
                />
              </div>

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
      ) : (
        <div className="w-full">
          <p className="text-center text-xl md:text-2xl font-semibold text-gray-500">
            Something went wrong....
          </p>
        </div>
      )}
    </section>
  );
};
export default CategoryPage;
