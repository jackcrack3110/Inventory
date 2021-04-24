import React, { useState } from 'react';
import { LoginAction } from '../store/actions/LoginActions';
import { connect } from 'react-redux';
const Login = (props) => {
    const [isLoading, setIsLoading] = useState(false)
    const [username, setusername] = useState('');
    const [email, setEmail] = useState('');
  
    const login = (username, email) => {
        setIsLoading(true);
        let payload = { username: username, email: email }
        props.loginAction(payload).then(result => {
            if (result.success) {
                setIsLoading(false);
                props.history.push('/dashboard');
            }
        })

    }
    const handleChange = (e) => {
        return (
            e.target.name === 'uname' ? setusername(e.target.value) :
                e.target.name == 'psw' ? setEmail(e.target.value) :
                    () => { }
        )
    }
    const handleClick = (e) => {
        e.preventDefault();
        username.length && email.length && login(username, email);
    }
    return (
        <div className="wrap">
            <div className="login">
                <h2>Login Form</h2>
                <form action="/" method="post">
                    <div className="container">
                        <label htmlFor="uname"><b>Username</b></label>
                        <input type="text" value={username}
                            name="uname" placeholder="Enter Username"
                            onChange={handleChange} required
                        />
                        <label htmlFor="psw"><b>Email</b></label>
                        <input type="email" placeholder="Enter Email"
                            name="psw" onChange={handleChange} required />
                        <button type="submit" onClick={handleClick}>
                            {!isLoading ? "Login" : 'Loading...'}
                        </button>
                    </div>

                </form>
            </div>
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
    loginAction: LoginAction
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);