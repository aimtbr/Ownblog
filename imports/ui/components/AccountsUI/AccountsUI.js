import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Template } from 'meteor/templating';
import { Blaze } from 'meteor/blaze';
import './accountsui.css'
export default class AccountsUI extends Component {
    componentDidMount() {
        this.view = Blaze.render(Template.loginButtons,
            ReactDOM.findDOMNode(this.refs.accounts));
    }
    componentWillUnmount() {
        // Clean up Blaze view
        Blaze.remove(this.view);
    }
    render(){
        return(
            <span ref="accounts" className="nav-link sign-up"/>
        )
    }
}