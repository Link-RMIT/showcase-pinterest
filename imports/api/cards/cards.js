import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';



export const Cards = new Mongo.Collection('Cards');

Cards.deny({
    insert(){ return true; },
    update(){ return true; },
    remove(){ return true; },
});

Cards.schema = new SimpleSchema({
    _id: { type: String, regEx: SimpleSchema.RegEx.Id},
    title: { type: String },
    createdAt: { type: Date,  denyUpdate: true },
    userId: { type: String, regEx: SimpleSchema.RegEx.Id, optional: true },
    url: { type: String, regEx: SimpleSchema.RegEx.Url },
});

Cards.publicFields = {
    title: 1,
    createdAt: 1,
    url: 1,
    userId: 1,
};

//"meteor add aldeed:collection2" required
Cards.attachSchema(Cards.schema);
