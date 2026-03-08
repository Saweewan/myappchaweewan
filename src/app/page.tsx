import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="p-10 space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">🏪 ระบบจัดการร้านค้า</h1>
        <p className="text-gray-500">
          จัดการสินค้า คำสั่งซื้อ และลูกค้าในระบบ
        </p>
      </div>

      {/* Menu */}
      <div className="grid grid-cols-4 gap-6">

        {/* Products */}
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-xl font-semibold">📦 สินค้า</h2>
            <p className="text-sm text-gray-500">
              เพิ่ม แก้ไข และจัดการสินค้า
            </p>

            <Link href="/products">
              <Button>จัดการสินค้า</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Orders */}
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-xl font-semibold">🧾 คำสั่งซื้อ</h2>
            <p className="text-sm text-gray-500">
              ดูรายการคำสั่งซื้อทั้งหมด
            </p>

            <Link href="/orders">
              <Button>ดูคำสั่งซื้อ</Button>
            </Link>
          </CardContent>
        </Card>

        {/* Customers */}
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-xl font-semibold">👥 ลูกค้า</h2>
            <p className="text-sm text-gray-500">
              จัดการข้อมูลลูกค้า
            </p>

            <Link href="/users">
              <Button>ดูลูกค้า</Button>
            </Link>
          </CardContent>
        </Card>

        {/* About */}
        <Card>
          <CardContent className="p-6 text-center space-y-3">
            <h2 className="text-xl font-semibold">👨‍💻 เกี่ยวกับเรา</h2>
            <p className="text-sm text-gray-500">
              ข้อมูลเกี่ยวกับระบบ
            </p>

            <Link href="/about">
              <Button>เกี่ยวกับเรา</Button>
            </Link>
          </CardContent>
        </Card>

      </div>

    </main>
  )
}
