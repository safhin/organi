import Image from "next/image"
import LatestProductImg from "../../public/img/latest-product/lp-1.jpg";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";


function NextArrow(props : any) {
    const { onClick } = props;
    return (
        <button className='slick-next' onClick={onClick}>
            <span className="fa fa-angle-right"> </span>
        </button>
    );
}
  
function PrevArrow(props : any) {
    const { onClick } = props;
    return (
        <button className='slick-prev' onClick={onClick}>
            <span className="fa fa-angle-left"></span>
        </button>
    );
}

const LatestProduct = () => {
    var settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows:true,
        autoplay: false,
        speed: 500,
        autoplaySpeed: 2000,
        cssEase: "linear",
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
              breakpoint: 1025,
              settings: {
                slidesToShow: 3,
              }
            },
            {
              breakpoint: 992,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                arrows: false,
              }
            }
        ]
    };
    return(
        <div className="col-lg-4 col-md-6">
            <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                    <div className="latest-prdouct__slider__item">
                        <Slider {...settings}>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                            <a href="#" className="latest-product__item">
                                <div className="latest-product__item__pic">
                                    <Image src={LatestProductImg} alt=""/>
                                </div>
                                <div className="latest-product__item__text">
                                    <h6>Crab Pool Security</h6>
                                    <span>$30.00</span>
                                </div>
                            </a>
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProduct;