import { useState } from "react";


export const getServerSideProps = async () => {
    const responseCategory = await fetch('http://localhost:3000/api/category',{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    const categoryData = await responseCategory.json();
  
    return {
      props : {
        Categories : categoryData
      }
    }
}


const CreateProduct = ({Categories}) => {

    let [productInput,setProductInput] = useState({});
    const [productImage,setProductImage] = useState(null);

    const handleChange = (e) => {
        const{name, value} = e.target;
        setProductInput({
            ...productInput,
            [name]:value,
        })
    }

    
    const handleSubmit = async(event) => {
        event.preventDefault();

         //uplaod image
         const form = event.currentTarget;
        
         const fileInput = Array.from(form.elements).find(({ name }) => name === 'product_image');
         const formData = new FormData();
 
         for ( const file of fileInput.files ) {
             formData.append('file', file);
         }
         formData.append('upload_preset', 'organi');
         const data = await fetch('https://api.cloudinary.com/v1_1/live-tech/image/upload', {
             method: 'POST',
             body: formData
         }).then(r => r.json());
         setProductImage(data.secure_url);

       
        productInput.product_image = data.secure_url;

        const response = await fetch('/api/product', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(productInput)
        })

        console.log(productInput);
        
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
                                    <form className="form form-vertical" onSubmit={handleSubmit} encType="multipart/form-data">
                                        <div className="form-body">
                                            <div className="row">
                                                <div className="col-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Title</label>
                                                        <input type="text" id="first-name-vertical" className="form-control" name="product_title" placeholder="Category Name" onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-6">
                                                    <fieldset className="form-group">
                                                        <label htmlFor="first-name-vertical">Category</label>
                                                        <select className="form-select" id="basicSelect" name="product_category" onChange={handleChange}>
                                                            <option value="">Select Category</option>
                                                            {
                                                                Categories.length > 0 && Categories.map((category) => (
                                                                    <option value={category.category_title} key={category.id}>{ category.category_title }</option>
                                                                ))
                                                            }
                                                            
                                                        </select>
                                                    </fieldset>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Price</label>
                                                        <input type="text" id="first-name-vertical" className="form-control" name="product_price" placeholder="Price" onChange={handleChange}/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6">
                                                    <div className="form-group">
                                                        <label htmlFor="first-name-vertical">Product Image</label>
                                                        <input type="file" id="first-name-vertical" className="form-control" name="product_image" placeholder="Image"/>
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