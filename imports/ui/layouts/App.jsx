import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "bootstrap-without-jquery";
import Nav from "./Nav.jsx";
import { Accounts } from 'meteor/accounts-base';
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});

class Layout extends React.Component {
    render(){
        console.log(Object.keys(this.props.children));
        return (
            <div>
                <Nav />
                <h1>main</h1>
                {this.props.children}
            </div>
        )
    }
}

class Pin extends React.Component {
    constructor() {
        super();
        this.state = {
            url:'/',
            title:'foo',
        };
    }
    onLoadImgFail(event){
        this.setState({'url':'http://pintech.herokuapp.com/placeholder.png'});
    }
    render(){
        return (
            <div className="pin">
                <div className="img-wrapper">
                    <img src={this.state.url} onError={this.onLoadImgFail.bind(this)} />
                </div>
                <div className="caption text-center">
                    <div className="title">
                        {this.state.title}
                    </div>
                </div>
            </div>
        )
    }
}


class Recent extends React.Component {
    render(){
        return (<div id="pins"><Pin /><Pin /><Pin/></div>)
    }
}

class MyPins extends React.Component {
    render(){
        return (<h1>mypins</h1>)
    }
}

class Add extends React.Component {
    render(){
        console.log('add');
        return (<h1>add</h1>)
    }
}

class User  extends React.Component {
    render(){
        return (<h1>user</h1>)
    }
}

export default class App extends React.Component {
    render(){
        console.log('render app');
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Layout}>
                    <Route path="recent" name="recent" component={Recent}></Route>
                    <Route path="my-pins" name="my-pins" component={MyPins}></Route>
                    <Route path="add" name="add" component={Add}></Route>
                    <Route path="user" name="user" component={User}></Route>
                </Route>
            </Router>
        );
    }
}



function login_required(target){
    const render = target.prototype.render;
    console.log(render.apply)
    target.prototype.render = (...args)=>{
        console.log(Meteor.userId());
        return Meteor.userId() && render.apply(this,args) || (
            <div className="row-fluid">
                <div className="alert alert-danger">
                    You can't get here! Please log-in.
                </div>
            </div>
        )
    }
}
[Add,MyPins].forEach(login_required);
