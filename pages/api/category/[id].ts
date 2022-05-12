import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { useRouter } from "next/router";
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
   if (req.method == 'PUT') {
        try {
            const categoryData = {
                category_title: req.body.category_title,
                category_slug: req.body.category_title.split(' ').join('_').toLowerCase(),
            };
            const category = await prisma.categories.update({
                where:{
                    id : req.body.id,
                },
                data: categoryData
            });
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }
    }else if (req.method == 'DELETE') {
        try {
            const id = req.body.id;
            const category = await prisma.categories.delete({
                where:{
                    id : parseInt(id),
                },
            });
            res.status(200).json(category);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }
    }
}