import { GetStaticProps } from "next";
import Link from "next/link";
import { useEffect, useState } from "react";


export const getStaticProps : GetStaticProps = async () => {
    const response = await fetch('http://localhost:3000/api/category',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
  
    return {
      props : {
        Categories : data
      }
    }
  }

const CreateCategory = ({Categories}) => {

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
            <section className="section">
                <div className="row" id="table-bordered">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Categories</h4>
                            </div>
                            <div className="card-content">
                                <div className="table-responsive">
                                    <table className="table table-bordered mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>TITLE</th>
                                                <th>SLUG</th>
                                                <th>ACTION</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                           {
                                               Categories.length > 0 && Categories.map((item, index) => (
                                                    <tr key={item.id}>
                                                        <td className="text-bold-500">{item.id}</td>
                                                        <td>{item.category_title}</td>
                                                        <td className="text-bold-500">{item.category_slug}</td>
                                                        <td>
                                                            <Link href={{
                                                                pathname : `/category/${item.id}`
                                                            }}>
                                                                <a className="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="left" title="" data-original-title="Update">
                                                                    <i className="bi bi-pencil" aria-hidden="true"></i>
                                                                </a>
                                                            </Link>
                                                            <button type="button" className="btn btn-danger btn-sm" data-bs-toggle="modal">
                                                                    <i className="bi bi-trash"></i>
                                                                </button>
                                                        </td>
                                                    </tr>
                                               ))
                                           }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CreateCategory;