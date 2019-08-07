import React, {Component} from 'react';
import {Link,Route,Redirect} from "react-router-dom";
import {Button} from "antd-mobile";
import App from "../App/App";
import {connect} from "react-redux/es/alternate-renderers";
import {logout} from "../Auth.redux/Auth.redux";

function Erying() {
    return <h2>二营</h2>
}
function Qibinglian() {
    return <h2>骑兵连</h2>
}
@connect(
    state=>state.authState,
    {logout}
)
class DashBoard extends Component {
    render() {
        const redirectToAuth = <Redirect to='/auth'></Redirect>
        const app = (
            <div>
                <h1>独立团</h1>
                <Button type='ghost' onClick={this.props.logout}>登出</Button>,
                <ul>
                    <li><Link to='/dashboard/'>一营</Link></li>
                    <li><Link to='/dashboard/erying'>二营</Link></li>
                    <li><Link to='/dashboard/qibinglian'>骑兵连</Link></li>
                </ul>
                <Route path='/dashboard/' exact component={App}></Route>
                <Route path='/dashboard/erying' component={Erying}></Route>
                <Route path='/dashboard/qibinglian' component={Qibinglian}></Route>
            </div>
        )
        return (

            this.props.isAuth?app:redirectToAuth
        );
    }
}

export default DashBoard;