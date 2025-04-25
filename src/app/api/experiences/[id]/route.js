import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const body = await req.json();
    const updated = await prisma.experience.update({
      where: { id: Number(id) },
      data: body,
    });
    return NextResponse.json(updated);
  } catch (error) {
    console.error('Error updating experience:', error);
    return NextResponse.json({ error: 'Failed to update experience' }, { status: 500 });
  }
}

export async function DELETE(_, { params }) {
  const { id } = params;

  try {
    await prisma.experience.delete({
      where: { id: Number(id) },
    });
    return NextResponse.json({ message: 'Experience deleted' });
  } catch (error) {
    console.error('Error deleting experience:', error);
    return NextResponse.json({ error: 'Failed to delete experience' }, { status: 500 });
  }
}
