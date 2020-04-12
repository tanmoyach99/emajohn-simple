import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

const Product = (props) => {
    const {img,name,seller,price,stock} = props.product
    return (
      <div className="product">
          <div>
              <img src={img} alt=""/>
          </div>
          <div>
              <h4 className="productName">{name}</h4>
              <br/>
              <p><small>By ; {seller}</small></p>
              <br/>
              <p>${price}</p>
              <p><small>only {stock} left in stock - order soon</small></p>
             <button className="buy"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
          </div>
          
          
      </div>
    );
};

export default Product;