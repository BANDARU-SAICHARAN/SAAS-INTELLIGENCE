"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Lead = {
  id: string;
  company: string;
  website: string | null;
  industry: string | null;
  leadScore: number;
  status: string;
  summary: string;
  outreachTip: string | null;
};

export default function EditLeadForm({ lead }: { lead: Lead }) {
  const router = useRouter();

  const [company, setCompany] = useState(lead.company);
  const [website, setWebsite] = useState(lead.website || "");
  const [industry, setIndustry] = useState(lead.industry || "");
  const [leadScore, setLeadScore] = useState(lead.leadScore);
  const [status, setStatus] = useState(lead.status);
  const [summary, setSummary] = useState(lead.summary);
  const [outreachTip, setOutreachTip] = useState(lead.outreachTip || "");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const response = await fetch(`/api/leads/${lead.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company,
        website,
        industry,
        leadScore,
        status,
        summary,
        outreachTip,
      }),
    });

    setLoading(false);

    if (!response.ok) {
      alert("Failed to update lead.");
      return;
    }

    alert("Lead updated successfully!");

    router.push("/leads");
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="mb-2 block font-medium">Company</label>
        <input
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Company Name"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Website</label>
        <input
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Website"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Industry</label>
        <input
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full rounded-lg border p-3"
          placeholder="Industry"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Lead Score</label>
        <input
          type="number"
          value={leadScore}
          onChange={(e) => setLeadScore(Number(e.target.value))}
          className="w-full rounded-lg border p-3"
          placeholder="Lead Score"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Status</label>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full rounded-lg border p-3"
        >
          <option value="New">🟢 New</option>
          <option value="Contacted">🟡 Contacted</option>
          <option value="Qualified">🔵 Qualified</option>
          <option value="Proposal Sent">🟣 Proposal Sent</option>
          <option value="Won">🏆 Won</option>
          <option value="Lost">🔴 Lost</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block font-medium">Summary</label>
        <textarea
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          rows={4}
          className="w-full rounded-lg border p-3"
          placeholder="Summary"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium">Outreach Tip</label>
        <textarea
          value={outreachTip}
          onChange={(e) => setOutreachTip(e.target.value)}
          rows={3}
          className="w-full rounded-lg border p-3"
          placeholder="Outreach Tip"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Updating..." : "Update Lead"}
      </button>
    </form>
  );
}