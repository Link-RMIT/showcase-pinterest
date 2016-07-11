import './app-body.html';
import './pins.html';
import { Template } from 'meteor/templating';



Template.pins.helpers({
    pins(){
        console.log('pins');
        return [];
    },
});


Template.pins.rendered = function() {
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
};
