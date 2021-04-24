import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddProductForm from '../components/AddProductForm';
const Dashboard = (props) => {

    const [products, setProducts] = useState({
        name: "",
        description: "",
        price: "",
        quantity: "",
        image: ""
    })
    const [showForm,setShowForm] = useState(false)

    const handleClick = () => {
        setShowForm(true)
    }

    return (
        <div className="wrap">
            <h1>Welcome {`${props.userDetails.username}`}</h1>
            <p>{`Your account was created on ${props.userDetails.date}`}</p>
            <button onClick={handleClick}>
              Add a Product
            </button>
            {showForm && <AddProductForm/>}
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}
export default connect(mapStateToProps, null)(Dashboard);