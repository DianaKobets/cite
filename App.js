import './App.css';
import Navbar from './components/navbar';
import barpos1 from "./imgs/image6.png";
import barpos2 from "./imgs/image28.png";
import barpos3 from "./imgs/image13.png";
import barpos4 from "./imgs/image3.png";
import barpos5 from "./imgs/image14.png";
import barpos6 from "./imgs/image15.png";
import portfoliopos1 from "./imgs/1.png";
import portfoliopos2 from "./imgs/2.png";
import portfoliopos3 from "./imgs/3.png";
import portfoliopos4 from "./imgs/4.png";
import portfoliopos5 from "./imgs/5.png";
import portfoliopos6 from "./imgs/6.png";
import portfoliopos7 from "./imgs/7.png";
import barmenshow from "./imgs/barmenshow.png";
import probirki from "./imgs/probirki.JPG";
import smuzi from "./imgs/smuzi.png";
import teammember1 from "./imgs/Ivan.png";
import svadbarev from "./imgs/svadba.jpg";
import tematrev from "./imgs/tematrev.HEIC";
import korporativrev from "./imgs/korporativrev.HEIC";
import teammember2 from "./imgs/Den.png";
import teammember3 from "./imgs/Vitaliy.png";
import teammember4 from "./imgs/Vadik.png";
import teammember5 from "./imgs/Vladimir.png";
import teammember6 from "./imgs/Alena.png";
import aboutusimg from "./imgs/aboutus.png";
import inst2 from "./imgs/inst2.png";
import wa2 from "./imgs/wa2.png";
import tg2 from "./imgs/tg2.png";
import Callbackform from './components/callbackform';
import MNavbar from "./components/mnavbar";
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Footer from './components/footer';
function showForm() {
  document.querySelector(".callback-container").style.display = "flex";
}
function fullList() {
  document.querySelector(".content")
}
function App() {
  return (
    <div className="App">
      <Callbackform></Callbackform>
      <Navbar></Navbar>
      <MNavbar></MNavbar>
      
      <div className='content-container-1'>
        <div className='content-box-1'>
          
        </div>
        <div className='content-box-2'>
          <div className='content-box-2-header'>
          <h1>ВЫЕЗДНОЙ БАР</h1>
          <h2>ПРИЕДЕМ НА ВАШЕ МЕРОПРИЯТИЕ
в москве и области</h2>
        </div>
        <div className='content-box-2-buttons'>
          <div className='content-box-2-button'>
            Заказать бар
          </div>
          <div className='content-box-2-button1' onClick={showForm}>
            Обратный звонок
          </div>
        </div>
        </div>
      </div>
      <div className='content-container-2'>
        <div className='content-header'>
          <h1>БАР</h1>
        </div>
        <div className='content-container-2-positions'>
          <div className='content-container-2-position'>
            <img src={barpos1}></img>
            <h2>Бар на свадьбу</h2>
            <h3>от <span className='price-bold'>20000</span> руб.</h3>
            <h4>Выездной коктейльный бар на Вашу свадьбу или свадьбу Ваших друзей, украсит и обрадует гостей, не только на вэлком зону , но и на все мероприятие</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barpos2}></img>
            <h2>Кофе брейк+принт</h2>
            <h3>от <span className='price-bold'>5000</span> руб.</h3>
            <h4>Кофе Брейк на деловых переговорах с логотипом Вашей компании и без, как пожелаете, меньше слов, больше фото</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barpos3}></img>
            <h2>Крио мороженое</h2>
            <h3>от <span className='price-bold'>5000</span> руб.</h3>
            <h4>Крио мороженое, на основе азота. При приготовлении смотрится очень эффектно, вызывает восторг у детей и подростков, также готовим мороженное для взрослой аудитории</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barpos4}></img>
            <h2>Пирамида бокалов</h2>
            <h3>от <span className='price-bold'>10000</span> руб.</h3>
            <h4>От 36-240 бокалов! Все зависит от ваших амбиций</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barpos5}></img>
            <h2>Тематический бар</h2>
            <h3>от <span className='price-bold'>15000</span> руб.</h3>
            <h4>Любая тематика бара, заданая Вами, будет осуществлена</h4>
            <h4 className='h4-content-container2'>Наш топ - это славянский бар</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barpos6}></img>
            <h2>Бар под ключ</h2>
            <h3>от <span className='price-bold'>40000</span> руб.</h3>
            <h4>Любой формат выездного бара, для Вашего мероприятия!</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={probirki}></img>
            <h2>Молекулярный бар</h2>
            <h3>от <span className='price-bold'>15000</span> руб.</h3>
            <h4>Откройте для себя науку вкуса в нашем молекулярном баре, где инновационные техники и ингредиенты превращаются в неповторимые коктейли</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={barmenshow}></img>
            <h2>Бармен шоу</h2>
            <h3>от <span className='price-bold'>15000</span> руб.</h3>
            <h4>Погрузитесь в мир удивительных навыков и коктейльного искусства с нашими профессиональными барменами, представляющими незабываемое шоу</h4>
          </div>
          <div className='content-container-2-position'>
            <img src={smuzi}></img>
            <h2>Смузи бар</h2>
            <h3>от <span className='price-bold'>15000</span> руб.</h3>
            <h4>Насладитесь свежестью и взрывом вкусов в нашем смузи баре, где эксперты создают совершенное сочетание свежих фруктов</h4>
          </div>
          
          
          
        </div>

      </div>
      <div className='content-container-3'>
      <div className='content-header' id="header-container-3" >
          <h1>ПОРТФОЛИО</h1>
        </div>
        <div className='portfolio-row-1'>
          <div className='portfolio-pos-1' id="p-pos-1">
            <h2>Бар на свадьбу</h2>
          </div>
          <div className='portfolio-pos-2' id="p-pos-2">
            <h2>Пирамида бокалов</h2>
          </div>
          <div className='portfolio-pos-2' id="p-pos-3">
            <h2>Бар на свадьбу</h2>
          </div>
        </div>
        <div className='portfolio-row-2'>
        <div className='portfolio-pos-2' id="p-pos-4">
        <h2>Тематический бар</h2>
            </div>
            <div className='portfolio-pos-2' id="p-pos-5">
            <h2>Корпоратив</h2>
          </div>
          <div className='portfolio-pos-2' id="p-pos-6">
          <h2>Бар на свадьбу</h2>
          </div>
          <div className='portfolio-pos-2' id="p-pos-7">
          <h2>Кислородные коктейли</h2>
          </div>
          
        </div>
        <div className='content-box-2-button1' id="full-list1">
           в портфолио
          </div>
      </div>
      <div className='content-container-4'>
      <div className='content-header' id="header-container-4" >
          <h1>ОТЗЫВЫ</h1>
        </div>
        <Swiper
        navigation={true}
        slidesPerView={3}
        spaceBetween={50}
        breakpoints={{
          768: {
            spaceBetween: 40,
            slidesPerView: 2.3,
          },
          600: {
            spaceBetween: 10,
            slidesPerView: 2.3,
          },
          480: {
            spaceBetween: 10,
            slidesPerView: 1.5,
          },
          375: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.1,
            spaceBetween: 10,
          }
          
      }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Бар на свадьбу</h1><h2>Это был один из лучших дней в моей жизни! BAR-IKov скрасил свадьбу, главное событие в моей жизни. Иван и его команда - настоящие шоумены! Воспоминание навсегда!</h2></div><div className='reviews-name-container'><h3>Екатерина <br/>22.05.2022</h3></div></div></SwiperSlide>
        <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Тематический бар</h1><h2>Для нашего мероприятия требовался славянский стиль. Выше всех похвал справились BAR-IKov, идеально воссоздав атмосферу русского праздника: напитки, посуда, подача, блюда, наряды. Все супер!</h2></div><div className='reviews-name-container'><h3>Сергей <br/>13.06.2022</h3></div></div></SwiperSlide>        
        <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Кофе брейк</h1><h2>Я наслаждался атмосферой, вкусом и качеством кофе, которое было просто непревзойденным. Бармены демонстрировали мастерство при приготовлении каждой чашечки. Определенно одно из лучших мероприятий, которые я посещал!</h2></div><div className='reviews-name-container'><h3>Олег <br/>10.11.2022</h3></div></div></SwiperSlide>       
         <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Корпоратив</h1><h2>Ребята превосходно справились с развлечением гостей! Дружная, веселая команда, проффесионалы своей профессии!</h2></div><div className='reviews-name-container'><h3>Андрей <br/>21.12.2022</h3></div></div></SwiperSlide>
         <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Молекулярный бар</h1><h2>Выездной молекулярный бар просто потрясающий! Эксперименты с молекулярной гастрономией и коктейлями были невероятными. Персонал проявил отличную организацию и профессионализм, обеспечивая незабываемый вечер.</h2></div><div className='reviews-name-container'><h3>Ирина<br/>10.01.23</h3></div></div></SwiperSlide>
         <SwiperSlide><div className='reviews-container'><div className='reviews-container-text'><h1>Пирамида бокалов</h1><h2>Просто впечатляюще! Шикарный дизайн и тщательное строительство создали завораживающий эффект. Каждый бокал был разнообразным, креативным и восхитительным вкусом. Весь опыт был роскошным и незабываемым. Рекомендую всем, кто хочет добавить изюминку в свое мероприятие!</h2></div><div className='reviews-name-container'><h3>Екатерина<br/>10.03.23</h3></div></div></SwiperSlide>
      </Swiper>
      </div>
      <div className='content-container-5'>
      <div className='content-header-5'>
          <h1>НАША КОМАНДА</h1>
        </div>
        <div className='team-container'>
          <div className='team-container1'>
            <div className='team-member'>
              <img src={teammember1} className='team-member-img'></img>
              <h1>ИВАН</h1>
              <h2>основатель Bar-IKov</h2>
              <h3>Ветеран барного дела: за спиной 15-ти летний опыт и тысячи проведенных мероприятий. Настоящий профессионал, под его руководством ваш праздник в надежных руках</h3>
              <div className='team-member-shadow' id='member-1'>

              </div>
            </div>
            <div className='team-member'>
              <img src={teammember2} className='team-member-img'></img>
              <h1>ДЭН</h1>
              <h2>старший бармен компании</h2>
              <h3>Участник и победитель чемпионата Mulata Flai Team. Оргазатор чемпионата барменов Moscow Flair Open, Funky Flair Open. Снимался в сериалах ТНТ и СТС в роли бармена Имеет международный опыт работы.</h3>
              <div className='team-member-shadow' id='member-2'>

              </div>
            </div>
            
            <div className='team-member'>
              <img src={teammember4} className='team-member-img'></img>
              <h1>ВАДИК</h1>
              <h2>старший бармен компании</h2>
              <h3>Победитель различных конкурсов, человек который создаст атмосферу праздника в любых условиях. Если он у Вас на мероприятии - это успех</h3>
              <div className='team-member-shadow' id='member-4'>

              </div>
            </div>
          </div>
          <div className='team-container2'>
          <div className='team-member'>
              <img src={teammember3} className='team-member-img'></img>
              <h1>ВИТАЛИЙ</h1>
              <h2>бармен</h2>
              <h3>
