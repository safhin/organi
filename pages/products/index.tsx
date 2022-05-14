import Link from "next/link";
import { useRouter } from "next/router";

export const getServerSideProps = async () => {
    const responseProduct = await fetch('http://localhost:3000/api/product',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const productData = await responseProduct.json();
    return {
      props : {
        Products : productData
      }
    }
}

const AllProducts = ({Products}) => {
    const handleClick = async(id) => {
        const response = await fetch(`/api/product/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: id
            })
        })

        return await response.json();
    }
    return(
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
                                            <th>PRODUCT CATEGORY</th>
                                            <th>PRODUCT PRICE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            Products.length > 0 && Products.map((product) => (
                                                <tr key={product.id}>
                                                    <td className="text-bold-500">{product.id}</td>
                                                    <td>{product.product_title}</td>
                                                    <td>{product.product_category}</td>
                                                    <td className="text-bold-500">{product.product_price}</td>
                                                    <td>
                                                        <Link href={{
                                                            pathname : `/products/${product.id}`
                                                        }}>
                                                            <a className="btn btn-primary btn-sm" data-toggle="tooltip" data-placement="left" title="" data-original-title="Update">
                                                                <i className="bi bi-pencil" aria-hidden="true"></i>
                                                            </a>
                                                        </Link>
                                                        <button type="button" className="btn btn-danger btn-sm" onClick={() => handleClick(product.id)} id="1">
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
    )
}

export default AllProducts;