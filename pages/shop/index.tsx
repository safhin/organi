import BreadCrumb from "../../components/breadcrumb/breadCrumb";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";
import ShopSidebar from "../../components/sidebar/shopSidebar";
import { settings } from "../../utils/sliderSetting";
import { connect } from "react-redux";
import { addToCart } from "../../redux/cart/cartAction";

const Shop = ({products, addToCart}) => {


    return(
        <>
            <Header/>
            <BreadCrumb bgImage={'/img/breadcrumb.jpg'} secTitle="Shop"/>
            <section className="product spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-5">
                            <ShopSidebar/>
                        </div>
                        <div className="col-lg-9 col-md-7">
                            <div className="product__discount">
                                <div className="section-title product__discount__title">
                                    <h2>Sale Off</h2>
                                </div>
                                <div className="row">
                                    <div className="product__discount__slider owl-carousel">
                                        <Slider {...settings}>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-1.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-2.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Vegetables</span>
                                                        <h5><a href="#">Vegetables’package</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-3.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Mixed Fruitss</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-4.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-5.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="product__discount__item">
                                                    <div className="product__discount__item__pic set-bg"
                                                        style={{ backgroundImage: `url(img/product/discount/pd-6.jpg)` }}>
                                                        <div className="product__discount__percent">-20%</div>
                                                        <ul className="product__item__pic__hover">
                                                            <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="product__discount__item__text">
                                                        <span>Dried Fruit</span>
                                                        <h5><a href="#">Raisin’n’nuts</a></h5>
                                                        <div className="product__item__price">$30.00 <span>$36.00</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                            <div className="filter__item">
                                <div className="row">
                                    <div className="col-lg-4 col-md-5">
                                        <div className="filter__sort">
                                            <span>Sort By</span>
                                            <select>
                                                <option value="0">Default</option>
                                                <option value="0">Default</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4">
                                        <div className="filter__found">
                                            <h6><span>16</span> Products found</h6>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-3">
                                        <div className="filter__option">
                                            <span className="icon_grid-2x2"></span>
                                            <span className="icon_ul"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {
                                    products.map((item) => (
                                        <div className="col-lg-4 col-md-6 col-sm-6" key={item.id}>
                                            <div className="product__item">
                                                <div className="product__item__pic set-bg" style={{ backgroundImage: `url(${item.image})` }}>
                                                    <ul className="product__item__pic__hover">
                                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                                        <li>
                                                            <button onClick={() => addToCart(item.id)}>
                                                                <i className="fa fa-shopping-cart"></i>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="product__item__text">
                                                    <h6><a href="#">{item.title}</a></h6>
                                                    <h5>${item.price}</h5>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="product__pagination">
                                <a href="#">1</a>
                                <a href="#">2</a>
                                <a href="#">3</a>
                                <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

const mapStateToProps = (state) => {
    return{
        products : state.shop.products,
    }
}

const mapDispatchToProps  = (dispatch) => {
    return{
        addToCart : (id) => dispatch(addToCart(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);