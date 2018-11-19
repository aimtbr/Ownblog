import v4 from 'uuid';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';
import {Meteor} from "meteor/meteor";

export const posts = new Mongo.Collection("posts");

Meteor.methods(
    {
        "posts.add"(author, author_id, title, description, image_url, tags, createdAt){
            if(!this.userId) throw new Meteor.Error("not-authorized");
            check(author, String);
            check(title, String);
            check(description, String);
            check(image_url, String);
            check(tags, [String]);
            check(createdAt, String);
            const id = v4();
            posts.insert({id: id, author: author, author_id: author_id, title: title, description: description,
                image_url: image_url, tags: tags, createdAt: createdAt});
        },
    }
);