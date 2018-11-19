import React from 'react';
import {Switch, Route} from 'react-router';
import {BrowserRouter} from 'react-router-dom';
import Navigation from "../../components/Navigation/Navigation";
import BlogBody from "../BlogBody/BlogBody";


export default class App extends React.Component {

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