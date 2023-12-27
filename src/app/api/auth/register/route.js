import User from "@/models/User";
import connect from "@/utils/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { name, email, password } = await req.json();
  console.log(name, email, password);

  const hashed = await bcrypt.hash(password, 4);

  const newUser = new User({ name, email, password: hashed });

  try {
    await connect();
    await newUser.save();
    return new NextResponse("User hase been saved successfully", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse(err.message, { status: 500 });
  }
};
