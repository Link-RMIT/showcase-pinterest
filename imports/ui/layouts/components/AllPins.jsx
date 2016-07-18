import React from "react";
import { createContainer } from 'meteor/react-meteor-data';
import PinModel from '../../../api/pins.js'
import { PublicPin } from './Pin.jsx'

export class AllPins extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.pins;
        console.log(list);
        const pins_list = (list || []).map((pin)=>{
            return (
                <PublicPin pin={ pin } key={ pin._id } />
            );
        });
        return (
            <div id="pins">
                { pins_list }
            </div>
        )
    }/*
    render(){
        return (<div>all pins</div>)
    }*/
}


AllPins.propTypes = {
    pins: React.PropTypes.array.isRequired,
}

export default createContainer(()=>{
    const users = Meteor.users.find({}).fetch();
    console.log('--------------------')
    console.log(users);
    const pins = PinModel.Pins.find({},{
        transform:(pin)=>{
            user = Meteor.users.findOne({_id:pin.userId});
            console.log(pin.userId);

            if(user){
                pin.userName = user.username;
            }
            return pin;
        }
    }).fetch();
    console.log(pins);
    return {
        pins: pins,
    };
}, AllPins );
