import React from 'react'
import './HeaderOption.css'



function HeaderOption({avatar,Icon, title}) {
    return (
   
        <div className="headerOption">
            {Icon && <Icon className="headeroption-icon" />}
            {avatar && <img src="./myavatar.png" className="avatar-icon headeroption-icon" alt=""/>}
            <h3 className="headerOption-title">{title}</h3>
        </div>
    );
}

export default HeaderOption
