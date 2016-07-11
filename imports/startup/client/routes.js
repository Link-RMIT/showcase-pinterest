import { FlowRouter } from 'meteor/kadira:flow-router';

import '../../ui/layouts/app-body.js';

FlowRouter.route('/',{
    name: 'App.home',
    action(){
        BlazeLayout.render('App_body', {main: "home"});
    },
});

FlowRouter.route('/recent',{
    name: 'App.home',
    action(){
        BlazeLayout.render('App_body', {main: "recent"});
    },
});

FlowRouter.route('/my-pins',{
    name: 'App.home',
    action(){
        BlazeLayout.render('App_body', {main: "my-pins"});
    },
});

FlowRouter.route('/add',{
    name: 'App.home',
    action(){
        BlazeLayout.render('App_body', {main: "add"});
    },
});

FlowRouter.notFound = {
    action() {
        BlazeLayout.render('App_body', { main: 'App_notFound' });
    },
};

console.log('route');
