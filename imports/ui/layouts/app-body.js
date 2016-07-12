import './app-body.html';
import './pins.html';
import './add.html';
import { FlowRouter } from 'meteor/kadira:flow-router';


import { Template } from 'meteor/templating';
import { add } from '../../api/cards/methods.js';
import { Cards } from '../../api/cards/cards.js';
import './nav.js';


import { Accounts } from 'meteor/accounts-base';
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY',
});



Template.pins.helpers({
    pins(){
        console.log('pins:');
        console.log(FlowRouter.current().route.path);
        return Cards.find({
                '/my-pins':{},
                '/recent':{},
            }[FlowRouter.current().route.path] || {}
        ).fetch();
    },
});


Template.pins.rendered = function() {
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
        })});*/
};

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
        },(err)=>{
            if(err){
                console.log(err);
            }
        });
    }
});
