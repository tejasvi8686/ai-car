import { getFeaturedCars } from "@/actions/home";
import Hero from "@/components/Hero";

export default async function Home() {
  const featuredCars = await getFeaturedCars();

  return (
    <div className="">
      <Hero featuredCars={featuredCars} />
    </div>
  );
}
