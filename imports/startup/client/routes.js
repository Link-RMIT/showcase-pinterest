import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../ui/layouts/app-body.js';

FlowRouter.route('/',{
    name: 'App.home',
    action(){
        BlazeLayout.render('App_body', {main: "pins", filter: {}});
    },
});

FlowRouter.route('/recent',{
    name: 'App.recent',
    action(){
        BlazeLayout.render('App_body', {main: "recent"});
    },
});

FlowRouter.route('/my-pins',{
    name: 'App.mypins',
    action(){
        BlazeLayout.render('App_body', {main: "mypins"});
    },
});

FlowRouter.route('/add',{
    name: 'App.add',
    action(){
        BlazeLayout.render('App_body', {main: "add"});
    },
});

FlowRouter.route('/user/:_id',{
    name: 'App.user',
    action(params){
        BlazeLayout.render('App_body', {main: "user"});
    },
});


FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};

console.log('route');
