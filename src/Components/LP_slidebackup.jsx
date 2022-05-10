import React from 'react'
import logo from '../images/landing page/Blue_Logo.svg';
import logo2 from '../images/landing page/orange_logo.svg';
import book from '../images/landing page/book-icon.svg';
import f_arrow from '../images/landing page/fwd_arrow.svg';
import b_arrow from '../images/landing page/bwd_arrow.svg';
import leaf from '../images/landing page/leaf.svg';
import bookshelf from '../images/landing page/bookshelf.svg';
import f_arrow1 from '../images/landing page/fwd_arrow1.svg';
import monitor from '../images/landing page/monitor.svg';
import umbrella from '../images/landing page/umbrella.svg';
import exchange from '../images/landing page/exchange.svg'
import find from '../images/landing page/find.svg'
import handshake from '../images/landing page/handshake.svg'

import './LandingPage.css';

function LandingPage() {
    return (
        <div className='landing'>
            <div className="slide1">
                <div className='logo'>
                    <a href="#" >
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className='tagline'>
                    <p id='p1'>Easiest way </p>
                    <p id='p2'>to exchange</p>
                    <p id='p3'>Knowledge</p>
                </div>

                <button className='btn-1'>Start exchanging</button>
            </div>

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

                    <button className='btn-2'>Start now and get one free leaf</button>
                </div>

            </div>


            <div className="slide3">
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
                    <button className='btn-3'>Start Uploading</button>
                </div>
            </div>

            <div className="slide4">
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

                    <button className='btn-4'>Start Now</button>
                </div>
            </div>
        </div>



            )
}

            export default LandingPage
