import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="py-72">
      <div className="flex flex-col">
        <h3 className="text-center mb-4">Something went wrong! Try again.</h3>
        <Link href="/" className="mx-auto">
          <Button>BACK TO HOMEPAGE</Button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
