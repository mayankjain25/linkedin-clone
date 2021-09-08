import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import NotificationsIcon from '@material-ui/icons/Notifications';

function Header() {
    return (
        <div className="header">
            {/* <h1>This is a header</h1> */}

            <div className="header-left">
              <img src="./linkedin.png" alt="" srcset="" />

              <div className="header-search">
                <SearchIcon />
                <input type="text" placeholder="Search" />
              </div>
            </div>

            <div className="header-right">
              
            <HeaderOption Icon={HomeIcon} title="Home" />
            <HeaderOption Icon={GroupAddIcon}title="My Network" />
            <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
            <HeaderOption Icon={InsertCommentIcon} title="Messaging" />
            <HeaderOption Icon={NotificationsIcon} title="Notifications" />
            <HeaderOption avatar="https://image.freepik.com/free-photo/young-man-standing-straight-posing-front-blue-t-shirt-white-suit-jacket-looking-serious_176474-83857.jpg" title="Me" />
            
              
            </div>

        

        </div>
    )
}

export default Header

