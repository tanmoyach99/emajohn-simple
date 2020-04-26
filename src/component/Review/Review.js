import React, { useState, useEffect } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../reviewItem/ReviewItem';
import Cart from '../Cart/Cart';
import orderImage from '../../images/giphy.gif'

const Review = () => {
    const [cart,setCart] = useState([]);
    const[orderplaced,setOrderPlaced] = useState(false)
    const handlePlaceOrder = () =>{
        setCart([]);
        setOrderPlaced(true);
        processOrder();
    }
    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const cartProducts = productKeys.map( key => {
            const product = fakeData.find( pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
        });
        setCart(cartProducts);
    },[])
    let thanks;
    if(orderplaced){
        thanks= <img src={orderImage} alt=""/>
    }
    return (
        <div className= "shop-container">
            <div className= "product-container">
               
               {cart.map(pd =>  <ReviewItem 
               key ={pd.key}
               removeProduct = {removeProduct}
               product ={pd}></ReviewItem>)}
               {thanks}
            </div>
           
            <div className= " cart-container">
                <Cart cart = {cart}> 
                   <button onClick={handlePlaceOrder} className="buy">place order</button>
                </Cart>
            </div>
            
        </div>
    );
};

export default Review;