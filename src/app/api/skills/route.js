// app/api/skills/route.js
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const skills = await prisma.skill.findMany({
      orderBy: { level: 'asc' },
    });
    return NextResponse.json(skills);
  } catch (error) {
    console.error('Error fetching skills:', error);
    return NextResponse.json({ error: 'Failed to fetch skills' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, level } = body;

    if (!name || !level) {
      return NextResponse.json({ error: 'Name and level are required' }, { status: 400 });
    }

    const newSkill = await prisma.skill.create({
      data: { name, level },
    });

    return NextResponse.json(newSkill, { status: 201 });
  } catch (error) {
    console.error('Error creating skill:', error);
    return NextResponse.json({ error: 'Failed to create skill' }, { status: 500 });
  }
}



