import React from 'react'
import './sidebar.css'
import about1 from '../../imagess/about-sky1.jpg'
import { AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram, AiOutlineSearch } from 'react-icons/ai'



export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem" >
                <span className="sidebarTitle">About Me</span>
                <img src={about1} alt="" />
                <p >
                Cảm ơn em vì đã đến, xin lỗi vì không thể cùng em bước tiếp trên đoạn đường phía trước. Anh chẳng tiếc gì, chỉ tiếc không thể nhìn em cười, em khóc. Chúc em hạnh phúc.
                </p>
            </div>
            
            <div className="sidebarItem">
                <span className='sidebarTitle'>CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocial">
                    <a className='sidebarIcon'><AiFillTwitterCircle /></a>
                    <a className='sidebarIcon'><AiFillFacebook /></a>
                    <a className='sidebarIcon'><AiFillYoutube /></a>
                    <a className='sidebarIcon'><AiFillInstagram /></a>
                </div>
            </div>



        </div>
    )
}
