import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
const Product = ({productDetails}) => {

    return (
        <div className="wrap">
            {productDetails.map((product) => {
               <div>
                   <h1>{`Name-${product.name}`}</h1>
                   <p>{`Description-${product.description}`}</p>
                   <p>{`Quantity-${product.quantity}`}</p>
                   <p>{`Price-${product.price}`}</p>
                   <img src={`${product.image}`} alt="image"/>
               </div>
            })}
              <button onClick={handleClick}> 
                <Link to="/dashboard">Back to Dashboard</Link>
            </button>
      </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        productDetails: state.product.productDetails,
    }
}
export default connect(mapStateToProps, null)(Product);