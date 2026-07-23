"use client";

import Link from "next/link";
import { Pencil, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";

interface LeadActionsProps {
  id: string;
}

export default function LeadActions({ id }: LeadActionsProps) {
  const router = useRouter();

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this lead?"
    );

    if (!confirmed) return;

    try {
      const response = await fetch(`/api/leads/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete lead");
      }

      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Failed to delete lead.");
    }
  };

  return (
    <div className="flex items-center justify-center gap-2">
      <Link
        href={`/leads/${id}/edit`}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition"
      >
        <Pencil size={18} />
      </Link>

      <button
        type="button"
        onClick={handleDelete}
        className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
}