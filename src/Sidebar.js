import { Avatar } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'


function Sidebar() {

    const recent = (topic) =>(     

        <div className="sidebar__recentItem">
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
        
    )
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://images.unsplash.com/photo-1506259091721-347e791bab0f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="" />
                <Avatar src="./myavatar.png" className="sidebar__avatar" />
                <h2>Mayank Jain</h2>
                <h4>Web Developer | Content Writer</h4>
                 
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2500</p>
                </div>
                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">500+</p>
                </div>
            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                
                {recent("LinkedIn Clone")}
                {recent('DaeDarus Hack')}
                {recent('HackOn 2.0')}
            </div>
        </div>
    )
}

export default Sidebar
