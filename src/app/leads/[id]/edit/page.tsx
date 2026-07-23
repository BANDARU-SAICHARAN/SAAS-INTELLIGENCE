import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";
import EditLeadForm from "@/components/leads/EditLeadForm";

export default async function EditLeadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const lead = await prisma.lead.findUnique({
    where: {
      id,
    },
  });

  if (!lead) {
    notFound();
  }

  return (
    <div className="p-8">
      <h1 className="mb-6 text-3xl font-bold">Edit Lead</h1>

      <EditLeadForm lead={lead} />
    </div>
  );
}