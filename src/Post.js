import React from 'react';
import './Post.css'
import { Avatar } from '@material-ui/core';
import InputOption from './InputOption';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';

const Post = ({ name, description, message, index, deleteItem }) => {
  return (
    <div className="post">
        <div className="post__header">
            <Avatar src={"https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png"} />
            <div className="post__info">
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>


        <div className="post__body">
            <p>{message}</p>
        </div>

        <div className="post__buttons">
            <InputOption Icon={ThumbUpAltOutlinedIcon} title={"Like"} color={"gray"} />
            <InputOption Icon={ChatOutlinedIcon} title={"Comment"} color={"gray"} />
            <InputOption Icon={ShareOutlinedIcon} title={"Share"} color={"gray"} />
            <button style={{backgroundColor:"white", border:"none"}} onClick={() => deleteItem(index)}><InputOption Icon={DeleteOutlineOutlinedIcon}  title={"Delete"} color={"gray"} /></button>
        </div>
    </div>
  )
};

export default Post;
