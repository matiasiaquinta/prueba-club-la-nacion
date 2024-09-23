import './Main.css';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

function Main() {
  return (
    <div className="home">
      <div className="home-carousel">
        <img src="/images/homeBackground.png" alt="" />

        <div className="home-carousel-controls">
          <IoIosArrowBack className="icon-arrow" />
          <IoIosArrowForward className="icon-arrow" />
        </div>
        <div className="carousel-dots">
          <span className="selected"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
}

export default Main;
