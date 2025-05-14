// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const proto = request.headers.get("x-forwarded-proto")
  const host = request.headers.get("host") || ""

  // Redirect HTTP → HTTPS
  if (proto === "http") {
    return NextResponse.redirect(`https://${host}${request.nextUrl.pathname}`, 301)
  }

  // Redirect www → non-www
  if (host.startsWith("www.")) {
    const newHost = host.replace(/^www\./, "")
    return NextResponse.redirect(`https://${newHost}${request.nextUrl.pathname}`, 301)
  }

  return NextResponse.next()
}
