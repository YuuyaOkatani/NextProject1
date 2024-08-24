import { NextResponse, type NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const response = NextResponse.next(); 
    const themePreference = req.cookies.get("theme")
    if(!themePreference){
        response.cookies.set("theme", "dark")
    }
    response.headers.set("custom-header", "custom-value")
    return response;
}
//     if(req.nextUrl.pathname === "/profile"){
//         return NextResponse.redirect(new URL ("/hello", req.url))
//     }
//}

// export const config = {
//     matcher: "/profile"
// }

