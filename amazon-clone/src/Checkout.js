import React from 'react'
import "./Checkout.css"
import { useStateValue } from './StateProvider'
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from './Subtotal';

function Checkout() {
    const [{ basket, user }] = useStateValue();
    return (
        <div className="checkout">
            {/* <div className="checkout__left">
                <img
                    className="checkout__ad"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_56B-P2STcHGqWGfcoSzjzqAtg0tE30sBWQ&usqp=CAU"
                    alt=""
                    />
            </div> */}
            <div className="checkout__left">
                { 
                    user ? (
                        <div>
                        {basket.length > 0 ? (
                            <div className="checkout__title">
                                <h2>Your Shopping List</h2>
                                {basket.map(item => (
                                    <CheckoutProduct 
                                        id = {item.id}
                                        title = {item.title}
                                        price = {item.price}
                                        rating = {item.rating}
                                        image = {item.image}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="checkout__title">
                                <h2>Your Product Basket is empty.</h2>
                                <p>You have no items in your Basket. To buy click 'Add to Basket' next to your item.</p>
                            </div> 
                        ) }
                            
                        </div>
                    ):(
                        <div className="checkout__title">
                            <h2>To buy any product Login or Create an account.</h2>
                        </div>
                    )
                }
                
                {/* {basket?.length===0 ? (
                    <div className="checkout__title">
                        <h2>Your Product Basket is empty.</h2>
                        <p>You have no items in your Basket. To buy click 'Add to Basket' next to your item.</p>
                    </div>
                ):(
                    <div className="checkout__title">
                        <h2>Your Shopping List</h2>

                        {basket.map(item => (
                            <CheckoutProduct 
                            id = {item.id}
                            title = {item.title}
                            price = {item.price}
                            rating = {item.rating}
                            image = {item.image}
                            />
                        ))}
                    </div>
                )} */}
            

                
            </div>
            <div className="checkout__right">
                {
                    user ? (
                    <div>
                        <Subtotal />
                    </div>
                    ) : (null)
                }
            </div>
            {/* {basket.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
            )} */}
        </div>
    )
};

export default Checkout;
