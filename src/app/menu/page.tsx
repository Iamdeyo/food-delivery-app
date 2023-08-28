import { MenuType } from '@/types/types';
import Link from 'next/link';

const getData = async () => {
  const res = await fetch('http://localhost:3000/api/categories', {
    cache: 'no-store',
  });

  if (!res.ok) {
    console.log(res);
    const dumb: MenuType = {
      message: 'Error',
      data: [
        {
          id: '1',
          slug: 'pastas',
          title: 'Italian Pastas',
          desc: 'Savor the taste of perfection with our exquisite Italian handmade pasta menu.',
          img: '/temporary/m1.png',
          color: 'red',
        },
      ],
    };
    return dumb;
  }
  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
  return (
    <section className="px-4 py-10 lg:px-20 xl:px-40 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)] flex flex-col md:flex-row md:items-center">
      {menu.data?.map((cat) => (
        <Link
          key={cat.id}
          href={`/menu/${cat.slug}`}
          className="w-full flex justify-center items-start flex-col gap-4 flex-1 min-h-[250px] max-h-[400px] bg-no-repeat bg-cover px-2 md:h-[300px] lg:h-[400px] lg:gap-10"
          style={{
            backgroundImage: `url(${cat.img})`,
            backgroundColor: cat.color,

            color: cat.color !== 'white' ? 'white' : 'black',
          }}
        >
          <h2 className="text-2xl md:text-3xl uppercase font-bold max-w-[15ch]">
            {cat.title}
          </h2>
          <p className="max-w-[20ch] sm:max-w-[35ch]">{cat.desc}</p>
          <button
            style={{
              color: cat.color === 'white' ? 'white' : 'black',
              backgroundColor: cat.color !== 'white' ? 'white' : 'black',
            }}
            className="p-2 font-bold rounded-md hover:opacity-80"
          >
            {' '}
            Explore{' '}
          </button>
        </Link>
      ))}
    </section>
  );
};
export default MenuPage;
