import './nav.html';
import { Template } from 'meteor/templating';
Template.nav.helpers({
    routes(){
        return [
            ['/recent','Recent'],
        ].concat(Meteor.userId()?[
            ['/my-pins','My Pins'],
            ['/add','Add'],
        ]:[]).map(
            (a)=>{return {url:a[0],desc:a[1]};}
        );
    }
});

Template.nav.rendered = ()=>{
    $('#login-dropdown-list a')
        .removeClass()
        .addClass("dropdown-toggle");
}
