import { getSavedCars } from "@/actions/car-listing";
import { SavedCarsList } from "./_components/saved-cars-list";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Saved Cars | Vehiql",
  description: "View your saved cars and favorites",
};

export default async function SavedCarsPage() {
  // Check authentication on server
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/saved-cars");
  }

  // Fetch saved cars on the server
  const savedCarsResult = await getSavedCars();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Saved Cars</h1>
            <p className="text-gray-500 mt-1">Manage your favorite vehicles</p>
          </div>
         
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6">
            <SavedCarsList initialData={savedCarsResult} />
          </div>
        </div>
      </div>
    </div>
  );
}
