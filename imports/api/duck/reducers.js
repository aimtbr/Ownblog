import {combineReducers} from 'redux'
import types from './types'

const PostsInitialState = {
    newPost: {},
    allPosts: [],
    isLoading: false,
    error: false
};

const PostsReducer = (state=PostsInitialState, action) => {
    switch(action.type){
        case types.NEW_POST_REQUEST_PENDING:
            return {...state, isLoading: true, error: false};
        case types.NEW_POST_REQUEST_SUCCESS:
            return {...state, newPost: action.payload, allPosts: {...action.payload, ...state.allPosts},
                isLoading: false};
        case types.NEW_POST_REQUEST_FAILURE:
            return {...state, error: action.error, isLoading: false};
        default:
            return state
    }
};

const UserInitialState = {
    user: "",
    userId: "",
    email: ""
};

const UserReducer = (state=UserInitialState, action) => {
    switch(action.type) {
        case types.USER_DATA:
            return {
                user: action.payload.username,
                userId: action.payload._id,
                email: action.payload.emails[0].address
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({posts: PostsReducer, user: UserReducer});

export default rootReducer;