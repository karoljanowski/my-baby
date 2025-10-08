import { verifySession } from "@/server/session";
import { NextRequest, NextResponse } from "next/server";
import { PDFDocument, StandardFonts } from "pdf-lib";

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const userId = await verifySession();

    if (!userId) {
        return new NextResponse("Unauthorized", { status: 401 });
    }

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