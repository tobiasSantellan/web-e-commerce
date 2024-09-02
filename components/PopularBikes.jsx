import { client } from "@/app/lib/sanity";
import Link from "next/link";
import { Button } from "./ui/button";
import PopularBikeCarrousel from "./PopularBikeCarrousel";

const getData = async () => {
  const query = `*[_type == "product" && references(*[_type == "category" && name == "popular" ]._id, categories)]{
_id,
  name,
  description,
  images,
  price,
  price_id,
  "slug": slug.current,
  "categories": categories[]-> {
  name 
  }
}`;

  const data = await client.fetch(query);

  return data;
};

const PopularBikes = async () => {
  const bikes = await getData();
  console.log(bikes);
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <h2 className="text-center">Most Popular Bikes</h2>
        <p className="text-center  mb-[30px] text-black/80">
          Top Global Premium Brands in one Destination.
        </p>
        <PopularBikeCarrousel bikes={bikes} />
        <Link href="/our-bikes">
          <Button className="uppercase text-center mx-auto flex justify-center items-center px-8">
            See all bikes
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default PopularBikes;
