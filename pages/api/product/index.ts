
import { PrismaClient } from "@prisma/client";
import { NextApiResponse, NextApiRequest } from "next";
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req: NextApiRequest, res: NextApiResponse) =>{
    if(req.method == 'POST'){
        try {
            const ProductData = {
                product_title: req.body.product_title,
                product_category: req.body.product_category,
                product_price: req.body.product_price,
                updated_at: new Date(),
            }
            const Product = await prisma.products.create({
                data: ProductData
            })
            res.status(200).json(Product);
        } catch (error) {
            res.status(400).json({ message: error.message});
        }
    }
}