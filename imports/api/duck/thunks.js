import actions from './actions'
import {Tracker} from 'meteor/tracker'
import {check} from 'meteor/check'
import v4 from 'uuid'

const NewPostAction = post => {
    return dispatch => {
        dispatch(actions.NewPostActionPENDING());
        try {
            check(post, {
                title: String,
                description: String,
                timestamp: String,
                tags: [String],
                image_url: String
            });
            dispatch(actions.NewPostActionSUCCESS({id: v4(), ...post}));
        }
        catch (e) {
            dispatch(actions.NewPostActionFAILURE(e.message))
        }
    }
};

const LoadUser = () => {
    return dispatch => {
        Tracker.autorun(() => {
            dispatch(actions.UserDataAction())
            // e.g. call thunk on didmount where thunk calls meteor.call and change db
        })
    }
};

export default {
    NewPostAction,
    LoadUser
}

