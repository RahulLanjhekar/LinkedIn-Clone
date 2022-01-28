import { Avatar } from '@material-ui/core';
import React from 'react';
import "./Sidebar.css"

const Sidebar = () => {

    const recentItem = (topic) => {
        return (
            <div className="sidebar__recentItem">
                <span className='sidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }

  return (
      <div className="sidebar">
          <div className="sidebar__top">
              <img src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmVvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1000&q=80" alt="" />
              <Avatar src={"https://cdn.iconscout.com/icon/free/png-256/face-1659511-1410033.png"} className='sidebar__avatar'/>
              <h2>Rahul Lanjhekar</h2>
              <h4>Passionate Web Developer</h4>
          </div>
          <div className="sidebar__stats">
              <div className="sidebar__stat">
                  <p>Who Viewed You</p>
                  <p className='sidebar__statNumber'>2,345</p>
              </div>
              <div className="sidebar__stat">
                  <p>Views on Post</p>
                  <p className='sidebar__statNumber'>2,547</p>
              </div>
          </div>
          <div className="sidebar__bottom">
          <p>Recent</p>
          {recentItem("React")}
          {recentItem("Programming")}
          {recentItem("Javascript")}
          {recentItem("Front-End")}
          {recentItem("Developer")}
          </div>
      </div>
  )
};

export default Sidebar;
