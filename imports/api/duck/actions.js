import types from './types'

const NewPostActionSUCCESS = post => { return {type: types.NEW_POST_REQUEST_SUCCESS, payload: post}};
const NewPostActionFAILURE = error => { return {type: types.NEW_POST_REQUEST_FAILURE, error: error}};
const NewPostActionPENDING = () => { return {type: types.NEW_POST_REQUEST_PENDING}};
const UserDataAction = () => { return {type: types.USER_DATA, payload: Meteor.user()}};

//TODO: METEOR.USER() CALL IS UNDEFINED, FIND OUT WHY

export default {
    NewPostActionFAILURE,
    NewPostActionSUCCESS,
    NewPostActionPENDING,
    UserDataAction
}