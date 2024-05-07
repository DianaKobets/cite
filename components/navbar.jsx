import React from 'react'
import "./navbar.css"
import logo from "../imgs/Logo.png"
import telephone from "../imgs/phone2.png"
import insta from "../imgs/inst2.png"
import whatsapp from "../imgs/wa2.png"
import telegram from "../imgs/tg2.png"
export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-container-row'>
            <div className='logo-container'>
                <img src={logo} className='logo-img'></img>
            </div>
            <div classname="navbar-container-header" id='header'>
                <h1 className='navbar-h1-header'>BAR</h1>
                <h1 className='navbar-h1-header'>IKov</h1>
                <h2 className='navbar-h2-header'>выездной бар</h2>
            </div>
            <div classname="navbar-container-buttons-row" id="navbar-buttons-row">
                <h1 className='navbar-position-1'>Бар</h1>
                <h1 className='navbar-position-1'>Портфолио</h1>
                <h1 className='navbar-position-1'>Отзывы</h1>
                <h1 className='navbar-position-1'>Команда</h1>
                <h1 className='navbar-position-1'>О нас</h1>
            </div>
            <div className='navbar-socials'>
                <img src={telephone}></img>
                <img src={whatsapp}></img>
                <img src={telegram}></img>
                <img src={insta}></img>
            </div>
        </div>
    </div>
  )
}
