import { NextResponse } from "next/server";
import connectMongoDB from "@/libs/mongodb";
import Product from "@/models/product";

export async function POST(req) {
  const { image, category, description, price, title, isNew } =
    await req.json();
  await connectMongoDB();
  await Product.create({ image, category, description, price, title, isNew });
  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  return NextResponse.json({ products });
}

export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product deteted" }, { status: 200 });
}
