import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
const prisma = new PrismaClient();

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'PUT') {
        try {
            const productData = {
                product_title: req.body.product_title,
                product_category: req.body.product_category,
                product_price: req.body.product_price,
                product_image : req.body.product_image
            };
            const updatedProduct = await prisma.products.update({
                where:{
                    id : parseInt(req.body.id),
                },
                data: productData
            });
            res.status(200).json(updatedProduct);
        } catch (error) {
            res.status(404).json({ message: error.message});
        }
    }else if (req.method == 'DELETE') {
        try {
            const id = req.body.id;
            const category = await prisma.products.delete({
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