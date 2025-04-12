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
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h1 className="text-5xl font-semibold text-gray-900 mb-4">
              Find Your Car
            </h1>
            <p className="text-gray-500 text-lg">
              Browse our collection of premium vehicles
            </p>
          </div>

          {/* Main Content */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Filters Section */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                <div className="mb-6">
                  <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Filters
                  </h2>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <CarFilters filters={filtersData.data} />
                </div>
              </div>
            </div>

            {/* Car Listings */}
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Available Cars
                </h2>
              </div>
              <div className="space-y-6">
                <CarListings />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
