import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Pins } from './pins.js';



export const add = new ValidatedMethod({
    name: 'pins.add',
    validate: new SimpleSchema({
        title: Pins.simpleSchema().schema('title'),
        url: Pins.simpleSchema().schema('url'),
    }).validator(),
    run( {title, url} ){
        console.log([title,url]);
        //if (!this.userId) return;
        Pins.insert({
            title: title,
            url: url,
            userId: this.userId,
            createdAt: new Date(),
        });
    }
});

export const remove = new ValidatedMethod({
    name: 'pins.remove',
    validate: new SimpleSchema({
        id: Pins.simpleSchema().schema('_id'),
    }).validator({ clean: true, filter: false }),
    run( {id} ){
        console.log([id]);
        //if (!this.userId) return;
        const card = Pins.findOne(id);
        if(!(card.userId === this.userId)){
            throw new Meteor.Error(
                'pins.remove.accessDenied',
                'Cannot remove pins are not created by you.'
            );
        }
        Pins.remove(id);
    }
});
