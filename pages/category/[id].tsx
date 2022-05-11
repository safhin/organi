import { GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const UpdateCategory = () => {

    const [categoryTitle, setCategoryTitle] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        const category = {
            category_title : categoryTitle,
            category_slug : categoryTitle,
        }

        e.preventDefault();
        const response = await fetch('/api/category', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category)
        });

        document.querySelector('.form').reset();
        return await response.json();
    }

    const router = useRouter();
    const id = router.query.id;

    useEffect(() => {
        const fetchtCategory = async() => {
            const response = await fetch(`/api/category/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await response.json();
        }
        fetchtCategory();
    },[])
    

    return(
        <>
            <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-6 col-sm-6 offset-md-3 offset-sm-3">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Add Category</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className="form form-vertical">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Category Title</label>
                                                        <input type="text" id="first-name-vertical" className="form-control" name="category_title" placeholder="Category Name" onInput={e => setCategoryTitle(e.target.value)}/>
                                                    </div>
                                                </div>
                                                <div className="col-12 d-flex justify-content-end">
                                                    <button type="submit" className="btn btn-primary me-1 mb-1">Submit</button>
                                                    <button type="reset" className="btn btn-light-secondary me-1 mb-1">Reset</button>
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