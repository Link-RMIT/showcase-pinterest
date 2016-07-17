import React from "react";
export class BasicPin extends React.Component {
    constructor() {
        super();
        this.state = {
            url:'/',
            title:'foo',
            rest:[],
        };
    }
    onLoadImgFail(event){
        this.setState({'url':'http://pintech.herokuapp.com/placeholder.png'});
    }
    render(){
        const {url,title} = this.props.pin;
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
                <a href="/user/{userId}">{userName}</a>
            </div>
        );
    }
}

export class MyPin extends BasicPin{
    constructor(props){
        super(props);
        this.state.user = {
            userId:'1',
            userName:'foo',
        }
        const {userId, userName} = this.state.user;
        this.state.rest = (
            <a href="#delete" class="delete">
                Delete
            </a>
        );
    }
}
