import React from 'react';
import {thunks} from '../../../api/duck'
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Navigation from "../../components/Navigation/Navigation";
import BlogBody from "../BlogBody/BlogBody";
import {store} from "../../../api/duck/store";


export default class App extends React.Component {
    componentDidMount(){
        store.dispatch(thunks.LoadUser())
    }

    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Navigation/>
                    <Switch>
                        <Route path="/blog" component={BlogBody}/>
                        {/*also need to add the 404 component*/}
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}