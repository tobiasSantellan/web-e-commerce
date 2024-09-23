import Link from "next/link";
import { Input } from "./ui/input";
import {
  RiYoutubeFill,
  RiFacebookFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from "react-icons/ri";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="pt-12 xl:pt-12 bg-black/90 text-white text-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8">
          <div>
            <h2 className="capitalize leading-tight mb-2">
              Subscribe to our newsletter
            </h2>
            <p className="font-light">
              Limited-time offers and exclusive content await
            </p>
          </div>
          <form className="flex flex-col xl:flex-row w-full max-w-[720px] mx-auto gap-5">
            <Input placeholder="Add Your Email" />
            <Button className="w-full xl:max-w-[150px] h-[60px]">JOIN</Button>
          </form>
          <div className="flex gap-8 mx-auto text-[20px] text-white/60 mb-10">
            <Link href="">
              <RiYoutubeFill />
            </Link>
            <Link href="">
              <RiFacebookFill />
            </Link>
            <Link href="">
              <RiInstagramFill />
            </Link>
            <Link href="">
              <RiPinterestFill />
            </Link>
            <Link href="">
              <RiTwitterFill />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
