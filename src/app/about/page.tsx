export default function AboutPage() {
  return (
    <main className="p-10 space-y-6">

      <h1 className="text-3xl font-bold">
        👨‍💻 เกี่ยวกับเรา
      </h1>

      <p className="text-gray-600">
        ระบบนี้เป็นเว็บแอปพลิเคชันสำหรับจัดการร้านค้า
        สามารถใช้จัดการสินค้า คำสั่งซื้อ และข้อมูลลูกค้า
        เพื่อช่วยให้ร้านค้าบริหารจัดการได้สะดวกมากขึ้น
      </p>

      <div className="space-y-2">
        <h2 className="text-xl font-semibold">เทคโนโลยีที่ใช้</h2>

        <ul className="list-disc pl-6 text-gray-600">
          <li>Next.js</li>
          <li>TypeScript</li>
          <li>Tailwind CSS</li>
          <li>Prisma ORM</li>
          <li>MySQL Database</li>
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-semibold">
          ผู้พัฒนา
        </h2>

        <p className="text-gray-600">
          Chaweewan Kuisonjai
        </p>
      </div>

    </main>
  )
}
