import './App.css';
import Navbar from './component/navbar';
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className='cover-page'></div>
      <div className='page1'>  
        <div className='content-box1'>
          <h1>ВЫЕЗДНОЙ БАР 1</h1>
          <h2>ПРИЕДЕМ НА ВАШЕ МЕРОПРИЯТИЕ <br/> в москве и области</h2>
          <div className='buttons'>
          <button className='button-bar'>ЗАКАЗАТЬ БАР</button>
          <button className='button-call'>ОБРАТНЫЙ ЗВОНОК</button>
          </div>
        </div>
        <div className='content-box2'>
            <h1>БАР</h1>
            <h2>Бар на свадьбу</h2>
            <h2>Кофе брейк+принт</h2>
            <h2>Крио мороженое</h2>
            <h2>Пирамида бокалов</h2>
            <h2>Тематический бар</h2>
            <h2>Бар под ключ</h2>
        </div>
      </div>
    </div>
  );
}
export default App;
