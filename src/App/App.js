import React, {Component} from 'react';
import {Button} from "antd-mobile";
import {connect} from "react-redux/es/alternate-renderers";
import {add, addAsync, sub} from "../redux/redux";
@connect(
    state=>({num:state.counter}),
    {add, addAsync, sub}
)

class App extends Component {
    render() {
        return (
            <div>
                <h1>现在是{this.props.num}个</h1>
                <Button type='primary' onClick={this.props.add}>增加</Button>
                <Button type='primary' onClick={this.props.sub}>减少</Button>
                <Button type='primary' onClick={this.props.addAsync}>延迟2s增加</Button>
            </div>
        );
    }
}
/*const mapStatetoProps = (state) => {
    return {num: state}
}
const actionCreator = {add,sub,addAsync}
App = connect(mapStatetoProps,actionCreator)(App)*/
export default App;