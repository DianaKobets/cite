import './App.css';
import Navbar from './component/navbar';
import weddingbar from '../src/img/wedding-bar.png';
import coffee from '../src/img/coffee.png';
import icecream from '../src/img/ice-cream.png';
import pyramid from '../src/img/pyramid.png';
import tematical from '../src/img/tematical-bar.png';
import keybar from '../src/img/bar-key.png';
import image21 from '../src/img/image 21.png';
import image20 from '../src/img/image 20.png';
import image19 from '../src/img/image 19.png';
import image22 from '../src/img/image 22.png';
import image23 from '../src/img/image 23.png';
import image24 from '../src/img/image 24.png';
import image25 from '../src/img/image 25.png';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='cover-page'></div>
       <div className='page1'>  
        <div className='content-box1'>
          <h1>ВЫЕЗДНОЙ БАР</h1>
          <h2>ПРИЕДЕМ НА ВАШЕ МЕРОПРИЯТИЕ <br/> в москве и области</h2>
          <div className='buttons'>
          <button className='button-bar'>ЗАКАЗАТЬ БАР</button>
          <button className='button-call'>ОБРАТНЫЙ ЗВОНОК</button>
          </div>
        </div>
        <div className='page2'>
          <div className='content-box2-title'><h1>БАР</h1> </div>
          <div className='content-boxes2'>
            <div className='content-box2'>
            <img src={weddingbar}></img>
            <h2>Бар на свадьбу</h2>
            <div className='text-price'>от <div className='price'>20000</div> руб.</div>
            <div className='content-box2-text'>Выездной коктейльный бар на Вашу свадьбу или свадьбу Ваших друзей, украсит и обрадует гостей, не только на вэлком зону , но и на все мероприятие</div>
            </div>
            <div className='content-box2'>
              <img src={coffee}></img>
            <h2>Кофе брейк+принт</h2>
            <div className='text-price'>от <div className='price'>5000</div> руб.</div>
            <div className='content-box2-text'>
            Кофе Брейк на деловых переговорах с логотипом Вашей компании и без, как пожелаете, меньше слов, больше фото
            </div>
            </div>
            <div className='content-box2'>
            <img src={icecream}></img>
            <h2>Крио мороженое</h2>
            <div className='text-price'>от <div className='price'>5000</div> руб.</div>
            <div className='content-box2-text'>
            Крио мороженое, на основе азота При приготовлении смотрится очень эффектно, вызывает восторг у детей и подростков, также готовим мороженное для взрослой аудитории
            </div>
            </div>
            <div className='content-box2'>
            <img src={pyramid}></img>
            <h2>Пирамида бокалов</h2>
            <div className='text-price'>от <div className='price'>10000</div> руб.</div>
            <div className='content-box2-text'>
            От 36-240 бокалов! Все зависит от ваших амбиций
            </div>
            </div>
            <div className='content-box2'>
            <img src={tematical}></img>
            <h2>Тематический бар</h2>
            <div className='text-price'>от <div className='price'>15000</div> руб.</div>
            <div className='content-box2-text'>
            Любая тематика бара, заданая Вами, будет осуществлена Наш топ - это славянский бар
            </div>
            </div>
            <div className='content-box2'>
            <img src={keybar}></img>
            <h2>Бар под ключ</h2>
            <div className='text-price'>от <div className='price'>40000</div> руб.</div>
            <div className='content-box2-text'>
            Любой формат выездного бара, для Вашего мероприятия!
            </div>
            </div>
            </div>
            <button className='content-box2-button'>ПОЛНЫЙ СПИСОК</button>
        </div>
      <div className='content-box3'>
        <div className='content-box3-header'>ПОРТФОЛИО</div>
        <div className='portfolio-cards'>
        <div className='cards-row1'>
            <div className='portfolio-card'><img src={image21}></img><span>Бар на свадьбу</span></div>
            <div className='portfolio-card'><img src={image23}></img><span>Пирамида бокалов</span></div>
            <div className='portfolio-card'><img src={image20}></img><span>Бар на свадьбу</span></div>
        </div>
        <div className='cards-row2'>
            <div className='portfolio-card'><img src={image19}></img><span>Тематический бар</span></div>
            <div className='portfolio-card'><img src={image22}></img><span>Корпоратив</span></div>
            <div className='portfolio-card'><img src={image24}></img><span>Бар на свадьбу</span></div>
            <div className='portfolio-card'><img src={image25}></img><span>Кислородные коктейли</span></div>
        </div>
      </div>
      </div>
      </div>
    </div>
  );
}
export default App;
