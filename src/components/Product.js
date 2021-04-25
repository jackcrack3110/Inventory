import React, { useState } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import EditForm from "./EditForm";
import "./Product.css";
const Product = ({ products }) => {
  console.log("Products ", products);
  const [showModal, setShowModal] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleModal = (index) => {
    setShowModal(true);
    setEditItem(index);
  };

  return (
    <div>
      <nav className="product-filter">
        <h1>Products</h1>
        <div className="sort">
          <div className="collection-sort">
              <label>Search</label>
                <input
                  type="search"
                  onChange={(e) => {
                    const searchString = e.currentTarget.value;
                     setFilteredProducts(products.filter((x) => x.name.includes(searchString))
                    );
                  }}
                />
          </div>
        </div>
      </nav>
      {filteredProducts.map((product, index) => (
        <div className="product-card" key={index}>
          <div className="product-image" onClick={() => handleModal(index)}>
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
      {showModal && (
        <EditForm editItem={editItem} setShowModal={setShowModal} />
      )}
      <Link to="/dashboard">Back to Dashboard</Link>
    </div>
  );
};
const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    products: state.products
  };
};
export default connect(mapStateToProps, null)(Product);
