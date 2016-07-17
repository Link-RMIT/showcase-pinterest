import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";


import Bootstrap from "bootstrap-without-jquery";
import Nav from "./Nav.jsx";
import { Accounts } from 'meteor/accounts-base';

import AllPins from './components/AllPins.jsx'
import MyPins from './components/MyPins.jsx'
import UserPins from './components/UserPins.jsx'
import { Add } from './components/Add.jsx'

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

import {add,remove} from '../../api/methods.js';

class Layout extends React.Component {
    render(){
        console.log(Object.keys(this.props.children||{}));
        return (
            <div>
                <Nav />
                {this.props.children}
            </div>
        )
    }
}


export default class App extends React.Component {
    render(){
        console.log('render app');
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <IndexRoute component={AllPins} />
                    <Route path="recent" name="recent" component={AllPins}></Route>
                    <Route path="my-pins" name="my-pins" component={MyPins}></Route>
                    <Route path="add" name="add" component={Add}></Route>
                    <Route path="user/:userId" name="user" component={UserPins}></Route>
                </Route>
            </Router>
        );
    }
}


/*
function login_required(target){
    const render = target.prototype.render;
    console.log('==========');
    console.log(target.prototype.onSubmit);
    target.prototype.render = (...args)=>{
        return Meteor.userId() && render.apply(this,args) || (
            <div className="row-fluid">
                <div className="alert alert-danger">
                    You can't get here! Please log-in.
                </div>
            </div>
        )
    }
    console.log(target.prototype.onSubmit);
    console.log('==========');
}
[Add,MyPins].forEach(login_required);
*/
