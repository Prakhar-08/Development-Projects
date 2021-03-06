import { Link } from '@material-ui/core'
import React, {useState} from 'react'
import "./login.css"
import {auth} from "./firebase"
import { useHistory } from 'react-router'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {


            history.push('/');
        })
        .catch((e) => alert(e.message));
    }

    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {


            history.push('/');
        })
        .catch(e => alert(e.message));
    }


    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="data:image/png;base64,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"
                    alt=""
                    />
            </Link>
            <div className="login__container">
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} type='email' onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input value={password} type='password' onChange={e => setPassword(e.target.value)}/>
                    <button onClick={signIn} className="login__signin" type="submit" >Sign In</button>
                    <p>By signing in you agree to Amazon terms and conditions of use amd sale. 
                    Please see our privacy notice, our cookies notice and out interest based adds notice.
                    </p>
                    <button onClick={register} className="login__register">Create your Account</button>
                </form>
            </div>
        </div>
    )
}

export default Login
