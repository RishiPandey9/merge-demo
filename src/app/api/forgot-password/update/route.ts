import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)

  if (!payload?.email || !payload?.password) {
    return NextResponse.json('Email and password are required', { status: 400 })
  }

  return NextResponse.json('Password updated successfully', { status: 200 })
}
