import { NextResponse } from "next/server";

export async function GET() {
  const data = [
    {
      id: 1,
      name: "Baju Baru",
      price: 50000,
      size: "xl",
    },
    {
      id: 2,
      name: "Baju Boboboy",
      price: 70000,
      size: "xl",
    },
    {
      id: 3,
      name: "Baju Naruto",
      price: 100000,
      size: "xl",
    },
  ];

  return NextResponse.json({ data });
}
