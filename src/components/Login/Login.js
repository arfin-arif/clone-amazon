import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContex';
import './Login.css'
const Login = () => {
    const { signIn, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [error, setError] = useState(null)

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password need to be at least six characters!');
            return;
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                // form.reset();
                navigate('/')
            })
            .catch(error => {
                console.log(error)
            })


    }
    // const handleLogOut = () => {

    //     logOut()
    //         .then(() => { console.log('Succes') })
    //         .catch(error => console.log(error))
    // }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>

            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <input className='btn-submit' type="submit" value='Login' />
            </form>
            <p>New to Ema Jhon?<Link to='/signup'> Create a new Account</Link> </p>

            <p className='text-error'> {error} </p>
        </div>
    );
};

export default Login;