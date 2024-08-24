import { headers } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(req: NextRequest){
    const requestHeaders = new Headers(req.headers); 
    const headerList = headers()
    console.log(requestHeaders.get("Authorization"));
    console.log(headerList.get("Authorization"));
    
    
    return new Response("<h2>Profile API data</h2>", {
        headers: {
            "Content-Type": "text/html",
        },
    });
}