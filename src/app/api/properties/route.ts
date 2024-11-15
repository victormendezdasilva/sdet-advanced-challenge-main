import { mockProperties } from "@/lib/mockDB/mockProperties";

export async function GET(request: Request) {

    return new Response(
        JSON.stringify({
        data: mockProperties,
        }),
    );
}
