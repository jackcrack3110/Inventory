import React, { useState } from 'react';
import { connect } from 'react-redux';
import AddProductForm from '../components/AddProductForm';
import { LogoutAction } from '../store/actions/LogoutAction';
const Dashboard = (props) => {
   
    const [showForm,setShowForm] = useState(false)
    const logout = () =>{
        console.log("I am in logout")
        props.logoutAction().then(result => {
            if (result.success) {
                props.history.push('/');
            }
        })
    }
    const handleClick = () => {
        setShowForm(true)
    }
    const handleLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <div className="wrap">
            <h1>Welcome {`${props.userDetails.username}`}</h1> <button onClick={handleLogout}>Logout</button>
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
const mapDispatchToProps = {
    logoutAction: LogoutAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);