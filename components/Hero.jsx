import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="pt-[192px] pb-[120px] md:py-0 md:h-[720px] relative overflow-hidden bg-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between -mt-[59px]">
          <div className="w-full xl:max-w-[580px] md:h-[820px] flex flex-col justify-center items-start xl:ml-[50px]">
            <h1 className="text-center xl:text-left mb-6">
              Where Cycling <span className="text-accent">Joyful</span> Is Born
            </h1>
            <p className="mb-10 text-lg max-w-[508px] text-center xl:text-left font-light">
              From beginners to experienced riders, we offer a wide range of
              high-quality bikes, designed to suit your needs and lifestyle.
            </p>
            <div className="mx-auto md:mx-0">
              <Link href="/our-bikes">
                <Button>SHOP NOW</Button>
              </Link>
            </div>
          </div>
          <div className="hidden xl:flex mt-[-120px] mr-[50px] ">
            <Image
              src="/hero/hero_bike.png"
              width={650}
              height={480}
              alt="hero-image"
              quality={100}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
