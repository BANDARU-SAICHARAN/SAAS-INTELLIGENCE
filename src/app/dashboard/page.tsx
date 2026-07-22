import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import RevenueChart from "@/components/dashboard/revenue-chart";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import {
  Users,
  Flame,
  CalendarDays,
  DollarSign,
  TrendingUp,
} from "lucide-react";  


const stats = [
  {
    title: "Total Leads",
    value: "1,245",
    icon: Users,
    change: "+12%",
  },
  {
    title: "Hot Leads",
    value: "325",
    icon: Flame,
    change: "+8%",
  },
  {
    title: "Meetings",
    value: "87",
    icon: CalendarDays,
    change: "+21%",
  },
  {
    title: "Revenue",
    value: "$48K",
    icon: DollarSign,
    change: "+16%",
  },
];  

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return (

    <div className="flex min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
  <Sidebar />

  <main className="flex-1 overflow-y-auto">
    <Navbar />

    <div className="px-10 py-8">

      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            Welcome Back 👋
          </p>

          <h1 className="mt-2 text-4xl font-bold tracking-tight">
            AI Sales Dashboard
          </h1>
        </div>

        <button
          className="
            rounded-2xl
            bg-cyan-500
            px-5
            py-3
            font-medium
            text-black
            transition
            hover:bg-cyan-400
          "
        >
          + New Lead
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => {
  const Icon = item.icon;

  return (
    <div
      key={item.title}
      className="
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-5
        transition
        hover:border-cyan-400/30
        hover:bg-white/[0.05]
      "
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">
            {item.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold">
            {item.value}
          </h2>
        </div>

        <div className="rounded-2xl bg-cyan-500/10 p-3">
          <Icon
            size={24}
            className="text-cyan-400"
          />
        </div>
      </div>

      <div className="mt-5 flex items-center gap-2 text-sm">
        <TrendingUp
          size={16}
          className="text-emerald-400"
        />

        <span className="text-emerald-400">
          {item.change}
        </span>

        <span className="text-slate-500">
          this month
        </span>
      </div>
    </div>
  );
})}
      </div>
      {/* Revenue + AI Insights */}
<div className="mt-8 grid gap-6 xl:grid-cols-3">

  {/* Revenue Card */}
  <div
    className="
      xl:col-span-2
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-6
    "
  >
    <div className="flex items-center justify-between">
      <h2 className="text-xl font-semibold">
        Revenue Overview
      </h2>

      <span className="text-cyan-400">
        Last 30 Days
      </span>
    </div>

    <div className="mt-8 h-72">
      <RevenueChart />
    </div>
  </div>
    {/* AI Insights */}
  <div
    className="
      rounded-3xl
      border
      border-white/10
      bg-white/[0.03]
      p-6
    "
  >
    <h2 className="text-xl font-semibold">
      AI Insights
    </h2>

    <div className="mt-6 space-y-4">
      <div className="rounded-2xl bg-cyan-500/10 p-4">
        🚀 15 new hot leads today
      </div>

      <div className="rounded-2xl bg-white/5 p-4">
        📈 Salesforce intent increased
      </div>

      <div className="rounded-2xl bg-white/5 p-4">
        💡 Follow up with Amazon
      </div>

      <div className="rounded-2xl bg-white/5 p-4">
        ⭐ AI score improved by 18%
      </div>
    </div>
  </div>
  </div>
</div>
</main>
</div>
  );
}