import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();

    const updatedLead = await prisma.lead.update({
      where: { id },
      data: {
        company: body.company,
        website: body.website,
        industry: body.industry,
        leadScore: body.leadScore,
        status: body.status || "New",
        summary: body.summary,
        outreachTip: body.outreachTip,
      },
    });

    return NextResponse.json(updatedLead);
  } catch (error) {
    console.error("Update Error:", error);

    return NextResponse.json(
      { error: "Failed to update lead" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.lead.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete Error:", error);

    return NextResponse.json(
      { error: "Failed to delete lead" },
      { status: 500 }
    );
  }
}