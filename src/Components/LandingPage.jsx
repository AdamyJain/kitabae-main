import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import logo from '../images/landing page/Blue_Logo1.svg';
import './LandingPage.css'

function LandingPage() {
    return (
        <div className='landing'>
            <div className="slide1" id='slide1'>
                <div className='tagline'>
                    <p id='p1'>Easiest way </p>
                    <p id='p2'>to exchange</p>
                    <p id='p3'>Knowledge</p>
                </div>
                <div className='logo'>
                    <a href="#" >
                        <img src={logo} alt="" />
                    </a>
                </div>
                <button className='btn-1' onClick={() => scroll.scrollToBottom()}>Start exchanging</button>
            </div> 

        </div>
            )
}

            export default LandingPage
