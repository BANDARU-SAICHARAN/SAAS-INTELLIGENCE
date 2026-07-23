import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import Link from "next/link";
import { Search, Plus } from "lucide-react";
import LeadActions from "@/components/leads/LeadActions";

type Lead = Prisma.LeadGetPayload<{}>;

export default async function LeadsPage() {
  const leads: Lead[] = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="mx-auto max-w-7xl p-8">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white">
            Lead Management
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all AI generated leads from one place.
          </p>
        </div>

        <Link
          href="/research"
          className="flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          <Plus size={18} />
          New Lead
        </Link>
      </div>

      {/* Search */}
      <div className="mb-6">
        <div className="flex items-center gap-3 rounded-2xl border border-slate-700 bg-slate-900 px-5 py-4">
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            placeholder="Search company..."
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900">
        <table className="min-w-[1400px] w-full">
          <thead className="border-b border-slate-700 bg-slate-800">
            <tr>
              <th className="px-6 py-4 text-left text-slate-300">Company</th>
              <th className="px-6 py-4 text-left text-slate-300">Website</th>
              <th className="px-6 py-4 text-left text-slate-300">Industry</th>
              <th className="px-6 py-4 text-left text-slate-300">Score</th>
              <th className="px-6 py-4 text-left text-slate-300">Status</th>
              <th className="px-6 py-4 text-left text-slate-300">Summary</th>
              <th className="px-6 py-4 text-left text-slate-300">Created</th>
              <th className="px-6 py-4 text-center text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-16 text-center text-slate-500"
                >
                  No Leads Found
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-slate-800 hover:bg-slate-800/40"
                >
                  <td className="px-6 py-5 font-medium text-white">
                    {lead.company}
                  </td>

                  <td className="px-6 py-5">
                    <a
                      href={lead.website ?? "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:underline"
                    >
                      {lead.website}
                    </a>
                  </td>

                  <td className="px-6 py-5 text-slate-300">
                    {lead.industry}
                  </td>

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-cyan-500/20 px-4 py-1 text-sm font-semibold text-cyan-300">
                      {lead.leadScore}
                    </span>
                  </td>

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-4 py-1 text-sm font-semibold ${
                        lead.status === "New"
                          ? "bg-blue-500/20 text-blue-300"
                          : lead.status === "Contacted"
                          ? "bg-yellow-500/20 text-yellow-300"
                          : lead.status === "Qualified"
                          ? "bg-green-500/20 text-green-300"
                          : lead.status === "Proposal Sent"
                          ? "bg-purple-500/20 text-purple-300"
                          : lead.status === "Won"
                          ? "bg-emerald-500/20 text-emerald-300"
                          : "bg-red-500/20 text-red-300"
                      }`}
                    >
                      {lead.status}
                    </span>
                  </td>

                  <td className="max-w-sm truncate px-6 py-5 text-slate-300">
                    {lead.summary}
                  </td>

                  <td className="px-6 py-5 text-slate-400">
                    {lead.createdAt.toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <LeadActions id={lead.id} />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <p className="text-sm text-slate-400">
          Total Leads:{" "}
          <span className="font-semibold text-cyan-400">
            {leads.length}
          </span>
        </p>

        <Link
          href="/research"
          className="rounded-xl bg-cyan-500 px-5 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Add New Lead
        </Link>
      </div>
    </div>
  );
}