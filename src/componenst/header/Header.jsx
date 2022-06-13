import React from 'react'
import Sky from '../../imagess/sky1.png'
import './header.css'
export default function Header () {
  return (
    <div className='header' >
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src={Sky} alt="" className="headerImg" />
    </div>
  )
}
