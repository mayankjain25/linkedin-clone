import { Avatar } from '@material-ui/core';
import React from 'react'
import './HeaderOption.css'



function HeaderOption({avatar,Icon, title}) {
    return (
   
        <div className="headerOption">
            {Icon && <Icon className="headeroption-icon" />}
            {avatar && (
                <Avatar src="./myavatar.png" className="avatar-icon headeroption-icon" />
    )
        }
            {/* // <img src="./myavatar.png"  alt=""/> */}
            <h3 className="headerOption-title">{title}</h3>
        </div>
    );
}

export default HeaderOption
