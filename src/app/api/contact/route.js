import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    console.log('Received contact message:', { name, email, message });

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    const newMessage = await prisma.contactMessage.create({
      data: { name, email, message },
    });

    return NextResponse.json({ success: true, message: 'Message sent successfully!', data: newMessage });
  } catch (error) {
    console.error('Error saving contact message:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}

export async function GET() {
  try {
    // Fetch all contact messages
    const messages = await prisma.contactMessage.findMany({
      orderBy: {
        createdAt: 'desc', // Optional: order messages by the most recent
      },
    });

    return NextResponse.json({ success: true, data: messages });
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    return NextResponse.json({ error: 'Failed to fetch messages' }, { status: 500 });
  }
}
