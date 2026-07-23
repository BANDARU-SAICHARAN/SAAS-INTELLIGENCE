"use client";

import { useState } from "react";
import { Search, Sparkles, Save } from "lucide-react";

export default function ResearchPage() {
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);
      setSaved(false);

      const response = await fetch("/api/research", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          website,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setResult(data.response);
      } else {
        setResult(data.error);
      }
    } catch (error) {
      console.error(error);
      setResult("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    try {
      const leadScore =
        Number(result.match(/Lead Score:\s*(\d+)/i)?.[1]) || 0;

      const industry =
        result.match(/Industry:\s*([\s\S]*?)(?:Lead Score:|Summary:)/i)?.[1]?.trim() ||
        "Unknown";

      const summary =
        result.match(/Summary:\s*([\s\S]*?)(?:Outreach Tip:|$)/i)?.[1]?.trim() ||
        result;

      const outreachTip =
        result.match(/Outreach Tip:\s*([\s\S]*)/i)?.[1]?.trim() || "";

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          website,
          industry,
          leadScore,
          summary,
          outreachTip,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save lead");
      }

      setSaved(true);
      alert("Lead Saved Successfully!");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while saving.");
    }
  };

  return (
    <div className="mx-auto max-w-6xl p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          Company Research
        </h1>

        <p className="mt-2 text-slate-400">
          Analyze companies with AI and save them as leads.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Company Website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-5 py-4 text-white outline-none focus:border-cyan-400"
            />

            <button
              onClick={handleAnalyze}
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Search size={18} />
              {loading ? "Analyzing..." : "Analyze Company"}
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 backdrop-blur-xl">
          <div className="mb-6 flex items-center gap-2">
            <Sparkles className="text-cyan-400" size={22} />
            <h2 className="text-2xl font-semibold text-white">
              AI Analysis
            </h2>
          </div>

          {loading ? (
            <p className="text-slate-400">
              AI is analyzing the company...
            </p>
          ) : result ? (
            <>
              <pre className="whitespace-pre-wrap font-sans leading-8 text-slate-300">
                {result}
              </pre>

              <button
                onClick={handleSave}
                className="mt-8 flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
              >
                <Save size={18} />
                {saved ? "Lead Saved ✓" : "Save Lead"}
              </button>
            </>
          ) : (
            <p className="text-slate-500">
              Your AI analysis will appear here.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}