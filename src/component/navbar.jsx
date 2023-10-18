import React from 'react'
import './navbar.css'
import  logo from '../logo.png'
import call from '../telephone 1.png'
import whatsapp from '../Whatsapp.png'
import tg from '../Telegram1.png'
import inst from '../Insta 1.png'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='logo'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <div className='namebar'>
        <h1>BAR<br/>IKov</h1>
        <h2>выездной бар</h2>
      </div>
      <div className='navbar-buttons'>
        <h1>БАР</h1>
        <h1>ПОРТФОЛИО</h1>
        <h1>ОТЗЫВЫ</h1>
        <h1>КОМАНДА</h1>
        <h1>О НАС</h1> 
      </div>
      <div className='contacts'>
      <div className='contacts-img'>
        <img src={call} alt="call" className='call'/>
        <img src={whatsapp} alt="whatsapp" className='whatsapp'/>
        <img src={tg} alt="tg" className='tg'/>
        <img src={inst} alt="inst" className='inst'/>
        </div>
        <h3>Москва, МО</h3>
      </div>    
  </div>
  )
}
export default Navbar