import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';



export async function GET() {
  try {
    const experiences = await prisma.experience.findMany({
      orderBy: { startDate: 'desc' },
    });
    return NextResponse.json(experiences);
  } catch (error) {
    console.error('Error fetching experiences:', error);
    return NextResponse.json({ error: 'Failed to load experiences' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const newExperience = await prisma.experience.create({
      data: body,
    });
    return NextResponse.json(newExperience, { status: 201 });
  } catch (error) {
    console.error('Error creating experience:', error);
    return NextResponse.json({ error: 'Failed to create experience' }, { status: 500 });
  }
}
