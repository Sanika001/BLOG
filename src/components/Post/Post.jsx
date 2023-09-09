import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';
import img from './img.jpg'
export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src={img} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                MY FIRST POST
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">
        Outdoor games offer children more than just physical exercise; they provide a vital playground for imagination, social development, and life skills. In my upcoming blog post, I'll delve into the invaluable importance of outdoor play in nurturing healthy, happy, and well-rounded kids. Join me as we explore the adventures awaiting children beyond the confines of screens and walls

        </p>
    </div>
  )
}

