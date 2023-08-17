const OrdersPage = () => {
  return (
    <section className="px-4 lg:px-20 min-h-[calc(100vh-9em)] md:min-h-[calc(100vh-13em)]">
      <table className="w-full text-left border-separate border-spacing-3">
        <thead>
          <tr>
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-red-50 text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">4335623542</td>
            <td className="py-6 px-1">19.02.2023</td>
            <td className="py-6 px-1">89.00</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="odd:bg-gray-100 text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">4335623542</td>
            <td className="py-6 px-1">19.02.2023</td>
            <td className="py-6 px-1">89.00</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
          <tr className="odd:bg-gray-100 text-sm md:text-base">
            <td className="hidden md:block py-6 px-1">4335623542</td>
            <td className="py-6 px-1">19.02.2023</td>
            <td className="py-6 px-1">89.00</td>
            <td className="hidden md:block py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2)
            </td>
            <td className="py-6 px-1">On the way (approx. 10min)...</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};
export default OrdersPage;
