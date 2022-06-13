import React from 'react'
import './write.css'
import { IoMdAdd } from 'react-icons/io'
import sky3 from '../../imagess/sky3.png'
export default function Write() {
  return (
    <div className='write'>
      <img src={sky3} alt="" className="writeImg" />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon"><IoMdAdd /></i>
          </label>
          <input type="file" id='fileInput' style={{ display: "none" }} />
          <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
        </div>
        <div className="writeFormGroup">
          <textarea placeholder='Tell your story...'
            type="text"
            className='writeInput writeText'
          >
          </textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}
