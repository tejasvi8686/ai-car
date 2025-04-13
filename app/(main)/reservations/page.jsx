import { getUserTestDrives } from "@/actions/test-drive";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { ReservationsList } from "./_components/reservations-list";

export const metadata = {
  title: "My Reservations | Vehiql",
  description: "Manage your test drive reservations",
};

export default async function ReservationsPage() {
  const { userId } = await auth();
  if (!userId) {
    redirect("/sign-in?redirect=/reservations");
  }

  const reservationsResult = await getUserTestDrives();

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">Your Reservations</h1>
            <p className="text-gray-500 mt-1">Manage your test drive appointments</p>
          </div>
        </div>
        
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-6">
            <ReservationsList initialData={reservationsResult} />
          </div>
        </div>
      </div>
    </div>
  );
}
