import React, { Component } from 'react'
import FacebookLogin from 'react-facebook-login';
import SocialLogin from 'react-social-login';

export default class Facebook extends Component {
    
    state ={
        isLoggedIn:false,
        userID: '',
        name:'',
        email:'',
        direccionEnvio:'',
        telefono:'',
        tiquete:''
    }

    componentClicked = () => console.log("clicked")

    responseFacebook =(response)=>{
        console.log(response);
    }

    
    render() {

        let fbContent;

        if(this.state.isLoggedIn){
            fbContent = null;
        }else{
            fbContent = (
                <FacebookLogin
                appId="2443297292611367"
                autoLoad={true}
                fields="name,email, picture"
                onClick={this.componentClicked}
                callBack={this.responseFacebook}>
                </FacebookLogin>
            );
        }
        return (
            <div>
                {fbContent}
            </div>
        )
    }
    /*
    render() {
        return (
            <button onClick={this.props.triggerLogin} {...this.props}>
                { this.props.children }
            </button>
        );
    }
    */
}

//export default SocialLogin(Facebook);
