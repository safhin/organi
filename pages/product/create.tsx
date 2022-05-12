

const CreateProduct = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();

        const ProductData = {
            id: 1,
            product_title: 'Test',
            product_category: 'Test cat',
            product_price: '120',
            updated_at: new Date()
        }

        const response = await fetch('/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(ProductData)
        })
        console.log(response);
        return await response.json();
    }

    return(
        <section id="basic-vertical-layouts">
                <div className="row match-height">
                    <div className="col-md-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Create Product</h4>
                            </div>
                            <div className="card-content">
                                <div className="card-body">
                                    <form className="form form-vertical" onSubmit={handleSubmit}>
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Title</label>
                                                        <input type="text" id="first-name-vertical" className="form-control" name="product_title" placeholder="Category Name"/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <fieldset className="form-group">
                                                        <label htmlFor="first-name-vertical">Category</label>
                                                        <select className="form-select" id="basicSelect" name="product_category">
                                                            <option>IT</option>
                                                            <option>Blade Runner</option>
                                                            <option>Thor Ragnarok</option>
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Price</label>
                                                        <input type="text" id="first-name-vertical" className="form-control" name="product_price" placeholder="Price"/>
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

export default CreateProduct;