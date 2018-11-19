import React from 'react';
import './post.css'

const Post = props => {
    return (
        <div className="card">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img className="card-img-top post-image" src="no-img.png"/>
                </div>
                <div className="col">
                    <div className="card-body">
                        <h2 className="card-title">Some title</h2>
                        <p className="card-text text-justify">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consectetur consequatur consequuntur doloribus earum facere fugit illum
                        </p>
                        <p className="card-text text-muted">{new Date().toDateString()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Post;