Отличный бармен на которого можно возложить любое мероприятие! Бывший барменеджер ВК стадиум! За плечами годы работы</h3>
              <div className='team-member-shadow' id='member-3'>

              </div>
            </div>
            <div className='team-member'>
              <img src={teammember5} className='team-member-img'></img>
              <h1>ВЛАДИМИР</h1>
              <h2>бармен</h2>
              <h3>Молодой новатор нашего бара! Теоретик барменской индустрии, миколог, технолог! Можно многое говорит об этом парнишке, но лучше увидеть в деле!</h3>
              <div className='team-member-shadow' id='member-5'>

              </div>
            </div>
            <div className='team-member'>
              <img src={teammember6} className='team-member-img'></img>
              <h1>АЛЕНА</h1>
              <h2>бармен</h2>
              <h3>Принцесса нашего бара! Сильвия с Италии списала образ именно с Алены! В свое время была барменеджером основателя BarIKov</h3>
              <div className='team-member-shadow' id='member-6'>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content-container-6'>
      <div className='content-header-6'>
          <h1>О НАС</h1>
      </div>
      <div className='content-container-6-0'>
      <div className='content-container-6-1'>
        <img src={aboutusimg}></img>
      </div>
      <div className='content-container-6-2'>
        <h1>Меня зовут Иван и я основатель выездных баров <b>«BarIKov»</b>.</h1> <h1>Мой путь начинался в 2009 году с обычного бармена, бессонных ночей и кучи сделанных коктейлей. Все для того, чтобы, дарить людям праздник. <br/></h1><h1>За спиной у меня огромный опыт в 15 лет.<br/>- обучение в школах барменов. <br/>- участие на фестивалях. <br/>- Более 100 свадеб. <br/>- Более 1000 мероприятий. <br/>- Сотрудничество с лучшими компаниями Москвы и области <br/>- Международный уровень общения специалистов.</h1><h1>Теперь <b>МЫ КОМАНДА!</b> <br/>Мы команда единомышленников, профессионалов, шоуменов. В нашей команде только лучшие бармены, чемпионы России! <br/>Наша задача - подарить вам незабываемый день! В этом Вы можете положиться на нас. Убедится в том, что ваш выбор правильный, вы можете прочитав отзывы от наших партнёров.</h1>
      </div>
      </div>
      <div className='content-container-6-footer'>
        <div className='aboutus-phone'>
          <h1>ТЕЛЕФОН</h1>
          <h2>+7 925 552 99 23</h2>
        </div>
        <div className='aboutus-mail'>
          <h1>ПОЧТА</h1>
          <h2>Bar-ik@bk.ru</h2>
        </div>
        <div className='aboutus-socials'>
          <h1>СОЦСЕТИ</h1>
          <div className='aboutus-socials-row'>
            <img src={inst2} className='inst2'></img>
            <img src={wa2} className='wa2'></img>
            <img src={tg2} className='tg2'></img>
          </div>
        </div>
      </div>
      </div>
      <div className='footer-line'></div>
      <Footer></Footer>
    </div>
  );
}

export default App;
