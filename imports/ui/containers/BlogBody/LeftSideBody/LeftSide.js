import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';
import RecentPosts from "../../../components/RecentPosts/RecentPosts";
import './leftside.css';

class BlogLeftSide extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12 left-side-blog-body">
                    <h2 className="text-center recently">Recently</h2>
                    <Link to={`${this.props.match.url}/add-post`}>
                        <button type="button" className="btn btn-success m-2">Add post</button>
                    </Link>
                    <RecentPosts/>
                </div>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        currentUser: Meteor.user()
    }
})(BlogLeftSide)

