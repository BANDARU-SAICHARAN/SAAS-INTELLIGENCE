"use client";

import { Bell, Search, Sparkles, Plus } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-3xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Left */}
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              placeholder="Search companies, leads..."
              className="
                w-[420px]
                max-w-full
                rounded-2xl
                border
                border-slate-800
                bg-slate-900/60
                py-3
                pl-11
                pr-4
                text-sm
                text-white
                outline-none
                transition-all
                duration-300
                placeholder:text-slate-500
                hover:border-slate-700
                focus:border-cyan-400
                focus:ring-4
                focus:ring-cyan-500/10
              "
            />
          </div>

          {/* AI Assistant */}
          <button
            className="
              hidden
              lg:flex
              items-center
              gap-2
              rounded-2xl
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-4
              py-3
              text-sm
              font-medium
              text-cyan-300
              transition-all
              hover:bg-cyan-500/20
              hover:shadow-lg
              hover:shadow-cyan-500/20
            "
          >
            <Sparkles size={16} />
            AI Assistant
          </button>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* New Lead */}
          <button
            className="
              hidden
              lg:flex
              items-center
              gap-2
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-600
              px-4
              py-3
              text-sm
              font-semibold
              text-white
              transition-all
              hover:scale-105
              hover:shadow-xl
              hover:shadow-cyan-500/30
            "
          >
            <Plus size={16} />
            New Lead
          </button>

          {/* Notifications */}
          <button
            className="
              relative
              rounded-2xl
              border
              border-slate-800
              bg-slate-900/60
              p-3
              transition-all
              duration-300
              hover:border-cyan-500/40
              hover:bg-slate-800
              hover:shadow-lg
              hover:shadow-cyan-500/20
            "
          >
            <Bell size={18} className="text-slate-300" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 animate-pulse rounded-full bg-cyan-400" />
          </button>

          {/* Profile */}
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-1">
            <UserButton
              appearance={{
                elements: {
                  avatarBox:
                    "h-10 w-10 rounded-xl ring-2 ring-cyan-500/20 hover:ring-cyan-400 transition-all",
                },
              }}
            />
          </div>
        </div>
      </div>
    </header>
  );
}