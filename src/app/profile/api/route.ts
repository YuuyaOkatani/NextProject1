import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest){
    const requestHeaders = new Headers(req.headers); 
    const headerList = headers()
    cookies().set("resultsPerPage", "20")
    const theme = req.cookies.get("theme")
    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    console.log(theme)
    console.log(cookies().get("resultsPerPage"));
    
    
    return new Response("<h2>Profile API data</h2>", {
        headers: {
            "Content-Type": "text/html",
            "Set-Cookie": "theme=dark"
        },
    });
}