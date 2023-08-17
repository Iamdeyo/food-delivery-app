import Image from 'next/image';

const CartIcon = () => {
  return (
    <div className="flex items-center md:gap-2">
      <div className="w-8 h-8 relative md:w-4 md:h-4 ">
        <Image src={'/cart.png'} alt="cart" fill sizes="100%" />
      </div>
      <span>Cart (3)</span>
    </div>
  );
};
export default CartIcon;
