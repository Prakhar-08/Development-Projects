import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, image, price, rating, title}) {
    const [{basket}, dispatch] = useStateValue();

    function RemoveBasket() {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    };


    return (
        <div className="checkout__product">
            <img className="checkout__productimg" src={image} />

            <div className="checkout__productinfo">
                <p className="checkout__producttitle">{title}</p>
                <p className="checkout__productprice">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkout__productrating">
                    {Array(rating)
                    .fill()
                    .map((_) => (
                        <p>⭐</p>
                    ))}
                </div>
                <button onClick={RemoveBasket} className="checkout__productbutton" type="submit">Remove from Basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct
