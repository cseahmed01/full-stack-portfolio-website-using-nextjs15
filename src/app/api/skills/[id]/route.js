// app/api/skills/route.js
import { NextResponse } from 'next/server';
import prisma from '../../../lib/prisma';

export async function PUT(request, { params }) {
    const { id } = params;
  
    try {
      const body = await request.json();
      const { name, level } = body;
  
      const updatedSkill = await prisma.skill.update({
        where: { id: parseInt(id) },
        data: { name, level },
      });
  
      return NextResponse.json(updatedSkill);
    } catch (error) {
      console.error('Error updating skill:', error);
      return NextResponse.json({ error: 'Failed to update skill' }, { status: 500 });
    }
  }
  
  export async function DELETE(request, { params }) {
    const { id } = params;
    console.log(params)
    try {
      await prisma.skill.delete({
        where: { id: parseInt(id) },
      });
  
      return NextResponse.json({ message: 'Skill deleted successfully' });
    } catch (error) {
      console.error('Error deleting skill:', error);
      return NextResponse.json({ error: 'Failed to delete skill' }, { status: 500 });
    }
  }
  
  