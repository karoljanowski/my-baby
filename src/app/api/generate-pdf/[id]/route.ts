import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";
import { prisma } from "@/lib/prisma";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    console.log("Generating PDF");
    const { id } = await params;

    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595, 842]); // A4
    const { height } = page.getSize();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    
    page.drawText("Tu bydzie dziennik", { font, x: 50, y: height / 2, size: 50 });

    const pdfBytes = await pdfDoc.save();

    return new NextResponse(Buffer.from(pdfBytes), {
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="dziennik.pdf"',
        },
    });
}