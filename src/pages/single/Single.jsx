import React from 'react'
import './single.css'
import Sidebar from '../../componenst/sidebar/Sidebar'
import SinglePost from '../../componenst/singlePost/SinglePost'
export default function Single() {
  return (
    <div className='single'>
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}
