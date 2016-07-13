import './app-body.html';
import './pins.html';
import './add.html';
import { FlowRouter } from 'meteor/kadira:flow-router';


import { Template } from 'meteor/templating';
import { add,remove } from '../../api/cards/methods.js';
import { Cards } from '../../api/cards/cards.js';
import './nav.js';


import { Accounts } from 'meteor/accounts-base';
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});



Template.pins.helpers({
    pins(){
        return Cards.find({},{
            transform:(pin)=>{
                user = Meteor.users.findOne({_id:pin.userId});
                if(user){
                    pin.userName = user.username;
                }
                return pin;
            }
        }).fetch();
    }
});

Template.mypins.helpers({
    pins(){
        return Cards.find({userId: Meteor.userId()}).fetch();
    }
});

Template.recent.helpers({
    pins(){
        return Cards.find({},{
            transform:(pin)=>{
                user = Meteor.users.findOne({_id:pin.userId});
                if(user){
                    pin.userName = user.username;
                }
                return pin;
            }
        }).fetch();
    }
});

Template.user.helpers({
    pins(){
        console.log(FlowRouter.getParam('_id'));
        return Cards.find({
            userId: FlowRouter.getParam('_id')
        });
    }
});

Template.pins.rendered = () => {
    /*
    var $container = $('#pins');

    $.resize(()=>{
        $container.masonry({
            itemSelector : '.card',
            columnWidth : '.card',
            percentPosition: true,
            isFitWidth: true,
            resize: true,
            percentPosition: true,
            gutter:10,
        })});
     */
};

const on_api_error = (err)=>{
    if(err){
        console.log(err);
    }
};

Template.mycard.events({
    'click a'(event){
        console.log(this);
        remove.call({id:this._id},on_api_error);
    }
});

Template.add.events({
    'submit form'(event){
        event.preventDefault();
        const target = event.target;
        console.log(target.url.value);
        console.log(target.title.value);
        target.url='';
        const cardId = add.call({
            url: target.url.value,
            title: target.title.value,
        },on_api_error);
        FlowRouter.go('/my-pins')
    }
});
