import React from 'react';
import {Meteor} from 'meteor/meteor';
import thunks from '../../../api/duck'
import {Switch, Route} from 'react-router';
import {connect} from 'react-redux';
import BlogLeftSide from "./LeftSideBody/LeftSide";
import BlogRightSide from "./RightSideBody/RightSide";
import AddPost from "../../components/AddPost/AddPost";

class BlogBody extends React.Component {
    render() {
        const readURL = input => {
            if (input.files && input.files[0]) {
                try {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#temp-img')
                            .attr('src', e.target.result)
                            .width(50)
                            .height(50);
                    };
                    reader.readAsDataURL(input.files[0]);
                }
                catch {
                    throw new Meteor.Error("image-loading-failed")
                }
            }
        };

        return (
            <div className="container">
                <Switch>
                    <Route exact path="/blog" component={BlogLeftSide}/>
                    <Route path="/blog/add-post" render={() => <AddPost user={this.props.user}
                                                                        NewPost={this.props.NewPostAction}
                                                                        readURL={readURL}/>}
                    />
                </Switch>
                <BlogRightSide/>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return {
        posts: store.posts,
        user: store.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        NewPostAction: post => dispatch(thunks.NewPostAction(post)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogBody);