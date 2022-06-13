import React from 'react'
import "./topbar.css"
import { AiFillFacebook, AiFillTwitterCircle, AiFillYoutube, AiFillInstagram, AiOutlineSearch } from 'react-icons/ai'
import Avatar from '../../imagess/avata1.jpg'
import { BiSearch } from 'react-icons/bi'
import { Link } from 'react-router-dom'

export default function Topbar() {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <a className='topIcon'><AiFillFacebook /></a>
                <a className='topIcon'><AiFillTwitterCircle /></a>
                <a className='topIcon'><AiFillYoutube /></a>
                <a className='topIcon'><AiFillInstagram /></a>
            </div>

            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/" >HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/" >ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/" >CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write" >WRITE</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            < div className="topRight">
                {
                    user ? (
                        <img className="topImg" src={Avatar} />
                    ) : (
                        <ul className='topList'>
                            <li className="topListItem">
                                <Link className='link' to="/login">LOGIN</Link>
                            </li>
                            <li className="topListItem">
                                <Link className='link' to="/register">REGISTER</Link>
                            </li>

                        </ul>
                    )
                }

                <a className='topSearchIcon'><BiSearch /></a>
            </div>
        </div>
    )
}
