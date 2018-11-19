import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
import {Meteor} from "meteor/meteor";

export const comments = new Mongo.Collection("comments");

Meteor.methods(
    {
        //need to add methods
    },
    {}
);