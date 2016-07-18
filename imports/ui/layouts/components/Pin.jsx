import React from "react";
import { Link } from "react-router";


export class BasicPin extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({pin:{
            url:'/',
            title:'foo',
            rest:[],
        }},{pin:props.pin});
    }
    onLoadImgFail(event){
        this.setState(Object.assign(this.state.pin,{'url':'http://pintech.herokuapp.com/placeholder.png'}));
        console.log(this.state.url);
    }
    render(){
        const {url,title} = this.state.pin;
        return (
            <div className="pin">
                <div className="img-wrapper">
                    <img src={url} onError={this.onLoadImgFail.bind(this)} />
                </div>
                <div className="caption text-center">
                    <div className="title">
                        {title}
                    </div>
                    {this.state.rest}
                </div>
            </div>
        )
    }
}

export class PublicPin extends BasicPin{
    constructor(props){
        super(props);
        console.log(this.props);
        const {userId, userName} = props.pin;
        this.state.rest = (
            <div className="author" key="author">
                <Link to={"user/"+userId}>{userName}</Link>
            </div>
        );
    }
}

export class MyPin extends BasicPin{
    onDelete(){
        console.log(this.props);
        console.log('delete');
    }
    constructor(props){
        super(props);
        //const {userId, userName} = this.props.pin;
        this.state.rest = (
            <button className="btn btn-link delete" onClick={()=>{this.props.onDelete(this.props.pin)}}>
                Delete
            </button>
        );
    }
}
