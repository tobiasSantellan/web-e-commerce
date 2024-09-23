import { useShoppingCart } from "use-shopping-cart";
import { useState } from "react";

const CheckOutBtn = () => {
  const { redirectToCheckout } = useShoppingCart();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleCheckout = async () => {
    setIsProcessing(true);
    try {
      const res = await redirectToCheckout();
      if (!res?.error) {
        console.log(res);
      } else {
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <button
      className={`bg-black/80 w-full rounded-sm text-white/90 p-2 mt-2 uppercase ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={handleCheckout}
      disabled={isProcessing}
    >
      {isProcessing ? "Processing..." : "Proceed to Checkout"}
    </button>
  );
};

export default CheckOutBtn;
