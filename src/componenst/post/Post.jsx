import React from 'react'
import './post.css'

import post1 from '../../imagess/post1.jpg'
export default function Post() {
    return (
        <div className='post'>
            <img src={post1} alt="" className="postImg" />
            <div className="portInfo">
                <div className="portCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">Nơi này không có em.</span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Khi tự nhìn nhận cuộc sống của mình đã hoàn hảo,
                ko còn mục đích lớn lao gì nữa thì có nghĩa 
                là cuộc sống của bạn đang mất đi rất nhiều ý nghĩa.
            </p>
        </div>
    )
}
