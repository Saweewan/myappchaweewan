# ---------- Stage 1 : Dependencies ----------
FROM node:24-alpine AS deps

WORKDIR /app

# สำหรับบาง native module
RUN apk add --no-cache libc6-compat

# copy package files
COPY package.json package-lock.json ./

# install dependencies
RUN npm ci

# ---------- Stage 2 : Builder ----------
FROM node:24-alpine AS builder

WORKDIR /app

# copy node_modules จาก stage deps
COPY --from=deps /app/node_modules ./node_modules

# copy source code
COPY . .

# copy env file (สำคัญมาก)
COPY .env .env

# generate prisma client
RUN npx prisma generate

# ปิด telemetry
ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

# build nextjs
RUN npm run build

# ---------- Stage 3 : Runner ----------
FROM node:24-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# สร้าง user สำหรับรันแอป
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy public
COPY --from=builder /app/public ./public

# copy next standalone server
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# copy static files
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# copy prisma
COPY --from=builder --chown=nextjs:nodejs /app/prisma ./prisma

# copy generated prisma client
COPY --from=builder --chown=nextjs:nodejs /app/generated ./generated

# ใช้ user ปลอดภัย
USER nextjs

# เปิด port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# run server
CMD ["node", "server.js"]
