
import React from 'react'
import './singlePost.css'
import post1 from '../../imagess/Panorama-1.png'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from "react-icons/ai"
export default function SinglePost() {
    return (
        <div className='singlePost'>
            <div className="singlePostWrapper">
                <img src={post1} alt="" className="singlePostImg" />
                <h1 className="singlePostTitle">
                    Cám ơn em vì đến.
                    <div className="singlePostEdit">
                        <i  className="singlePostIcon"><BiEdit /></i>
                        <i  className="singlePostIcon"><AiOutlineDelete /></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className='singlePostDesc'>
                    Đúng vậy, em đẹp nhất trên thế gian này.
                    Gặp em vào thời điểm anh đang trắng tay..
                    Thật lòng mà nói thì anh không muốn bỏ lỡ em một chút nào cả, nhưng có một số chuyện kiên trì căn bản không có tác dụng...
                    Đúng vậy, em đẹp nhất trên thế gian này.
                    Gặp em vào thời điểm anh đang trắng tay..
                </p>

            </div>
        </div>
    )
}
