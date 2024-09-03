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
  const bikes = await getData(params.slug);
  console.log(bikes);
  return <div>ProductDetailsPage</div>;
};

export default ProductDetailsPage;
