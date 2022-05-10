import React from 'react'
import exchange from '../images/landing page/exchange.svg'
import find from '../images/landing page/find.svg'
import handshake from '../images/landing page/handshake.svg'
import './LP_slide4.css'
import {animateScroll as scroll} from 'react-scroll'

function LP_slide4() {
  return (
    <div>
      <div className="slide4" id='slide4'>
                <div className="img-container4">
                    <div className="exchange">
                        <img src={exchange} alt="" />
                    </div>
                </div>

                <div>
                    <p className='s4-l1'>Find the book on the tree</p>
                    <div className="find">
                        <img src={find} alt="" />
                    </div>
                    <p className='s4-l2'>Meet up and exchange</p>
                    <div className="handshake">
                        <img src={handshake} alt="" />
                    </div>

                    <button className='btn-4' onClick={()=>scroll.scrollToBottom()}>Start Now</button>
                </div>
            </div>
    </div>
  )
}

export default LP_slide4
