import React, { useEffect, useState } from 'react';
import "./Feed.css"
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

// TO GET DATA FROM LOCAL STORAGE

const getLocalData = () => {
    const localData = localStorage.getItem('Post');

    if(localData){
        return JSON.parse(localData);
    } else {
        return [];
    }
}

const Feed = () => {
    const [content, setContent] = useState("");
    const [posts, setPosts] = useState(getLocalData());

    const sendPost = e => {
        e.preventDefault();
        setPosts([content, ...posts]);
        setContent("");
    }

    useEffect(() => {
        localStorage.setItem('Post', JSON.stringify(posts));
    },[posts])

    const deleteItem = (index) => {
        const updatedPosts = posts.filter((item, id) => {
            return id !== index;
        });
        setPosts(updatedPosts);
    } 

  return (
      <div className="feed">
          <div className="feed__inputContainer">
              <div className="feed__input">
                  <CreateIcon /> 
                  <form>
                      <input placeholder='Write a Post!' type="text" value={content} onChange={(e) => setContent(e.target.value)}  />
                      <button onClick={sendPost} type='submit'>POST</button>
                  </form>
              </div>
              <div className="feed__inputOptions">
                  <InputOption Icon={ImageIcon} title={"Photo"} color={"#70B5F9"}/>
                  <InputOption Icon={SubscriptionsIcon} title={"Video"} color={"#E7A44E"}/>
                  <InputOption Icon={EventNoteIcon} title={"Event"} color={"#C0CBCD"}/>
                  <InputOption Icon={CalendarViewDayIcon} title={"Write Article"} color={"#7FC15E"}/>
              </div>
          </div>
          {posts.map((post, index) => {
            return  <Post index={index} name={"Rahul Lanjhekar"} description={"Hello!"} message={post} deleteItem={deleteItem} />
          })}
          <div className="welcome">
              <div className="container">
                    <img src="https://wallpaperaccess.com/full/3214390.jpg" alt="" />
                    <h3>Please write something and Post it. Posts can also be deleted. Thanks!</h3>
              </div>
          </div>
      </div>
  )
};

export default Feed;
