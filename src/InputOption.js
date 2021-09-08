import React from 'react'
import './InputOption.css'


function InputOption({Icon, color, title}) {
    return (
        <div className="inputOption">
            <Icon className="inputOption__icon" style={{color: color}} />
            <h4>{title}</h4>
        </div>
    )
}

export default InputOption