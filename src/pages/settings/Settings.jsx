import React from 'react'
import './settings.css'
import Sidebar from '../../componenst/sidebar/Sidebar'
import {AiOutlineUser} from 'react-icons/ai'
import Sky3 from '../../imagess/sky3.png'
export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsPP">
                    <img src={Sky3} alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon"><AiOutlineUser/></i>
                    </label>
                    <input type="file" id='finleInput' style={{display:'none'}}/>
                </div>
                <label >Username</label>
                <input type="text"placeholder='Safak' />
                <label >Email</label>
                <input type="email"placeholder='safak@gmail.com' />
                <label >Password</label>
                <input type="password" />
                <button className="settingsSubmit">Update</button>
    
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
