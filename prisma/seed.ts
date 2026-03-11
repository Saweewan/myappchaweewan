import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn']
})

async function main() {

  const password = await bcrypt.hash('123456', 10)

  await prisma.user.create({
    data: {
      name: "Admin",
      email: "admin@test.com",
      password: password
    }
  })

  console.log("Seed data created")
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
