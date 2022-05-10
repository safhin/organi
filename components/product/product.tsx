

const Product = (props : any) => {
    return(
        <>
            <div className="product__item">
                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${props.productBg})` }}>
                    <ul className="product__item__pic__hover">
                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                    </ul>
                </div>
                <div className="product__item__text">
                    <h6><a href="#">{props.productTitle}</a></h6>
                    <h5>{props.productPrice}</h5>
                </div>
            </div>
        </>
    )
}

export default Product;