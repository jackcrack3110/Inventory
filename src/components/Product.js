import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import './Product.css'
const Product = ({ products }) => {
    console.log("Products ", products)

    const [filteredProducts, setFilteredProducts] = useState(products)

    return (
        <div >
            <nav className="product-filter">

                <h1>Products</h1>

                <div className="sort">

                    <div className="collection-sort">
                        <label>Filter by:</label>
                        <select>
                            <option value="price">Price</option>
                            <option value="quantity">Quantity</option>
                        </select>
                    </div>

                    <div className="collection-sort">
                        <label>Search</label>
                        <input type="search" onChange={(e) => {
                            const searchString = e.currentTarget.value;
                            setFilteredProducts(products.filter(x => x.name.includes(searchString)));
                        }} />
                    </div>
                </div>

            </nav>
            { filteredProducts.map((product,index) => (
                <div className="product-card" key={index}>
                    <div className="product-image">
                        <img src={`${product.image}`} alt="image" />
                    </div>
                    <div className="product-info">
                        <h1>{`Name-${product.name}`}</h1>
                        <p>{`Description-${product.description}`}</p>
                        <p>{`Quantity-${product.quantity}`}</p>
                        <p>{`Price-${product.price}`}</p>
                    </div>
                </div>
            ))}

            <Link to="/dashboard">Back to Dashboard</Link>

        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        products: state.products,
    }
}
export default connect(mapStateToProps, null)(Product);