import React from 'react';
import "./footer.css";
import inst2 from "../imgs/inst2.png";
import wa2 from "../imgs/wa2.png";
import websec from "../imgs/websec.png";
import tg2 from "../imgs/tg2.png";
export default function Footer() {
  return (
    <div className='footer'>
        <h1>КОНТАКТЫ</h1>
        <div className='footer-0'>
        <div className='footer-1'>
            <h2>Чтобы заказать услугу, заполните <span>специальную форму</span> или <span>оформите обратный звонок</span>. Также с нами можно связаться в социальных сетях, позвонить по номеру, написать на почту</h2>
            <h2>Заявки рассматриваются с 10:00 по 20:00</h2>
        </div>
        <div className='footer-2'>
            <h1 className='footer-2-header'>Мы в соцсетях</h1>
            <div className='footer-socials-row'>
            <img src={inst2} className='inst2'></img>
            <img src={wa2} className='wa2'></img>
            <img src={tg2} className='tg2-1'></img>
          </div>
        </div>
        <div className='footer-3'>
          <div className='footer-3-websec'>
            <h1 className='websec-h1'>Разработано <span>skidiko</span></h1>
          </div>
        </div>
        </div>
    </div>
  )
}

