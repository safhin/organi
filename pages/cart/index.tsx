import BreadCrumb from "../../components/breadcrumb/breadCrumb";
import Footer from "../../components/footer/footer";
import Header from "../../components/header/header";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import SigneCart from "./cart";
const Cart = ({carts}) => {
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() =>{
        let price = 0;
        carts.forEach(item => {
            price += item.qty * item.price;
        });
        setTotalPrice(price);
    },[carts]);
    return(
        <>
            <Header/>
            <BreadCrumb bgImage={'/img/breadcrumb.jpg'} secTitle="Shopping Cart"/>
            <section className="shoping-cart spad">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th className="shoping__product">Products</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Total</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            carts && carts.length > 0 && carts.map((item) => (
                                                <tr key={item.id}>
                                                    <SigneCart  item={item}/>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="shoping__cart__btns">
                                <a href="#" className="primary-btn cart-btn">CONTINUE SHOPPING</a>
                                <a href="#" className="primary-btn cart-btn cart-btn-right"><span className="icon_loading"></span>
                                    Upadate Cart</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__continue">
                                <div className="shoping__discount">
                                    <h5>Discount Codes</h5>
                                    <form action="#">
                                        <input type="text" placeholder="Enter your coupon code"/>
                                        <button type="submit" className="site-btn">APPLY COUPON</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="shoping__checkout">
                                <h5>Cart Total</h5>
                                <ul>
                                    <li>Subtotal <span>${totalPrice}</span></li>
                                    <li>Total <span>${totalPrice}</span></li>
                                </ul>
                                <a href="#" className="primary-btn">PROCEED TO CHECKOUT</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

const mapStateToProps = state => {
    return{
        carts : state.shop.cart
    }
}


export default connect(mapStateToProps)(Cart);