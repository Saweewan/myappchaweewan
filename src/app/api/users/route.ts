// app/api/users/route.ts
import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/lib/prisma'
import bcrypt from 'bcryptjs'

/**
 * 1. GET: ดึงรายชื่อผู้ใช้ทั้งหมด
 * Endpoint: GET /api/users
 */
export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(users, { status: 200 })
  } catch (error) {
    console.error('Fetch Users Error:', error)
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    )
  }
}

/**
 * 2. POST: สร้างผู้ใช้ใหม่
 * Endpoint: POST /api/users
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, name, password, role } = body

    // ตรวจสอบข้อมูล
    if (!email || !name || !password) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields',
        },
        { status: 400 }
      )
    }

    // ตรวจสอบว่ามี user นี้แล้วหรือยัง
    const existingUser = await prisma.user.findUnique({
      where: { email },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          error: 'User already exists',
        },
        { status: 409 }
      )
    }

    // เข้ารหัส password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // สร้าง user
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: role || 'user',
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        createdAt: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        data: user,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating user:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to create user',
      },
      { status: 500 }
    )
  }
}
