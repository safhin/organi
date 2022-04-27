

import Image from "next/image";
import ReviewProductImg from "../../public/img/latest-product/lp-2.jpg";
const ReviewProduct = () => {
    return(
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>Review Products</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={ReviewProductImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={ReviewProductImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={ReviewProductImg} alt=""/>
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
                                <Image src={ReviewProductImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={ReviewProductImg} alt=""/>
                            </div>
                            <div className="latest-product__item__text">
                                <h6>Crab Pool Security</h6>
                                <span>$30.00</span>
                            </div>
                        </a>
                        <a href="#" className="latest-product__item">
                            <div className="latest-product__item__pic">
                                <Image src={ReviewProductImg} alt=""/>
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

export default ReviewProduct;