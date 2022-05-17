
import type {NextApiRequest, NextApiResponse} from 'next';
import formidable from "formidable";
import fs from "fs";

type Data = {
    dir: string
}

const saveFile = async (file: any, pathName: string) => {
    const data = fs.readFileSync(file.filepath);
    let fileName=file.originalFilename.split(' ').join('');
    let dir = `${pathName}/${fileName}`;

    fs.writeFileSync(`./public/uploaded/${pathName}/${fileName}`, data);
    await fs.unlinkSync(file.filepath);
    return dir;
};

export const config = {
    api: {
        bodyParser: false
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default async(req: NextApiRequest, res: NextApiResponse) =>{
    if(req.method == 'POST'){
        try {
            const form = new formidable.IncomingForm();
            form.parse(req, async function (err: any, fields: any, files: any) {
                let dir: string = await saveFile(files.file, 'product');
                res.status(200).json({dir})
            });
        } catch (error) {
            res.status(400).json({ message: error.message});
        }
    }else {
        res.status(404).json({dir: ""})
    }
}