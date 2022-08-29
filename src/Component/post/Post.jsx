import React, { useState } from 'react';
import './Post.css';
import {MoreVert} from '@mui/icons-material';
import Users from './DummyData';

const Post = ({post}) => {

    const [like, setLike] = useState(post.like)
    const[isLiked, setIsLike] = useState(false)


    const likeHandler  = () => {
        setLike(isLiked ? like - 1 : like + 1)
        setIsLike(!isLiked)
    }

      return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img className='postProfileImg' src={Users.filter((u) => u.id===post?.userid)[0].profilepicture} alt="" />
                    <span className="postUserName">{Users.filter((u) => u.id===post?.userid)[0].username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="images/like.png" className='likeIcon' alt="" onClick={likeHandler} />
                    <img src="images/heart.jpeg" alt="" className="likeIcon" onClick={likeHandler} />
                    <span className="postLikeCounter">{like} people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{post.comments} comments</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Post