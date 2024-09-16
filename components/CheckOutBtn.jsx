import { useShoppingCart } from "use-shopping-cart";

const CheckOutBtn = () => {
  const { redirectToCheckout } = useShoppingCart();
  const handleCheckout = async () => {
    try {
      const res = await redirectToCheckout();
      if (res?.error) {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      className="bg-black/80 w-full rounded-sm text-white/90 p-2 mt-2 uppercase"
      onClick={handleCheckout}
    >
      Proceed to Checkout
    </button>
  );
};

export default CheckOutBtn;
