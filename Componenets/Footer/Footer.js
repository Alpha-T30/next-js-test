import React from 'react'
import Style from './footer.module.scss'
export default function Footer(props) {
    return (
        <div className={Style.footer}>
            <span>This footer is for page {props?.layoutName}</span>
        </div>
    )
}
