import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Bootstrap from "bootstrap-without-jquery";


class MainPage extends React.Component {
    render(){
        return (
            <div>
                <h1>main</h1>
                {this.props.children}
            </div>
        )
    }
}


class Recent extends React.Component {
    render(){
        return (<h1>recent</h1>)
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
                <Route path="/" component={MainPage}>
                    <Route path="recent" name="recent" component={Recent}></Route>
                    <Route path="my-pins" name="my-pins" component={MyPins}></Route>
                    <Route path="add" name="add" component={Add}></Route>
                    <Route path="user" name="user" component={User}></Route>
                </Route>
            </Router>
        );
    }
}
