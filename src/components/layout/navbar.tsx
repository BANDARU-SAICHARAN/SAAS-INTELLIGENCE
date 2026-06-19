import { Bell, Search } from "lucide-react";

export default function Navbar() {
  return (
    <div className="h-16 border-b flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search leads..."
          className="outline-none"
        />
      </div>

      <div className="flex items-center gap-5">
        <Bell size={20} />

        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
          C
        </div>
      </div>
    </div>
  );
}