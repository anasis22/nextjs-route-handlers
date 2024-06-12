import { headers } from "next/headers"
import { type NextRequest } from "next/server"

export async function GET(request : NextRequest) {
    const requestHeaders = new Headers(request.headers)
    const headerList = headers()

    console.log(requestHeaders.get("Authorization"))
    console.log(requestHeaders.get("Authorization"))
    
    return new Response("Profile API Data")
}