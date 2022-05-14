import { useEffect, useState } from "react";
import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";
const prisma = new PrismaClient();

export const getServerSideProps = async (context) => {
    const {id} = context.query;

    const responseProduct = await prisma.products.findUnique({
        where:{
            id: parseInt(id)
        }
    });
    const productData = JSON.parse(JSON.stringify(responseProduct));
  
    return {
      props : {
        Product : productData
      }
    }
}


const SingleProduct = ({Product}) => {
    
    const [productInput,setProductInput] = useState({});
    const [productTitle,setProductTitle] = useState(Product.product_title);
    const [productCategory,setProductCategory] = useState(Product.product_category);
    const [productPrice,setProductPrice] = useState(Product.product_price);
    const [categories, setCategories] = useState({});
    const router = useRouter();

  
    const handleSubmit = async(e) => {
        e.preventDefault();

        const id = router.query.id;

        const response = await fetch(`/api/product/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id,
                product_title : productTitle,
                product_category : productCategory,
                product_price : productPrice,
            })
        })
        return await response.json();
    }

    useEffect(() => {
        const fetchCategories = async() => {
            const response = await fetch('/api/category', {
                method: 'GET',
                headers: {
                    'Content-Type' : 'application/json'
                }
            });
            setCategories(await response.json());
        }

        fetchCategories();
    },[])

    return(
        <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Update Product</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Title</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="product_title" 
                                                            placeholder="Category Name" 
                                                            value={productTitle} 
                                                            onChange={e => setProductTitle(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <fieldset className="form-group">
                                                        <label htmlFor="first-name-vertical">Category</label>
                                                        <select className="form-select" value={productCategory} name="product_category" onChange={e => setProductCategory(e.target.value)}>
                                                            <option value="">Select Category</option>
                                                            {
                                                                categories.length > 0 && categories.map((category) => (
                                                                    <option 
                                                                        value={category.category_title} key={category.id}
                                                                    >
                                                                            { category.category_title }
                                                                    </option>
                                                                ))
                                                            }
                                                            
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Price</label>
                                                        <input 
                                                            type="text" 
                                                            id="first-name-vertical" 
                                                            className="form-control" 
                                                            name="product_price" 
                                                            placeholder="Price" 
                                                            value={productPrice} 
                                                            onChange={e => setProductPrice(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary me-1 mb-1">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    )
}

export default SingleProduct;