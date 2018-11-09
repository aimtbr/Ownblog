import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Provider} from 'react-redux'
import {render} from 'react-dom';
import App from '../imports/ui/containers/App/App';
import store from "../imports/api/store/configureStore";
import './main.html';

Meteor.startup(() => {
    render(
        <Provider store={store}>
            <App/>
        </Provider>, document.getElementById("app")
    );
});
