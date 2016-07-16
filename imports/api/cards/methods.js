import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Cards } from './cards.js';



export const add = new ValidatedMethod({
    name: 'cards.add',
    validate: new SimpleSchema({
        title: Cards.simpleSchema().schema('title'),
        url: Cards.simpleSchema().schema('url'),
    }).validator(),
    run( {title, url} ){
        console.log([title,url]);
        if (!this.userId) return;
        Cards.insert({
            title: title,
            url: url,
            userId: this.userId,
            createdAt: new Date(),
        });
    }
});

export const remove = new ValidatedMethod({
    name: 'cards.remove',
    validate: new SimpleSchema({
        id: Cards.simpleSchema().schema('_id'),
    }).validator({ clean: true, filter: false }),
    run( {id} ){
        console.log([id]);
        if (!this.userId) return;
        const card = Cards.findOne(id);
        if(!(card.userId === this.userId)){
            throw new Meteor.Error(
                'cards.remove.accessDenied',
                'Cannot remove pins are not created by you.'
            );
        }
        Cards.remove(id);
    }
});
