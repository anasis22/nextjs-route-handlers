import { NextResponse , type NextRequest } from "next/server";

export function middleware(request : NextRequest){

    const response = NextResponse.next()

    const themePreference = request.cookies.get("theme")

    if(!themePreference){
        response.cookies.set("theme","light")
    }

    response.headers.set("custom-header","custom-value")
    
    return response;
   

    // if(request.nextUrl.pathname === "/time"){
    //     return NextResponse.rewrite(new URL("/hello",request.url))
    // }
}
