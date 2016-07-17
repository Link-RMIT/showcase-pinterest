import React from "react";

export class Add extends React.Component {
    constructor(){
        super();
        console.log('on add');
    }
    onSubmit(){
        console.log({
            url: this.refs.url.value,
            title: this.refs.title.value,
        });
        add.call({
            url: this.refs.url.value,
            title: this.refs.title.value,
        },(event)=>{
            console.log('error');
            console.log(event);
        });
    }
    render(){
        console.log('add');
        return (
            <fieldset>
                <h4 className="text-center">Add new pin</h4>
                <div className="col-lg-10">
                    <input className="form-control" type="text" ref="title" name="title" placeholder="title" />
                </div>
                <div className="col-lg-10">
                    <input  className="form-control" type="text" ref="url" name="url" placeholder="url" />
                </div>
                <div className="col-lg-10">
                    <button className="btn btn-primary" type="submit" onClick={this.onSubmit.bind(this)}>Submit</button>
                </div>
            </fieldset>
        )
    }
}
