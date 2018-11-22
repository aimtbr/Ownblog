import React from 'react';
import {Link} from "react-router-dom";
import './addpost.css';

var title = "", description = "", image_url = "", tags = "";
const AddPost = props => {
    //TODO: ADD VALIDATION OF THE INPUTS
    return (
        <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-12 add-post">
                <h2 className="text-center m-3">Add post to your blog</h2>
                <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Name your post</span>
                        </div>
                        <input type="text" className="form-control" ref={node => title = node}/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Describe your post</span>
                        </div>
                        <textarea className="form-control" id="add-post-textarea"
                                  ref={node => description = node} rows="3"/>
                    </div>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <span className="input-group-text">Add some tags to your post</span>
                        </div>
                        <input type="text" className="form-control" ref={node => tags = node}/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="file" accept=".jpg, .jpeg, .png"
                               ref={node => image_url = node}
                               className="form-control-file w-auto d-inline-block"
                               onChange={e => props.readURL(e.currentTarget)}/>
                        <img id="temp-img" src="#" className="img-fluid"/>
                    </div>
                    <div className="text-center">
                        <Link to="/blog">
                            <button type="button" onClick={e => {
                                e.preventDefault();
                                image_url = URL.createObjectURL(image_url.files[0]).slice(5);
                                tags = tags.value.split(",");
                                let timestamp = new Date().toDateString();
                                props.NewPost({author_id: props.user.userId,
                                    author: props.user.user,
                                    title: title.value,
                                    description: description.value,
                                    timestamp: timestamp,
                                    tags: tags,
                                    image_url: image_url})
                                //TODO: SETUP THE REQUIRED SIZE OF THE IMAGE
                            }} className="btn btn-success m-3">Save and add</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    )
};

//TODO: ADD A WITHTRACKER()

export default AddPost;