import React from 'react'
import book from '../images/landing page/book-icon.svg';
import f_arrow from '../images/landing page/fwd_arrow.svg';
import b_arrow from '../images/landing page/bwd_arrow.svg';
import leaf from '../images/landing page/leaf.svg';
import './LP_slide2.css'
import { animateScroll as scroll } from 'react-scroll'

function LP_slide2() {
    return (
        <div>
            <div className="slide2">
                <div className="img-container">
                    <div className="book">
                        <img src={book} alt="" />
                    </div>
                    <div className="fwd-arr">
                        <img src={f_arrow} alt="" />
                    </div>
                    <div className="bwd-arr">
                        <img src={b_arrow} alt="" />
                    </div>
                    <div className="leaf">
                        <img src={leaf} alt="" />
                    </div>
                </div>
                <div>
                    <p className='l1'>Lend one book to earn one Leaf</p>
                    <div className="leaf2">
                        <img src={leaf} alt="" />
                    </div>
                    <p className='l2'>Spend one leaf to borrow one Book</p>
                    <div className="book2">
                        <img src={book} alt="" />
                    </div>

                    <button className='btn-2' onClick={() => scroll.scrollToBottom()}>Start now and get one free leaf</button>
                </div>

            </div>
        </div>
    )
}

export default LP_slide2
