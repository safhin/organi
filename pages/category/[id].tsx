import { PrismaClient } from "@prisma/client";
import { useState } from "react";

const prisma = new PrismaClient();

export const getServerSideProps = async(context) => {
    const {id} = context.query;
    const res = await prisma.categories.findUnique({
        where:{
            id: parseInt(id)
        }
    });

    const category = JSON.parse(JSON.stringify(res))
    return{
        props:{
            editCategory : category
        }
    }
}


const UpdateCategory = ({editCategory : []}) => {

    const [categoryTitle, setCategoryTitle] = useState(editCategory.category_title);
    
    const handleSubmit = async(e) => {

        e.preventDefault();

        const category = {
            id: editCategory.id,
            category_title : categoryTitle,
            category_slug : categoryTitle,
        }

        const response = await fetch(`/api/category/${editCategory.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)
        });

        document.querySelector('.form').reset();
        return await response.json();
    }

    return(
        <>
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-6 col-sm-6 offset-md-3 offset-sm-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Update Category</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Category Title</label>
                                                        <input 
                                                            type="text" 
                                                            className="form-control" 
                                                            name="category_title" 
                                                            placeholder="Category Name" 
                                                            value={categoryTitle} 
                                                            onChange={e => setCategoryTitle(e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary me-1 mb-1">Update</button>
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
        </>
    )
}

export default UpdateCategory;