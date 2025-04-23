import { NextResponse } from 'next/server'
import prisma from '../../../lib/prisma';

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'



export async function POST(req) {
  const { email, password } = await req.json()

  console.log(email)
  console.log(password)


  const user = await prisma.user.findUnique({ where: { email } })

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
  }

  const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  })

  return NextResponse.json({ token })
}
