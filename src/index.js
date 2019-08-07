import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware,compose} from "redux";
import {BrowserRouter,Route,Redirect,Switch} from "react-router-dom";
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import reducers from './CombineReducer/CombineReducer'
import Auth from "./Auth/Auth";
import DashBoard from "./DashBoard/DashBoard";
import Axconfig from "./Axconfig/Axconfig"
const store = createStore(reducers,compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():()=>{}
))
/*function render() {
    ReactDOM.render(<App store={store} add={add} sub={sub} addAsync={addAsync}/>, document.getElementById('root'));
}
render()
store.subscribe(render)*/
/*class Test extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        console.log(this.props)
        // this.props.history.push('/')
        return (
            <h2>测试组件{this.props.match.params.location}</h2>
        );
    }
}*/
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path='/auth'  component={Auth}></Route>
                    <Route path='/dashboard' component={DashBoard}></Route>
                    <Redirect to='/dashboard'></Redirect>
                </Switch>
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
