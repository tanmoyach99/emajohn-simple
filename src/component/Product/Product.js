import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import { Link } from 'react-router-dom';

const Product = (props) => {
   // console.log(props.product);
    const {img,name,seller,price,stock,key} = props.product
    return (
      <div className="product">
          <div>
              <img src={img} alt=""/>
          </div>
          <div>
               <h4 className="productName"><Link to={"/"+key} >{name}</Link></h4>
               
              <br/>
              <p><small>By ; {seller}</small></p>
              <br/>
              <p>${price}</p>
              <p><small>only {stock} left in stock - order soon</small></p>
            {props.showAddToCart === true && <button onClick={() => props.handleAddProduct(props.product)} className="buy"><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>}
          </div>
          
          
      </div>
    );
};

export default Product;