import Sidebar from "@/components/layout/sidebar";
import Navbar from "@/components/layout/navbar";
import RevenueChart from "@/components/dashboard/revenue-chart";

import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { prisma } from "@/lib/prisma";

import {
  Users,
  Flame,
  DollarSign,
  TrendingUp,
  Sparkles,
} from "lucide-react";

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const totalLeads = await prisma.lead.count();

  const hotLeads = await prisma.lead.count({
    where: {
      leadScore: {
        gte: 80,
      },
    },
  });

  const averageLeadScore = await prisma.lead.aggregate({
    _avg: {
      leadScore: true,
    },
  });

  const stats = [
    {
      title: "Total Leads",
      value: totalLeads.toLocaleString("en-IN"),
      icon: Users,
      change: "Live",
    },
    {
      title: "Hot Leads",
      value: hotLeads.toLocaleString("en-IN"),
      icon: Flame,
      change: "Live",
    },
    {
      title: "Average Score",
      value: Math.round(
        averageLeadScore._avg.leadScore ?? 0
      ).toString(),
      icon: TrendingUp,
      change: "Live",
    },
    {
      title: "Revenue",
      value: "₹0",
      icon: DollarSign,
      change: "Coming Soon",
    },
  ];

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-[#020617] text-white">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-cyan-500/15 blur-[140px]" />
        <div className="absolute right-20 top-40 h-80 w-80 rounded-full bg-violet-500/15 blur-[150px]" />
        <div className="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />
      </div>

      <Sidebar />

      <main className="relative z-10 flex-1 overflow-y-auto">
        <Navbar />

        <div className="px-10 py-8">

          {/* Header */}

          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                <Sparkles size={15} />
                AI Powered Sales Intelligence
              </div>

              <h1 className="mt-5 text-5xl font-bold tracking-tight">
                Dashboard
              </h1>

              <p className="mt-3 max-w-xl text-slate-400">
                Monitor your leads, AI research and analytics from one intelligent dashboard.
              </p>

            </div>

            <button className="rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 px-7 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all duration-300 hover:-translate-y-1 hover:scale-105">
              + New Lead
            </button>

          </div>

          {/* KPI Cards */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-cyan-500/40 hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]"
                >

                  <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl transition-all duration-500 group-hover:scale-150" />

                  <div className="relative flex items-center justify-between">

                    <div>

                      <p className="text-sm text-slate-400">
                        {item.title}
                      </p>

                      <h2 className="mt-4 text-4xl font-bold">
                        {item.value}
                      </h2>

                    </div>

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-500/10">

                      <div className="absolute inset-0 animate-spin rounded-full border border-transparent border-t-cyan-400 opacity-80" />

                      <Icon
                        size={28}
                        className="relative z-10 text-cyan-400"
                      />

                    </div>

                  </div>

                  <div className="mt-6 flex items-center gap-2">

                    <TrendingUp
                      size={16}
                      className="text-emerald-400"
                    />

                    <span className="font-medium text-emerald-400">
                      {item.change}
                    </span>

                  </div>

                </div>

              );

            })}

          </div> 

                    {/* Revenue + AI Insights */}

          <div className="mt-10 grid gap-6 xl:grid-cols-3">

            {/* Revenue Card */}

            <div
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-7 backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_20px_70px_rgba(34,211,238,0.15)] xl:col-span-2"
            >

              <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

              <div className="relative flex items-center justify-between">

                <div>

                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                    Revenue Analytics
                  </p>

                  <h2 className="mt-2 text-2xl font-bold">
                    Revenue Overview
                  </h2>

                  <p className="mt-2 text-slate-400">
                    AI generated analytics from your live sales data.
                  </p>

                </div>

                <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-300">
                  Live Data
                </div>

              </div>

              <div className="mt-8 grid grid-cols-3 gap-5">

                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                  <p className="text-sm text-slate-500">
                    Revenue
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    ₹0
                  </h3>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                  <p className="text-sm text-slate-500">
                    Hot Leads
                  </p>

                  <h3 className="mt-2 text-3xl font-bold">
                    {hotLeads}
                  </h3>

                </div>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                  <p className="text-sm text-slate-500">
                    Avg Score
                  </p>

                  <h3 className="mt-2 text-3xl font-bold text-emerald-400">
                    {Math.round(
                      averageLeadScore._avg.leadScore ?? 0
                    )}
                  </h3>

                </div>

              </div>

              <div className="mt-8 h-80 rounded-3xl border border-slate-800 bg-slate-950/40 p-5">

                <RevenueChart />

              </div>

            </div>

            {/* AI Insights */}

            <div
              className="group relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-7 backdrop-blur-xl"
            >

              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-violet-500/10 blur-[120px]" />

              <div className="relative">

                <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
                  AI Assistant
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  AI Insights
                </h2>

                <p className="mt-2 text-slate-400">
                  Recommendations generated from your live database.
                </p>

                <div className="mt-8 space-y-4">

                  <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-5">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500 text-xl">
                        🚀
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          {hotLeads} Hot Leads
                        </h3>

                        <p className="mt-1 text-sm text-slate-300">
                          High quality companies detected from AI research.
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/20 text-xl">
                        📊
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          {totalLeads} Total Leads
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Stored securely inside your Neon database.
                        </p>

                      </div>

                    </div>

                  </div>

                  <div className="rounded-2xl border border-slate-800 bg-slate-950/40 p-5">

                    <div className="flex items-start gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-xl">
                        ⭐
                      </div>

                      <div>

                        <h3 className="font-semibold">
                          Average Score
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          {Math.round(
                            averageLeadScore._avg.leadScore ?? 0
                          )} / 100
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>  

                    {/* Footer */}

          <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-xl">

            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

              <div>

                <h3 className="text-lg font-semibold">
                  AI Sales Intelligence
                </h3>

                <p className="mt-1 text-sm text-slate-400">
                  Monitor your leads, AI research and analytics from one intelligent dashboard.
                </p>

              </div>

              <div className="flex gap-10">

                <div>

                  <p className="text-sm text-slate-500">
                    Leads
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-cyan-400">
                    {totalLeads.toLocaleString("en-IN")}
                  </h4>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Hot Leads
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-emerald-400">
                    {hotLeads.toLocaleString("en-IN")}
                  </h4>

                </div>

                <div>

                  <p className="text-sm text-slate-500">
                    Avg Score
                  </p>

                  <h4 className="mt-1 text-2xl font-bold text-violet-400">
                    {Math.round(
                      averageLeadScore._avg.leadScore ?? 0
                    )}
                  </h4>

                </div>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}