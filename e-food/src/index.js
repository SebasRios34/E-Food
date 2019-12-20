import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {ContextProvider} from './Context';
import webPack from 'react-bootstrap';

const handleSocialLogin = (user) => {
    console.log(user)
    }
    
const handleSocialLoginFailure = (err) => {
    console.error(err)
    }


ReactDOM.render(
<ContextProvider>
<Router>
<App />
    {/* 
    <Facebook
            provider='facebook'
            appId='2443297292611367'
            onLoginSuccess={handleSocialLogin}
            onLoginFailure={handleSocialLoginFailure}
            >
            Login with Facebook
    </Facebook>
        */}
</Router>
</ContextProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
