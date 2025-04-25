// app/api/projects/[id]/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';


export async function PUT(req, { params }) {
  const id = Number(params.id);
  const body = await req.json();

  try {
    const updated = await prisma.project.update({
      where: { id },
      data: {
        title: body.title,
        description: body.description,
        techStack: body.techStack,
        githubUrl: body.githubUrl,
        liveUrl: body.liveUrl,
        imageUrl: body.imageUrl,
      },
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error(`PUT /api/projects/${id} error:`, error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const id = Number(params.id);

  try {
    await prisma.project.delete({ where: { id } });
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    console.error(`DELETE /api/projects/${id} error:`, error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
