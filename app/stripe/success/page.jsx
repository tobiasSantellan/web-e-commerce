"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

const SuccessPage = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    const paymentSuccess = true;

    if (paymentSuccess) {
      clearCart();
    }
  }, [clearCart]);

  return (
    <section className="py-72">
      <div className="flex flex-col">
        <h3 className="text-center mb-4">
          Your Payment Was Succesfull. <br /> Thank You!
        </h3>
        <Link href="/" className="mx-auto">
          <Button>BACK TO HOMEPAGE</Button>
        </Link>
      </div>
    </section>
  );
};

export default SuccessPage;
