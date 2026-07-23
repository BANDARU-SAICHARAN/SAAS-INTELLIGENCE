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
        sticky
        top-0
        h-screen
        border-r
        border-slate-800
        bg-slate-950/95
        backdrop-blur-xl
        transition-all
        duration-500
        ease-in-out
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className="flex items-center px-5 py-6">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 shadow-lg shadow-cyan-500/30">
            <BrainCircuit size={22} className="text-white" />
          </div>

          {!collapsed && (
            <div>
              <h1 className="text-lg font-bold tracking-wide text-white">
                AI Sales
              </h1>

              <p className="text-xs text-slate-400">
                Intelligence
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-8 flex flex-col gap-3 px-3">
        <SidebarItem
          icon={LayoutDashboard}
          title="Dashboard"
          href="/dashboard"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={BrainCircuit}
          title="Research"
          href="/research"
          collapsed={collapsed}
        />

        <SidebarItem
          icon={Users}
          title="Leads"
          href="/leads"
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
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-24 left-0 w-full px-3">
        <SidebarItem
          icon={Settings}
          title="Settings"
          href="/settings"
          collapsed={collapsed}
        />
      </div>

      {/* Collapse Button */}
      <div className="absolute bottom-6 left-0 w-full px-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="
            flex
            w-full
            items-center
            justify-center
            rounded-2xl
            border
            border-slate-800
            bg-slate-900/70
            py-3
            text-slate-300
            transition-all
            duration-300
            hover:border-cyan-500/40
            hover:bg-slate-800
            hover:text-cyan-400
          "
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
    </aside>
  );
}