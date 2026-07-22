"use client";

import { useState } from "react";
import {
  Menu,
  ChevronLeft,
  LayoutDashboard,
  Users,
  BrainCircuit,
  Mail,
  BarChart3,
  Settings,
} from "lucide-react";

import SidebarItem from "./sidebar-item";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <aside
      className={`
        h-screen
        sticky
        top-0
        transition-all
        duration-300
        bg-slate-950/95
        backdrop-blur-xl
        border-r
        border-slate-800
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-800">

        {!collapsed && (
          <h1 className="text-xl font-bold text-cyan-400">
            AI Sales
          </h1>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="rounded-lg p-2 hover:bg-slate-800 transition"
        >
          {collapsed ? <Menu size={22} /> : <ChevronLeft size={22} />}
        </button>
      </div>

      {/* Menu */}
      <div className="mt-5 space-y-2 px-3">

        <SidebarItem
          icon={LayoutDashboard}
          title="Dashboard"
          href="/dashboard"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={Users}
          title="Leads"
          href="/leads"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={BrainCircuit}
          title="Research"
          href="/research"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={Mail}
          title="Outreach"
          href="/outreach"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={BarChart3}
          title="Analytics"
          href="/analytics"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={Settings}
          title="Settings"
          href="/settings"
          collapsed={collapsed}
        />

      </div>
    </aside>
  );
}