// app/api/projects/route.js
import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function GET() {
  try {
    const projects = await prisma.project.findMany(); // No orderBy

    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}


export async function POST(req) {
  try {
    const body = await req.json();
    const project = await prisma.project.create({
      data: {
        title: body.title,
        description: body.description,
        techStack: body.techStack,
        githubUrl: body.githubUrl,
        liveUrl: body.liveUrl,
        imageUrl: body.imageUrl,
      },
    });
    return NextResponse.json(project);
  } catch (error) {
    console.error('POST /api/projects error:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

 