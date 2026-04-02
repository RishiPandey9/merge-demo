import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)

  if (!payload?.email) {
    return NextResponse.json('Email is required', { status: 400 })
  }

  return NextResponse.json('Reset link sent successfully', { status: 200 })
}
