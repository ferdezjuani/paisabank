import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { email, password } = req.body;

  const user = await prisma.user.findUnique({
    where: { email },
  });

  if (!user) {
    return res.status(401).json({ success: false, message: "Invalid email" });
  }

  const isPasswordValid = password === user.password;

  if (!isPasswordValid) {
    return res
      .status(401)
      .json({ success: false, message: "Invalid password" });
  }

  const fakeToken = "faketoken123";

  return res.status(200).json({
    success: true,
    data: {
      name: user.email,
      token: fakeToken,
    },
  });
}
