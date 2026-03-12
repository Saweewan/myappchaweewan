import { NextRequest, NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function GET(request: NextRequest) {
  try {

    const users = await prisma.user.findMany()

    return NextResponse.json(users)

  } catch (error) {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    )
  }
}
