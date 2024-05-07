import React from 'react';
import './mnavbar.css';
import logo from "../imgs/Logo.png"
import { Link, animateScroll as scroll } from "react-scroll";
import { useState } from 'react';
function MNavbar() {
    return (
        <div className='mobile-navbar-container'>
            <input id="burger" type="checkbox" />
                <label for="burger">
                    <span></span>
                    <span></span>
                    <span></span>
                </label>

                <nav>    
                
                <ul>
                <div className='mnavbar-header'><img src={logo}></img><h1>Bar-IKov <br/><span>выездной бар</span></h1></div>
                    <li><a href="#">Бар</a></li>
                    <li><a href="#">Портфолио</a></li>
                    <li><a href="#">Отзывы</a></li>
                    <li><a href="#">Команда</a></li>
                    <li><a href="#">О нас</a></li>
                </ul>  
                </nav>
        </div>
    )
}
export default MNavbar