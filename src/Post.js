import { Avatar } from '@material-ui/core'
import React from 'react'
import InputOption from './InputOption'
import './Post.css'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ShareIcon from '@material-ui/icons/Share';

function Post({name,description,message,photoURL,timestamp}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar src={photoURL}/>
                <div className="post__info">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    
                </div>
            </div>

            <div className="post__body">
                <p>{message}</p>

                <div className="post__options">
                    <InputOption Icon={ThumbUpIcon} title="Like" color="gray" />
                    <InputOption Icon={CommentIcon} title="Comment" color="gray" />
                    <InputOption Icon={ShareIcon} title="Share" color="gray" />
                    <InputOption Icon={SendIcon} title="Send" color="gray" />

                </div>
            </div>
            
        </div>
    )
}

export default Post
