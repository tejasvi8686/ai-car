import { CarFilters } from "./_components/car-filters";
import { getCarFilters } from "@/actions/car-listing";
import { CarListings } from "./_components/cars-listing";

export const metadata = {
  title: "Cars | Vehiql",
  description: "Browse and search for your dream car",
};

export default async function CarsPage() {
  const filtersData = await getCarFilters();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 gradient-title bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Browse Cars
          </h1>
          <p className="text-gray-600 text-lg mb-12">
            Discover your perfect ride from our extensive collection of vehicles
          </p>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Section */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
                <CarFilters filters={filtersData.data} />
              </div>
            </div>

            {/* Car Listings */}
            <div className="flex-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <CarListings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
