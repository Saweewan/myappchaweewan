import 'dotenv/config'
import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
  log: ['query', 'error', 'warn']
})
