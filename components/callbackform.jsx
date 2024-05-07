import React from 'react';
import "./callbackform.css";
import { useState } from 'react';
import wa2 from "../imgs/wa2.png";
import websec from "../imgs/websec.png";
import tg2 from "../imgs/tg2.png";
import phone2 from "../imgs/phone2.png";
import tgact from "../imgs/tgact.png";
import waact from "../imgs/waact.png";
import phoneact from "../imgs/phoneact.png";
let i = 0;
let i1 = 0;
let i2 = 0;
let socialsArr = [];
function changeStateWa(e) {
    i+=1;
    if(i%2!=0){
    e.target.setAttribute('src', waact);
    socialsArr.push("WhatsApp");
    }else {
        e.target.setAttribute('src', wa2);
        socialsArr = socialsArr.filter(socialsArr => socialsArr != "WhatsApp");
    }
}
function hideForm() {
    document.querySelector(".callback-container").style.display = "none";
}
function changeStatePhone(e) {
    i1+=1;
    if(i1%2!=0){
    e.target.setAttribute('src', phoneact);
    socialsArr.push("Phone");
    }else {
        e.target.setAttribute('src', phone2);
        socialsArr = socialsArr.filter(socialsArr => socialsArr != "Phone");;
    }
}
function changeStateTg(e) {
    i2+=1;
    if(i2%2!=0){
    e.target.setAttribute('src', tgact);
    socialsArr.push("Telegram");
    }else {
        e.target.setAttribute('src', tg2);
        socialsArr = socialsArr.filter(socialsArr => socialsArr != "Telegram");
    }
}
export default function Callbackform() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");
    const [socials, setSocials] = useState("");
    const wa = (
        <img src={wa2} onClick={changeStateWa}></img>
    )
    const tg = (
        <img src={tg2} onClick={changeStateTg}></img>
    )
    const phoneel = (
        <img src={phone2} onClick={changeStatePhone}></img>
        
    )
    let handleSubmit = async (e) => {
        e.preventDefault();
        try {
          let res = await fetch("http://localhost:3000/logs", {
            method: "POST",
            body: JSON.stringify({
              name: name,
              phone: phone,
              comment: comment,
              socials: socialsArr,
            }),
          });
          let resJson = await res.json();
          if (res.status === 200) {
            setName("");
            setPhone("");
            setComment("");
            setSocials("");
          } else {
            console.log("Ошибка");
          }
        } catch (err) {
          console.log(err);
        }
        hideForm();
      };
  return (
    <div className='callback-container'>
        <form className='form-container' onSubmit={handleSubmit} method="POST">
        <div className='callback-form'>
            <div className='callback-form-header'>
                <h1>ОБРАТНЫЙ Звонок</h1>    
                <h2>Не можете выбрать услугу? <br/>Мы свяжемся и подберем лучший вариант</h2>
            </div>
            <div className='callback-form-inputs'>
                <div className='name-input'>
                <input type="text" className='tracker-input' value={name} onChange={(e) => setName(e.target.value)} placeholder='Имя'></input>
                </div>
                <div className='phone-input'>
                <input type="text" className='tracker-input' value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='+7'></input>
                </div>
                <div className='comment-input'>
                <input type="text" className='tracker-input' value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Комментарий'></input>
                </div>
                <div className='callback-answer-type'>
                    <h1>ОБРАТНАЯ СВЯЗЬ</h1>
                    <div className='socials-row'>
                        {phoneel}
                        {wa}
                        {tg}
                        
                    </div>
                </div>
            </div>
            <div className='callback-menu-buttons'>
                <div className='undo-btn' onClick={hideForm}>
                    НАЗАД
                </div>
                <button type='submit' className='submit-btn'>
                <div className='send-btn'>
                    ГОТОВО
                </div>
                </button>
            </div>
        </div>
        </form>
    </div>
  )
}