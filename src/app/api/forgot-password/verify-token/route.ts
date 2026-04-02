import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)

  if (!payload?.token) {
    return NextResponse.json('Token is required', { status: 400 })
  }

  return NextResponse.json({ email: 'demo@example.com' }, { status: 200 })
}
