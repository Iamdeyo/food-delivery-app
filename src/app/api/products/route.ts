import { prisma } from '@/utils/connect';
import { NextRequest, NextResponse } from 'next/server';

// FETCH ALL CATEGORIES
export const GET = async (req: NextRequest) => {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');

  try {
    const products = await prisma.product.findMany({
      where: {
        ...(category ? { catSlug: category } : { isFeatured: true }),
      },
    });

    return new NextResponse(
      JSON.stringify({ message: 'all categories', data: products }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: 'Something went wrong' }),
      { status: 500 }
    );
  }
};
