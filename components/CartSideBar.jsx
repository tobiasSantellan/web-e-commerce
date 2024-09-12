"use client";
import { useShoppingCart } from "use-shopping-cart";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { ScrollArea } from "./ui/scroll-area";
import CartItem from "./CartItem";
import CheckOutBtn from "./CheckOutBtn";

const CartSideBar = () => {
  const {
    cartCount,
    cartDetails,
    shouldDisplayCart,
    handleCartClick,
    totalPrice,
  } = useShoppingCart();
  return (
    <Sheet
      open={shouldDisplayCart}
      onOpenChange={() => handleCartClick()}
      className="h-screen overflow-y-auto"
    >
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-left mb-8">
            My Shopping Cart({cartCount})
          </SheetTitle>
        </SheetHeader>
        <>
          {cartCount === 0 ? (
            <div className="flex flex-col items-center justify-center w-full h-[500px]">
              <h5 className="text-black/50">You Cart is Empty</h5>
            </div>
          ) : (
            <ScrollArea className="h-[70vh] xl:h-[74vh] pr-4  ">
              {cartDetails &&
                Object.entries(cartDetails).map(([key, item]) => (
                  <CartItem key={key} item={item} />
                ))}
            </ScrollArea>
          )}
        </>
        {cartCount > 0 && (
          <div>
            <div className="flex justify-between font-semibold">
              <div className="uppercase mb-5 lg:mb-0">Total</div>
              <div className="">${totalPrice}</div>
            </div>
            <CheckOutBtn />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
