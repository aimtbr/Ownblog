import {Mongo} from 'meteor/mongo'

const Posts = new Mongo.Collection("Posts");

Meteor.methods({
    "NewPostToCol"(post){
        Posts.insert(post)
    },
});

export default {
    Posts
}