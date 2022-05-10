import React from 'react'
import upload_icon from '../images/upload page/upload_icon.svg'
import book from '../images/upload page/book-icon.svg';
import './Upload_page.css'

function Upload_page() {
  return (
    <div>
      <div className='upload' id='upload'>
        <div className="head">
          Upload your Books
        </div>
        <div className="search">
          <input className='search-bar' type="search" placeholder='Eg. Rich Dad Poor Dad' />
          <img src={upload_icon} alt="" />
        </div>
        <div className="uploaded_books">
          {/* <div className="book2">
            <img src={book} alt="" />
          </div> */}
        </div>
        <button className='upload-btn'>Upload</button>
      </div>
    </div>
  )
}

export default Upload_page
