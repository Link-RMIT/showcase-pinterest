import React from "react";
import { IndexLink, Link } from "react-router";

export default class Nav extends React.Component {

    render(){
        const routes = [
            ['recent', 'Recent'],
            ['my-pins', 'My Pins'],
            ['add', 'Add'],
        ].map((i,index)=>{ return (
            <li key={index}>
                <IndexLink to={i[0]}>{i[1]}</IndexLink>
            </li>
        )});

        return (
            <nav className="navbar navbar-inverse " role="navigation">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">Niptech</a>
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="sr-only">Toggle navigation</span>
                    </button>
                </div>

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                        {routes}
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        {"login button here"}
                    </ul>
                </div>
            </nav>

        )
    }
}
