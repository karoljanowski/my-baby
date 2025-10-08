import { NextRequest, NextResponse } from "next/server"
import { verifySession } from "@/server/session";

const middleware = async (request: NextRequest) => {
    const userId = await verifySession();

    if (!userId) {
        return NextResponse.redirect(new URL('/logowanie', request.url));
    }
    
    return NextResponse.next();
}

export const config = {
    matcher: ["/dziennik/:path*"]
}

export default middleware;