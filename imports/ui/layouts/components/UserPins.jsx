import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { BasicPin } from './Pin.jsx';
import PinModel from '../../../api/pins.js';

class User  extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const list = this.props.pins;
        console.log(list);
        const pins_list = (list || []).map((pin)=>{
            return (
                <BasicPin pin={ pin } key={ pin._id } />
            );
        });
        return (
            <div id="pins">
                { pins_list }
            </div>
        )
    }
}
export default createContainer((props)=>{
    console.log(props);
    return {
        pins: PinModel.Pins.find({userId: props.routeParams.userId}).fetch(),
    };
}, User );
