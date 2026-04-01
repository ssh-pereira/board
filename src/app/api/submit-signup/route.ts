import { NextResponse } from 'next/server';
import { z } from 'zod';
import { getNextId, appendSignupRow } from '@/utils/googleSheets';

const bodySchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = bodySchema.parse(body);

    console.log(`[SIGNUP] Processing signup for: ${parsed.email}`);

    const nextId = await getNextId();
    await appendSignupRow(nextId, parsed.name, parsed.email);
    console.log(`[SIGNUP] Google Sheets success for: ${parsed.email}`);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('[SIGNUP] Submit signup error:', {
      message: err?.message,
      stack: err?.stack,
      issues: err?.issues,
      error: err,
    });

    if (err?.issues) {
      return NextResponse.json(
        { success: false, message: 'Invalid input' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
