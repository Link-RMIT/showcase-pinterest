import React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import PinModel from '../../../api/pins.js';
import { MyPin} from './Pin.jsx';
import { remove } from '../../../api/methods.js'

class MyPins extends React.Component {
    constructor(props){
        super(props);
        this.state = Object.assign(this.state || {}, props);
    }
    onDelete(pin){
        console.log(pin);
        remove.call({id:pin._id});
        this.setState({
            pins: this.state.pins.filter((p)=>{return p._id != pin._id}),
        });
    }
    render(){
        const list = this.state.pins;
        const pins_list = (list || []).map((pin)=>{
            return (
                <MyPin pin={ pin } key={ pin._id } onDelete={ this.onDelete.bind(this) }/>
            );
        });
        return Meteor.userId()?
             (
                <div id="pins">
                    { pins_list }
                </div>
            ):(
                <div className="row-fluid">
                    <div className="alert alert-danger">
                        You can't get here! Please log-in.
                    </div>
                </div>
            )
    }
}


MyPins.propTypes = {
    pins: React.PropTypes.array.isRequired,
}

export default createContainer(()=>{
    return {
        pins: PinModel.Pins.find({userId: Meteor.userId()}).fetch(),
    };
}, MyPins );
