"use client";

import { Bell, Menu, Search } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-2xl bg-slate-950/70 border-b border-white/10">
      <div className="h-16 px-8 flex items-center justify-between">

        {/* Left */}

        <div className="flex items-center gap-5">

          <button className="p-2 rounded-xl hover:bg-white/10 transition">
            <Menu size={22} />
          </button>

          <div className="relative">

            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search companies, leads..."
              className="
              w-[340px]
              rounded-2xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              py-3
              pl-11
              pr-4
              text-sm
              outline-none
              transition
              focus:border-cyan-400
              focus:ring-2
              focus:ring-cyan-400/20
              placeholder:text-slate-500
              "
            />

          </div>

        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          <button
            className="
            relative
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-3
            hover:bg-white/10
            transition
            "
          >
            <Bell size={18} />

            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-400"></span>
          </button>

          <div
            className="
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-2xl
            bg-gradient-to-br
            from-cyan-500
            to-blue-600
            font-semibold
            shadow-lg
            "
          >
            C
          </div>

        </div>

      </div>
    </header>
  );
}