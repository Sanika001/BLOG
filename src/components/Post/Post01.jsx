import React from 'react';
import "./post.css"
import Posts from '../posts/Posts';
import music from './music.jpg'

export default function Post01() {
  return (
    <div className="post">
        <img className="postImg" src={music} alt="" />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">
                Bollywood
            </span>
            <hr />
            <span className="postDate">
                1 hr ago
            </span>
        </div>
        <p className="postDesc">
        Music transcends language, connecting us through the universal language of melody and rhythm. In my upcoming blog post, I'll explore the profound impact music has on our emotions, memories, and daily lives. Join me in celebrating the art that soothes our souls and ignites our passions.
        </p>
    </div>
  )
}