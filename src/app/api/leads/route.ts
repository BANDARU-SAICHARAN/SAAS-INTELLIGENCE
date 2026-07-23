import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const lead = await prisma.lead.create({
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

    return NextResponse.json(lead, { status: 201 });
  } catch (error) {
    console.error("Create Lead Error:", error);

    return NextResponse.json(
      { error: "Failed to create lead" },
      { status: 500 }
    );
  }
}