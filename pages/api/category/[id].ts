import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method == 'GET') {
        try {
            const router = useRouter();
            const id = router.query.id;
            const category = await prisma.categories.findUnique({
                where: {
                    id: 2
                }
            });
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }
    }
}