import DeleteButton from '@/components/DeleteButton';
import Price from '@/components/Price';
import { singleProduct } from '@/data';
import { SingleProductType } from '@/types/types';
import Image from 'next/image';

const getData = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/products/${id}`);

  if (!res.ok) {
    throw new Error(`Failed`);
  }

  return res.json();
};

type Props = {
  params: { id: string };
};

const SingleProductPage = async ({ params }: Props) => {
  const product: SingleProductType = await getData(params.id);

  return (
    <div className="relative px-4 py-10 lg:px-20 xl:px-40 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)] gap-10 flex flex-col md:flex-row md:items-center">
      {/* IMAGE CONTAINER */}
      <div className="relative w-full aspect-square min-h-[250] max-h-[350px] md:max-h-[400px] lg:max-h-[500px]">
        <Image
          src={product.data?.img || ''}
          alt="product"
          fill
          className="object-contain"
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="flex flex-col text-green-500">
        <h2 className="font-bold text-3xl uppercase">{product.data?.title}</h2>
        <p className="my-4"> {product.data?.desc} </p>
        <Price product={product} />
      </div>
      <DeleteButton id={product.data?.id!} />
    </div>
  );
};
export default SingleProductPage;
