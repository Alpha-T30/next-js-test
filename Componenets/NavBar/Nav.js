import React from 'react'
import Style from './Nav.module.scss' ; 
export default function Nav(props) {
    return (
        <div className={Style.nav}>
            <h1> This is for  {props?.layoutName}</h1>
        </div>
    )
}
