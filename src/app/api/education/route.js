import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
export async function GET() {
  try {
    const education = await prisma.education.findMany({
      orderBy: { startDate: 'desc' },
    });

    return NextResponse.json(education);
  } catch (error) {
    console.error('Error fetching education:', error);
    return NextResponse.json({ error: 'Failed to fetch education data' }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json()
    const newEducation = await prisma.education.create({ data: body })
    return NextResponse.json(newEducation)
  } catch (error) {
    console.error('Error adding education:', error)
    return NextResponse.json({ error: 'Failed to create education' }, { status: 500 })
  }
}