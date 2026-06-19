"use client";

import {
  LayoutDashboard,
  Users,
  Brain,
  Briefcase,
  BarChart3,
  Settings,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-slate-900 text-white p-6">
      <h1 className="text-2xl font-bold mb-10 text-blue-400">
        AI Sales
      </h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
          <LayoutDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
          <Users size={20} />
          <span>Leads</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
          <Brain size={20} />
          <span>Research</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">

          <Briefcase size={20} />
          <span>Outreach</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">

          <BarChart3 size={20} />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 cursor-pointer transition">
            
          <Settings size={20} />
          <span>Settings</span>
        </div>
      </div>
    </div>
  );
}