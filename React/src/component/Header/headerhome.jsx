import React, { useState } from 'react';
import HeaderImg from '../Assets/s.jpg'
import { Link, Navigate, useNavigate } from 'react-router-dom';



export default function Header()
{
    return(
        <>
            <section>
                <div className="header">
                    <div>
                        <div className="img">
                            <img src={HeaderImg} alt=""/>
                        </div>
                        <div className='Overlay'></div>
                    </div>
                    <div className='Content'>
                        <h6>Build Your Fitness World <br/>By building Your Body</h6>
                        <button className='btn'><Link to= '/schedule' >Schedule</Link></button> 
                    </div>
                </div>
            </section>
        </>
    )
}