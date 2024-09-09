"use client";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";

const CartSideBar = () => {
  return (
    <Sheet>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>My Shopping Cart</SheetTitle>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartSideBar;
