import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma';

export async function PUT(req, { params }) {
  try {
    const body = await req.json()
    const updated = await prisma.education.update({
      where: { id: Number(params.id) },
      data: body,
    })
    return NextResponse.json(updated)
  } catch (error) {
    console.error('Error updating education:', error)
    return NextResponse.json({ error: 'Failed to update education' }, { status: 500 })
  }
}

export async function DELETE(_, { params }) {
  try {
    await prisma.education.delete({
      where: { id: Number(params.id) },
    })
    return NextResponse.json({ message: 'Education deleted successfully' })
  } catch (error) {
    console.error('Error deleting education:', error)
    return NextResponse.json({ error: 'Failed to delete education' }, { status: 500 })
  }
}
