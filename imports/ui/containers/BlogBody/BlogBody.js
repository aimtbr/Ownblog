import React from 'react';
import {Switch, Route} from 'react-router';
import {withTracker} from 'meteor/react-meteor-data'
import BlogLeftSide from "./LeftSideBody/LeftSide";
import BlogRightSide from "./RightSideBody/RightSide";
import AddPost from "../../components/AddPost/AddPost";

class BlogBody extends React.Component {
    render() {
        const readURL = (input, url) => {
            if (input.files && input.files[0]) {
                try {
                    url = window.URL.createObjectURL(input.files[0]);
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#temp-img')
                            .attr('src', e.target.result)
                            .width(50)
                            .height(50);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
                catch
                    {
                        throw new Meteor.Error("image-loading-failed")
                    }
                }
            };

        return (
            <div className="container">
                <Switch>
                    <Route exact path="/blog" component={BlogLeftSide}/>
                    <Route path="/blog/add-post" render={props => <AddPost {...props} userId={this.props.currentUserId}
                                                                           user={this.props.currentUser}
                                                                           readURL={readURL}/>}/>
                </Switch>
                <BlogRightSide/>
            </div>
        )
    }
}

export default withTracker(() => {
    return {
        currentUserId: Meteor.userId(),
        currentUser: Meteor.user()
    };
})(BlogBody);