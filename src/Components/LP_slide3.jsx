import React from 'react'
import logo2 from '../images/landing page/orange_logo.svg';
import bookshelf from '../images/landing page/bookshelf.svg';
import f_arrow1 from '../images/landing page/fwd_arrow1.svg';
import monitor from '../images/landing page/monitor.svg';
import umbrella from '../images/landing page/umbrella.svg';
import './LP_slide3.css'
import {animateScroll as scroll} from 'react-scroll'

function LP_slide3() {
  return (
    <div>
      
      <div className="slide3" id='slide3'>
                <div className="img-container3">
                    <div className="bookshelf">
                        <img src={bookshelf} alt="" />
                    </div>
                    <div className="fwd-arr1">
                        <img src={f_arrow1} alt="" />
                    </div>
                    <div className="monitor">
                        <img src={monitor} alt="" />
                    </div>

                </div>
                <div>
                    <p className='s3-l1'>Let everyone the shade of wisdom</p>
                    <div className="umbrella">
                        <img src={umbrella} alt="" />
                    </div>
                    <p className='s3-l2'>By Uploading books on the tree</p>
                    <div className="logo2">
                        <img src={logo2} alt="" />
                    </div>
                    <button className='btn-3' onClick={()=>scroll.scrollToBottom()}>Start Uploading</button>
                </div>
            </div>
    </div>
  )
}

export default LP_slide3
