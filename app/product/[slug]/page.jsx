import { client, urlFor } from "@/app/lib/sanity";
import Image from "next/image";
import AddToCartBtn from "@/components/AddToCartBtn";
import {
  Bike,
  Clock,
  PackageCheck,
  RefreshCw,
  ChevronLeft,
} from "lucide-react";
import Link from "next/link";

const getData = async (slug) => {
  const query = `*[_type == "product" && slug.current == "${slug}" ] [0] {
  _id,
  images,
  name,
  price,
  price_id,
  images,
  description,
  "slug": slug.current,
  "category": categories->{name}
  }`;

  const data = await client.fetch(query);
  return data;
};

const ProductDetailsPage = async ({ params }) => {
  const bike = await getData(params.slug);
  // console.log(bike);
  return (
    <section className="pt-[70px] pb-32 ">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-14">
          <div className="xl:flex-1 h-[460px] bg-gray-200 xl:w-[700px] xl:h-[540px] flex justify-center items-center rounded-sm ">
            <Image
              src={urlFor(bike.images[0]).url()}
              width={473}
              height={250}
              priority
              alt="bike-image"
            />
          </div>
          <div className=" flex-1 flex flex-col justify-center items-start gap-10 rounded-sm">
            <Link
              href={"/"}
              className="text-sm flex items-center gap-2 font-semibold"
            >
              <ChevronLeft size={20} />
              Back To Home
            </Link>
            <div className="flex flex-col gap-6 items-start">
              <div>
                <h3 className="text-gray-800">{bike.name}</h3>
                <p className="text-red-600 text-lg font-semibold">
                  ${bike.price}
                </p>
              </div>
              <p className=" text-sm font-light">{bike.description}</p>
              <AddToCartBtn
                price_id={bike.price_id}
                name={bike.name}
                currency="USD"
                description={bike.description}
                images={bike.images}
                price={bike.price}
                text="Add To Cart"
                btnStyles=" btn-accent rounded-sm uppercase text-sm text-center p-2 text-white hover:bg-accent-hover "
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex gap-2 items-center">
                <PackageCheck size={20} className="text-accent" />
                <p className="text-xs font-light">
                  Free shipping on orders over $150
                </p>
              </div>
              <div className="flex gap-2">
                <RefreshCw size={20} className="text-accent" />
                <p className="text-xs font-light">Free return for 30 days</p>
              </div>
              <div className="flex gap-2">
                <Clock size={20} className="text-accent" />
                <p className="text-xs font-light">Fast delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
