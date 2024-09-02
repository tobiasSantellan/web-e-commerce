"use client";
import { urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import Link from "next/link";
import { CgEye, CgShoppingBag } from "react-icons/cg";
import { Button } from "./ui/button";
import AddToCartBtn from "./AddToCartBtn";

const Bike = ({ bike }) => {
  const popularBikeCategory = bike.categories.find(
    (bike) => bike.name === "popular"
  );

  return (
    <div className="group">
      <div className="border rounded-sm h-[328px] mb-5 p-4 overflow-hidden relative">
        <div className="bg-gray-200 rounded-sm w-full h-full group-hover:bg-opacity-55 transition-all duration-300 flex justify-center items-center">
          {popularBikeCategory && (
            <Button className="absolute top-8 left-8 bg-accent text-white px-3 text-sm uppercase font-medium">
              Popular
            </Button>
          )}
          <Image
            src={urlFor(bike.images[0]).url()}
            width={240}
            height={147}
            alt={bike.images}
          />
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0">
          <AddToCartBtn />
          <Link href={`/product/${bike.slug}`}>
            <button className="btn-icon bg-[#121214]">
              <CgEye />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bike;
