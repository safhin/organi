import { useState } from "react";
import { connect } from "react-redux";
import { adjustCart, removeFromCart } from "../../redux/cart/cartAction";


const SigneCart = ({item, adjustCart , removeFromCart}) => {

    const [inputValue, setInputValue] = useState(item.qty);
    const [price, setPrice] = useState(item.qty * item.price);
    const onChangeHandler = e => {
        let value = e.target.value;
        setInputValue(value)
        setPrice(value * item.price)
        adjustCart(item.id, value)
    }

    return(
        <>
            <td className="shoping__cart__item">
                <img src={item.image} alt={item.title} className="img-fluid"/>
                <h5>{item.title}</h5>
            </td>
            <td className="shoping__cart__price">
                ${item.price}
            </td>
            <td className="shoping__cart__quantity">
                <div className="quantity">
                    <div className="pro-qty">
                        <input type="text" name="quantity" value={inputValue} onChange={onChangeHandler}/>
                    </div>
                </div>
            </td>
            <td className="shoping__cart__total">
                ${ price }
            </td>
            <td className="shoping__cart__item__close">
                <span className="icon_close" onClick={() => removeFromCart(item.id)}></span>
            </td>
        </>
    )
}
const mapDispatchToProps = (dispatch) => {
    return{
        adjustCart : (id, qty) => dispatch(adjustCart(id, qty)),
        removeFromCart: (id) => dispatch(removeFromCart(id)) 
    }
}
export default connect(null,mapDispatchToProps)(SigneCart);