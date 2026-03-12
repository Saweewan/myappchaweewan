import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)

    const user = await prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 })
    }

    return NextResponse.json(user)

  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}
