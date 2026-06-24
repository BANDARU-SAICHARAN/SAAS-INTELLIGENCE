"use client";

import { useState } from "react";

export default function ResearchPage() {
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    try {
      setLoading(true);

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
        setResult(`Error: ${data.error}`);
      }
    } catch (error) {
      setResult("Something went wrong.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">
        Company Research
      </h1>

      <div className="flex flex-col gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className="border p-3 rounded"
        />

        <input
          type="text"
          placeholder="Website"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          className="border p-3 rounded"
        />

        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="bg-black text-white px-4 py-3 rounded"
        >
          {loading ? "Analyzing..." : "Analyze Company"}
        </button>

        {result && (
          <div className="border rounded-lg p-4 mt-4 bg-gray-50">
            <pre className="whitespace-pre-wrap">
              {result}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
