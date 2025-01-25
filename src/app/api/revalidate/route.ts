import { revalidatePath } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST() {
  try {
    revalidatePath('/', 'layout')
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ revalidated: false, message: err }, { status: 500 })
  }
}
