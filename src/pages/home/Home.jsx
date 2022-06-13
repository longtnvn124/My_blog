import React from 'react'
import './home.css'
import Header from '../../componenst/header/Header'
import Sidebar from '../../componenst/sidebar/Sidebar'
import Posts from '../../componenst/posts/Posts'

export default function Home() {
  return (
    <>
    <Header />
    <div className='home'>
      <Posts/>
      <Sidebar/>
    </div>
    </>

  )
}
