import React, {Component} from 'react';
import {Button} from "antd-mobile";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux/es/alternate-renderers";
import {login,getUserData} from "../Auth.redux/Auth.redux";
// import axios from "axios";

@connect(
    state=>state.authState,
    {login,getUserData}
)
class Auth extends Component {
    componentDidMount() {
        this.props.getUserData()
        /*axios.get('/data')
            .then(res=>{
                console.log(res)
            })
             .catch((error)=>{
                 console.log(error.message)
                 }
             )*/
    }
    render() {
        return (
            <div>
                {this.props.isAuth?<Redirect to='/dashboard'></Redirect>:null}
                <h2>Auth asdf</h2>
                <h2>用户名{this.props.user},年龄{this.props.age}</h2>
                <Button type='ghost' onClick={this.props.login}>登录</Button>
            </div>
        );
    }
}

export default Auth;