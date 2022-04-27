import Image from "next/image"
import TopRatedImg from "../../public/img/latest-product/lp-3.jpg";


const TopRatedProduct = () => {
    return(
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                    </div>
                    <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={TopRatedImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopRatedProduct;