export const dynamic = "force-dynamic";
export async function GET(req: Request, {params}: {
    params:{id: string}
}) {
    return Response.json({
        time: new Date().toLocaleTimeString(), 

    })
}
