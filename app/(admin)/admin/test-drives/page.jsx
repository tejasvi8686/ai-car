import { TestDrivesList } from "./_components/test-drive-list";

export const metadata = {
  title: "Test Drives | Vehiql Admin",
  description: "Manage test drive bookings",
};

export default function TestDrivesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Test Drive Management</h1>
            <p className="mt-2 text-sm text-gray-600">Manage and track all test drive bookings</p>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <TestDrivesList />
        </div>
      </div>
    </div>
  );
}