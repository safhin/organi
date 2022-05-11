import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if(req.method == 'POST'){
        try {
            const categoryData = {
                category_title: req.body.category_title,
                category_slug: req.body.category_title.split(' ').join('_').toLowerCase(),
                updated_at: new Date(),
            };
            const savedCategory = await prisma.categories.create({
                data: categoryData
            });
            res.status(200).json(savedCategory);
        } catch (error) {
            res.status(400).json({ message: error.message});
        }
        
    }if (req.method == 'GET') {
        try {
            const categories = await prisma.categories.findMany();
            res.status(200).json(categories);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }
    }
}