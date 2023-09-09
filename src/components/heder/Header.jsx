import React from 'react';
import "./header.css"
import blog from './blog.jpg'
export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Sanika Marshettivar</span>
          <span className="headerTitleLg">Blog</span>
        </div>
        <img className="headerImg" src={blog} alt="" />
    </div>
  )
}
