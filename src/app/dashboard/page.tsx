import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1">
        <Navbar />

        <div className="p-8">
          <h1 className="text-3xl font-bold mb-6">
            Dashboard
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <div className="border rounded-xl p-6">
              <h2 className="text-gray-500">Total Leads</h2>
              <p className="text-3xl font-bold">1,245</p>
            </div>

            <div className="border rounded-xl p-6">
              <h2 className="text-gray-500">Hot Leads</h2>
              <p className="text-3xl font-bold">325</p>
            </div>

            <div className="border rounded-xl p-6">
              <h2 className="text-gray-500">Meetings</h2>
              <p className="text-3xl font-bold">87</p>
            </div>

            <div className="border rounded-xl p-6">
              <h2 className="text-gray-500">Revenue</h2>
              <p className="text-3xl font-bold">$48K</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}