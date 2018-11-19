const ADD_POST_REQUEST_PENDING = "ADD_POST_REQUEST_PENDING";
const ADD_POST_REQUEST_FAILURE = "ADD_POST_REQUEST_FAILURE";
const ADD_POST_REQUEST_SUCCESS = "ADD_POST_REQUEST_SUCCESS";

const AddPostActionSUCCESS = post => { return {type: ADD_POST_REQUEST_SUCCESS, payload: post}};
const AddPostActionFAILURE = error => { return {type: ADD_POST_REQUEST_FAILURE, payload: error}};

//                     !!!!!!!!!!!!!!! REFORMAT TO DUCKS !!!!!!!!!!!!!!!