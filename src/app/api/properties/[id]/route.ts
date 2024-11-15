import { mockProperties } from "@/lib/mockDB/mockProperties";import { getPropertyByIdQuery } from "@/lib/queries/GetPropertyById.query";

export async function GET(request: Request, { params }: { params: { id: number } }) {
    const { id } = params;
    let data;
    try {
        data = await getPropertyByIdQuery({ id });
    } catch (error) {
        return new Response(
        JSON.stringify({
            error
        }),
        {
            status: 404,
            headers: {
            "Content-Type": "application/json",
            },
        }
        );
    }
    
    return new Response(
        JSON.stringify({
        data,
        }),
        {
        headers: {
            "Content-Type": "application/json",
        },
        }
    );
}
