import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Cards } from './cards.js';


export const add = new ValidatedMethod({
    name: 'cards.add',
    validate: new SimpleSchema({
        title: Cards.simpleSchema().schema('title'),
        url: Cards.simpleSchema().schema('url'),
    }).validator(),
    run( {title, url} ){
        console.log(['title','url']);
        Cards.insert({
            title: title,
            url: url,
            userId: this.userId,
            createdAt: new Date(),
        });
    }
});
