import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
    const envVars = [
        'WP_API_URL',
        'NEXTAUTH_SECRET',
        'GOOGLE_CLIENT_ID',
    ];

    const status: Record<string, string> = {};

    envVars.forEach((key) => {
        status[`${key}_Status`] = process.env[key] ? 'SET' : 'MISSING';
    });

    return NextResponse.json(status);
}
