import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getCards(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const token = req.headers.authorization;

  if (token !== "faketoken123") {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }

  const user = await prisma.user.findUnique({
    where: { email: "soypaisanx@paisanos.io" },
    include: { cards: true },
  });

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found" });
  }

  return res.status(200).json({
    success: true,
    data: user.cards,
  });
}
